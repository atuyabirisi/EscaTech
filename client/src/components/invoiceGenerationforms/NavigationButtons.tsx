import { FcAdvance, FcDownLeft } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { goBack, setStepNumber } from "../../slices/invoice/invoiceFormSteps";

interface Props {
  nextNumber: number;
}

export default function NavigationButtons({ nextNumber }: Props) {
  const dispatch: AppDispatch = useDispatch();

  const goOneStepBack = () => dispatch(goBack());

  const advance = () => dispatch(setStepNumber(nextNumber));
  return (
    <div className="card-footer d-flex justify-content-end gap-3">
      <button className="btn btn-danger" onClick={goOneStepBack}>
        <span className="px-2">
          <FcDownLeft />
        </span>
        Go Back
      </button>
      <button className="btn btn-danger" onClick={advance}>
        Next
        <span className="px-2">
          <FcAdvance />
        </span>
      </button>
    </div>
  );
}
