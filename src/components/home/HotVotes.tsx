import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import HotVoteItem from "../common/HotVoteItem";
import { VoteLists } from "@/types/posts";

export default function HotVote() {
  const [itemData, setItemData] = useState<VoteLists[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [Autoplay()]);

  useEffect(() => {
    if (!emblaApi) return;
    const fetchHotVote = async () => {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts/hot`,
        {
          method: "GET",
        },
      );
      const parsedData = await data.json();
      setItemData(parsedData.data);
    };
    fetchHotVote();
  }, [emblaApi]);

  return (
    <section className="m-3 w-full">
      <h1>실시간 Hot한 투표🔥</h1>
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="mt-2 flex h-full gap-3">
          {itemData.map((data, index) => (
            <HotVoteItem data={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
