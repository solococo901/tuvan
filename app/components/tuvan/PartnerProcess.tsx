"use client";
import { motion } from "framer-motion";

const steps = [
  {
    no: "01",
    title: "Khảo sát chiến lược",
    desc: "Chúng tôi không chỉ xem nhà, chúng tôi phân tích tọa độ sinh lời. Đánh giá thực địa và tiềm năng vị trí dựa trên dữ liệu dân cư.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000",
    tags: ["Site Visit", "SWOT Analysis"]
  },
  {
    no: "02",
    title: "Định vị phân khúc",
    desc: "Xác định đúng tập khách hàng mục tiêu để thiết lập bài toán lợi nhuận (P&L) và concept quy hoạch công năng tối ưu nhất.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000",
    tags: ["Financial P&L", "Concept Design"]
  },
  {
    no: "03",
    title: "Triển khai vận hành",
    desc: "Giám sát cải tạo chuyên sâu và thiết lập bộ máy nhân sự. Biến bản vẽ thành một cỗ máy vận hành thực tế.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1000",
    tags: ["Project Management", "Staffing"]
  },
  {
    no: "04",
    title: "Tối ưu dòng tiền",
    desc: "Khai thác tối đa doanh thu thông qua hệ thống Proptech và các chiến dịch Marketing đa kênh đảm bảo tỷ lệ lấp đầy.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
    tags: ["Asset Growth", "Proptech"]
  }
];

export default function PartnerProcess() {
  return (
    <section className="relative w-full bg-[#0F1A41] text-white py-32 px-6 md:px-16 overflow-hidden">
      
      {/* Background Graphic - Đường line kỹ thuật mờ ảo */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.1" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col mb-32 max-w-2xl">
          <span className="text-[10px] tracking-[0.5em] uppercase text-blue-400 font-bold mb-4">Strategic Roadmap</span>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9]">
            Quy trình <br /> 
            <span className="font-light italic text-blue-200 opacity-60">Kiến tạo giá trị.</span>
          </h2>
        </div>

        {/* Zigzag Content */}
        <div className="space-y-30 md:space-y-30">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* IMAGE BLOCK: Khối ảnh góc cạnh */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2 relative"
              >
                <div className="aspect-[4/3] overflow-hidden border border-white/10 group relative">
                  <img 
                    src={step.img} 
                    alt={step.title} 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                  />
                  {/* Overlay số thứ tự lớn chìm dưới ảnh */}
                  <span className="absolute -bottom-10 -right-10 text-[15vw] font-bold text-white/[0.03] italic select-none">
                    {step.no}
                  </span>
                </div>
                {/* Khung viền decor bay bổng */}
                <div className={`absolute -z-10 w-full h-full border border-blue-500/30 top-4 ${i % 2 === 0 ? '-left-4' : '-right-4'}`} />
              </motion.div>

              {/* TEXT BLOCK: Chữ tinh gọn, sang trọng */}
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 space-y-6"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-blue-400 tracking-widest">STEP_{step.no}</span>
                  <div className="h-[1px] w-12 bg-white/20"></div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
                  {step.title}
                </h3>
                
                <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-md">
                  {step.desc}
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                  {step.tags.map((tag, idx) => (
                    <span key={idx} className="text-[9px] tracking-widest uppercase px-3 py-1 bg-white/5 border border-white/10 text-blue-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        {/* <div className="mt-48 flex flex-col items-center border-t border-white/5 pt-24">
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-8 font-bold text-center">Sẵn sàng để bắt đầu dự án?</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-10 py-4 bg-transparent border border-white/20 hover:bg-white hover:text-[#0F1A41] transition-all text-xs font-bold uppercase tracking-[0.3em]"
          >
            Đăng ký tư vấn ngay
          </motion.button>
        </div> */}
      </div>
    </section>
  );
}