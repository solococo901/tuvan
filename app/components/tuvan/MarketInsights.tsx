"use client";
import { motion } from "framer-motion";

export default function MarketInsights() {
 return (
    <section className="relative min-h-screen w-full bg-[#F4F4F4] text-[#0F1A41] py-24 px-6 md:px-16 overflow-hidden">
      
      {/* Decorative Grid - Hệ lưới kỹ thuật bản Light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full grid grid-cols-4 md:grid-cols-12 border-l border-[#0F1A41]/[0.03]">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-[#0F1A41]/[0.03] h-full w-full" />
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 mb-20 gap-8">
          <div className="md:col-span-8">
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-blue-600 mb-4 block">Phân tích chiến lược</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.85]">
              Thấu hiểu <br />
              <span className="font-light italic opacity-60">Thị trường.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0 border-t border-[#0F1A41]/10 pt-16">
          
          {/* CỘT TRÁI: THÁCH THỨC - Cảm giác tĩnh và sâu sắc */}
          <div className="md:col-span-5 flex flex-col gap-12 md:pr-12">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-red-500"></div>
              <span className="text-xs font-bold uppercase tracking-widest opacity-40">Thực trạng hiện hữu</span>
            </div>

            <div className="space-y-12">
              {[
                { title: "Sai lệch định vị chiến lược", desc: "Lựa chọn phân khúc không tương thích với tọa độ vị trí và đặc thù dân cư sẽ triệt tiêu khả năng cạnh tranh ngay từ giai đoạn đầu." },
                { title: "Rủi ro thâm hụt vốn đầu tư", desc: "Các biến số phát sinh trong thực tế thường gây thâm hụt 15-30% ngân sách dự kiến, làm kéo dài thời gian hoàn vốn (ROI)." },
                { title: "Biến số lợi nhuận dài hạn", desc: "Vận hành thiếu lộ trình khiến dòng tiền không ổn định, tài sản nhanh chóng xuống cấp và mất dần vị thế trên thị trường." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="group"
                >
                  <h3 className="text-xl font-bold uppercase mb-3 group-hover:text-red-500 transition-colors">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#0F1A41]/60 font-light max-w-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CỘT GIỮA: Một đường kẻ dọc tinh tế */}
          <div className="hidden md:block md:col-span-1 border-l border-[#0F1A41]/10 h-full py-20" />

          {/* CỘT PHẢI: TIỀM NĂNG - Cảm giác hiện đại và đột phá */}
          <div className="md:col-span-6 flex flex-col gap-12">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-emerald-500"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Giải pháp từ CityHouse More</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { 
                  num: "01", 
                  title: "Quản lý gia sản", 
                  desc: "Tài sản được nhìn dưới góc độ Gia sản lâu dài qua nhiều thế hệ, không vì thương mại thuần túy" 
                },
                { 
                  num: "02", 
                  title: "Tối ưu giá trị kép", 
                  desc: "Tối ưu song song cả Dòng tiền thu nhập và Giá trị bất động sản" 
                },
                { 
                  num: "03", 
                  title: "Khác biệt hóa", 
                  desc: "Nghiên cứu và định hình giá trị độc đáo và bền vững cho dự án" 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10, backgroundColor: "#0F1A41", color: "#FFFFFF" }}
                  className="p-8 border border-[#0F1A41]/10 flex flex-col gap-4 transition-all duration-500 group cursor-pointer bg-white/50 backdrop-blur-sm"
                >
                  <span className="text-4xl font-bold tracking-tighter opacity-10 group-hover:opacity-20 italic">
                    {item.num}
                  </span>
                  <h4 className="text-lg font-bold uppercase tracking-tight">{item.title}</h4>
                  <p className="text-sm opacity-60 group-hover:opacity-80 leading-relaxed italic">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}