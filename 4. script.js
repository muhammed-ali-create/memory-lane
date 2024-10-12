function goBack() {
  window.location.href = "index.html";
}

function displayEraDetails(era) {
  const eraTitle = document.getElementById("era-title");
  const eraDetails = document.getElementById("era-details");

  const memories = {
    '1950s': [
      "The first nuclear power plant opened.",
      "Elvis Presley rose to fame.",
      "The Korean War took place.",
      "The first color television sets were sold.",
      "McDonald's opened its first franchise.",
      "The first space satellite, Sputnik, was launched by the USSR.",
      "Rock 'n' roll music exploded in popularity.",
      "The polio vaccine was developed by Jonas Salk.",
      "Disneyland opened in California.",
      "The Brown v. Board of Education decision declared segregation in schools unconstitutional."
    ],
    // Add similar arrays for other eras
    '1960s': [ /*...*/ ],
    '1970s': [ /*...*/ ],
    '1980s': [ /*...*/ ],
    '1990s': [ /*...*/ ],
    '2000s': [ /*...*/ ],
    '2010s': [ /*...*/ ],
    '2020s': [ /*...*/ ],
    '2030s': [ /*...*/ ],
    '2040s': [ /*...*/ ],
  };

  eraTitle.innerText = era;
  const eraDetailsArray = memories[era] || ["No memories available for this era."];
  eraDetails.innerHTML = eraDetailsArray.map(detail => `<li>${detail}</li>`).join("");
}

// Get the era from the URL
const urlParams = new URLSearchParams(window.location.search);
const era = urlParams.get('era');
if (era) {
  displayEraDetails(era);
}
