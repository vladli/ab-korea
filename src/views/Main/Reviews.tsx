import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
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

function Video() {
  const { data } = useSWR<VideoType>("/api/youtube/getReviews");

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      slidesPerView={1}
    >
      {data?.items.map(({ id, snippet }) => {
        const {
          resourceId: { videoId },
        } = snippet;

        return (
          <SwiperSlide
            className="select-none"
            key={id}
          >
            <ReactPlayer
              controls
              url={`https://www.youtube.com/watch?v=${videoId}`}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Video;
