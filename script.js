const btns = document.querySelectorAll('.menu-option .btn');
const allFood = document.querySelector('.all-food');

window.onload = function() {
    const allFoodBtn = document.querySelector('.allfood').click();

}
const cardsdData = [
    {
        name : "Delicious Pizza",
        url : "pizza.jpg",
        price : 20,
        type : "lunch",
    },
    {
        name : "Salad",
        url : "salad.jpg",
        price : 10,
        type : "breakfast",
    },
    {
        name : "Chicken broast",
        url : "img4.jpg",
        price : 15,
        type : "dinner",
    },
    {
        name : "Red Berry Smoothie",
        url : "img3.jpg",
        price : 10,
        type : "drinks",
    },
    {
        name : "Chocolate Cake",
        url : "img8.jpg",
        price : 15,
        type : "breakfast"
    },
    {
        name : "Fried Rice With Poached Egg",
        url : "img7.jpg",
        price : 20,
        type : "lunch",
    },
    {
        name : "Pancake With Sliced Strawberry",
        url : "img5.jpg",
        price : 25,
        type : "breakfast"
    },
    {
        name : "Meat With Salad",
        url : "img6.jpg",
        price : 30,
        type : "lunch",
    },

];

function getDishes(type) {
    cardsdData.map( (card) => {
        console.log(type);
        if(type === card.type) {
        allFood.innerHTML += `
        <div class="card">
            <img class="card-img-top" src="${card.url}" alt="${card.name}">
            <div class="card-body">
                <h5 class="card-title">${card.name}</h5>
                <p class="price">$${card.price}</p>
                <a href="#" class="btn btn-primary"><i class="fa-solid fa-plus"></i></a>
            </div>
        </div>
    `;
        }
    })
}
function getAllFood() {
    cardsdData.map( (card) => {
        allFood.innerHTML += `
        <div class="card">
            <img class="card-img-top" src="${card.url}" alt="${card.name}">
            <div class="card-body">
                <h5 class="card-title">${card.name}</h5>
                <p class="price">$${card.price}</p>
                <a href="#" class="btn btn-primary"><i class="fa-solid fa-plus"></i></a>
            </div>
        </div>
    `;
    });
}




btns.forEach((btn) => {    
    btn.addEventListener('click', () => {
        removeActiveClasses()
        btn.classList.add('active')
        allFood.innerHTML= "";
        if(btn.classList[1] === "allfood"){
            getAllFood();
        }
        else{
            getDishes(btn.classList[1]);
        }
    })
})

function removeActiveClasses() {
    btns.forEach((btn) => {
        btn.classList.remove('active')
    })
}

