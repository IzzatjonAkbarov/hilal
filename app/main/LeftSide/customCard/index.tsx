import { ShoppingFilled } from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import { Product } from "../page";

const CustomCard = ({ id, price, discount_price, imgs }: Product) => {
  return (
    <Link href={`singleCard/${id}`}>
      <div>
        <img src={imgs} alt="qaa" />
      </div>
      <div className="texts bg-white text-[14px] font-normal text-[#999] px-3">
        <h1>Qo&apos;y bo&apos;yin (muzlatilgan)</h1>
        <div className="flex items-center gap-3">
          <p className="flex items-center gap-1 text-black font-medium">
            {discount_price}

            <img src="/assets/icons/w.svg" alt="wefdcsf" />
          </p>
          <p className="flex items-center line-through gap-1  font-medium py-1">
            {price}

            <img src="/assets/icons/w2.svg" alt="grfdcs" />
          </p>
        </div>
        <button className="flex items-center gap-1 py-2  rounded-lg bg-[#f4f4f4] justify-center hover:bg-[#019e7f] hover:text-white transition-all w-full">
          <ShoppingFilled />
          <p>Qo&apos;shish</p>
        </button>
        <br />
      </div>
    </Link>
  );
};

export default CustomCard;
