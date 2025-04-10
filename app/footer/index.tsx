import Image from "next/image";

const Footer = () => {
  return (
    <div className=" py-6  shadow-[0_0_4px_0_rgba(0,0,0,0.06)] bg-white">
      <div className="container1 flex items-start gap-10 justify-between  max-[800px]:flex-col">
        <div>
          <Image
            width={110}
            height={53}
            src="/assets/icons/logo.svg"
            alt="afsdged"
          />
          <p className="text-[18px] font-medium">HilalMart © 2021</p>
          <p className="text-[15px]"> Barcha huquqlar kafolatlangan</p>

          <div className=" mt-3 flex items-center gap-2">
            <Image
              width={120}
              height={30}
              src="/assets/icons/playmarket.svg"
              alt="efwerfwdc"
            />
            <Image
              width={120}
              height={30}
              src="/assets/icons/appstore.svg"
              alt="wdfcsfeewef"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-[19px] font-medium pb-1">Foydali havolalar</h1>
          <p className="hover:underline transition-all">Bosh sahifa</p>
          <p className="hover:underline transition-all">Yordam kerakmi?</p>
          <p className="hover:underline transition-all">
            Foydalanish shartlari
          </p>
          <p className="hover:underline transition-all">Maxfiylik siyosati</p>
        </div>

        <div className="flex flex-col gap-1 max-[1255px]:w-[40%] max-[800px]:w-auto">
          <h1 className="text-[19px] font-medium pb-1">Biz haqimizda</h1>
          <p className="hover:underline transition-all">
            Manzil:{"    "}
            #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu, Seoul, 03113,
            Crescent Trade ltd
          </p>
          <p className="hover:underline transition-all">
            Korxona nomi: Crescent trade llc
          </p>
          <p className="hover:underline transition-all">
            Korxona rahbari: DADAJONOV RAKHIMJON
          </p>
          <p className="hover:underline transition-all">
            Registratsiya raqami: 433-62-00377
          </p>
          <p className="hover:underline transition-all">
            Telefon raqam: 1833-2178 02-3670-6808
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
