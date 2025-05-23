export default function Background() {
  return (
    <div className="absolute inset-0 w-full h-[312px] z-[-1]">
      <img
        src="/images/clouds.png"
        alt="Cloud background"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
