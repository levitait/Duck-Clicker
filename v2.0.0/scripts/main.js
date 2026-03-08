// Declare variables
let clicks = 0;
let PPC = 1;
let hasUpgrade1 = false;
let hasUpgrade2 = false;





// functions:


// Add Score function
function addscore(score) {
    clicks = clicks + score;
    document.getElementById("clicks").innerText = clicks;
};

// Get Upgrade function
function getupgrade(upgrade_numb) {
    if (upgrade_numb == 1) {
        if (clicks >= 5) {
            PPC = PPC + 1;
            clicks = clicks - 5;
            hasUpgrade1 = true;
            document.getElementById("clicks").innerText = clicks;
        };
    }

    if (upgrade_numb == 2) {
        if (clicks >= 10) {
            PPC = PPC + 5;
            clicks = clicks - 10;
            hasUpgrade2 = true;
            document.getElementById("clicks").innerText = clicks;
        };
    };
};
