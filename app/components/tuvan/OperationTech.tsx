"use client";
import { motion } from "framer-motion";

const techFeatures = [
  {
    title: "Quản trị dòng tiền thực",
    desc: "Báo cáo doanh thu, chi phí và lợi nhuận ròng (EBITDA) cập nhật theo thời gian thực (Real-time).",
    icon: "DATA_01"
  },
  {
    title: "Số hóa quy trình vận hành",
    desc: "Tự động hóa từ khâu check-in, quản lý hợp đồng đến hệ thống nhắc nợ và thanh toán không tiền mặt.",
    icon: "PROC_02"
  },
  {
    title: "Giám sát tài sản 24/7",
    desc: "Hệ thống cảnh báo bảo trì định kỳ và quản lý kỹ thuật tòa nhà thông qua nền tảng tập trung.",
    icon: "TECH_03"
  }
];

export default function OperationTech() {
  return (
    <section className="relative w-full bg-[#F8F9FA] text-[#0F1A41] py-24 px-6 md:px-16 overflow-hidden">
      
      {/* Decorative Grid - Hệ lưới kỹ thuật mảnh */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <div className="grid grid-cols-6 md:grid-cols-12 h-full w-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-[#0F1A41] h-full" />
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* CỘT TRÁI: MÔ PHỎNG DASHBOARD (Mockup) */}
          <div className="lg:col-span-7 relative">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10 bg-white shadow-2xl border border-[#0F1A41]/5 p-4 rounded-sm"
            >
              {/* Giả lập giao diện Dashboard sang trọng */}
              <div className="w-full h-[400px] bg-[#0F1A41] flex flex-col p-6 overflow-hidden relative">
  
  {/* 1. LỚP NỀN: HỆ LƯỚI TỌA ĐỘ 3D (Grid Floor) */}
  {/* Đã điều chỉnh để nằm gọn trong nền tối của div cha */}
  <div className="absolute inset-0 [perspective:1000px] opacity-20 pointer-events-none">
    <motion.div 
      initial={{ rotateX: 45, opacity: 0 }}
      whileInView={{ rotateX: 25, opacity: 0.3 }}
      className="w-full h-[200%] border-t border-l border-blue-500/20"
      style={{ 
        backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}
    />
  </div>

  {/* 2. NỘI DUNG CHÍNH (Dashboard Content) */}
  <div className="relative z-10 flex flex-col h-full">
    
    {/* Header của Dashboard */}
    <div className="flex justify-between items-start mb-6">
      <div className="space-y-2">
        <div className="h-1 w-10 bg-blue-500"></div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold">
          Revenue Analytics / 2026
        </p>
      </div>
      <div className="text-2xl font-light text-white tracking-tight">$142,500.00</div>
    </div>

    {/* Khu vực biểu đồ: Tận dụng không gian còn lại */}
    <div className="flex-grow relative mt-4">
      <svg className="w-full h-full opacity-60" viewBox="0 0 400 150" preserveAspectRatio="none">
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M0 120 Q 50 110, 100 80 T 200 60 T 300 90 T 400 20"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
        />
        <path d="M0 150 V 120 Q 50 110, 100 80 T 200 60 T 300 90 T 400 20 V 150 Z" fill="url(#grad2)" />
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
      </svg>
    </div>

    {/* 3. LỚP PHỤ: REAL-TIME NOTIFICATION (Đặt ở góc dưới) */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-4 right-0 z-20 w-44 bg-white/5 backdrop-blur-md border border-white/10 p-3 shadow-2xl"
    >
      <div className="flex items-center gap-2 mb-1">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
        <span className="text-[7px] uppercase tracking-widest font-bold text-white/40">Live Status</span>
      </div>
      <p className="text-xs font-bold text-white">Occupancy: 94%</p>
    </motion.div>

    {/* 4. LỚP DECOR: FLOATING CODE (Đặt ở góc dưới trái) */}
    <div className="absolute bottom-4 left-0 z-20 flex flex-col gap-1 opacity-30 font-mono text-[7px] text-blue-300">
      <span>// SYSTEM_ACTIVE: TRUE</span>
      <span>// SECURE_PROTOCOL: V2</span>
    </div>

  </div>
</div>
            </motion.div>
            
            {/* Khối hình học trang trí tạo góc cạnh */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t border-l border-[#0F1A41]/20 z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-600/5 z-0"></div>
          </div>

          {/* CỘT PHẢI: NỘI DUNG */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="text-[10px] tracking-[0.5em] uppercase text-blue-600 font-bold mb-4 block">Proptech Solution</span>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-none mb-6">
                Quản trị tài sản <br /> <span className="font-light italic opacity-60">Bằng dữ liệu.</span>
              </h2>
              <p className="text-sm text-[#0F1A41]/70 leading-relaxed font-light">
                Chủ đầu tư sở hữu quyền truy cập hệ thống Dashboard chuyên biệt, giúp minh bạch hóa mọi chỉ số vận hành và dòng tiền theo thời gian thực.
              </p>
            </div>

            <div className="space-y-8">
              {techFeatures.map((feature, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex gap-6 group"
                >
                  <span className="text-[10px] font-mono opacity-30 group-hover:text-blue-600 transition-colors">
                    {feature.icon}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-2">{feature.title}</h4>
                    <p className="text-xs text-[#0F1A41]/60 leading-relaxed italic border-l border-[#0F1A41]/10 pl-4">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}