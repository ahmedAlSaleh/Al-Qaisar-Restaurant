"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { ScrollReveal } from "@/components/effects/scroll-reveal";

import { GOLD_BLUR_DATA_URL } from "@/lib/utils";

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&q=80&auto=format&fit=crop",
      span: "col-span-12 sm:col-span-6 lg:col-span-7",
      caption: "The Grand Dining Hall",
      category: "Atmosphere",
      altArabic: "قاعة الطعام الفاخرة وثريا الكريستال البوهيمي في مطعم القيصر بفندق فور سيزونز",
      heightClass: "h-72 sm:h-80",
    },
    {
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80&auto=format&fit=crop",
      span: "col-span-12 sm:col-span-6 lg:col-span-5",
      caption: "A5 Miyazaki Wagyu Rossini",
      category: "Signature Dish",
      altArabic: "ستيك واغيو روسيني مع الكمأة وكبد الإوز المحمر وصلصة العنب المعتقة",
      heightClass: "h-72 sm:h-80",
    },
    {
      src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80&auto=format&fit=crop",
      span: "col-span-12 sm:col-span-6 lg:col-span-4",
      caption: "The Private Sommelier Vault",
      category: "Wine Reserve",
      altArabic: "قبو النبيذ العتيق الخاص بمطعم القيصر المليء بأندر القوارير الفرنسية",
      heightClass: "h-64 sm:h-72",
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80&auto=format&fit=crop",
      span: "col-span-12 sm:col-span-6 lg:col-span-4",
      caption: "Imperial Beluga Caviar",
      category: "Caviar Service",
      altArabic: "خدمة تقديم كافيار البيلوغا الإمبراطوري بملعقة الصدف الملكية",
      heightClass: "h-64 sm:h-72",
    },
    {
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80&auto=format&fit=crop",
      span: "col-span-12 sm:col-span-6 lg:col-span-4",
      caption: "Brittany Blue Lobster",
      category: "Haute Seafood",
      altArabic: "تحضير طبق الكركند البحري مع صوص الزعفران والكافيار الفاخر",
      heightClass: "h-64 sm:h-72",
    },
    {
      src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900&q=80&auto=format&fit=crop",
      span: "col-span-12 sm:col-span-6 lg:col-span-6",
      caption: "Chef's Precision Plating",
      category: "Kitchen Art",
      altArabic: "دقة الشيف أنطوان ديبوا في وضع اللمسات الفنية الأخيرة على الطبق",
      heightClass: "h-72 sm:h-80",
    },
    {
      src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&q=80&auto=format&fit=crop",
      span: "col-span-12 sm:col-span-6 lg:col-span-6",
      caption: "The Kitchen Fire Theatre",
      category: "Live Action",
      altArabic: "حركة المطبخ الحي وألسنة اللهب في تحضير المشويات الملكية",
      heightClass: "h-72 sm:h-80",
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&auto=format&fit=crop",
      span: "col-span-12 sm:col-span-6 lg:col-span-4",
      caption: "Candlelit Intimate Dining",
      category: "Atmosphere",
      altArabic: "طاولة طعام خاصة رومانسية على ضوء الشموع الخافت في مطعم القيصر",
      heightClass: "h-64 sm:h-72",
    },
    {
      src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80&auto=format&fit=crop",
      span: "col-span-12 sm:col-span-6 lg:col-span-4",
      caption: "Handcrafted Truffle Pasta",
      category: "Artisanal",
      altArabic: "باستا الترافل الإيطالية اليدوية الفاخرة مع جبن البارميزان المعتق",
      heightClass: "h-64 sm:h-72",
    },
    {
      src: "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?w=800&q=80&auto=format&fit=crop",
      span: "col-span-12 sm:col-span-6 lg:col-span-4",
      caption: "Historic Oak Barrel Cellar",
      category: "Wine Reserve",
      altArabic: "براميل خشب البلوط التاريخية لأندر أنواع النبيذ في القبو الخاص",
      heightClass: "h-64 sm:h-72",
    },
    {
      src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=700&q=80&auto=format&fit=crop",
      span: "col-span-12 sm:col-span-6 lg:col-span-3",
      caption: "Gold Leaf Mille-Feuille",
      category: "Pâtisserie",
      altArabic: "حلوى الميل فوي الفرنسية الراقية مع أوراق الذهب الصالحة للأكل",
      heightClass: "h-64 sm:h-72",
    },
    {
      src: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=700&q=80&auto=format&fit=crop",
      span: "col-span-12 sm:col-span-6 lg:col-span-3",
      caption: "Wild Turbot en Croûte",
      category: "Fine Seafood",
      altArabic: "سمك التوربوت الطازج مع صلصة الشمبانيا وزبدة الكافيار الفاخرة",
      heightClass: "h-64 sm:h-72",
    },
    {
      src: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=700&q=80&auto=format&fit=crop",
      span: "col-span-12 sm:col-span-6 lg:col-span-3",
      caption: "The Pâtissier's Touch",
      category: "Kitchen Art",
      altArabic: "شيف الحلويات يضع لمسات التزيين المخملية على حلوى السهرة الفاخرة",
      heightClass: "h-64 sm:h-72",
    },
    {
      src: "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?w=700&q=80&auto=format&fit=crop",
      span: "col-span-12 sm:col-span-6 lg:col-span-3",
      caption: "Vintage Champagne Toast",
      category: "Celebration",
      altArabic: "كؤوس الشمبانيا الكريستالية الفاخرة للاحتفالات الخاصة في مطعم القيصر",
      heightClass: "h-64 sm:h-72",
    },
  ];

  return (
    <section id="gallery" className="py-28 px-6 md:px-16 bg-[#080808] relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(201,168,76,0.07)_0%,transparent_70%)] filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.45em] text-[#C9A84C] mb-2 block font-medium">
            Visual Journey
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#F5F0E8] leading-tight">
            The <em className="italic text-[#C9A84C] font-normal">Gallery</em>
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto my-5 shadow-[0_0_8px_rgba(201,168,76,0.5)]" />
          <p className="text-xs sm:text-sm text-[#F5F0E8]/60 max-w-xl mx-auto leading-relaxed font-light">
            A glimpse into the culinary craft, grand spaces, and timeless memories created every evening at Al-Qaisar.
          </p>
        </ScrollReveal>

        {/* Staggered Masonry Grid with Magic UI BlurFade */}
        <div className="grid grid-cols-12 gap-4">
          {images.map((img, i) => (
            <div key={i} className={img.span}>
              <BlurFade delay={0.04 * i} inView>
                <div
                  onClick={() => setSelectedImage(img.src)}
                  className={`relative ${img.heightClass} rounded-2xl overflow-hidden border border-[#C9A84C]/25 cursor-pointer group shadow-[0_4px_24px_rgba(0,0,0,0.5)]`}
                >
                  <Image
                    src={img.src}
                    alt={img.altArabic}
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={GOLD_BLUR_DATA_URL}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover brightness-[0.88] transition-transform duration-[400ms] ease-out group-hover:scale-105 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A84C] font-medium self-end border border-[#C9A84C]/30 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm">
                      {img.category}
                    </span>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-serif text-base text-[#F5F0E8] block">
                          {img.caption}
                        </span>
                        <span className="text-[11px] text-[#C9A84C]/80 font-sans font-light">
                          Al-Qaisar Private Collection
                        </span>
                      </div>
                      <div className="w-9 h-9 rounded-full border border-[#C9A84C] bg-black/60 backdrop-blur-md flex items-center justify-center text-[#C9A84C] transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_12px_rgba(201,168,76,0.4)]">
                        <Plus className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 text-[#C9A84C] hover:text-white transition-colors duration-200 z-50"
              aria-label="Close image"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full rounded-2xl overflow-hidden border border-[#C9A84C]/30 shadow-[0_0_50px_rgba(201,168,76,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="عرض الصورة بالتفصيل الدقيق - مطعم القيصر"
                fill
                sizes="(max-width: 1280px) 90vw, 1200px"
                placeholder="blur"
                blurDataURL={GOLD_BLUR_DATA_URL}
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
