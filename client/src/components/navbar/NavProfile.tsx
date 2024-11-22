export default function NavProfile() {
  return (
    <div className="d-none d-lg-flex align-items-center gap-2">
      <div className="text-end">
        <small>{`atuya birisi`}</small>
        <br />
        <small>admin</small>
      </div>
      <div style={{ width: "50px", height: "50px", borderRadius: "50%" }}>
        <img
          src="src\assets\profile.png"
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
