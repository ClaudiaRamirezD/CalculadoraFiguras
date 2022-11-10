const myModule = (() => {
  "use strict";
  let e = document.getElementById("btnPerimSq"),
    t = document.getElementById("btnAreaSq"),
    l = document.getElementById("btnPerimTr"),
    n = document.getElementById("btnAreaTr"),
    d = document.getElementById("btnDiametro"),
    i = document.getElementById("btnPerimCr"),
    r = document.getElementById("btnAreaCr"),
    a = (e) => 4 * e,
    m = (e) => e * e;
  e.addEventListener("click", () => {
    let e = Number(document.getElementById("inputSideSquare").value),
      t = `El perimetro del cuadrado es: ${a(e)} cm`;
    document.getElementById("result").innerText = t;
  }),
    t.addEventListener("click", () => {
      let e = Number(document.getElementById("inputSideSquare").value),
        t = `El \xe1rea del cuadrado es: ${m(e)} cm^2`;
      document.getElementById("result").innerText = t;
    });
  let u = (e, t, l) => e + t + l,
    E = (e, t) => (e * t) / 2;
  l.addEventListener("click", () => {
    let e = Number(document.getElementById("inputSideTriangle1").value),
      t = Number(document.getElementById("inputSideTriangle2").value),
      l = Number(document.getElementById("inputSideTriangle3").value),
      n = `El perimetro del tri\xe1ngulo es: ${u(e, t, l)} cm`;
    document.getElementById("result").innerText = n;
  }),
    n.addEventListener("click", () => {
      let e = Number(document.getElementById("inputBaseTriangle").value),
        t = Number(document.getElementById("inputHeightTriangle").value),
        l = `El \xe1rea del triangulo es: ${E(e, t)} cm^2`;
      document.getElementById("result").innerText = l;
    });
  let c = (e) => 2 * e,
    g = (e) => (2 * Math.PI * e).toFixed(2),
    I = (e) => (Math.PI * (e * e)).toFixed(2);
  d.addEventListener("click", () => {
    let e = Number(document.getElementById("inputRadioCircle").value),
      t = `El di\xe1metro del c\xedrculo es de: ${c(e)} cm`;
    document.getElementById("result").innerText = t;
  }),
    i.addEventListener("click", () => {
      let e = Number(document.getElementById("inputRadioCircle").value),
        t = `El per\xedmetro del c\xedrculo es de: ${g(e)} cm`;
      document.getElementById("result").innerText = t;
    }),
    r.addEventListener("click", () => {
      let e = Number(document.getElementById("inputRadioCircle").value),
        t = `El area del c\xedrculo es de: ${I(e)} cm^2`;
      document.getElementById("result").innerText = t;
    });
})();
