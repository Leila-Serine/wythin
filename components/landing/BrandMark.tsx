import Image from "next/image";

type BrandMarkProps = {
  size?: number;
  rounded?: string;
};

export default function BrandMark({
  size = 40,
  rounded = "rounded-full",
}: BrandMarkProps) {
  return (
    <div
      className={`relative overflow-hidden ${rounded} shadow-sm`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/wythin-logo.png"
        alt="Wythin logo"
        fill
        className="object-cover"
      />
    </div>
  );
}