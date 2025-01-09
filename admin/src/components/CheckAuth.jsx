import { checkAuth } from "@/features/auth/authSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CheckAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { check } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  useEffect(() => {
    if (check) {
      navigate("/");
    } else {
      navigate("/dang-nhap");
    }
  }, [check]);
  console.log(check);
  return null;
}
