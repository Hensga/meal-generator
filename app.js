document.getElementById('getMeal').addEventListener('click', getMeal);
const essen = document.getElementById('meal');

function getMeal() {
  // Längerer weg (älterer) um an die DB zu kommen
  //   fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  //     .then(function(res) {
  //       return res.json();
  //     })
  //     .then(function(data) {
  //       console.log(data);
  //     });

  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => {
      essenErstellen(data.meals[0]);
      console.log(meal);
      console.log(data);
    })
    .catch(e => {
      console.warn(e);
    });
}

const essenErstellen = meal => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }
  const newInnerHTML = `
  <img src="${meal.strMealThumb}" alt="Meal Image">
  `;
  essen.innerHTML = newInnerHTML;
};
