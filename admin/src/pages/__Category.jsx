import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  addCategory,
  deleteCategory,
  editCategory,
  getCategory,
} from "@/features/category/categorySlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hook-redux";
import { formatContent } from "@/lib/utils";
import { useEffect, useState } from "react";
import { MdEditDocument } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";

import Swal from "sweetalert2";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import PropTypes from "prop-types";
const schema = z.object({
  name: z.string().min(6, "Vui lòng nhập category"),
});

export default function Category() {
  const { loading, data } = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();
  const [openModal, setOpenModel] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  const onSubmit = async (data) => {
    try {
      const res = await dispatch(addCategory(data));
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
        text: `Thêm category thành công!`,
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
      setOpenModel(false);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      console.log(id);
      const res = await dispatch(deleteCategory(id));
      console.log(res);
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
  return (
    <div className="p-10">
      <div className="max-h-[70vh] min-h-[70vh] overflow-y-auto">
        <Table className="min-w-full bg-background">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[20px]">STT</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{formatContent(item.name, 40)}</TableCell>

                <TableCell className="flex items-center">
                  <EditCategory item={item} />
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

      <>
        <Dialog open={openModal}>
          <DialogTrigger>
            <Button
              className="bg-green-500 hover:bg-green-600"
              onClick={() => setOpenModel(true)}
            >
              Thêm Category
            </Button>
          </DialogTrigger>
          <DialogContent>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full space-y-5 pt-10"
            >
              <DialogHeader>
                <DialogTitle>Thêm category</DialogTitle>
                <DialogDescription className="pt-10">
                  <div className="w-full">
                    <Input
                      placeholder="Enter category"
                      {...register("name")}
                    ></Input>
                    {errors.name && (
                      <p className="text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="sm:justify-end">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => setOpenModel(false)}
                  >
                    Close
                  </Button>
                </DialogClose>
                <Button
                  disabled={loading}
                  className="bg-green-500 hover:bg-green-600"
                  type="submits"
                >
                  Thêm
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </>
    </div>
  );
}

function EditCategory({ item }) {
  console.log(item);
  const { loading } = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();
  const [openModal, setOpenModel] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
  });
  useEffect(() => {
    setValue("name", item.name);
  }, [item]);
  const onSubmit = async (data) => {
    try {
      const res = await dispatch(editCategory({ id: item.id, data }));
      console.log(res);
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
        title: "Sửa thành công!",
        icon: "success",
        text: `Sửa category thành công!`,
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
      setOpenModel(false);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <>
        <Dialog open={openModal} onOpenChange={(value) => setOpenModel(value)}>
          <DialogTrigger>
            <MdEditDocument
              className="h-5 w-5 cursor-pointer text-green-500 hover:text-green-600"
              onClick={() => setOpenModel(true)}
            />
          </DialogTrigger>
          <DialogContent>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full space-y-5 pt-10"
            >
              <DialogHeader>
                <DialogTitle>Thêm category</DialogTitle>
                <DialogDescription className="pt-10">
                  <div className="w-full">
                    <Input
                      placeholder="Enter category"
                      {...register("name")}
                    ></Input>
                    {errors.name && (
                      <p className="text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="sm:justify-end">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => setOpenModel(false)}
                  >
                    Close
                  </Button>
                </DialogClose>
                <Button
                  disabled={loading}
                  className="bg-green-500 hover:bg-green-600"
                  type="submits"
                >
                  Thêm
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </>
    </>
  );
}

EditCategory.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
