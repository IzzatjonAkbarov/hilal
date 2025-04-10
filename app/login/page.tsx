import { EyeOutlined } from "@ant-design/icons";

const LoginPage = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row min-h-screen bg-[#f4f4f4] justify-center items-center">
        <div className="w-full md:w-1/2 p-8 flex flex-col items-start ">
          <div className="max-w-md mx-auto w-full pt-8 bg-white rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-2">
              Tizimga kirish
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Telefon raqamingiz va parolingiz bilan kiring.
            </p>

            <div className="space-y-4 px-5">
              <div>
                <input
                  type="tel"
                  className="w-full p-4 bg-gray-100 rounded-md border-0"
                />
              </div>

              <div className="relative">
                <input
                  placeholder="Parolingiz"
                  className="w-full p-4 bg-gray-100 rounded-md border-0 pr-12"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  {<EyeOutlined />}
                </button>
              </div>

              {/* Login Button */}
              <button className="w-full p-4 bg-[#46A67B] text-white rounded-md font-medium">
                Kirish
              </button>
            </div>

            {/* Register Link */}
            <div className="mt-6 text-center pb-3">
              <span className="text-gray-600">Akkountingiz yo&apos;qmi</span>{" "}
              <a href="#" className="text-[#46A67B] font-medium">
                Ro&apos;yxatdan o&apos;ting!
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8  flex flex-col">
          <div className="max-w-md mx-auto w-full pt-8 bg-white rounded-lg py-20 px-10">
            <h1 className="text-2xl font-bold mb-6">Mehmon foydalanuvchi</h1>

            <p className="mb-4">
              <span className="text-[#F26E5C] font-medium">Eslatma:</span>{" "}
              Mehmon foydalanuvchilar buyurtmani kuzatish va ular haqidagi
              ma&apos;lumotlarni saqlash imkoniyatiga ega emas!
            </p>

            <p className="mb-8 text-gray-600">
              Davom etish tugmasini bosib siz buyurtmani mehmon foydalanuvchi
              sifatida rasmiylashtirasiz.
            </p>

            <button className="w-full p-4 border border-[#46A67B] text-[#46A67B] rounded-md font-medium bg-white">
              Davom etish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
