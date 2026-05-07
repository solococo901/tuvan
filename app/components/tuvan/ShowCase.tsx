"use client";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const brands = [
  { id: "01", name: "MARK", sub: "Urban Timeless", desc: "Định vị giá trị văn hóa và chuẩn mực lưu trú cao cấp.", img: "/images/brands/mark.png", tag: "High-End Standards" },
  { id: "02", name: "SOUL", sub: "Urban Rhythm", desc: "Cân bằng thân tâm với không gian xanh và nhịp sống chậm.", img: "/images/brands/soul.jpg", tag: "Wellness Living" },
  { id: "03", name: "VIBE", sub: "Urban Visual", desc: "Ngôn ngữ kiến trúc mạnh mẽ, đề cao cảm xúc thị giác.", img: "/images/brands/vibe.jpg", tag: "Visual Experience" },
  { id: "04", name: "TERA", sub: "Urban Modern", desc: "Tôn trọng cá tính riêng biệt với cách tiếp cận phá cách.", img: "/images/brands/tera.png", tag: "Unique Personality" },
  { id: "05", name: "NEST", sub: "Urban Cozy", desc: "Tối ưu hóa không gian lưu trú, duy trì hiệu quả vận hành.", img: "/images/brands/nest.jpg", tag: "Optimization" }
];

export default function BrandShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => { isDown = false; };
    const handleMouseUp = () => { isDown = false; };
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; 
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full bg-[#0F1A41] text-white py-24 overflow-hidden border-t border-white/5">
      
      {/* Background Decor - Blueprint Grid (Màu trắng mờ) */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
        <div className="grid grid-cols-6 md:grid-cols-12 h-full w-full text-white">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-current h-full" />
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="container mx-auto px-6 md:px-16 mb-16 relative z-10 text-left">
        <span className="text-[10px] tracking-[0.5em] uppercase text-blue-400 font-bold mb-4 block">
          Phát triển dòng sản phẩm
        </span>
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9]">
          Hệ sinh thái <br /> <span className="font-light italic text-white/40">Thương hiệu.</span>
        </h2>
      </div>

      {/* Scroll Area */}
      <div 
        ref={scrollRef}
        className="flex gap-8 px-6 md:px-16 overflow-x-auto cursor-grab active:cursor-grabbing select-none
                   [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
                   relative z-10"
      >
        {brands.map((brand, i) => (
          <div 
            key={i}
            className="flex-shrink-0 w-[280px] md:w-[400px]"
          >
            {/* Image Frame */}
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10 mb-8 bg-white/5 shadow-2xl">
              <img 
                src={brand.img} 
                alt={brand.name} 
                draggable={false}
                className="w-full h-full object-cover grayscale-[0.2] brightness-90 transition-all duration-700"
              />
              
              {/* ID Tag góc trái - Chuyển sang nền trắng chữ xanh để nổi bật */}
              <div className="absolute top-0 left-0 bg-white text-[#0F1A41] px-4 py-2 text-[10px] font-mono font-bold">
                {brand.id}
              </div>

              {/* Tag phân loại tĩnh trên ảnh */}
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-white text-[8px] font-bold uppercase tracking-[0.2em] border border-white/20 shadow-sm">
                  {brand.tag}
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <h3 className="text-3xl font-bold uppercase tracking-tighter text-white">
                  {brand.name}
                </h3>
                <div className="h-[1px] flex-1 bg-white/10"></div>
              </div>
              
              <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-blue-400 opacity-90 italic">
                {brand.sub}
              </p>
              
              <p className="text-xs text-white/60 font-light leading-relaxed max-w-[90%]">
                {brand.desc}
              </p>
            </div>
          </div>
        ))}
        
        {/* Spacer cuối */}
        <div className="flex-shrink-0 w-12 md:w-32 h-1" />
      </div>

      {/* Footer Navigation Guide */}
      <div className="container mx-auto px-6 md:px-16 mt-16 relative z-10 flex items-center gap-4">
        <span className="text-[9px] tracking-[0.4em] uppercase text-white/30 italic">
          Kéo hoặc vuốt ngang để khám phá
        </span>
        <div className="h-[1px] w-12 bg-blue-400/30"></div>
      </div>
    </section>
  );
}