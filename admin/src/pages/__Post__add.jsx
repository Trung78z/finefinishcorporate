import TextEditor from "@/components/TextEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AiOutlineUpload } from "react-icons/ai";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { addPost } from "@/features/post/postSlice";
import { useAppSelector } from "@/hooks/hook-redux";
const schema = z.object({
  title: z.string().min(6, "Tiêu đề phải có ít nhất 6 ký tự"),
  description: z.string().min(6, "Bài viết phải có ít nhất 100 ký tự"),
  author: z.string().min(6, "Người viết phải có ít nhất 1 ký tự"),
  categoryId: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Category ID phải là một số nguyên hợp lệ và lớn hơn 0",
    })
    .transform((val) => Number(val)),

  image: z
    .instanceof(File)
    .refine(
      (file) => {
        return (
          file.type === "image/png" ||
          file.type === "image/jpeg" ||
          file.type === "image/jpg"
        );
      },
      {
        message: "Chỉ chấp nhận ảnh PNG, JPG, JPEG",
      },
    )
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "Kích thước tệp phải nhỏ hơn 5MB",
    }),
});
export default function PostAdd() {
  const { loading } = useAppSelector((state) => state.post);
  const [valueEditor, setValueEditor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setValue("description", valueEditor);
  }, [setValue, valueEditor]);
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("content", valueEditor);
      formData.append("image", data.image);
      formData.append("description", valueEditor);
      formData.append("categoryId", Number(data.categoryId));
      formData.append("author", data.author);

      const response = await dispatch(addPost(formData));
      console.log(response);
      if (response.error) {
        Swal.fire({
          title: "Error",
          text: response.payload,
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "Success",
          text: "Post created successfully",
          icon: "success",
        });
      }
      navigate("/posts");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("image", file);
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  return (
    <div className="content-scroll overflow-y-auto px-2 sm:px-10 xl:max-h-[85vh] xl:min-h-[85vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-2 pt-4 sm:grid-cols-2 sm:gap-10"
      >
        <div className="col-span-2 w-full flex-shrink-0 sm:col-span-1">
          <Input placeholder="Enter title" {...register("title")}></Input>
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div className="col-span-2 grid w-full grid-cols-1 gap-2 sm:col-span-1 sm:grid-cols-2 sm:gap-4">
          <div className="col-span-1">
            <Input
              placeholder="Enter author"
              {...register("author")}
              type="text"
            ></Input>
            {errors.author && (
              <p className="text-red-500">{errors.author.message}</p>
            )}
          </div>{" "}
          <div className="col-span-1">
            <Input
              placeholder="Enter categoryId"
              {...register("categoryId")}
              type="text"
            ></Input>
            {errors.categoryId && (
              <p className="text-red-500">{errors.categoryId.message}</p>
            )}
          </div>
        </div>

        <div className="col-span-2">
          <div className="flex flex-col items-center justify-center p-4">
            <label className="w-full max-w-xs cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-4 text-center transition hover:bg-gray-100">
              <AiOutlineUpload className="mx-auto mb-2 text-4xl text-gray-500" />
              <span className="block text-gray-700">
                Click to upload image (PNG, JPG, JPEG)
              </span>
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleImageChange}
                className="hidden"
              />
              {errors.image && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.image.message}
                </p>
              )}
            </label>
            {preview && (
              <div className="mt-4">
                <img
                  src={preview}
                  alt="Image Preview"
                  className="h-auto rounded-lg border-2 border-gray-300 sm:max-w-5xl"
                />
              </div>
            )}
          </div>
        </div>

        <div className="sm:col-span-2">
          <TextEditor value={valueEditor} setValue={setValueEditor} />
          {errors.description && (
            <p className="mt-1 text-sm text-red-500">
              {errors.description.message}
            </p>
          )}
        </div>
        <div className="col-span-2 flex w-full items-center justify-end">
          <Button
            className="bg-[#2D88D4] hover:bg-[#2D88D4]/80"
            disable={loading}
          >
            Tạo bài viết
          </Button>
        </div>
      </form>
    </div>
  );
}
