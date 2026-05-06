"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen w-full bg-[#0F1A41] text-white flex flex-col justify-between p-6 md:p-16 overflow-hidden">

            {/* Hệ lưới Blueprint - Đặc trưng ngành kiến trúc */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full grid grid-cols-6 md:grid-cols-12 border-l border-white/[0.03]">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="border-r border-white/[0.03] h-full w-full" />
                    ))}
                </div>
            </div>

            {/* Top Detail - Thông tin định danh */}
            <div className="z-10 flex justify-between items-start">
                <div className="flex flex-col gap-1">
                    {/* <span className="text-[10px] tracking-[0.4em] uppercase font-light text-blue-400">Dịch vụ tư vấn chiến lược</span> */}
                    <span className="text-[9px] tracking-[0.2em] uppercase opacity-40">CityHouse More / Asset Management</span>
                </div>
                <div className="hidden md:block text-right">
                    <span className="text-[9px] tracking-[0.3em] uppercase opacity-40 leading-loose">
                        Phát triển bởi đội ngũ chuyên gia <br /> Dự báo tăng trưởng 2026
                    </span>
                </div>
            </div>

            {/* Main Content - Tiêu đề quyền lực */}
            <div className="z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16">
                <div className="md:col-span-9">
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h1 className="text-[8vw] md:text-[7vw] font-bold leading-[1] tracking-tighter uppercase">
                            Quản lý gia sản <br />
                            <span className="font-light italic text-blue-200/80">Vững bền gia tộc</span>
                        </h1>
                    </motion.div>
                </div>

                <div className="md:col-span-3 flex flex-col gap-8 border-l border-white/10 pl-8">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-xs md:text-sm text-gray-400 leading-relaxed tracking-wide"
                    >
                        Giải pháp vận hành bất động sản dòng tiền chuyên sâu. Chúng tôi không chỉ quản lý, chúng tôi nâng tầm tài sản của bạn thành một biểu tượng đầu tư.
                    </motion.p>

                    <motion.button
                        whileHover={{ gap: "24px" }}
                        className="flex items-center gap-4 group transition-all"
                    >
                        <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-white">Khám phá giải pháp</span>
                        <div className="h-[1px] w-12 bg-blue-500 group-hover:w-24 transition-all duration-500"></div>
                    </motion.button>
                </div>
            </div>

            {/* Background Graphic - Khối kiến trúc chìm */}
            <div className="absolute right-[-5%] top-[10%] w-[50%] h-[80%] opacity-20 grayscale pointer-events-none z-0">
                <video
                    src="/videos/video-intro.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover mix-blend-screen"
                />
            </div>

            {/* Footer Numbers - Chỉ số minh bạch */}
            <div className="z-10 flex flex-wrap gap-12 border-t border-white/5 pt-8">
                <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500 mb-2 font-medium">Tỷ lệ lấp đầy</p>
                    <p className="text-3xl font-light tracking-tighter">92<span className="text-sm ml-1">%</span></p>
                </div>
                <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500 mb-2 font-medium">Tài sản quản lý</p>
                    <p className="text-3xl font-light tracking-tighter">3000 tỷ<span className="text-sm ml-1">+</span></p>
                </div>
                <div className="ml-auto hidden md:block">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-blue-400/50 italic">Tối ưu hóa - Minh bạch - Bền vững</p>
                </div>
            </div>
        </section>
    );
}