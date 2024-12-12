import { FormData } from "../components/manageInvoices/GeneratedInvoicesTable";

export const useDashBoardCalculations = (data: FormData[]) => {
    let openInvoicesArray = [];
    for (let index = 0; index < data.length; index++) {
      if (data[index].status == "open") openInvoicesArray.push(data[index]);
    }

    const noOfOpenInvoices =  openInvoicesArray.length;

    let openInvoicesAmounts = [];
    for (let index = 0; index < data.length; index++) 
      if (data[index].status == "open") 
        openInvoicesAmounts.push(data[index].grandTotal);
    

    const totalDueAmount = openInvoicesAmounts.reduce(function (value, currentitem) {
      return value + currentitem;
    }, 0);
    
    let totalSales = [];
    for (let index = 0; index < data.length; index++)
        totalSales.push(data[index].grandTotal);
    

    const totalSalesAmount = totalSales.reduce(function (value, currentitem) {
      return value + currentitem;
    }, 0);

    return { noOfOpenInvoices, totalDueAmount, totalSalesAmount }
}