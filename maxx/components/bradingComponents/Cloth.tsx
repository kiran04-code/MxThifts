import Image from "next/image";

const Cloth = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 pb-10 px-5">
     <div className=" p-2 md:px-4 md:py-2 mt-2 border-dashed border-2 box-shadow2 border-gray-500 md:flex flex md:flex-col flex-col ">
         <div className="flex gap-2 mb-2 border-2 ">
        <Image alt="" width={240} height={240} src="/img07.avif" className="md:h-60 md:w-60 h-45 w-45 md:flex " />
        <Image alt="" width={240} height={340} src="/img08.avif" className="md:h-60 md:w-60 h-45 w-45 md:flex md:object-cover" />
      </div>
      <div className="flex gap-2">
        <Image alt="" width={240} height={240} src="/imge03.avif" className="md:h-60 md:w-60 h-45 w-45  md:flex md:object-cover" />
        <Image alt="" width={240} height={240} src="/imge07.avif" className="md:h-60 md:w-60 h-45 w-45  md:flex" />
      </div>
     </div>
    </div>
  );
};

export default Cloth;
