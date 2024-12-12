
import { useDispatch } from "react-redux";
import { goBack } from "../slices/invoice/invoiceFormSteps";
import { AppDispatch } from "../store";

export const goOneStepBack = () => {
    const dispatch: AppDispatch = useDispatch();
    dispatch(goBack());
}