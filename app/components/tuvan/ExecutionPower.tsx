"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    label: "Tỷ lệ lấp đầy",
    value: 92,
    suffix: " %",
    sub: "Tối ưu hóa dòng tiền thực tế",
    // Icon mô phỏng biểu đồ tăng trưởng kiến trúc
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-6 opacity-40">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  },
  {
    label: "Tài sản quản lý",
    value: 3000,
    suffix: " tỷ +",
    sub: "Đa dạng phân khúc căn hộ",
    // Icon mô phỏng mặt bằng căn hộ
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-6 opacity-40">
        <path d="M3 3h18v18H3V3z" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    )
  },
  {
    label: "Tăng trưởng doanh thu",
    value: 25,
    suffix: " %",
    sub: "Kỳ vọng sau 6 tháng vận hành",
    // Icon mô phỏng mũi tên bứt phá
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-6 opacity-40">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    )
  },
  {
    label: "Kinh nghiệm thị trường",
    value: 10,
    suffix: " Năm",
    sub: "Kinh nghiệm thực chiến BĐS",
    // Icon mô phỏng huy hiệu bảo chứng
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-6 opacity-40">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    )
  }
];

export default function ExecutionPower() {
  return (
    <section className="relative w-full bg-[#F9F9F9] text-[#0F1A41] py-32 px-6 md:px-16 overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full grid grid-cols-4 md:grid-cols-12 border-l border-[#0F1A41]/[0.03]">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-[#0F1A41]/[0.03] h-full w-full" />
          ))}
        </div>
      </div>
      
      {/* BACKGROUND DECOR: Bản vẽ Blueprint chìm */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          
          {/* PHẦN CHỮ BÊN TRÁI */}
          <div className="md:col-span-4 space-y-6">
            <span className="text-[10px] tracking-[0.5em] uppercase text-blue-600 font-bold">The Power of Numbers</span>
            <h2 className="text-5xl font-bold uppercase tracking-tighter leading-none">
              Năng lực <br /> <span className="font-light italic opacity-50">Thực thi.</span>
            </h2>
            <p className="text-sm text-[#0F1A41]/60 leading-relaxed max-w-xs pt-6 border-t border-[#0F1A41]/10">
              Mỗi con số là một minh chứng cho sự cam kết về hiệu quả và tính minh bạch trong quản trị tài sản của chúng tôi.
            </p>
          </div>

          {/* HỆ THỐNG SỐ LIỆU BÊN PHẢI */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#0F1A41]/5 border border-[#0F1A41]/5">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ backgroundColor: "#0F1A41", color: "#FFFFFF" }}
                className="bg-[#F9F9F9] p-12 flex flex-col group transition-all duration-500"
              >
                {/* Icon được bọc trong div để dễ xử lý màu sắc khi hover */}
                <div className="text-blue-600 group-hover:text-blue-400 transition-colors">
                  {stat.icon}
                </div>

                <div className="mb-4">
                  <span className="text-6xl font-light tracking-tighter">
                    <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                  </span>
                  <span className="text-xl font-light opacity-30 ml-2 group-hover:opacity-100 transition-opacity">
                    {stat.suffix}
                  </span>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2 group-hover:text-blue-300 transition-colors">
                    {stat.label}
                  </h3>
                  <p className="text-xs opacity-50 group-hover:opacity-70 font-light italic">
                    {stat.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}