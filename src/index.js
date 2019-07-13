import "./styles.css";

const sum = function(a, b) {
  return a + b;
};

const edad = 27;
const mentira = 4;

console.log(
  "Tu edad verdaderas es " +
    edad +
    ". Tu edad de mentira es " +
    sum(edad, mentira)
);
