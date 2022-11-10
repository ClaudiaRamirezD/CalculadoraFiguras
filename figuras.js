const myModule = (() => {
  "use strict"

  const btnPerimSq = document.getElementById("btnPerimSq"),
    btnAreaSq = document.getElementById("btnAreaSq"),
    btnPerimTr = document.getElementById("btnPerimTr"),
    btnAreaTr = document.getElementById("btnAreaTr"),
    btnDiametro = document.getElementById("btnDiametro"),
    btnPerimCr = document.getElementById("btnPerimCr"),
    btnAreaCr = document.getElementById("btnAreaCr");


  //Formula area y perimetro de CUADRADO
  const perimSquare = (side) => side * 4;
  const areaSquare = (side) => side * side;

  //Funcion para obtener datos y mostrar perimetro CUADRADO

  btnPerimSq.addEventListener("click", () => {
    let inputSideSquare = document.getElementById("inputSideSquare");
    let value = Number(inputSideSquare.value);

    const result = `El perimetro del cuadrado es: ${perimSquare(value)} cm`;
    document.getElementById("result").innerText = result;
  });


  // Funcion para obtener datos y mostrar area CUADRADO
  btnAreaSq.addEventListener("click", () => {
    let inputSideSquare = document.getElementById("inputSideSquare");
    let value = Number(inputSideSquare.value);

    const result = `El área del cuadrado es: ${areaSquare(value)} cm^2`;
    document.getElementById("result").innerText = result;
  });

  ///////////TRIANGULO/////////

  //Formula area y perimetro del triangulo
  const perimTriangle = (side1, side2, side3) => side1 + side2 + side3;
  const areaTriangle = (base, height) => (base * height) / 2;

  //Funcion para obtener datos y mostrar perimetro TRIANGULO
  btnPerimTr.addEventListener("click", () => {
    // Lado 1
    let inputSideTriangle1 = document.getElementById("inputSideTriangle1");
    let value1 = Number(inputSideTriangle1.value);

    // Lado 2
    let inputSideTriangle2 = document.getElementById("inputSideTriangle2");
    let value2 = Number(inputSideTriangle2.value);

    // Lado 3
    let inputSideTriangle3 = document.getElementById("inputSideTriangle3");
    let value3 = Number(inputSideTriangle3.value);

    const result = `El perimetro del triángulo es: ${perimTriangle(
      value1,
      value2,
      value3
    )} cm`;
    document.getElementById("result").innerText = result;
  })

  //Funcion para obtener datos y mostrar area TRIANGULO
  btnAreaTr.addEventListener("click", () => {
    let inputBaseTriangle = document.getElementById("inputBaseTriangle");
    let value1 = Number(inputBaseTriangle.value);

    let inputHeightTriangle = document.getElementById("inputHeightTriangle");
    let value2 = Number(inputHeightTriangle.value);

    const result = `El área del triangulo es: ${areaTriangle(
      value1,
      value2
    )} cm^2`;
    document.getElementById("result").innerText = result;
  })

  ///////////CIRCULO/////////

  //Formula diametro, perimetro y area del CIRCULO
  const diameter = (radio) => radio * 2;
  const perimCircle = (radio) => (2 * Math.PI * radio).toFixed(2);
  const areaCircle = (radio) => (Math.PI * (radio * radio)).toFixed(2);

  //Funcion para obtener datos y mostrar DIAMETRO CIRCULO
  btnDiametro.addEventListener("click", () => {
    let inputRadioCircle = document.getElementById("inputRadioCircle");
    let radio = Number(inputRadioCircle.value);

    const result = `El diámetro del círculo es de: ${diameter(radio)} cm`;
    document.getElementById("result").innerText = result;
  })

  //Funcion para PERIMETRO CIRCULO
  btnPerimCr.addEventListener("click", () => {
    let inputRadioCircle = document.getElementById("inputRadioCircle");
    let radio = Number(inputRadioCircle.value);

    const result = `El perímetro del círculo es de: ${perimCircle(radio)} cm`;
    document.getElementById("result").innerText = result;
  })

  //Funcion para AREA CIRCULO
  btnAreaCr.addEventListener("click", () => {
    let inputRadioCircle = document.getElementById("inputRadioCircle");
    let radio = Number(inputRadioCircle.value);

    const result = `El area del círculo es de: ${areaCircle(radio)} cm^2`;
    document.getElementById("result").innerText = result;
  })



})();