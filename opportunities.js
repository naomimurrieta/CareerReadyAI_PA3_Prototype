

//Providing way to go back to previous screen
const backToIntakeBtn = document.getElementById("back-to-intake");

if (backToIntakeBtn) {
  backToIntakeBtn.addEventListener("click", () => {
    showScreen("screen-intake");
  });
}

//Will give out AI recommendation
const generateButton = document.getElementById("generate-opportunity-button");

//Hidden result card
const opportunityResult = document.getElementById("opportunity-result");


//the text that goes into the result box
const opportunityText = document.getElementById("opportunity-text");



//THis function will simulate GPT behavior 
//For this example I will use the library as the most optimal recommedation to study at
 if (scheduleText.toLowerCase().includes("library")) {
    return "Tuesday at 4 PM — strongest productivity at library hours.";
  }

//Best time that this example will use is the morning
if (scheduleText.toLowerCase().includes("morning")) {
    return "Wednesday morning — your highest energy time.";
  }

//THis will be the deafult
  return "Sunday afternoon — balanced time for scholarship applications.";
}

//When the user finally asks for the optimal time to study and be effective
if (generateButton) {
  generateButton.addEventListener("click", () => {

    // This is the disable button while 'AI' runs
    generateButton.disabled = true;
    generateButton.textContent = "Analyzing...";

    // This simulates GPT computing the timing
    setTimeout(() => {
      const result = chooseBestTime(userSchedule);
      opportunityText.textContent = result;

      // Will finally reveal the hidden result card
      opportunityResult.classList.remove("hidden");

      // Will re-enable the button
      generateButton.disabled = false;
      generateButton.textContent = "Generate AI Timing";
    }, 900); // 0.9 second delay
  });
}



