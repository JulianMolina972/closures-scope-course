const myGlobal = 0;

function myFunction () {
  const myNumber = 1;
  console.log(myGlobal);


  function parent() { //function internal
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() { //function internal
      console.log(myNumber, myGlobal, inner);
    }
    return child();
  }
  return parent();
}

const rta = myFunction();

rta;
rta;
rta;
rta;

// const rta2 = myFunction();



