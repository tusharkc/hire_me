import Image from "next/image";

const PortfolioImage = ({ data }) => {
  return (
    <Image
      width={0}
      height={0}
      sizes="100vw"
      className="md:h-[70vh] w-full max-w-[100vw] object-contain bg-gradient-to-r from-slate-500 to-slate-800 md:p-6"
      src={data?.projectImg}
      alt=""
    />
  );
};

export default PortfolioImage;
