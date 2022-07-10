function house() {
  let adoptedDogs = [];
  console.log(adoptedDogs);
  return function adoptDog(dog) {
    adoptedDogs.push(dog);
    console.log(`You adopted ${dog}`);
    console.log(adoptedDogs);
    return adoptedDogs;
  }
  
}

const dogs = house();

dogs('lulu');
dogs('rex');
dogs('firulais');
dogs('max');
dogs('hercules');

