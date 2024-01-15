interface PollBoxProps {
  tag: string;
  title: string;
  poll_state: string;
  contents: string;
  option_a: string;
  option_b: string;
  time: number;
  comments: number;
}

const PollBox = (props: PollBoxProps) => {
  return (
    <div>
      <div>{props.tag}</div>
      <div>
        <h3>{props.title}</h3>
        <div>{props.poll_state}</div>
      </div>
      <div>{props.contents}</div>
      <div>
        <div>{props.option_a}</div>
        <div>{props.option_b}</div>
      </div>
    </div>
  );
};
