export default function PurpleTransition({ invert }) {
  return (
    <div
      data-invert={invert}
      className="
        h-[70px] sm:h-[89px]
        w-full
        bg-[url(/images/purple-grad.svg)]
        bg-repeat-x
        data-[invert=true]:rotate-180 bg-contain"
    />
  );
}
