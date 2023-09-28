////////////////////////////////
//lista przepisów
document.addEventListener("DOMContentLoaded", () => {
    const recipes = JSON.parse(localStorage.getItem("recipes")) ? JSON.parse(localStorage.getItem("recipes")) : [];

    document.querySelector('.app-main__recipes__table').innerText = ''
    recipes.forEach((recipe, i) => {
        const div = document.createElement("div");
        div.classList.add("app-main__recipes__table__content")
        const span_1 = document.createElement("span");
        const span_2 = document.createElement("span");
        const span_3 = document.createElement("span");
        const span_4 = document.createElement("span");
        const i_pen = document.createElement("i");
        const i_bin = document.createElement("i");
        span_1.innerText = i;
        span_2.innerText = recipe.name
        span_3.innerText = recipe.description;
        span_1.classList = "app-main__recipes__table__id";
        span_2.classList = "app-main__recipes__table__name";
        span_3.classList = "app-main__recipes__table__value";
        span_4.classList = "app-main__recipes__table__action";
        i_pen.classList = "fa-regular fa-pen-to-square";
        i_bin.classList = "fa-regular fa-trash-can"
        div.append(span_1);
        div.append(span_2);
        div.append(span_3);
        div.append(span_4);
        span_4.append(i_pen);
        span_4.append(i_bin);
        document.querySelector(".app-main__recipes__table").append(div)
    });

    const deletePlan = document.querySelectorAll('.fa-trash-can')

    deletePlan.forEach((trash, i) => {
        trash.addEventListener('click', () => {
            recipes.splice(i, 1)
            localStorage.setItem("recipes",JSON.stringify(recipes))
            trash.parentElement.parentElement.remove()
        })
    })

    const editRecipe = document.querySelectorAll('.fa-pen-to-square')

    editRecipe.forEach((edit, i) => {
        edit.addEventListener('click', () => {
            const nameInput = document.createElement("input");
            nameInput.placeholder = 'Nowa nazwa'
            const descriptionInput = document.createElement("textarea");
            descriptionInput.placeholder = 'Nowy opis'
            edit.classList.toggle('fa-pen-to-square')
            edit.classList.toggle('fa-floppy-disk')

            if (edit.classList.contains('fa-pen-to-square')){
                localStorage.setItem("plans",JSON.stringify(recipes))
                const span_2 = document.createElement("span");
                const span_3 = document.createElement("span");
                span_2.classList = "app-main__schedules__table__name";
                span_3.classList = "app-main__schedules__table__value";
                span_2.innerText = recipes[i].name
                span_3.innerText = recipes[i].description
                edit.parentElement.parentElement.children[1].replaceWith(span_2)
                edit.parentElement.parentElement.children[2].replaceWith(span_3)
            } else {
                edit.parentElement.parentElement.children[1].replaceWith(nameInput)
                edit.parentElement.parentElement.children[2].replaceWith(descriptionInput)
            }

            nameInput.addEventListener('input', () => recipes[i].name = nameInput.value)
            descriptionInput.addEventListener('input', () => recipes[i].description = descriptionInput.value)
        })
    })
})

