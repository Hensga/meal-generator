document.getElementById('getMeal').addEventListener('click', getMeal);

function getMeal() {
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
      console.log(data);
    })
    .catch(e => {
      console.log(e);
    });
}
