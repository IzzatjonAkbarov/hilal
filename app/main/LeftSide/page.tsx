import { PhoneOutlined, ShoppingFilled } from "@ant-design/icons";
import { Carousel } from "antd";
import { log } from "console";
import Link from "next/link";
import CustomCard from "./customCard";
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "225px",
  color: "#000",
  background: "#c4ead2",
};

const LeftSide = async () => {
  const response = await fetch(
    "https://67f39295cbef97f40d2b297b.mockapi.io/hilal"
  );
  const data = await response.json();

  console.log(data);

  return (
    <div className="w-[93%] m-auto py-2">
      <p className="py-5 text-[#0d1136] flex items-center gap-2 text-[24px] font-bold">
        <img src="/assets/icons/new.svg" alt="aaa" />
        <p>Yangi</p>
      </p>
      <div
        className="grid grid-cols-4 gap-4 max-[861px]:grid-cols-3 max-[700px]:grid-cols-2 max-[466px]:grid-cols-1
      ">
        {data?.map((value: any) => (
          <CustomCard key={value.id} {...value} />
        ))}
      </div>
      <p className="py-5 text-[#0d1136] flex items-center gap-2 text-[24px] font-bold">
        <img src="/assets/icons/new.svg" alt="aab" />
        <p>Chegirmadagi mahsulotlar</p>
      </p>
      <div
        className="grid grid-cols-4 gap-4 max-[861px]:grid-cols-3 max-[700px]:grid-cols-2 max-[466px]:grid-cols-1
      ">
        {data?.map((value: any) => (
          <CustomCard key={value.id} {...value} />
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
