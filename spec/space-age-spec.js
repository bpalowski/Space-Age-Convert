import { SpaceAge } from './../src/Space-Age.js';

describe('spaceAge', function(){


  it ('should test that user age', function(){
    let userInput = new SpaceAge('1990-03-30');
    expect(userInput.userAge).toEqual('1990-03-30');

  });
  it('should test checking second', function(){
    let userInput = new SpaceAge(this.userAge);
    let userDate = new SpaceAge();
    expect(userDate.checkAgeInSeconds().toEqual(7777))
  })
  it('should test ')

  });


});
