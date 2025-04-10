import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";

const Aside = () => {
  return (
    <div className="sticky top-14 max-[1024px]:w-[2000px] max-[1024px]:!static">
      <div className="max-[1024px]:overflow-scroll max-[1024px]:flex">
        <Link
          href={"/"}
          className="flex items-center gap-6 py-3 justify-between pr-6 text-[14px]">
          <p>🇺🇿 O&apos;zbekistonga yetkazish</p>
          <RightOutlined className="max-[1024px]:!hidden" />
        </Link>
        <Link
          href={"/"}
          className="flex items-center gap-6 py-3 justify-between pr-6 text-[14px]">
          <p>Go&apos;sht va Baliq</p>
          <RightOutlined className="max-[1024px]:!hidden" />
        </Link>
        <Link
          href={"/"}
          className="flex items-center gap-6 py-3 justify-between pr-6 text-[14px]">
          <p>Asosiy oziq-ovqatlar</p>
          <RightOutlined className="max-[1024px]:!hidden" />
        </Link>
        <Link
          href={"/"}
          className="flex items-center gap-6 py-3 justify-between pr-6 text-[14px]">
          <p>Asosiy oziq-ovqatlar</p>
          <RightOutlined className="max-[1024px]:!hidden" />
        </Link>
        <Link
          href={"/"}
          className="flex items-center gap-6 py-3 justify-between pr-6 text-[14px]">
          <p>Tayyor oziq-ovqatlar</p>
          <RightOutlined className="max-[1024px]:!hidden" />
        </Link>
        <Link
          href={"/"}
          className="flex items-center gap-6 py-3 justify-between pr-6 text-[14px]">
          <p>Ichimliklar</p>
          <RightOutlined className="max-[1024px]:!hidden" />
        </Link>
        <Link
          href={"/"}
          className="flex items-center gap-6 py-3 justify-between pr-6 text-[14px]">
          <p>Mobil telefon va kompyuter...</p>
          <RightOutlined className="max-[1024px]:!hidden" />
        </Link>
        <Link
          href={"/"}
          className="flex items-center gap-6 py-3 justify-between pr-6 text-[14px]">
          <p>Oilaviy do&apos;kon</p>
          <RightOutlined className="max-[1024px]:!hidden" />
        </Link>
        <Link
          href={"/"}
          className="flex items-center gap-6 py-3 justify-between pr-6 text-[14px]">
          <p>Kitoblar</p>
          <RightOutlined className="max-[1024px]:!hidden" />
        </Link>
        <Link
          href={"/"}
          className="flex items-center gap-6 py-3 justify-between pr-6 text-[14px]">
          <p>Shirinliklar</p>
          <RightOutlined className="max-[1024px]:!hidden" />
        </Link>
      </div>
    </div>
  );
};

export default Aside;
