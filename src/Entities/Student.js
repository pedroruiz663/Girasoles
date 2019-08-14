class Alumno {
    constructor(data) {
      this.id = data.id || (new Date()).getTime();
      this.name = data.name;
      this.adress = data.adress;
      this.nationality = data.nationality;
      this.birthdate = data.birthdate;
    }
  }
  
  export default Alumno;