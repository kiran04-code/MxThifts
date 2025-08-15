import Image from "next/image";

const Cloth = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 pb-10 px-5">
     <div className=" p-2 md:px-4 md:py-2 mt-2 border-dashed border-2 box-shadow2 border-gray-500 md:flex flex md:flex-col flex-col ">
<Image
  alt="Image"
  src="/img8.jpg"
  width={400}
  height={400}
  className="w-full max-w-[4 00px] md:max-w-[400px]  h-auto object-cover rounded-lg"
/>

     </div>
    </div>
  );
};

export default Cloth;
