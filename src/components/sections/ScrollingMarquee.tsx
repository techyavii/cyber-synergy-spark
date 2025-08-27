import { Marquee } from "@/components/ui/marquee";

export default function ScrollingMarquee() {
  return (
    <div className="bg-primary text-primary-foreground py-3">
      <Marquee className="font-semibold text-sm md:text-base">
        🎉 ALL ACCEPTED PAPERS WILL BE PUBLISHED IN IEEE XPLORE®, SCOPUS PROCEEDINGS, SCI JOURNALS AND SCOPUS JOURNALS 🎉
      </Marquee>
    </div>
  );
}