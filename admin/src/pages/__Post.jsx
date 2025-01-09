import { Button } from "@/components/ui/button";
import { FaCommentDots } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deletePost, editPost, getPost } from "@/features/post/postSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hook-redux";
import { formatContent } from "@/lib/utils";
import { useEffect } from "react";
import { MdEditDocument } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Post() {
  const { loading, data } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  const handleDeletePost = async (id) => {
    try {
      const res = await dispatch(deletePost(id));

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
        title: "Xóa thành công!",
        icon: "success",
        text: `Xóa category thành công!`,
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
    } catch (error) {
      console.error(error);
    }
  };

  const handleNavigate = () => {
    navigate("/posts/add");
  };

  const handleChangeStatus = async (data) => {
    data = { ...data, status: data.status == false ? true : false };
    try {
      await dispatch(editPost({ id: data.id, post: data }));
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeOutstanding = async (data) => {
    data = { ...data, outstanding: data.outstanding == false ? true : false };
    try {
      await dispatch(editPost({ id: data.id, post: data }));
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditPost = (id) => {
    navigate(`/posts/edit/${id}`);
  };
  const handleCheckCommentPost = (id) => {
    navigate(`/posts/comment/${id}`);
  };
  return (
    <div className="space-y-4 p-4 sm:p-4">
      <div className="content-scroll overflow-y-auto xl:max-h-[78vh] 2xl:max-h-[78vh] 2xl:min-h-[78vh]">
        <Table className="max-h-[100vh] min-w-full bg-background">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[10px]">STT</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Public</TableHead>
              <TableHead>Outstanding</TableHead>
              <TableHead>Body</TableHead>
              <TableHead>UpdatedAt</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{formatContent(item.title, 40)}</TableCell>
                <TableCell>{item.category.name}</TableCell>
                <TableCell>
                  <button onClick={() => handleChangeStatus(item)}>
                    <input
                      type="checkbox"
                      checked={item.status}
                      className="form-checkbox h-4 w-4 cursor-pointer rounded-lg border-gray-400 bg-gray-200 text-green-500 transition duration-200 ease-in-out focus:ring-2 focus:ring-green-400"
                    />
                  </button>
                </TableCell>
                <TableCell>
                  <button onClick={() => handleChangeOutstanding(item)}>
                    <input
                      type="checkbox"
                      checked={item.outstanding}
                      className="form-checkbox h-4 w-4 cursor-pointer rounded-lg border-gray-400 bg-gray-200 text-green-500 transition duration-200 ease-in-out focus:ring-2 focus:ring-green-400"
                    />
                  </button>
                </TableCell>
                <TableCell>{formatContent(item.description, 40)}</TableCell>
                <TableCell>
                  {new Date(item.updatedAt).toLocaleString("vi-VN")}
                </TableCell>
                <TableCell className="flex items-center">
                  <button onClick={() => handleCheckCommentPost(item.id)}>
                    <FaCommentDots className="h-5 w-5 text-blue-500" />
                  </button>
                  <button
                    disabled={loading}
                    onClick={() => {
                      handleEditPost(item.id);
                    }}
                  >
                    <MdEditDocument className="h-5 w-5 cursor-pointer text-green-500 hover:text-green-600" />
                  </button>

                  <button disabled={loading}>
                    <RiDeleteBin2Fill
                      className="h-5 w-5 cursor-pointer text-red-500 hover:text-red-600"
                      onClick={() => handleDeletePost(item.id)}
                    />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={6}>Total</TableCell>
              <TableCell className="text-right">100 Bài viết</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>

      <Button
        className="bg-green-500 hover:bg-green-600"
        onClick={handleNavigate}
      >
        Thêm bài viết
      </Button>
    </div>
  );
}
