import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import HotVoteItem from "../common/HotVoteItem";

const mockData = [
  {
    title: "Slide number 1",
    id: 1,
    content: "오늘의 인기 투표",
  },
  {
    title: "Slide number 2",
    id: 2,
    content: "오늘의 인기 투표",
  },
  {
    title: "Slide number 3",
    id: 3,
    content: "오늘의 인기 투표",
  },
];

export default function HotVote() {
  const [itemData, setItemData] = useState<any[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel();

  useEffect(() => {
    if (emblaApi) {
      //   console.log(emblaApi);
      setTimeout(() => {
        setItemData([...mockData]);
      }, 1500);
    }
  }, [emblaApi]);

  return (
    <section className="embla h-72 w-full overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex h-full">
        {itemData.map((data) => (
          <HotVoteItem data={data} key={data.id} />
        ))}
      </div>
    </section>
  );
}
