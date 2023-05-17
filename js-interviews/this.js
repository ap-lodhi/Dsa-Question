function foo(){
    console.log(this.a)
}

var a =10;
var obj = {a:20,foo:foo}
obj.foo()

//output = 10

var a = 10 
function foo(){
    var a =20
    bar()
}
function bar(){
    console.log(this.a)
}
foo()

//output = undefined


var obj1 = {
    a:10,
    too:function(){
        console.log(this.b)
    }
}
var obj2 = {b:20}
obj1.too.call(obj2)

//output = 20




var a = 10 ;
var obj = {
    a:20,
    foo:function(){
        console.log(this.a)
    }
}

var bar = obj.foo
bar()

//output = undefined



function foo(){
    console.log(this.a)
}

var obj1 = {a:10}
var obj2 = {a:20}
foo.call(obj1)
foo.call(obj2)

// output = 10, 20



var obj = {
    prop:42,
    func:function(){
        console.log(this.prop)
    }
}
var foo = obj.func;
var prop = 10 
foo()


// output = undefined 

function person(name){
    this.name=name;
    this.sayName = function(){
        console.log(this.name)
    }
}
var john = new person("johan");
var jane  = new person("jane")

john.sayName()
jane.sayName()

// output = john ,jane 