import { PropsWithChildren, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchSignedInUser } from "../../slices/activeUser";
import { useNavigate } from "react-router-dom";

type Props = PropsWithChildren;

export default function ProtectedRoute({ children }: Props) {
  const { status } = useSelector((store: RootState) => store.activeUser);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "idle") dispatch(fetchSignedInUser());
  }, [status, dispatch]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) navigate("/", { replace: true });
  }, []);
  return children;
}
