"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";
import { useAppDispatch, useAppSelector } from "@/hooks/hook-redux";
import { useEffect } from "react";
import { getPost } from "@/features/post/postSlice";

const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Solstice Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Lumina Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "Evolve Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Ignite Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Envision Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "Serenity Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "fullstack",
    name: "Nova Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "fullstack",
    name: "Zenith Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  const { loading, data, dataID, error } = useAppSelector(
    (state) => state.post,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
  console.log(data);
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="mx-auto mb-12 flex max-w-[400px] flex-col items-center justify-center text-center xl:mx-0 xl:h-[400px] xl:items-start xl:text-left">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
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
            {/* show only the first 4 projects for the slides */}
            {data.slice(0, 4).map((project, index) => {
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
