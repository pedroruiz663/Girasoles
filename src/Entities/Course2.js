import Alumno from './Student';

class Sala2 extends Alumno {
  constructor(data) {
    super(data);

    this.course = 'Sala de 2 años';
  }
}

export default Alumno;