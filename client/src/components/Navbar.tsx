export default function Navbar() {
  return (
    <div className="d-flex justify-content-between bg-light p-2 mx-1">
      <div className="text-center d-flex gap-2">
        <div style={{ width: "45px", height: "45px" }}>
          <img
            src="src\assets\logo.jpg"
            alt="logo"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <h5>
          Riragia Technical and Vocational College
          <br /> Academic Information system
        </h5>
      </div>
      <div className="d-flex align-items-center gap-2">
        <div className="text-center">
          <h6>
            <i>
              Atuya Birisi.H <br /> Dean Academics
            </i>
          </h6>
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
    </div>
  );
}
