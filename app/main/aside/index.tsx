import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";

const Aside = () => {
  return (
    <div className="min-[1025px]:sticky min-[1025px]:top-14 max-[1024px]:relative max-[1024px]:top-0 w-full">
      <div className="max-[1024px]:overflow-x-auto max-[1024px]:px-4 max-[1024px]:py-2 scrollbar-hide">
        <div className="flex max-[1024px]:w-max max-[1024px]:flex-row flex-col">
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
    </div>
  );
};

export default Aside;
