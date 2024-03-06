export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';
  for (const employeeName of reportWithIterator) {
    employeeNames += `${employeeName} | `;
  }
  // Remove the trailing space and pipe characters
  return employeeNames.slice(0, -2);
}
