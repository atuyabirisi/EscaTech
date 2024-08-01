import useData from "./useData";

export interface Course {
    name: string;
}

const useCourseList = () =>  useData<Course>('/courses');

export default useCourseList;