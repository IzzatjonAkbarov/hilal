import { PlusOutlined } from "@ant-design/icons";

const Faq = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
            F. A. Q
          </h1>

          <div className="space-y-4">
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="w-full px-6 py-4 text-left flex justify-between items-center">
                <span className="text-gray-900 font-medium">
                  Ayirboshlash siyosati
                </span>
                <PlusOutlined className="text-gray-500 flex-shrink-0" />
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="w-full px-6 py-4 text-left flex justify-between items-center">
                <span className="text-gray-900 font-medium">
                  Pulni qaytarish siyosati
                </span>
                <PlusOutlined className="text-gray-500 flex-shrink-0" />
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="w-full px-6 py-4 text-left flex justify-between items-center">
                <span className="text-gray-900 font-medium">
                  Veb-sayt vaqt talab qilmoqda, uni qanday yaxshilash kerak?
                </span>
                <PlusOutlined className="text-gray-500 flex-shrink-0" />
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="w-full px-6 py-4 text-left flex justify-between items-center">
                <span className="text-gray-900 font-medium">
                  Hisob qaydnomasini qanday yarataman?
                </span>
                <PlusOutlined className="text-gray-500 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
