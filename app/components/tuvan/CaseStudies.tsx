"use client";
import { useState, useEffect } from "react"; // Thêm useEffect
import { motion, AnimatePresence } from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const cases = [
  {
    id: "01",
    name: "Signature Residence",
    location: "Quận 1, TP. HCM",
    stats: [
      { label: "Doanh thu", value: "+22%" },
      { label: "Lấp đầy", value: "100%" }
    ],
    before: "/images/bellita.png",
    after: "/images/bellita2.png",
    desc: "Cải tạo từ tòa nhà văn phòng xuống cấp thành tổ hợp căn hộ dịch vụ cao cấp."
  },
  {
    id: "02",
    name: "Savvy Lifestyle",
    location: "Quận 3, TP. HCM",
    stats: [
      { label: "ROI", value: "18%" },
      { label: "Vận hành", value: "Proptech" }
    ],
    before: "https://images.unsplash.com/photo-1512918766671-ed6a07be061f?q=80&w=2070",
    after: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    desc: "Tối ưu hóa công năng nhà phố diện tích lớn thành mô hình Co-living hiện đại."
  },
  {
    id: "03",
    name: "CityHouse Park View",
    location: "Phú Nhuận, TP. HCM",
    stats: [
      { label: "Doanh thu", value: "+15%" },
      { label: "Thanh khoản", value: "Cao" }
    ],
    before: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000",
    after: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000",
    desc: "Định vị lại phân khúc khách hàng thượng lưu cho tòa nhà căn hộ dịch vụ cũ."
  },
  {
    id: "04",
    name: "CityHouse Park View",
    location: "Phú Nhuận, TP. HCM",
    stats: [
      { label: "Doanh thu", value: "+15%" },
      { label: "Thanh khoản", value: "Cao" }
    ],
    before: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000",
    after: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000",
    desc: "Định vị lại phân khúc khách hàng thượng lưu cho tòa nhà căn hộ dịch vụ cũ."
  },
  {
    id: "05",
    name: "CityHouse Park View",
    location: "Phú Nhuận, TP. HCM",
    stats: [
      { label: "Doanh thu", value: "+15%" },
      { label: "Thanh khoản", value: "Cao" }
    ],
    before: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000",
    after: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000",
    desc: "Định vị lại phân khúc khách hàng thượng lưu cho tòa nhà căn hộ dịch vụ cũ."
  },
  {
    id: "06",
    name: "CityHouse Park View",
    location: "Phú Nhuận, TP. HCM",
    stats: [
      { label: "Doanh thu", value: "+15%" },
      { label: "Thanh khoản", value: "Cao" }
    ],
    before: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000",
    after: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000",
    desc: "Định vị lại phân khúc khách hàng thượng lưu cho tòa nhà căn hộ dịch vụ cũ."
  }
];

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);
  const [mounted, setMounted] = useState(false); // Trạng thái kiểm soát mounted

  // Khởi tạo mounted sau khi render lần đầu
  useEffect(() => {
    setMounted(true);
  }, []);

  // Nếu chưa mounted, trả về khung xương (hoặc null) để tránh mismatch style
  if (!mounted) {
    return <section className="w-full bg-[#0F1A41] min-h-screen" />;
  }

  return (
    <section className="relative w-full bg-[#0F1A41] text-white py-24 px-6 md:px-16 overflow-hidden">
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Header Section */}
      <div className="container mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-8">
          <div className="md:col-span-8">
            <span className="text-[10px] tracking-[0.5em] uppercase text-blue-400 font-bold mb-4 block">Portfolios</span>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
              Sự chuyển hóa <br /> <span className="font-light italic opacity-50 text-blue-200">Giá trị.</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/10 pt-12">
        
        {/* LEFT: Project Navigation */}
        <div className="lg:col-span-3 order-2 lg:order-1">
          <p className="text-[10px] tracking-widest uppercase opacity-40 mb-8 font-bold text-blue-400">
            Danh sách dự án ({cases.length})
          </p>
          
          <div className="no-scrollbar overflow-y-auto max-h-[600px] pr-2 space-y-4">
            {cases.map((project, index) => (
              <motion.button
                key={`${project.id}-${index}`}
                onClick={() => setActiveCase(index)}
                initial={false}
                animate={{ 
                  backgroundColor: activeCase === index ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0)",
                  borderColor: activeCase === index ? "#60a5fa" : "rgba(255, 255, 255, 0.05)"
                }}
                className="w-full text-left p-6 transition-all border block group"
              >
                <span className={`text-[10px] font-mono block mb-2 transition-opacity duration-300 ${activeCase === index ? "opacity-100 text-blue-400" : "opacity-40"}`}>
                  [{project.id}]
                </span>
                <h4 className={`text-sm uppercase font-bold tracking-wider transition-colors duration-300 ${activeCase === index ? "text-white" : "text-white/40 group-hover:text-white/70"}`}>
                  {project.name}
                </h4>
              </motion.button>
            ))}
          </div>
        </div>

        {/* RIGHT: Display Area */}
        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-12 gap-12 order-1 lg:order-2 lg:sticky lg:top-10 h-fit">
          
          {/* Slider Box */}
          <div className="md:col-span-8 group relative h-fit">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="border border-white/10 p-2 bg-white/5 shadow-2xl"
              >
                {/* Thêm key để React tái cấu trúc slider khi đổi case, tránh xung đột thuộc tính nội bộ */}
                <ReactCompareSlider
                  key={`slider-${activeCase}`}
                  itemOne={<ReactCompareSliderImage src={cases[activeCase].before} alt="Trước" className="grayscale opacity-60" />}
                  itemTwo={<ReactCompareSliderImage src={cases[activeCase].after} alt="Sau" />}
                  className="h-[400px] md:h-[550px] object-cover"
                />
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute bottom-6 left-6 flex gap-3 pointer-events-none z-10">
               <span className="px-3 py-1 bg-black/50 text-[9px] uppercase tracking-widest backdrop-blur-md border border-white/10">Hiện trạng cũ</span>
               <span className="px-3 py-1 bg-blue-600/50 text-[9px] uppercase tracking-widest backdrop-blur-md border border-white/10">Sau cải tạo</span>
            </div>
          </div>

          {/* Info Box */}
          <div className="md:col-span-4 flex flex-col justify-between py-2">
            <div className="space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`info-${activeCase}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <p className="text-blue-400 text-[10px] uppercase tracking-[0.2em] font-bold">
                    {cases[activeCase].location}
                  </p>
                  <p className="text-sm text-gray-400 font-light leading-relaxed italic border-l border-blue-500/30 pl-4">
                    "{cases[activeCase].desc}"
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                    {cases[activeCase].stats.map((s, i) => (
                      <div key={i}>
                        <p className="text-[8px] uppercase tracking-widest text-gray-500 mb-1">{s.label}</p>
                        <p className="text-2xl font-light text-blue-400 tracking-tighter">{s.value}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.button 
              whileHover={{ x: 10 }}
              className="mt-12 flex items-center gap-4 group w-fit"
            >
              <div className="h-[1px] w-8 bg-white group-hover:w-16 transition-all duration-500"></div>
              <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-white/60 group-hover:text-white">
                Hồ sơ chi tiết
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}