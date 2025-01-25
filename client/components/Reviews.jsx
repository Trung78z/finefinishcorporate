"use client";

import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Columbia - USA",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Cortec - USA",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Kemia - Singapore",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "FenFan - CHINA",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Luvita - JAPAN",
  },
];

const Reviews = () => {
  return (
    <section className="dark:bg-background">
      <div className="mb-12 xl:mb-32">
        <div className="container mx-auto">
          <h2 className="section-title mx-auto mb-12 text-center">
            Đơn vị liên kết
          </h2>
          {/* slider */}
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1400: { slidesPerView: 3 },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            // className="h-[350px]"
          >
            {reviewsData.map((person, index) => {
              return (
                <SwiperSlide key={index}>
                  <Card className="bg-tertiary p-4 dark:bg-secondary/40">
                    <CardHeader className="mb-6 p-0">
                      <div className="flex items-center justify-center gap-x-4">
                        {/* image */}
                        <Image
                          src={person.avatar}
                          width={70}
                          height={70}
                          alt=""
                          priority
                        />
                        {/* name */}
                        <div className="flex flex-col">
                          <CardTitle>{person.name}</CardTitle>
                          <p>{person.job}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardDescription className="text-lg text-muted-foreground">
                      {person.review}
                    </CardDescription>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
