// Declare variables
let clicks = 0;
let clickMultiplier = 1;
let hasUpgrade1 = true;
let hasUpgrade2 = false;





// functions:


// Add Score function
function addscore(score) {
    clicks = clicks + score * clickMultiplier;
    document.getElementById("clicks").innerText = clicks;
};

// Get Upgrade function
function getupgrade(upgrade_numb) {
    if (upgrade_numb == 1) {
        hasUpgrade1 = true;
    };
    if (upgrade_numb == 2) {
        hasUpgrade2 = true;
    };
};

// Delay MS function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
