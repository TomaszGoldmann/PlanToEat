////////////////////////////////
//lista przepisów
document.addEventListener("DOMContentLoaded", () => {
    const recipes = JSON.parse(localStorage.getItem("recipes")) ? JSON.parse(localStorage.getItem("recipes")) : [];

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


        i_bin.addEventListener("click", () => deleteRecipe(i));
        i_pen.addEventListener("click", () => editRecipe(i));
    });

    function deleteRecipe(index) {
        recipes.splice(index, 1);
        localStorage.setItem("recipes", JSON.stringify(recipes));
        updateUI();
    }

    function editRecipe(index) {
        const recipeToEdit = recipes[index];

        const parentDiv = document.querySelector(".app-main__recipes__table__content:nth-child(" + (index + 1) + ")");

        const nameInput = document.createElement("input");
        nameInput.value = recipeToEdit.name;

        const descriptionInput = document.createElement("input");
        descriptionInput.value = recipeToEdit.description;

        const saveButton = document.createElement("button");
        saveButton.innerText = "Save";
        saveButton.addEventListener("click", () => {
            recipeToEdit.name = nameInput.value;
            recipeToEdit.description = descriptionInput.value;
            localStorage.setItem("recipes", JSON.stringify(recipes));
            updateUI();
        });

        const cancelButton = document.createElement("button");
        cancelButton.innerText = "Cancel";
        cancelButton.addEventListener("click", () => {
            updateUI();
        });

        parentDiv.querySelector(".app-main__recipes__table__name").replaceWith(nameInput);
        parentDiv.querySelector(".app-main__recipes__table__value").replaceWith(descriptionInput);
        parentDiv.querySelector(".fa-pen-to-square").replaceWith(saveButton);
        parentDiv.querySelector(".fa-trash-can").replaceWith(cancelButton);
    }

    function updateUI() {
        const table = document.querySelector(".app-main__recipes__table");
        table.innerHTML = "";

        recipes.forEach((recipe, i) => {
            const div = document.createElement("div");
            div.classList.add("app-main__recipes__table__content");

            const span_1 = document.createElement("span");
            const span_2 = document.createElement("span");
            const span_3 = document.createElement("span");
            const span_4 = document.createElement("span");
            const i_pen = document.createElement("i");
            const i_bin = document.createElement("i");

            span_1.innerText = i;
            span_2.innerText = recipe.name;
            span_3.innerText = recipe.description;
            span_1.classList = "app-main__recipes__table__id";
            span_2.classList = "app-main__recipes__table__name";
            span_3.classList = "app-main__recipes__table__value";
            span_4.classList = "app-main__recipes__table__action";
            i_pen.classList = "fa-regular fa-pen-to-square";
            i_bin.classList = "fa-regular fa-trash-can";

            div.append(span_1);
            div.append(span_2);
            div.append(span_3);
            div.append(span_4);
            span_4.append(i_pen);
            span_4.append(i_bin);
            table.appendChild(div);

            i_bin.addEventListener("click", () => deleteRecipe(i));
            i_pen.addEventListener("click", () => editRecipe(i));
        });
    }

})

