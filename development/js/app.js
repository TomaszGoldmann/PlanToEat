const myForm = document.getElementById('myForm')
const nameInput = document.getElementById('nameInput');
const headerName = document.querySelector(".header-app__user__name")
const appMainContainer = document.querySelector(".app-main__container")
const appGeneralWrapper = document.querySelector(".app_general_wrapper");

////////////////////////////////
// FIRST LOGIN
if (localStorage.getItem("userName") === null) {
    myForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = nameInput.value;
        if (name.trim() !== '') {       ///sprawdzamy, czy podane imię jest poprawne
            localStorage.setItem('userName', name);
            headerName.innerText = name;
            appMainContainer.classList.toggle("hide")
            appMainContainer.classList.toggle("flex")
            appGeneralWrapper.classList.toggle("hide")
            appGeneralWrapper.classList.toggle("flex")
        } else {
            alert('Wprowadź poprawne imię!');
        }
    });
} else {
    headerName.innerText = localStorage.getItem("userName")
    appMainContainer.classList.toggle("hide")
    appMainContainer.classList.toggle("flex")
    appGeneralWrapper.classList.toggle("hide")
    appGeneralWrapper.classList.toggle("flex")
}

////////////////////////////////
// ADD RECIPE
const btn_addRecipe = document.querySelector(".app-widgets__box")
const popup = document.querySelector(".addRecipe")
const btn_CloseRecipe = document.querySelector(".addRecipe__btn")

btn_addRecipe.addEventListener("click", () => popup.classList.remove("addRecipe--hide"))
// btn_CloseRecipe.addEventListener("click", () => popup.classList.add("addRecipe--hide"))

////////////////////////////////
const widget_closeList = document.querySelectorAll(".widget_close")

function removeWidget(e) {
    e.target.parentElement.remove();
}

widget_closeList.forEach((widget_close) => {
    widget_close.addEventListener("click", removeWidget)
});

////////////////////////////////
//4.2 recipes
const btn_addInstructions = document.querySelector("#btn_addInstructions");
const list_instructions = document.querySelector("#list_instructions");
const instructions = document.querySelector("#instructions")

btn_addInstructions.addEventListener("click", () => {
    if (instructions.value.length > 0) {
        const li = document.createElement("li");
        // li.innerText = instructions.value;
        li.className = "instructions_item"
        list_instructions.append(li);
        const span = document.createElement("span");
        span.innerText = instructions.value;
        li.append(span);
        const i_pen = document.createElement("i");
        i_pen.className = "addRecipe__IconPen fa-regular fa-pen-to-square"
        li.append(i_pen);
        const i_bin = document.createElement("i");
        i_bin.className = "addRecipe__IconBin fa-regular fa-trash-can"
        li.append(i_bin);
        instructions.value = ""
        let editionFlag = false;

        i_pen.addEventListener("click", (e) => {
            btn_addInstructions.style.display = "none";
            i_bin.style.display = "none";
            instructions.value = e.target.parentElement.children[0].innerText;

            let i_save

            if (editionFlag === false) {
                editionFlag = true;
                i_save = document.createElement("i");
                i_save.className = "fa-regular fa-floppy-disk"
                e.target.parentElement.append(i_save);

                i_save.addEventListener("click", () => {
                    btn_addInstructions.style.display = "block";
                    i_bin.style.display = "inline-block";
                    e.target.parentElement.children[0].innerText = instructions.value
                    e.target.parentElement.children[3].remove();
                    instructions.value = ""
                    editionFlag = false;
                })
            }
        })

        i_bin.addEventListener("click", (e) => {
            e.target.parentElement.remove();
        })
    } else {
        alert("nie można dodać pustego pola")
    }

})

const btn_addIngredients = document.querySelector("#btn_addIngredients");
const list_ingredients = document.querySelector("#list_ingredients");
const ingredients = document.querySelector("#ingredients")

btn_addIngredients.addEventListener("click", () => {

    if (ingredients.value.length > 0) {
        const li = document.createElement("li");

        li.className = "ingredients_item"
        list_ingredients.append(li);
        const span = document.createElement("span");
        span.innerText = ingredients.value;
        li.append(span);
        const i_pen = document.createElement("i");
        i_pen.className = "addRecipe__IconPen fa-regular fa-pen-to-square"
        li.append(i_pen);
        const i_bin = document.createElement("i");
        i_bin.className = "addRecipe__IconBin fa-regular fa-trash-can"
        li.append(i_bin);
        ingredients.value = ""

        let editionFlag = false;

        i_pen.addEventListener("click", (e) => {
            btn_addIngredients.style.display = "none"
            i_bin.style.display = "none";
            let i_save;
            if (editionFlag === false) {
                editionFlag = true;
                ingredients.value = e.target.parentElement.children[0].innerText;
                i_save = document.createElement("i");
                i_save.className = "fa-regular fa-floppy-disk"
                e.target.parentElement.append(i_save);

                i_save.addEventListener("click", () => {
                    btn_addIngredients.style.display = "block"
                    i_bin.style.display = "inline-block";
                    e.target.parentElement.children[0].innerText = ingredients.value
                    e.target.parentElement.children[3].remove();
                    ingredients.value = ""
                    editionFlag = false;
                })
            }
        })

        i_bin.addEventListener("click", (e) => {
            e.target.parentElement.remove();
        })
    } else {
        alert("nie mozna dodać pustego pola")
    }

})

//////////////////////////////////
const name = document.querySelector("#name");
const description = document.querySelector("#description");
const btnSubmit = document.querySelector("#btnAddRecipe")

const recipe = {
    name: '',
    description: '',
    instructions: "",
    ingredients: ""
}

const recipes = JSON.parse(localStorage.getItem("recipes")) ? JSON.parse(localStorage.getItem("recipes")) : [];

const arrayValue = function (array) {
    const arr = []
    array.forEach((el) => arr.push(el.innerText))
    return arr
}


btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const recipes = JSON.parse(localStorage.getItem("recipes")) ? JSON.parse(localStorage.getItem("recipes")) : [];
    recipe.name = name.value;
    recipe.description = description.value;
    recipe.instructions = arrayValue([...document.querySelectorAll(".instructions_item")])
    recipe.ingredients = arrayValue([...document.querySelectorAll(".ingredients_item")]);

    if (recipe.name.length > 0 && recipe.description.length > 0 && recipe.instructions.length > 0 && recipe.ingredients.length > 0) {

        recipes.push(recipe);
        window.localStorage.setItem("recipes", JSON.stringify(recipes));

        name.value = "";
        description.value = ""
        list_instructions.textContent = "";
        list_ingredients.textContent = "";
        popup.classList.add("addRecipe--hide")
    } else {
        alert("Wypełnij puste pola.")
    }

})

document.querySelector(".widget__info .widget__text").innerText = `Masz już przepisów: ${recipes.length}. Nieźle!`