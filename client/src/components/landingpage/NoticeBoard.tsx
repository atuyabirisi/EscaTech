export default function NoticeBoard() {
  return (
    <div className="rounded bg-light p-2">
      <div className="border-bottom py-3 text-center">
        <h6>OFFICIAL NOTICE BOARD</h6>
      </div>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="col-lg-3">Tittle</th>
              <th className="col-lg-9">Notice</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>College Email Issues</td>
              <td>
                For all college email issues please email to support@rtvc.ac.ke
              </td>
            </tr>
            <tr>
              <td>Finance queries support</td>
              <td>
                Communicate any issue concerning finance via the student finance
                e-mail sfoffice@rtvc.ac.ke, studentfinanceoffice@rtvc.ac.ke,
                sfo@rtvc.ac.ke
              </td>
            </tr>
            <tr>
              <td>E-Learning support </td>
              <td>
                For any problems with the elaerning platform, courses, online
                learning and online exams please email
                elearningsupport@ueab.ac.ke
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
