import { useState, useEffect } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi 
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const carouselImages = [
  {
    src: "/CrousalImages/1.avif",
    alt: "Cardiff Metropolitan University",
    title: "Conference Venue"
  },
  {
    src: "/CrousalImages/2.jpg", 
    alt: "IEEE Organization",
    title: "IEEE Sponsored"
  },
  {
    src: "/CrousalImages/3.jpg",
    alt: "IEEE CIS",
    title: "Technical Co-Sponsor"
  },
  {
    src: "/CrousalImages/4.jpg",
    alt: "IEEE CIS",
    title: "Technical Co-Sponsor"
  }
];

export default function ImageCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="relative overflow-hidden rounded-2xl shadow-elegant">
        <Carousel
          setApi={setApi}
          className="w-full"
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="pl-4">
                <div className="relative h-72 md:h-96 bg-gradient-elegant rounded-xl overflow-hidden shadow-soft group">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center transform group-hover:scale-105 transition-transform duration-500">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-lg shadow-medium"
                      />
                      <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-lg p-3">
                        <h3 className="font-semibold text-foreground text-lg">{image.title}</h3>
                        <p className="text-muted-foreground text-sm">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-card/90 backdrop-blur-sm border-border/50 hover:bg-accent" />
          <CarouselNext className="right-4 bg-card/90 backdrop-blur-sm border-border/50 hover:bg-accent" />
        </Carousel>
      </div>
      
      {/* Enhanced dots indicator */}
      <div className="flex justify-center mt-6 space-x-3">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`h-3 rounded-full transition-all duration-300 hover:scale-110 ${
              index === current 
                ? 'w-8 bg-primary shadow-glow' 
                : 'w-3 bg-muted hover:bg-muted-foreground/50'
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}