const Practices = () => {
  const students = [1];

  return (
    <div>
      <p> {!students.length && "No students found"} </p>
      <p>Number of students: {students.length}</p>
    </div>
  );
};

export default Practices;
