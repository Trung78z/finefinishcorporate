"use client";

import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";
import { postMailService } from "@/services/mailService";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  content: z
    .string()
    .min(1, { message: "Content is required" })
    .max(500, { message: "Content max length 500 character" }),
});

const Form = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const resData = await postMailService(data);
      if (!resData.data.success) {
        setLoading(false);

        return Swal.fire({
          title: "Có lỗi xảy ra!",
          icon: "error",
          text: resData.data.message,
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
      setLoading(false);

      Swal.fire({
        title: "Liên hệ thành công!",
        icon: "success",
        text: `Liên hệthành công!`,
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
      setLoading(false);

      return Swal.fire({
        title: "Có lỗi xảy ra!",
        icon: "error",
        text: error?.response?.data?.message || "Đã có lỗi xảy ra!",
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
  };
  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
      {/* input */}
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" {...register("name")} />
        <User className="absolute right-6" size={20} />{" "}
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          placeholder="Email"
          {...register("email")}
        />
        <MailIcon className="absolute right-6" size={20} />{" "}
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      {/* textarea */}
      <div className="relative flex items-center">
        <Textarea
          placeholder="Type Your Message Here."
          {...register("content")}
        />
        <MessageSquare className="absolute right-6 top-4" size={20} />{" "}
        {errors.content && <span>{errors.content.message}</span>}
      </div>

      <Button
        className="flex max-w-[166px] items-center gap-x-1"
        disabled={loading}
      >
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
