import CustomCard from "./customCard";
import Image from "next/image";
export interface Product {
  id: string;
  imgs: string;
  title: string;
  price: number;
  discount_price: number;
}
const LeftSide = async () => {
  const response = await fetch(
    "https://67f39295cbef97f40d2b297b.mockapi.io/hilal"
  );
  const data = await response.json();
  console.log(data);
  return (
    <div className="w-[93%] m-auto py-2">
      <p className="py-5 text-[#0d1136] flex items-center gap-2 text-[24px] font-bold">
        <Image width={28} height={28} src="/assets/icons/new.svg" alt="aaa" />
        <p>Yangi</p>
      </p>
      <div
        className="grid grid-cols-4 gap-4 max-[861px]:grid-cols-3 max-[700px]:grid-cols-2 max-[466px]:grid-cols-1
      ">
        {data?.map((value: Product) => (
          <CustomCard key={value.id} {...value} />
        ))}
      </div>
      <p className="py-5 text-[#0d1136] flex items-center gap-2 text-[24px] font-bold">
        <Image width={28} height={28} src="/assets/icons/new.svg" alt="aab" />
        <p>Chegirmadagi mahsulotlar</p>
      </p>
      <div
        className="grid grid-cols-4 gap-4 max-[861px]:grid-cols-3 max-[700px]:grid-cols-2 max-[466px]:grid-cols-1
      ">
        {data?.map((value: Product) => (
          <CustomCard key={value.id} {...value} />
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
