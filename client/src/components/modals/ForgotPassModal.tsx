import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
// import RequestOtp from "../auth/forgotpassword/RequestOtp";
import { closeForgotPassModal } from "../../slices/forgotPassSlice";
// import VerifyOtp from "../auth/forgotpassword/VerifyOtp";
import SetNewPassword from "../auth/forgotpassword/SetNewPassword";
import RequestOtp from "../auth/forgotpassword/RequestOtp";
import VerifyOtp from "../auth/forgotpassword/VerifyOtp";

export default function ForgotPasswordModal() {
  const dispatch: AppDispatch = useDispatch();

  const { isOpen, formStepNumber } = useSelector(
    (state: RootState) => state.forgotPassword
  );
  // const { stepNumber } = useSelector(
  //   (state: RootState) => state.resetPassMultiForm
  // );

  const handleClose = () => dispatch(closeForgotPassModal());

  return (
    <Modal centered show={isOpen} onHide={handleClose}>
      <Modal.Body>
        {formStepNumber === 1 && <RequestOtp />}
        {formStepNumber === 2 && <VerifyOtp />}
        {formStepNumber === 3 && <SetNewPassword />}
      </Modal.Body>
    </Modal>
  );
}
