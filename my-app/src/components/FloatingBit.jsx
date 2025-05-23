export default function FloatingBit({
  src,
  width = "w-6",
  style = {},
  animation = "3s",
  className = "",
}) {
  return (
    <img
      src={src}
      className={`absolute ${width} ${className}`}
      style={{
        animation: `float ${animation} ease-in-out infinite`,
        ...style,
      }}
    />
  );
}
