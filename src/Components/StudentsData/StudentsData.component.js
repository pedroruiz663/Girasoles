import React, { useEffect } from 'react';

import './StudentsData.css';

const StudentsData = ({ Student, editStudentAction, selectStudentAction }) => {
  useEffect(() => {
    console.log(student);

    return () => {
      selectStudentAction(null);
    };
  }, []);

  if (!student) {
    return null;
  }

  const onClose = () => {
    selectStudentAction(null);
  };

  const onEdit = () => {
    editStudentAction(student)
  };

  const keys = Object.keys(student);

  return (
    <div className="StudentData">
      <ul className="StudentData__List">
        {keys.map((key, i) => (
          <li className="StudentData__List__Item" key={i}>
            {key}: {student[key]}
          </li>
        ))}
      </ul>

      <div className="StudenData__Actions">
        <button className="StudentData__Actions__CloseButton" onClick={onClose}>
          Cerrar
        </button>
        <button className="StudentData__Actions__EditButton" onClick={onEdit}>
          Editar
        </button>
      </div>
    </div>
  );  
}


export default StudentsData;