// const url = "https://www.themealdb.com/api/json/v1/1/random.php";
// fetch(url)
//   .then((resp) => resp.json())
//   .then((data) => {
//     const yemek = data.meals[0];
//     console.log(yemek);
//     document.write(yemek.strIngredient1);
//   });

const url = "https://swapi.tech/";
fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    const swapii = data.people
    console.log(swapii)
  })
// alinmadi