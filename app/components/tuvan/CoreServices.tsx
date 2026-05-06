"use client";
import { motion } from "framer-motion";

const services = [
  {
    step: "01",
    title: "Định vị & Quy hoạch",
    desc: "Nghiên cứu thị trường chuyên sâu và phân tích nhân khẩu học để xác định chính xác mô hình kinh doanh, đảm bảo sản phẩm tương thích 100% với nhu cầu khu vực.",
    size: "col-span-12 md:col-span-7",
    tag: "LỜI GIẢI CHO PHÂN KHÚC"
  },
  {
    step: "02",
    title: "Tối ưu hóa Chi phí",
    desc: "Lập kế hoạch đầu tư chính xác, kiểm soát định mức thi công và tận dụng chuỗi cung ứng sẵn có để triệt tiêu các biến số phát sinh 15-30%.",
    size: "col-span-12 md:col-span-5",
    tag: "KIỂM SOÁT NGÂN SÁCH"
  },
  {
    step: "03",
    title: "Hệ thống Vận hành số",
    desc: "Ứng dụng Proptech vào quản lý dòng tiền và khách hàng, giúp giảm thiểu chi phí nhân sự và tối đa hóa lợi nhuận ròng (EBITDA).",
    size: "col-span-12 md:col-span-5",
    tag: "HIỆU QUẢ CÔNG NGHỆ"
  },
  {
    step: "04",
    title: "Khai thác & Bảo trì",
    desc: "Chiến lược Marketing đa kênh đảm bảo tỷ lệ lấp đầy >90% và quy trình bảo trì định kỳ nhằm giữ vững giá trị tài sản trong dài hạn.",
    size: "col-span-12 md:col-span-7",
    tag: "GIÁ TRỊ BỀN VỮNG"
  }
];

export default function CoreServices() {
  return (
    <section className="relative min-h-screen w-full bg-[#0F1A41] text-white py-24 px-6 md:px-16 overflow-hidden">
      
      {/* Grid Background mờ ảo */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="grid grid-cols-12 h-full w-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-white/20 h-full" />
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 border-l-2 border-blue-500 pl-8">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] tracking-[0.5em] uppercase text-blue-400 font-bold"
          >
            Hệ sinh thái CityHouse More
          </motion.span>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mt-4"
          >
            Giải pháp <span className="font-light italic opacity-70 text-blue-200">Đối ứng toàn diện.</span>
          </motion.h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-4">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${item.size} bg-white/[0.03] border border-white/10 p-8 md:p-12 flex flex-col justify-between group transition-all duration-500 hover:bg-white/[0.07] hover:border-blue-500/50`}
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-xs font-mono text-blue-400">[{item.step}]</span>
                <span className="text-[9px] tracking-widest uppercase opacity-40 group-hover:opacity-100 group-hover:text-blue-300 transition-all">
                  {item.tag}
                </span>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase mb-6 leading-tight tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>

              <div className="mt-12 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="h-[1px] w-8 bg-blue-500"></div>
                <span className="text-[10px] tracking-widest uppercase font-bold">Tìm hiểu quy trình</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}