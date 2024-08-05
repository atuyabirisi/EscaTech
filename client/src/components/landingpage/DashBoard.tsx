import GraphAnalytics from "./GraphAnalytics";
import NoticeBoard from "./NoticeBoard";
import RegistrationStatus from "./RegistrationStatus";
import Sidepanel from "./Sidepanel";

export default function DashBoard() {
  return (
    <div className="row p-3">
      <div className="col-2">
        <Sidepanel />
      </div>
      <div className="col-8">
        <NoticeBoard />
        <RegistrationStatus />
      </div>
      <div className="col-2">
        <GraphAnalytics />
      </div>
    </div>
  );
}

{
  /* <div className="row mx-1 my-3"> */
}
// <div className="col-lg-2 rounded">
{
  /* <Sidepanel /> */
}
{
  /* <h5>Box 1</h5> */
}
{
  /* </div> */
}
{
  /* <div className="col-lg-8 rounded mx-1 p-2 bg-warning"> */
}
{
  /* <NoticeBoard />
        <RegistrationStatus /> */
}
{
  /* <h5>Box 2</h5> */
}
{
  /* </div> */
}
{
  /* <div className="col-lg-2 rounded"> */
}
{
  /* <Sidepanel /> */
}
{
  /* <h5>Box 1</h5> */
}
{
  /* </div> */
}
{
  /* </div> */
}
