
const prevPlanBtn = document.getElementById("prev_plan_btn");
const nextPlanBtn = document.getElementById("next_plan_btn");


const plansW = [
    { id: 1, weekNumber: 1 },
    { id: 2, weekNumber: 2 },
    { id: 3, weekNumber: 3},
    { id: 7, weekNumber: 7 },
    { id: 8, weekNumber: 8 },
    { id: 9, weekNumber: 9},
    { id: 10, weekNumber: 10 },
    // { id: 11, weekNumber: 11 },
    // { id: 12, weekNumber: 12 },
    // { id: 30, weekNumber: 30 },
    // { id: 31, weekNumber: 31 },
    // { id: 32, weekNumber: 32 },
];

let currentWeekIndex = -1;

function getCurrentWeekNumber() {
    const currentDate = new Date();
    const firstDayOfYear = new Date(currentDate.getFullYear(), 0, 1);
    const pastDaysOfYear = (currentDate - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

function findNearestPlan() {
    const currentWeekNumber = getCurrentWeekNumber();
    let nearestPlanIndex = -1;
    let smallestDifference = Number.MAX_SAFE_INTEGER;

    plansW.forEach((plan, index) => {
        const difference = Math.abs(plan.weekNumber - currentWeekNumber);
        if (difference < smallestDifference) {
            smallestDifference = difference;
            nearestPlanIndex = index;
        }
    });

    return nearestPlanIndex;
}

function updateWeekPreview(planIndex) {
    if (planIndex >= 0 && planIndex < plansW.length) {
        const selectedPlan = plansW[planIndex];
        document.getElementById('week_number').innerText = `Twój plan na ${selectedPlan.weekNumber} tydzień:`;
    } else {
        document.getElementById('week_number').innerText = 'Nie masz zdefiniowanego planu.';
    }
}

function handlePlanChange(direction) {
    if (currentWeekIndex === -1) {
        currentWeekIndex = findNearestPlan();
    } else {
        currentWeekIndex += direction;
        if (currentWeekIndex < 0) {
            currentWeekIndex = plansW.length - 1;
        } else if (currentWeekIndex >= plansW.length) {
            currentWeekIndex = 0;
        }
    }

    updateWeekPreview(currentWeekIndex);
}

function onPrevPlanClick (event) {
    event.preventDefault();
    handlePlanChange(-1);
}

function onNextPlanClick(event) {
    event.preventDefault();
    handlePlanChange(1);
}


prevPlanBtn.addEventListener('click', onPrevPlanClick);
nextPlanBtn.addEventListener('click', onNextPlanClick);

document.addEventListener('DOMContentLoaded', function () {
    currentWeekIndex = findNearestPlan();
    updateWeekPreview(currentWeekIndex);
});
