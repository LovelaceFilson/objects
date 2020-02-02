//create a class for Human 
class Human {

	// Add a constructor to your human class and constructor should accept name and age as arguments

	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	// Add a talk method to your class the talk method and should console.log the name argument + “speaks” 

	talk() {
		console.log(this.name + "speaks");

	}

}

// Create a Man class that extends  the Human class
class Man extends Human {
	speak() {
		console.log(this.name + "speaks");
	}
}

// Create a new instance of the Man class 
Male = new Man("Awal"); 
Male.speak();

// Call the talk method on the new Man instance
Male.talk()










