import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { login } from "@/features/auth/authSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { z } from "zod";
const loginSchema = z.object({
  username: z.string().min(1, "Vui lòng nhập username"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const onSubmit = async (data) => {
    try {
      const res = await dispatch(login(data));

      if (res.meta.requestStatus === "fulfilled") {
        Swal.fire({
          icon: "success",
          html: `Đăng nhập thành công!`,
          showConfirmButton: false,
          timer: 1500,
        });
        sessionStorage.setItem("accessToken", res.payload.accessToken);
        return navigate("/");
      } else {
        return Swal.fire({
          icon: "error",
          html: `${res.payload}`,
          showConfirmButton: false,
          timer: 3000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="mx-auto flex items-center justify-center">
        <div className="flex h-full flex-col justify-around bg-background p-4 md:p-20">
          <h1 className="text-primary-500 text-center text-[36px] font-semibold">
            Chào mừng, Đăng nhập vào tài khoản của bạn
          </h1>
          <div className="mx-auto mt-10 flex max-w-72 flex-col items-center justify-center gap-y-4 md:mt-40">
            <h2 className="text-center text-[16px] font-medium">
              Chúng tôi rất vui mừng khi có bạn trên tàu!
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full space-y-5"
            >
              <div className="w-full">
                <Input
                  placeholder="Enter Username"
                  {...register("username")}
                ></Input>
                {errors.username && (
                  <p className="text-red-500">{errors.username.message}</p>
                )}
              </div>
              <div className="w-full">
                {" "}
                <Input
                  placeholder="Enter Password"
                  {...register("password")}
                  type="password"
                ></Input>{" "}
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <Button
                disabled={loading}
                className="w-full bg-[#2D88D4] hover:bg-[#2D88D4]/80"
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
