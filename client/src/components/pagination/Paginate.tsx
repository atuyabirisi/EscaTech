import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { updatePageNumber } from "../../slices/pagination";

type Props = {
  noOfItems: number;
};

export default function Paginate({ noOfItems }: Props) {
  const dispatch: AppDispatch = useDispatch();

  const { postsPerPage, currentPage } = useSelector(
    (store: RootState) => store.paginationState
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(noOfItems / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  //   const previous = () => {
  //     if (currentPage === 1) return;
  //     dispatch(previousPage());
  //   };

  const updatePageNo = (pageNumber: number) => {
    return () => dispatch(updatePageNumber(pageNumber));
  };

  return (
    <div className="">
      <ul className="pagination">
        {pageNumbers.map((PageNumber) => (
          <li key={PageNumber} className="page-item">
            <a
              href="#"
              className={
                currentPage === PageNumber
                  ? "page-link link-dark bg-light"
                  : "page-link link-dark"
              }
              onClick={updatePageNo(PageNumber)}
            >
              {PageNumber}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
