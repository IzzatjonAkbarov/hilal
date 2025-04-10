import CustomCard from "@/app/main/LeftSide/customCard";
import {
  DownOutlined,
  LeftOutlined,
  MinusOutlined,
  PlusOutlined,
  RightOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Select } from "antd";
import Link from "next/link";
import React from "react";

const Page = async ({ params }: { params: Promise<{ card_id: string }> }) => {
  const { card_id } = await params;
  const request = await fetch(
    `https://67f39295cbef97f40d2b297b.mockapi.io/hilal/${card_id}`
  );
  const data = await request.json();
  const request2 = await fetch(
    `https://67f39295cbef97f40d2b297b.mockapi.io/hilal`
  );
  const data2 = await request2.json();

  return (
    <div>
      <div className="py-6 bg-[#f4f4f4]">
        <div className="container1 flex items-center gap-2 justify-start">
          <Link href={"/"}>Home</Link>
          <RightOutlined className="!text-[12px]" />
          <Link href={"/"}>Shirinliklar</Link>
          <RightOutlined className="!text-[12px]" />
          <Link href={"/"}>{"Qoy bo'yin"}</Link>
          <RightOutlined className="!text-[12px]" />
        </div>
      </div>
      <div className="container1 !z-10 ">
        <div className="flex flex-col md:flex-row  bg-[#fff]  relative">
          <div className="flex flex-col md:flex-row w-full  relative">
            <div className="w-full md:w-1/2 md:p-8 flex flex-col">
              <Link
                href={"/"}
                className="flex items-center justify-center w-32 h-10 rounded-md border border-gray-300 bg-white text-gray-700 mb-8 self-start">
                <LeftOutlined className="mr-1" />
                <span>Orqaga</span>
              </Link>

              <div className="flex justify-center items-center flex-1">
                <img
                  src={data.imgs}
                  alt={data.ttitle}
                  className="max-w-xs w-full object-contain"
                />
              </div>
            </div>

            {/* Right Section - Product Details */}
            <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {data.title}
              </h1>

              <div className="text-3xl font-semibold text-[#46A67B] mb-6">
                {data.price}
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center mb-6">
                <div className="flex items-center h-12 rounded-md overflow-hidden">
                  <button className="w-12 h-full flex items-center justify-center bg-[#46A67B] text-white">
                    <MinusOutlined />
                  </button>
                  <div className="w-16 h-full flex items-center justify-center bg-[#46A67B] text-white">
                    1
                  </div>
                  <button className="w-12 h-full flex items-center justify-center bg-[#46A67B] text-white">
                    <PlusOutlined />
                  </button>
                </div>
                <span className="ml-4 text-[#F0A500]">Omborda mavjud: 12</span>
              </div>

              {/* Dropdown */}
              <div className="mb-6">
                <Select
                  defaultValue="Olma"
                  style={{ width: "50%", height: "40px" }}
                  suffixIcon={<DownOutlined />}
                  options={[{ value: "olma", label: "Olma" }]}
                />
              </div>

              {/* Delivery Info */}
              <div className="bg-[#E8F5E9] p-4 rounded-md mb-6 flex items-center">
                <div className="w-8 h-6 bg-[#fff] rounded-full mr-3 flex items-center justify-center">
                  <img src="/assets/icons/uzb.svg" alt="" />
                </div>
                <div>
                  <span className="font-medium">
                    O'zbekistonga yetkazib berish:
                  </span>
                  <span className="ml-2">14 ish kuni</span>
                  <span className="ml-2 text-gray-600">(3000 won)</span>
                </div>
              </div>

              {/* Product Specifications */}
              <div className="mb-6">
                <div className="flex py-2">
                  <span className="font-medium w-40">Name:</span>
                  <span>{data.title}</span>
                </div>
                <div className="flex py-2">
                  <span className="font-medium w-40">Weight:</span>
                  <span>500 gr</span>
                </div>
                <div className="flex py-2">
                  <span className="font-medium w-40">Country of origin:</span>
                  <span>Uzbekistan</span>
                </div>
                <div className="flex py-2">
                  <span className="font-medium w-40">Importer:</span>
                  <span>Crescent trade LTD</span>
                </div>
                <div className="flex py-2">
                  <span className="font-medium w-40">Halal certification:</span>
                  <span>Self certified</span>
                </div>
              </div>

              {/* Product Description */}
              <div className="mb-6 text-gray-700">
                <p className="mb-4">
                  Frozen items are sent packaged in a spacial box with ice. Our
                  company does not use typical ice boxes for the sake of the
                  environment. The above Image is for representative purpose,
                  actual image of the product may slightly vary
                </p>

                <p className="font-medium mb-2">Delivery:</p>
                <p className="mb-2">Delivery available all over the Korea.</p>
                <p className="mb-2">
                  It takes about one working day if the order is recieved before
                  5 p.m.
                </p>
                <p>Far places and islands may take 3-4 working days.</p>
              </div>

              {/* Bottom Button */}
              <button className="bg-white text-gray-800 py-3 px-6 rounded-md border border-gray-300 self-start mb-6">
                Shirinliklar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid container1 grid-cols-4 gap-4 max-[950px]:grid-cols-3 max-[650px]:grid-cols-2 max-[440px]:grid-cols-1">
        {data2?.slice(0, 4)?.map((value: any) => (
          <CustomCard key={value.id} {...value} />
        ))}
      </div>
      <br />
    </div>
  );
};

export default Page;
