import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { toggleUpdateCustomer } from "../../slices/toggleUpdateCustomerModal"

export default function UpdateClientModal() {
  const { updateCustomerModalState } = useSelector((state: RootState) => state.updateCustomerModalState);

  const dispatch: AppDispatch = useDispatch();

  const handleClose = () => dispatch(toggleUpdateCustomer());

  return (
    <Modal centered show={updateCustomerModalState} onHide={handleClose}>
      <Modal.Body>
        <div>
            <h2>View and Update Customer Details</h2>
        </div>
      </Modal.Body>
    </Modal>
  );
}
