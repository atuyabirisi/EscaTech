import useData from "./useData";

export interface Department {
    code: string;
    name: string;
    hod: string;
    email: string;
    phone: string;
}

const useDepartmentList = () => useData<Department>('/department');

export default useDepartmentList;