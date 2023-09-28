const savePlan = document.querySelector('.addSchedule__btn')
const planName = document.querySelector('.addSchedule__input')
const planDescription = document.querySelector('.addSchedule__textarea')
const planWeek = document.querySelector('.addSchedule__week')
const planValues = document.querySelector('.addSchedule ').querySelectorAll('select')
const btn_addSchedule = document.querySelector(".app-widgets__box").nextElementSibling;
const popupSchedule = document.querySelector(".addSchedule");

const planInputs = [planName, planDescription, planWeek]
btn_addSchedule.addEventListener("click", () => {
    planValues.forEach(value => {
        recipes.forEach(meal => {
            const tableMeal = document.createElement('option')
            tableMeal.innerText = meal.name
            value.append(tableMeal)
        })
    })
    setTimeout(() => {
        popupSchedule.classList.toggle("addSchedule--hide")
    }, 500)
});

savePlan.addEventListener('click', handleSave)

const plan = {
    name: '',
    description: '',
    week: '',
    table: ''
}

function handleSave() {
    const plans = JSON.parse(localStorage.getItem("plans")) ? JSON.parse(localStorage.getItem("plans")) : [];
    if (planName.value.length === 0 || planDescription.value.length === 0 || planWeek.value <= 0) {
        planInputs.forEach(input => {
            if (input.value === '' || input.value < 1) {
                input.classList.add('error')
                savePlan.classList.add('error--btn')
            } else {
                input.classList.remove('error')
            }
        })
    } else {
        savePlan.classList.remove('error--btn')
        const tableValues = []

        planValues.forEach(value => {
            tableValues.push(value.value)
        })

        plan.name = planName.value
        plan.description = planDescription.value
        plan.week = planWeek.value
        plan.table = tableValues

        planInputs.forEach(input => {
            input.value = ''
            input.classList.remove('error')
            savePlan.classList.remove('error--btn')
        })

        plans.push(plan)

        localStorage.setItem("plans", JSON.stringify(plans))

        popupSchedule.classList.toggle("addSchedule--hide")
    }
}