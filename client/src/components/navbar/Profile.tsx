import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function Profile() {
  const { activeUser } = useSelector((store: RootState) => store.activeUser);

  return (
    <div className="d-none d-lg-flex align-items-center gap-2">
      <div className="text-end">
        <small>{activeUser?.username}</small>
        <br />
        <small>admin</small>
      </div>
      <div style={{ width: "50px", height: "50px", borderRadius: "50%" }}>
        <img
          src="src\assets\passport.jpg"
          alt="profile-pic"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
}
