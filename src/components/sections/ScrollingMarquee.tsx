import { Marquee } from "@/components/ui/marquee";

export default function ScrollingMarquee() {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-gradient-primary py-4 shadow-elegant">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        <Marquee className="font-bold text-base md:text-lg tracking-wide relative z-10" speed={40}>
          ✨ ALL ACCEPTED PAPERS WILL BE PUBLISHED IN IEEE XPLORE®, SCOPUS PROCEEDINGS, SCI JOURNALS AND SCOPUS JOURNALS ✨ &nbsp;&nbsp;&nbsp;&nbsp;
        </Marquee>
      </div>
    </div>
  );
}