import Image from "next/image";

export const LanguageCard = ({
  info,
}: {
  info: { title: string; img: string };
}) => {
  const { title, img } = info;
  const imgSize = 20;

  return (
    <div className="flex flex-row items-center p-2 gap-2 rounded-md hover:shadow-md transition-shadow border-gray-200 border-1">
      <Image src={img} alt={title} width={imgSize} height={imgSize} />
      <div>
        <p className="text-black font-semibold">{title}</p>
      </div>
    </div>
  );
};
