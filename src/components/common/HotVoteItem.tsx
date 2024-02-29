interface prop {
  data: any;
}

export default function HotVoteItem({ data }: prop) {
  return (
    <div className="h-full min-w-full bg-gray-main">
      <p>{data.title}</p>
      <div>{data.content}</div>
    </div>
  );
}
