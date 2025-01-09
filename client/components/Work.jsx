"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import ProjectCard from "@/components/ProjectCard";
import { useAppDispatch, useAppSelector } from "@/hooks/hook-redux";
import { useEffect } from "react";
import { getPost } from "@/features/post/postSlice";
import { getRandomItems } from "@/lib/utils";

const Work = () => {
  const { data } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
  const dataFilter = data.filter((item) => item.outstanding == true);
  const shuffle = getRandomItems(dataFilter, 6);
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 flex max-w-[400px] flex-col items-center justify-center text-center xl:mx-0 xl:h-[400px] xl:items-start xl:text-left">
          <h2 className="section-title mb-4">Tin tức nổi bật</h2>
          <p className="subtitle mb-8">
            Cập nhật xu hướng mới trong xử lý bề mặt kim loại!
          </p>
          {/* <Link href="/projects">
            <Button>All projects</Button>
          </Link> */}
        </div>
        {/* slider */}
        <div className="right-0 top-0 xl:absolute xl:max-w-[1000px]">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {shuffle.map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
