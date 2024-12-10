import { FcList, FcSettings } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { setHeroScreenState } from "../../slices/heroSectionScreen";
import { setStepNumber } from "../../slices/invoiceFormSteps";

export default function InvoiceSubmenuItem() {
  const dispatch: AppDispatch = useDispatch();

  return (
    <ul style={{ listStyle: "none" }}>
      <li className="py-2">
        <a
          href="#"
          className="d-flex align-items-center gap-2 link-dark text-decoration-none"
          onClick={() => {
            dispatch(setHeroScreenState(2));
            dispatch(setStepNumber(1));
          }}
        >
          <FcSettings />
          <small>Generate invoice</small>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="d-flex align-items-center gap-2 link-dark text-decoration-none"
          onClick={() => dispatch(setHeroScreenState(3))}
        >
          <FcList />
          <small>Manage invoices</small>
        </a>
      </li>
    </ul>
  );
}
