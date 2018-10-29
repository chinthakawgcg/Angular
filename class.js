export class Puppy {
  // This is a method.
  bark(){
    // That's how russian dogs talk.
    return 'Gav gav!!';
  }
}

// Now we can instantiate (create) it
var hotdog = new Puppy();
// And use its methods
console.log(hotdog.bark());
