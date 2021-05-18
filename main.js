import "./style.css";

async function getQuestions() {
  const url =
    "https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple";
  const response = await fetch(url);
  const data = await response.json();
  const incorrectQ = [...data.results[0].incorrect_answers];

  document.getElementById(
    "app"
  ).innerHTML = `<h1>${data.results[0].question}</h1>
  `;
  // incorrectQ.forEach((item) => {
  //     document.createElement("p").textContent = item;
  //   });
}
getQuestions();
