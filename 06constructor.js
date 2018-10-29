##Constructors allow class to take parameters.
## Constructors parameteres marked as public (or private, or protected),
## become class properties accessible as this.ParameterName within the class

## export keyword use to share information between files.

export class Puppy {
  constructor(public name: string){
    // Later we'll have code here
  }
  bark(){
    return 'Gav! my name is ' + this.name;
  }
}

var hotdog = new Puppy('Édouard');
console.log(hotdog.bark());
// Let's create more puppies
var oscar = new Puppy('Oscar-Claude');
console.log(oscar.bark());
