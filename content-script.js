const claimButtonLabels = ["Bonus einfordern", "claim bonus"];

function findAndClickClaimButton() {
  for (let label of claimButtonLabels) {
    const button = document.querySelector(`[aria-label="${label}"]`);

    if (button) {
      button.click();
      break;
    }
  }
}

function startAutoClaimer(interval) {
  setInterval(findAndClickClaimButton, interval);
}

startAutoClaimer(5000);
