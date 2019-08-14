
import React from 'react';

import './StudentsForm.css';
import Student from '../../Entities/Student';

class StudentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {},
    };
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isEdit && this.props.isEdit) {
      this.setState({
        formData: this.props.student,
      });
    }

    if (prevProps.isEdit && !this.props.isEdit) {
      this.setState({
        formData: {},
      });
    }
  }

  onFormChange(event) {
    const newFormData = { ...this.state.formData };

    newFormData[event.target.name] = event.target.value;

    this.setState({ formData: newFormData });
  }

  onStudentSubmit(event) {
    event.preventDefault();
    const student = new Alumno(this.state.formData);

    this.props.onCreate(pet);
  }

  render() {
    return (
      <div className="StudentsForm">
        <form onSubmit={this.onStudentSubmit.bind(this)}>
          <div>
            <label>Tipo:</label>
            <select value={this.state.formData.type || ''} name="type" onChange={this.onFormChange.bind(this)}>
              <option value="1">Sala de 1</option>
              <option value="2">Sala de 2</option>
              <option value="3">Sala de 3</option>
            </select>
          </div>

          <div>
            <label>Nombre:</label>
            <input type="text" value={this.state.formData.name || ''} name="name" onChange={this.onFormChange.bind(this)}/>
          </div>

          <div>
            <label>Fecha de Nacimiento:</label>
            <input type="date" value={this.state.formData.birthdate || ''} name="birthdate" onChange={this.onFormChange.bind(this)}/>
          </div>

          <div>
            <label>Nacionalidad:</label>
            <input type="text" value={this.state.formData.nationality || ''} name="nationality" onChange={this.onFormChange.bind(this)}/>
          </div>

          <div>
            <label>Direccion:</label>
            <input type="text" value={this.state.formData.adress || ''} name="adress" onChange={this.onFormChange.bind(this)}/>
          </div>

          <div>
            <button type="submit">
              {this.props.isEdit ? 'Editar Alumno' : 'Agregar Alumno'}
            </button>

            {this.props.isEdit &&
              <React.Fragment>
                <button type="button" onClick={this.props.onDelete}>
                  Eliminar Alumno
                </button>
                <button type="button" onClick={this.props.onEditCancel}>
                  Cancelar Edición
                </button>
              </React.Fragment>
            }
          </div>
        </form>
      </div>
    )
  }
}

export default StudentsForm;