import useData from "./useData";

interface Instructor {
    name: string;
    dep: string;
}

const useInstructorsList = () =>  useData<Instructor>('/instructor');

export default useInstructorsList;