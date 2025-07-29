// Reto de sumar propiedades
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const sumAges = (users) => {
  let userAge = 0;
  users.forEach((user) => {
    userAge += user.age;
  });
  return userAge;
};

const totalAge = sumAges(users);
console.log(`La suma de las edades es: ${totalAge}`);

//Reto de filtrar objetos
const products = [
  { name: "Laptop", price: 100 },
  { name: "Phone", price: 55 },
  { name: "Tablet", price: 30 },
];

const filterProductsByPrice = (products) => {
  const filteredProducts = [];
  products.forEach((product) => {
    if (product.price > 50) {
      filteredProducts.push(product);
    }
  });
  return filteredProducts;
};
const finalProducts = filterProductsByPrice(products);
console.log("Productos con precio mayor a 50:", finalProducts);

//Reto de encontrar objeto por propiedad
const students = [
  { name: "John", grade: 90 },
  { name: "Jane", grade: 85 },
  { name: "Jim", grade: 78 },
];
const findsStudentByName = (students, name) => {
  let foundStudent = null;
  students.forEach((student) => {
    if (student.name === name){
      foundStudent = student;
    }
  });
  return foundStudent;
}
const student = findsStudentByName(students, "Jane");
console.log("Estudiante encontrado:", student);

// Reto de ordenar estudiantes de menor a mayor

// Reto de combinar propiedades de objetos
const array1 = [
  { name: "Pablo", age: 30 }, 
];
const array2 = [
  { name: "David", age: 40 },

];

const combinedArray = [...array1, ...array2];
console.log("Array combinado:", combinedArray);
