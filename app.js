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
            <ul>
                <li>Kategorie: ${meal.strCategory}</li>
                <li>Kategorie: ${meal.strCategory}</li>
                <li>Tags: ${meal.strTags}</li>
            </ul>
            <h5>Zutaten:</h5>
            <ul>
                ${ingredients
                  .map(ingredient => `<li>${ingredient}</li>`)
                  .join('')}
            </ul>
        </div>
        <div class="col-8">
            <h2>${meal.strMeal}</h2>
            <p>${meal.strInstructions}</p>
            <h5 class="v-anleitung text-center">Video mit Anleitung</h5>
                <div class="videoYoutube text-center">${
                  meal.strYoutube
                    ? `
                <iframe src="https://www.youtube.com/embed/${meal.strYoutube.slice(
                  -11
                )}"></iframe>
                `
                    : ''
                }</div>
        </div>
        <div class="col-12">
            
        </div>
    </div>
    
  </div>
  `;
  essen.innerHTML = newInnerHTML;
};
