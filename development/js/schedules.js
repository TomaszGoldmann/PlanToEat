////////////////////////////////
//lista planów

document.addEventListener("DOMContentLoaded", () => {
    const plans = JSON.parse(localStorage.getItem("plans")) ? JSON.parse(localStorage.getItem("plans")) : [];

    document.querySelector('.app-main__schedules__table').innerText = ''
    plans.forEach((plan, i) => {
        const div = document.createElement("div");
        div.classList.add("app-main__schedules__table__content")
        const span_1 = document.createElement("span");
        const span_2 = document.createElement("span");
        const span_3 = document.createElement("span");
        const span_4 = document.createElement("span");
        const span_5 = document.createElement("span");
        const i_pen = document.createElement("i");
        const i_bin = document.createElement("i");
        span_1.innerText = `${i + 1}`;
        span_2.innerText = plan.name
        span_3.innerText = plan.description;
        span_4.innerText = plan.week;
        span_1.classList = "app-main__schedules__table__id";
        span_2.classList = "app-main__schedules__table__name";
        span_3.classList = "app-main__schedules__table__value";
        span_4.classList = "app-main__schedules__table__week";
        span_5.classList = "app-main__schedules__table__action";
        i_pen.classList = "fa-regular fa-pen-to-square";
        i_bin.classList = "fa-regular fa-trash-can"
        div.append(span_1);
        div.append(span_2);
        div.append(span_3);
        div.append(span_4);
        div.append(span_5);
        span_5.append(i_pen);
        span_5.append(i_bin);
        document.querySelector(".app-main__schedules__table").append(div)
    })

    const deletePlan = document.querySelectorAll('.fa-trash-can')

    deletePlan.forEach((trash, i) => {
        trash.addEventListener('click', () => {
            plans.splice(i, 1)
            localStorage.setItem("plans",JSON.stringify(plans))
            trash.parentElement.parentElement.remove()
        })
    })

    const editPlan = document.querySelectorAll('.fa-pen-to-square')

    editPlan.forEach((edit, i) => {
        edit.addEventListener('click', () => {
            const nameInput = document.createElement("input");
            nameInput.placeholder = 'Nowa nazwa'
            const descriptionInput = document.createElement("textarea");
            descriptionInput.placeholder = 'Nowy opis'
            edit.classList.toggle('fa-pen-to-square')
            edit.classList.toggle('fa-floppy-disk')

            if (edit.classList.contains('fa-pen-to-square')){
                localStorage.setItem("plans",JSON.stringify(plans))
                const span_2 = document.createElement("span");
                const span_3 = document.createElement("span");
                span_2.classList = "app-main__schedules__table__name";
                span_3.classList = "app-main__schedules__table__value";
                span_2.innerText = plans[i].name
                span_3.innerText = plans[i].description
                edit.parentElement.parentElement.children[1].replaceWith(span_2)
                edit.parentElement.parentElement.children[2].replaceWith(span_3)
            } else {
                edit.parentElement.parentElement.children[1].replaceWith(nameInput)
                edit.parentElement.parentElement.children[2].replaceWith(descriptionInput)
            }

            nameInput.addEventListener('input', () => plans[i].name = nameInput.value)
            descriptionInput.addEventListener('input', () => plans[i].description = descriptionInput.value)
        })
    })
})
