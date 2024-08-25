import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { closeClientRegmodal } from "../../slices/clientreg";
import RegisterClient from "../customer/RegisterClient";

export default function ClientModal() {
  const { isOpen } = useSelector((state: RootState) => state.toggleClientReg);
  const dispatch: AppDispatch = useDispatch();

  const handleClose = () => dispatch(closeClientRegmodal());

  return (
    <Modal centered show={isOpen} onHide={handleClose}>
      <Modal.Body>
        <RegisterClient />
      </Modal.Body>
    </Modal>
  );
}
