export default function createIteratorObject(report) {
  const employeeArr = [];
  for (const item of Object.values(report.allEmployees)) {
    employeeArr.push(...item);
  }

  return employeeArr;
}
