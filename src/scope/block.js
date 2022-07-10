function fruits() {
  if (true) {
    var fruit1 = 'apple'; //function scope
    let fruit2 = 'banana'; // block scope
    const fruit3 = 'orange'; // block scope
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);
  // console.log(fruit2);
  // console.log(fruit3);
}
console.log(fruit1);
fruits();