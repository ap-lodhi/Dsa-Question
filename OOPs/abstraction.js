// in abstracs class user can not edit or not crate any objet in it  but 
//user can use them  to use we have extends in another class  


class User{
    constructor(){
        if(this.constructor == User){
            throw new Error("object of abstracs class can't be created");

        }
    }

    run(){
        console.log("he is runing")

    }

    wlak(){
        console.log("HE is Walking")
    }
}

class Manager extends User{
    constructor(){
        super();
    }
}
const manager = new Manager();
manager.run()