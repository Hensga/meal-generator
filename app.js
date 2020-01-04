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
  <div class="container">
    <div class="row">
        <div class="col-4">
            <img src="${meal.strMealThumb}" alt="Meal Image">
        </div>
        <div class="col-8">
            <h2>${meal.strMeal}</h2>
            <p>${meal.strInstructions}</p>
        </div>
    </div>
    <ul>
        <div class="col-4">
            <li>Kategorie: ${meal.strCategory}</li>
        </div>
        <div class="col-4">
            <li>Herkunft: ${meal.strArea}</li>
        </div>
        <div class="col-4">
            <li>Tags: ${meal.strTags}</li>
        </div>
    </ul>
  </div>
  `;
  essen.innerHTML = newInnerHTML;
};
