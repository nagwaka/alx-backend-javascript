export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const studentsInCity = listOfStudents.filter((student) => student.location === city);
  const updatedStudents = studentsInCity.map((student) => {
    const grades = newGrades.find((grade) => grade.studentId === student.id);
    if (grades) {
      return { ...student, grade: grades.grade };
    }
    return { ...student, grade: 'N/A' };
  });
  return updatedStudents;
}
