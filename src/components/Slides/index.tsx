"use client";

import type { LoaderProps, SlideProps } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

function loaderImage({ src, width }: LoaderProps) {
  return `${src}?w=${width}`;
}

function Slides() {
  const [slides, setSlides] = useState<SlideProps[]>([]);

  useEffect(() => {
    async function getSlides() {
      try {
        const response = await fetch("http://localhost:3000/api/slides");
        const data = await response.json();
        setSlides(data);
      } catch (error) {
        console.error(error);
      }
    }

    getSlides();
  });
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={100}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <Image
              loader={loaderImage}
              src={slide.url}
              alt={slide.alt}
              width={350}
              height={300}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-center">
              <h2 className="text-lg font-bold">{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export { Slides };
