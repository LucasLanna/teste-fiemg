export default function BackgroundPattern() {
  return (
    <div
      className="
        w-full
        lg:h-[606px] md:h-[404px] h-[202px]
        bg-[url(/images/bg-pattern.svg)]
        bg-repeat
        -top-0 md:-top-40 absolute
      "
    />
  );
}
