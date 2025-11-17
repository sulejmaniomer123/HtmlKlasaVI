const content = {
  en: {
    title: "KLASA VI-III WEBPAGE",
    description: "This is a website for the Sixth grade in Odri."
  },
  sq: {
    title: "FAQJA E KL VI-III",
    description: "Kjo është nje webfaqje per klasen e gjashtë në Odër."
  }
};

function changeLanguage() {
  const lang = document.getElementById("language").value;
  document.getElementById("title").textContent = content[lang].title;
  document.getElementById("description").textContent = content[lang].description;
}
