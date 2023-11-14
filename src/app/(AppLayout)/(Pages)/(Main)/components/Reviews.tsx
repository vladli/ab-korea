"use client";
import React from "react";
import { Autoplay, EffectCreative, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";

type VideoType = {
  items: {
    id: string;
    snippet: {
      title: string;
      resourceId: {
        videoId: string;
      };
    };
  }[];
};

function Reviews() {
  const { data } = useSWR<VideoType>("/api/youtube/getReviews");

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <section>
      <div className="mb-10 text-center">
        <h2>ОТЗЫВЫ О НАС</h2>
      </div>
      <Swiper
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        creativeEffect={{
          prev: {
            shadow: false,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        effect={"coverflow"}
        modules={[Navigation, Autoplay, EffectCreative]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        slidesPerView={"auto"}
      >
        {data?.items.map(({ id, snippet }) => {
          const {
            resourceId: { videoId },
          } = snippet;

          return (
            <SwiperSlide key={id}>
              <div className="flex select-none justify-center">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-[50vh] w-[80vw]"
                  src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                  title="Embedded youtube"
                />
              </div>
            </SwiperSlide>
          );
        })}
        <div className="mt-2 flex justify-center">
          <div
            className="btn-ghost btn-wide btn"
            ref={navigationPrevRef}
          >
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            </svg>
          </div>
          <div
            className="btn-ghost btn-wide btn"
            ref={navigationNextRef}
          >
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </div>
        </div>
      </Swiper>
    </section>
  );
}

export default Reviews;
