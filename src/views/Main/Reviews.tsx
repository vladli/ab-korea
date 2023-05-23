import React, { useEffect, useRef } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import ReactPlayer from "react-player/youtube";
import { Autoplay, EffectCreative, Navigation, Pagination } from "swiper";
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
    <Swiper
      autoplay={{
        delay: 3500,
        disableOnInteraction: true,
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
      loop={true}
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
                height="480"
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                title="Embedded youtube"
                width="853"
              />
            </div>
          </SwiperSlide>
        );
      })}
      <div className="flex justify-center ">
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
  );
}

export default Reviews;
