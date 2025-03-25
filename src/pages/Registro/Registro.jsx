import React, { useState } from "react";
import "./Registro.css";

const Registro = () => {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [studentId, setStudentId] = useState("");

    const addStudent = () => {
        if (name.trim() === "" || studentId.trim() === "" || age.trim() === "") return;
        setStudents([...students, { id: studentId, name, age }]);
        setName("");
        setAge("");
        setStudentId("");
    };

    const deleteStudent = (id) => {
        setStudents(students.filter(student => student.id !== id));
    };

    return (
        <div className="registro-container">
            <h1>Registro de Estudiantes</h1>
            <div className="registro-input">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre"
                />
                <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Edad"
                />
                <input
                    type="text"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    placeholder="Carnet"
                />
                <button onClick={addStudent}>Agregar</button>
            </div>
            <table className="student-list">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Carnet</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.id}</td>
                            <td>
                                <button onClick={() => deleteStudent(student.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Registro;