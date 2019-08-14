import Alumno from './Student';

class Sala3 extends Alumno {
  constructor(data) {
    super(data);

    this.course = 'Sala de 3 años';
  }
}

export default Alumno;