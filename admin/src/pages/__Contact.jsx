import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useAppDispatch, useAppSelector } from "@/hooks/hook-redux";
import { formatContent } from "@/lib/utils";
import { useEffect } from "react";

import Swal from "sweetalert2";

import { deleteMail, getMail } from "@/features/mail/mailSlice";
import { RiDeleteBin2Fill } from "react-icons/ri";

export default function Contact() {
  const { data } = useAppSelector((state) => state.mail);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMail());
  }, [dispatch]);

  const handleDeleteCategory = async (id) => {
    try {
      const res = await dispatch(deleteMail(id));

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
        text: `Xóa Contact thành công!`,
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
  return (
    <div className="p-4">
      <div className="max-h-[70vh] min-h-[70vh] overflow-y-auto">
        <Table className="min-w-full bg-background">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[20px]">STT</TableHead>
              <TableHead className="w-[200px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Content</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{formatContent(item.name, 40)}</TableCell>
                <TableCell>{formatContent(item.email, 40)}</TableCell>
                <TableCell>{formatContent(item.content, 400)}</TableCell>

                <TableCell className="flex items-center">
                  <RiDeleteBin2Fill
                    className="h-5 w-5 cursor-pointer text-red-500 hover:text-red-600"
                    onClick={() => handleDeleteCategory(item.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
