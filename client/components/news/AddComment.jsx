"use client";
import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAppDispatch, useAppSelector } from "@/hooks/hook-redux";
import { addComment } from "@/features/post/postSlice";
import Swal from "sweetalert2";
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  content: z.string().min(1, { message: "Content is required" }),
});
export default function AddComment({ postId }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });
  const { loading } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();

  const onSubmit = async (data) => {
    try {
      const res = await dispatch(addComment({ ...data, postId: postId }));

      if (res.error) {
        return Swal.fire({
          title: "Có lỗi xảy ra!",
          icon: "error",
          text: res.payload,
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
          background: "#f8d7da",
          color: "#721c24",
          position: "top-end",
          toast: true,
          customClass: {
            popup: "animated bounceInUp",
          },
        });
      }
      Swal.fire({
        title: "Thêm thành công!",
        icon: "success",
        text: `Thêm bình luận thành công!`,
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        background: "#d4edda",
        color: "#155724",
        position: "top-end",
        toast: true,
        customClass: {
          popup: "animated bounceInUp",
        },
      });
      reset();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form
        className="grid grid-cols-1 md:grid-cols-12 md:gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-span-1 space-y-6 md:col-span-5">
          <div>
            <label htmlFor="name">Name</label>
            <Input
              {...register("name")}
              type="text"
              className="rounded-lg px-2"
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Input
              {...register("email")}
              type="email"
              className="rounded-lg px-2"
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
        </div>
        <div className="col-span-1 md:col-span-7">
          <label htmlFor="content">Content</label>
          <Textarea {...register("content")} className="rounded-lg px-2" />
          {errors.content && <span>{errors.content.message}</span>}
        </div>
        <div className="col-span-1 flex items-center justify-end md:col-span-12">
          <Button
            className="flex max-w-[166px] items-center gap-x-1"
            disabled={loading}
          >
            Comment
            <ArrowRightIcon size={20} />
          </Button>
        </div>
      </form>
    </>
  );
}
