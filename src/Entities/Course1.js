import Alumno from './Student';

class Sala1 extends Alumno {
  constructor(data) {
    super(data);

    this.course = 'Sala de 1 año';
  }
}

export default Alumno;