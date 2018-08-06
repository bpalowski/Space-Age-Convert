export class SpaceAge{
  constructor(userAge, userLife){
    this.userAge = userAge;
    this.userLife = userLife;

  }
  checkAgeInSeconds(){
    let userDate = new Date (this.userAge);
    let todayDate = new Date();
    return Math.floor((todayDate.getTime() - userDate.getTime() / 1000));
  }
  check
}
