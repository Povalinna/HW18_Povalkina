//Маємо об'єкт.
   // let ladder = {
   //     step: 0,
    //    up: function () {
       //     this.step++;
       // },
     //   down: function () {
      //      this.step--;
      //  },
     //   showStep: function () { показує поточну сходинку
       //     alert(this.step);
     //   }
   // };
   // Ланцюг викликів об'єкта через методи
   // ladder.up();
  //  ladder.up();
    //ladder.down();
   // ladder.up();
  //  ladder.showStep();//2

  let ladder = {
    step: 0,
    up(){
        ladder.step++; //показала наочно,щоб розуміти,що таке THIS в даному випадку
        return ladder},// І що ми повертаємо 
    down() {
        this.step--;
        return this},
    showStep() { 
        alert(this.step);
        return this;
    }
};
//змінила код методів таким чином, щоб виклик робити вже через такий ланцюг
ladder.up().up().down().up().showStep(); //2


