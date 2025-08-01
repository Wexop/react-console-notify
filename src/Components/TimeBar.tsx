type ShrinkingBarProps = {
  duration?: number;
  color?: string;
};

export default function ShrinkingBar( { duration = 5000, color }: ShrinkingBarProps ) {
  return (
    <div
      style={ {
        width: "100%",
        height: 5,
        backgroundColor: "#eee",
        borderRadius: 10,
        overflow: "hidden",
      } }
    >
      <div
        style={ {
          height: "100%",
          backgroundColor: color,
          borderRadius: 10,
          animation: `shrink ${ duration }ms linear forwards`,
        } }
      />
    </div>
  )
}
