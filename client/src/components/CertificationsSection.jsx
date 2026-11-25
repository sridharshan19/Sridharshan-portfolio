import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function CertificationsSection({ certifications }) {
  if (!certifications) return null;

  return (
    <section id="certifications" className="section-shell">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="section-container">
        {/* Title */}
        <div className="mb-14 max-w-3xl">
          <span className="section-kicker">Verified Credentials</span>
          <h2 className="section-heading">
            Licenses and certifications.
          </h2>
          <p className="section-subtitle">
            Technical qualifications earned from Udemy, HackerRank, and Cambridge Linguaskill.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-16"
          >
            {certifications.map((cert, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <motion.div
                  className="glass-card glow-border p-8 h-full flex flex-col justify-between group"
                  whileHover={{ y: -5 }}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs bg-[#3B82F6]/10 text-[#3B82F6] dark:text-[#22D3EE] border border-[#3B82F6]/25 px-3.5 py-1 rounded-full font-bold uppercase tracking-wider">
                        {cert.provider}
                      </span>
                      <span className="text-xs text-[#8B5CF6] font-bold">
                        {cert.year}
                      </span>
                    </div>

                    {/* Logo/Icon */}
                    <div className="text-2xl mb-6 bg-slate-100 dark:bg-[#0D1220] text-[#3B82F6] dark:text-[#22D3EE] w-12 h-12 rounded-xl border border-slate-200 dark:border-[rgba(148,163,184,0.15)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <FaCertificate />
                    </div>

                    {/* Certificate Title */}
                    <h3 className="text-lg font-display font-bold text-slate-900 dark:text-[#F8FAFC] group-hover:text-[#3B82F6] dark:group-hover:text-[#22D3EE] transition-colors duration-300 mb-2 leading-snug">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200 dark:border-[rgba(148,163,184,0.15)] text-[10px] text-slate-500 dark:text-[#94A3B8] font-semibold tracking-widest uppercase flex items-center justify-between">
                    <span>Verified License</span>
                    <span className="text-[#22D3EE]">Active ✓</span>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
