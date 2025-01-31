import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { toggleCloseInvoiceModal } from "../../slices/invoice/closeInvoiceSlice";
import CloseInvoice from "../closeInvoice/CloseInvoice";
import { resetPaymentForm } from "../../slices/invoice/invoicePaymentData";

export default function CloseInvoiceModal() {
  const { closeInvoiceModalState } = useSelector(
    (state: RootState) => state.toggleInvoicePaymentModal
  );
  const dispatch: AppDispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleCloseInvoiceModal());
    dispatch(resetPaymentForm());
  };

  return (
    <Modal
      centered
      show={closeInvoiceModalState}
      onHide={handleClose}
      size="xl"
    >
      <Modal.Body>
        <CloseInvoice />
      </Modal.Body>
    </Modal>
  );
}
