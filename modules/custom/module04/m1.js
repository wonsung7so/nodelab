module.exports = {
  Score: class{
    constructor(kor, eng){
      this.kor = kor;
      this.eng = eng;
    }
    sum(){
      return this.kor + this.eng;
    }
    avg(){
      return this.sum() / 2;
    }
  }
};