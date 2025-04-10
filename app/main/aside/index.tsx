import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";

const Aside = () => {
  return (
    <div className="sticky top-14 ">
      <Link
        href={"/"}
        className="flex items-center gap-6 py-3 justify-between pr-6 text-[14px]">
        <p>🇺🇿 O’zbekistonga yetkazish</p>
        <RightOutlined />
      </Link>
      <Link
        href={"/"}
        className="flex items-center gap-6 py-3 justify-between pr-6 text-[14px]">
        <p>Go'sht va Baliq</p>
        <RightOutlined />
      </Link>
      <Link
        href={"/"}
        className="flex items-center gap-6 py-3 justify-between pr-6 text-[14px]">
        <p>Asosiy oziq-ovqatlar</p>
        <RightOutlined />
      </Link>
      <Link
        href={"/"}
        className="flex items-center gap-6 py-3 justify-between pr-6 text-[14px]">
        <p>Asosiy oziq-ovqatlar</p>
        <RightOutlined />
      </Link>
      <Link
        href={"/"}
        className="flex items-center gap-6 py-3 justify-between pr-6 text-[14px]">
        <p>Tayyor oziq-ovqatlar</p>
        <RightOutlined />
      </Link>
      <Link
        href={"/"}
        className="flex items-center gap-6 py-3 justify-between pr-6 text-[14px]">
        <p>Ichimliklar</p>
        <RightOutlined />
      </Link>
      <Link
        href={"/"}
        className="flex items-center gap-6 py-3 justify-between pr-6 text-[14px]">
        <p>Mobil telefon va kompyuter...</p>
        <RightOutlined />
      </Link>
      <Link
        href={"/"}
        className="flex items-center gap-6 py-3 justify-between pr-6 text-[14px]">
        <p>Oilaviy do'kon</p>
        <RightOutlined />
      </Link>
      <Link
        href={"/"}
        className="flex items-center gap-6 py-3 justify-between pr-6 text-[14px]">
        <p>Kitoblar</p>
        <RightOutlined />
      </Link>
      <Link
        href={"/"}
        className="flex items-center gap-6 py-3 justify-between pr-6 text-[14px]">
        <p>Shirinliklar</p>
        <RightOutlined />
      </Link>
    </div>
  );
};

export default Aside;
