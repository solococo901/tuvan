"use client";
import { motion } from "framer-motion";

export default function FooterContact() {
  return (
    <footer className="relative w-full bg-[#F8F9FA] text-[#0F1A41] py-24 px-6 md:px-16 overflow-hidden border-t border-[#0F1A41]/5">
      
      {/* Background Decor - Chữ chìm CityHouse mờ ảo */}
      <div className="absolute -bottom-10 left-0 text-[15vw] font-bold opacity-[0.03] select-none pointer-events-none">
        CITYHOUSE
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* CỘT TRÁI: THÔNG ĐIỆP MỜI HỢP TÁC */}
          <div className="lg:col-span-6 space-y-12">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[10px] tracking-[0.5em] uppercase text-blue-600 font-bold mb-6 block"
              >
                Hành trình bắt đầu từ đây
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
                Sẵn sàng <br /> 
                <span className="font-light italic opacity-60">Đột phá?</span>
              </h2>
              <p className="text-sm text-[#0F1A41]/70 leading-relaxed max-w-sm font-light">
                Hãy để lại thông tin, đội ngũ chuyên gia của chúng tôi sẽ liên hệ để khảo sát thực địa và tư vấn giải pháp tối ưu nhất cho tài sản của bạn trong vòng 24h.
              </p>
            </div>

            {/* Thông tin liên hệ trực tiếp */}
            <div className="space-y-4 pt-12 border-t border-[#0F1A41]/10">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-widest opacity-40">Địa chỉ văn phòng</span>
                <span className="text-xs font-bold uppercase italic">Lầu 10, CityHouse Building, TP. Hồ Chí Minh</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-widest opacity-40">Liên hệ trực tiếp</span>
                <span className="text-xs font-bold uppercase italic">090X XXX XXX / info@cityhousemore.com</span>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI: FORM LIÊN HỆ TỐI GIẢN (Architectural Style) */}
          <div className="lg:col-span-6 bg-white p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-[#0F1A41]/5">
            <form className="space-y-10">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Họ và tên chủ đầu tư *" 
                  className="w-full bg-transparent border-b border-[#0F1A41]/20 py-4 outline-none focus:border-blue-500 transition-colors text-xs uppercase tracking-widest"
                />
              </div>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Email cá nhân/doanh nghiệp *" 
                  className="w-full bg-transparent border-b border-[#0F1A41]/20 py-4 outline-none focus:border-blue-500 transition-colors text-xs uppercase tracking-widest"
                />
              </div>
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Vị trí/Tên tài sản (Nếu có)" 
                  className="w-full bg-transparent border-b border-[#0F1A41]/20 py-4 outline-none focus:border-blue-500 transition-colors text-xs uppercase tracking-widest"
                />
              </div>
              <div className="relative group">
                <textarea 
                  rows={2} 
                  placeholder="Thông điệp/Yêu cầu cụ thể của bạn" 
                  className="w-full bg-transparent border-b border-[#0F1A41]/20 py-4 outline-none focus:border-blue-500 transition-colors text-xs uppercase tracking-widest resize-none"
                />
              </div>

              <motion.button 
                whileHover={{ backgroundColor: "#0F1A41", color: "#FFFFFF" }}
                className="w-full py-5 border border-[#0F1A41] text-[#0F1A41] text-[10px] font-bold uppercase tracking-[0.4em] transition-all"
              >
                Gửi yêu cầu tư vấn chuyên sâu
              </motion.button>
            </form>
          </div>
        </div>

        {/* BOTTOM BAR: Thông tin bản quyền & Social */}
        <div className="mt-32 pt-8 border-t border-[#0F1A41]/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-12 text-[9px] uppercase tracking-widest font-bold opacity-40">
            <a href="#" className="hover:text-blue-600 transition-colors">Facebook</a>
            <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Instagram</a>
          </div>
          <p className="text-[9px] uppercase tracking-widest opacity-30 italic">
            © 2026 CityHouse More. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}