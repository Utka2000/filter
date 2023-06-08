/**Using filter method

const employees = [
  { name: 'David Carlson', age: 30 },
  { name: 'John Cena', age: 34 },
  { name: 'Mike Sheridan', age: 25 },
  { name: 'John Carte', age: 50 }
];
Output:[ { name: "John Cena", age: 34 }, { name: "John Carte", age: 50 }]**/
const employees = [
    { name: 'David Carlson', age: 30 },
    { name: 'John Cena', age: 34 },
    { name: 'Mike Sheridan', age: 25 },
    { name: 'John Carte', age: 50 }
  ];
  let a1=employees.filter((a)=>{
      return a.age>=34
  })
  console.log(a1)
  