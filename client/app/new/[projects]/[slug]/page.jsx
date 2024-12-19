"use client";
import AddComment from "@/components/news/AddComment";
import CardComment from "@/components/news/CardComment";
import CardPost from "@/components/news/CardPost";
import { Button } from "@/components/ui/button";
import { getPost, getPostID } from "@/features/post/postSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hook-redux";
import { API_URL } from "@/services/apiService";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function page() {
  const pathname = usePathname();

  const slug = pathname.split("/")[2];
  const category = pathname.split("/")[3];
  const navigate = useRouter();
  const { loading, data, dataID, error } = useAppSelector(
    (state) => state.post,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostID({ slug, category }));
    dispatch(getPost());
  }, [dispatch]);

  const handleToBack = () => {
    navigate.push(`/new/${category}`);
  };

  return (
    <>
      {error !== undefined ? (
        <div className="container min-h-screen px-2 pb-10">
          <div className="grid grid-cols-1 gap-y-6 sm:gap-6 md:grid-cols-12">
            <div className="col-span-1 space-y-6 md:col-span-9">
              <div className="bg-slate-100 p-2 sm:p-4">
                <h1 className="text-3xl font-medium">{dataID.title}</h1>
                <div className="item__image translate-y-10">
                  <img
                    className="item__image--src"
                    src={`${API_URL}/api/image/${dataID?.image}`}
                    alt={dataID.title}
                  />
                </div>
              </div>
              <div className="pt-4">
                <ul className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap md:gap-10">
                  <li className="flex items-center gap-x-2">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.53125 2.5H10.4688V1.40625C10.4688 1.05078 10.7422 0.75 11.125 0.75C11.4805 0.75 11.7812 1.05078 11.7812 1.40625V2.5H12.875C13.832 2.5 14.625 3.29297 14.625 4.25V13C14.625 13.9844 13.832 14.75 12.875 14.75H4.125C3.14062 14.75 2.375 13.9844 2.375 13V4.25C2.375 3.29297 3.14062 2.5 4.125 2.5H5.21875V1.40625C5.21875 1.05078 5.49219 0.75 5.875 0.75C6.23047 0.75 6.53125 1.05078 6.53125 1.40625V2.5ZM3.6875 13C3.6875 13.2461 3.87891 13.4375 4.125 13.4375H12.875C13.0938 13.4375 13.3125 13.2461 13.3125 13V6H3.6875V13Z"
                        fill="#3E3232"
                        fillOpacity="0.5"
                      />
                    </svg>
                    {new Date(dataID?.updatedAt).toLocaleDateString("vi-VN")}
                  </li>
                  <li className="flex items-center gap-x-2">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.4375 6.4375C4.94531 6.4375 4.5625 6.84766 4.5625 7.3125C4.5625 7.80469 4.94531 8.1875 5.4375 8.1875C5.90234 8.1875 6.28516 7.80469 6.28516 7.3125C6.28516 6.84766 5.90234 6.4375 5.4375 6.4375ZM8.5 6.4375C8.00781 6.4375 7.625 6.82031 7.625 7.3125C7.625 7.77734 8.03516 8.16016 8.5 8.16016C8.9375 8.16016 9.34766 7.75 9.34766 7.3125C9.34766 6.84766 8.96484 6.4375 8.5 6.4375ZM11.5625 6.4375C11.0703 6.4375 10.6875 6.84766 10.6875 7.3125C10.6875 7.80469 11.0977 8.1875 11.5625 8.1875C12.0273 8.1875 12.4102 7.80469 12.4102 7.3125C12.4375 6.84766 12.0273 6.4375 11.5625 6.4375ZM8.5 1.625C4.61719 1.625 1.5 4.16797 1.5 7.3125C1.5 8.59766 2.04688 9.80078 2.94922 10.7578C2.53906 11.8242 1.69141 12.7539 1.69141 12.7539C1.5 12.9453 1.47266 13.2188 1.55469 13.4648C1.63672 13.7383 1.88281 13.875 2.15625 13.875C3.82422 13.875 5.13672 13.1914 5.95703 12.6172C6.72266 12.8633 7.59766 13 8.5 13C12.3555 13 15.4727 10.457 15.4727 7.33984C15.4727 4.22266 12.3555 1.625 8.5 1.625ZM8.5 11.6875C7.76172 11.6875 7.02344 11.5781 6.33984 11.3594L5.71094 11.168L5.19141 11.5508C4.80859 11.8242 4.26172 12.125 3.60547 12.3438C3.82422 12.0156 4.01562 11.6328 4.15234 11.25L4.45312 10.4844L3.87891 9.88281C3.38672 9.36328 2.8125 8.48828 2.8125 7.3125C2.8125 4.90625 5.35547 2.9375 8.47266 2.9375C11.5898 2.9375 14.1328 4.90625 14.1328 7.3125C14.1328 9.74609 11.6172 11.6875 8.5 11.6875Z"
                        fill="#3E3232"
                        fillOpacity="0.5"
                      />
                    </svg>
                    Comments : {dataID?._count?.comments}
                  </li>
                  <li className="flex items-center gap-x-2">
                    <svg
                      width="15"
                      height="13"
                      viewBox="0 0 15 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.7227 2.375H8.01953L6.67969 1.14453C6.35156 0.816406 5.91406 0.625 5.44922 0.625H2.22266C1.23828 0.625 0.472656 1.41797 0.472656 2.375V11.125C0.472656 12.1094 1.23828 12.875 2.22266 12.875H12.7227C13.6797 12.875 14.4727 12.1094 14.4727 11.125V4.125C14.4727 3.16797 13.707 2.375 12.7227 2.375ZM13.1602 11.125C13.1602 11.3711 12.9414 11.5625 12.7227 11.5625H2.22266C1.97656 11.5625 1.78516 11.3711 1.78516 11.125V2.375C1.78516 2.15625 1.97656 1.9375 2.22266 1.9375H5.42188C5.53125 1.9375 5.64062 1.99219 5.72266 2.07422L7.47266 3.6875H12.7227C12.9414 3.6875 13.1602 3.90625 13.1602 4.125V11.125Z"
                        fill="#3E3232"
                        fillOpacity="0.5"
                      />
                    </svg>
                    Category : {dataID?.category?.name}
                  </li>
                </ul>
              </div>
              <div
                className="space-y-3"
                dangerouslySetInnerHTML={{ __html: dataID?.description }}
              ></div>
              <div>
                <h3 className="text-lg font-medium">Comments</h3>
                <ul className="space-y-6">
                  {console.log(dataID?.comments)}
                  {dataID?.comments?.length > 0 &&
                    dataID.comments.map((item, index) => (
                      <li key={index}>
                        <CardComment props={item} />
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium">Add a comment</h3>
                <ul className="space-y-6">
                  <AddComment postId={dataID.id} error={error} />
                </ul>
              </div>
            </div>
            <div className="col-span-3 space-y-6">
              <div className="rounded-lg bg-[#F5F5F5] p-2">
                <h2 className="text-xl font-semibold">Top post</h2>
                <ul className="space-y-6 pt-2">
                  {data.map((_, index) => (
                    <li key={index}>
                      <CardPost item={_} />
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="rounded-lg bg-[#F5F5F5] p-2">
                <h2 className="text-xl font-semibold">New post</h2>
                <ul className="space-y-6 pt-2">
                  {dataIDPost.map((_, index) => (
                    <li key={index}>
                      <CardPost item={_} />
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex min-h-[80vh] items-center justify-center">
          <h2>Không tồn tài bài viết này</h2>
          <Button onClick={handleToBack}>Trở lại</Button>
        </div>
      )}
    </>
  );
}
