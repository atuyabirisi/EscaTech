import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { toggleCustomerRegModal } from "../../slices/customerRegSlice";
import RegisterCustomer from "../customers/RegisterCustomer";

export default function ClientModal() {
  const { modalState } = useSelector(
    (state: RootState) => state.toggleCustomerRegModal
  );
  const dispatch: AppDispatch = useDispatch();

  const handleClose = () => dispatch(toggleCustomerRegModal());

  return (
    <Modal centered show={modalState} onHide={handleClose}>
      <Modal.Body>
        <RegisterCustomer />
      </Modal.Body>
    </Modal>
  );
}
