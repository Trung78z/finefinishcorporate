"use client";
import React, { useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { usePathname } from "next/navigation";
import { getCategoryID } from "@/features/category/categorySlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hook-redux";

const Projects = () => {
  const pathname = usePathname().split("/")[2];
  const { loading, data, error } = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategoryID(pathname));
  }, [dispatch]);

  return (
    <section className="min-h-screen pt-12 dark:bg-background">
      <div className="container mx-auto dark:bg-secondary/40">
        <h2 className="section-title mx-auto mb-8 text-center xl:mb-16">
          Tin tuc
        </h2>
        <div className="mb-24 xl:mb-48">
          <div className="grid grid-cols-1 gap-4 text-lg lg:grid-cols-3 xl:mt-8">
            {data?.length > 0 ? (
              data.map((project, index) => {
                return <ProjectCard project={project} key={project.id} />;
              })
            ) : (
              <div className="col-span-full rounded-md p-4 text-center font-bold text-red-500 shadow-md">
                <p>
                  Hiện tại chưa có bài viết nào. Hãy quay lại sau hoặc thêm bài
                  viết mới!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
