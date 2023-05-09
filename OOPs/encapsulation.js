// now we are making them private so that  user can't modify them
class User {
  #name;
  #score;
  constructor(name, score) {
    this.#name = name;
    this.#score = score;
  }
}

const user = new User("ANil", 8); //User { name: 'ANil', score: 8 }
user.score=5
console.log(user); //User { name: 'ANil', score: 5 }


// to get private data we to do this 

class User {
  #name;
  #score;
  constructor(name, score) {
    this.#name = name;
    this.#score = score;
  }
  // getter 
  get userName(){
    return this.#name
  }

  get userScore(){
    return this.#score;
  }


//   setter 

set userScore(score){
    this.#score =score 
}
}


const user = new User("ANil", 8);
user.userScore=5  // ANil 5
console.log(user.userName,user.userScore)  // ANil 8