"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="relative w-full bg-[#0F1A41] text-white py-24 px-6 md:px-16 overflow-hidden">
      
      {/* Background Decor: Hệ lưới Blueprint đặc trưng */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full grid grid-cols-4 md:grid-cols-12 border-l border-white/[0.03]">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-white/[0.03] h-full w-full" />
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* CỘT TRÁI: THÔNG ĐIỆP */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] tracking-[0.5em] uppercase text-blue-400 font-bold mb-4 block">
                Connect with us
              </span>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[1.2] mb-6">
                Khởi đầu hành trình <br /> 
                <span className="font-light italic  text-blue-200/40">Quản lý gia sản</span><br/>
                <span className="font-light italic text-blue-200/40">Vững bền gia tộc</span>

              </h2>
              <div className="h-[1px] w-24 bg-blue-500 mb-8"></div>
              <p className="text-sm md:text-base text-white/60 font-light leading-relaxed max-w-md">
                Tại CityHouse, sự minh bạch không chỉ là cam kết, mà là hệ thống vận hành thực tế 
                giúp Chủ đầu tư hoàn toàn an tâm về tài sản của mình.
              </p>
            </motion.div>

            {/* Thông tin thêm mờ ảo phía dưới */}
            <div className="pt-12 grid grid-cols-2 gap-8 border-t border-white/5">
                <div>
                    <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Văn phòng chiến lược</p>
                    <p className="text-xs font-light text-white/80">485B Nguyễn Đình Chiểu, phường Bàn Cờ, TP.HCM</p>
                </div>
                <div>
                    <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Thời gian làm việc</p>
                    <p className="text-xs font-light text-white/80">Thứ 2 - Thứ 7 | 08:00 - 18:00</p>
                </div>
            </div>
          </div>

          {/* CỘT PHẢI: FORM ĐĂNG KÝ (Style hiện đại) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden group"
            >
              {/* Trang trí góc Form */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-blue-500/30"></div>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-8">
                Tham quan & Hợp tác
              </h3>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Họ tên của bạn</label>
                  <input 
                    type="text" 
                    placeholder="Nhập tên của bạn..." 
                    className="w-full bg-white/5 border border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-white/20"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Số điện thoại</label>
                    <input 
                      type="tel" 
                      placeholder="090 ..." 
                      className="w-full bg-white/5 border border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="w-full bg-white/5 border border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Lời nhắn của bạn</label>
                  <textarea 
                    rows={4}
                    placeholder="Nội dung cần tư vấn..." 
                    className="w-full bg-white/5 border border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-white/20 resize-none"
                  ></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-[0.2em] py-5 text-xs transition-all flex items-center justify-center gap-3 group"
                >
                  Gửi yêu cầu tư vấn
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-2 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </motion.button>
              </form>
              
              <p className="text-[9px] text-white/30 mt-6 text-center italic">
                Bằng cách nhấn gửi, bạn đồng ý với chính sách quyền riêng tư của chúng tôi.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}