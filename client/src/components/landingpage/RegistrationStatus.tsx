export default function RegistrationStatus() {
  return (
    <div className="rounded bg-light p-2 mt-3">
      <div className="text-center py-3 ">
        <h6>REGISTRATION STATUS</h6>
      </div>
      <div>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="col-lg-3">Semister</td>
              <td className="col-lg-9">2023/2024.2</td>
            </tr>
            <tr>
              <td>Start Date</td>
              <td>{Date.now()}</td>
            </tr>
            <tr>
              <td>End Date</td>
              <td>{Date.now()}</td>
            </tr>
            <tr>
              <td>Approved</td>
              <td>
                <p>true</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
