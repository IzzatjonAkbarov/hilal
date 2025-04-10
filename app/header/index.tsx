import {
  CaretDownOutlined,
  CreditCardOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";
("use-client");
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-white z-50">
      <div className="container1 flex py-3  items-center gap-4 justify-between">
        <div className="hidden max-[792px]:block">
          <MenuOutlined />
        </div>
        <Link href={"/"}>
          <img src="/assets/icons/logo.svg" alt="ewtrehgf" />
        </Link>
        <form
          action=""
          className="flex items-center border border-[#019e7f] rounded-sm  w-[50%] max-[792px]:!hidden">
          <SearchOutlined className="!p-2" />
          <input
            className="w-full outline-none"
            placeholder="search"
            type="text"
          />
        </form>
        <Link
          href={"/faq"}
          className="max-[1150px]:hidden hover:underline text-[14px] flex items-center gap-1 font-medium">
          <img src="/assets/icons/callcenter.svg" alt="tefwd" />
          Bog’lanish
        </Link>
        <button className=" max-[438px]:hidden flex items-center gap-2 p-2 border border-gray-200 px-3 rounded-sm hover:border-[#019e7f] transition-all text-[13px] hover:text-[#019e7f]">
          <CreditCardOutlined className="" />
          Payme
        </button>
        <button className=" max-[438px]:hidden flex items-center gap-2 p-2 border border-gray-200 px-3 rounded-sm hover:border-[#019e7f] transition-all text-[13px] hover:text-[#019e7f]">
          <img src="/assets/icons/uzb.svg" alt="sdafgfw" />
          <p>Uz/UZS</p>
          <CaretDownOutlined />
        </button>
        <Link href={"/login"}>
          <img src="/assets/icons/user.svg" alt="erwfdsc" />
        </Link>
      </div>
    </div>
  );
};
export default Header;
