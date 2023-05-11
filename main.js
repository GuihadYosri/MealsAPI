var mealsss = []
const btn = document.getElementById("navbarbutton");
const targetDiv = document.getElementById("expandednavbar");
btn.addEventListener('click', function () {
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
        btn.classList.replace('fa-xmark', 'fa-bars')
    } else {
        targetDiv.style.display = "flex";
        btn.classList.replace('fa-bars', 'fa-xmark')
    }
})




var areasArr = []
const Areas = document.getElementById("Areas")
const areabutton = document.getElementById("Area")
areabutton.addEventListener('click', function () {
    Areas.classList.replace('d-none', 'd-flex')
    Ingreds.classList.replace('d-flex', 'd-none')
    categoriesdiv.classList.replace('d-block', 'd-none')
    contactsdiv.classList.replace('d-block', 'd-none')
    searchdiv.classList.replace('d-block', 'd-none')
    var xml = new XMLHttpRequest()
    xml.open('GET', `https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    xml.send()
    xml.addEventListener('readystatechange', function () {
        if (xml.readyState == 4 && xml.status == 200) {
            areasArr = JSON.parse(xml.response).meals
            console.log(areasArr)
            displayareas(areasArr, Areas)

        };
    })
    Row.classList.replace('d-flex', 'd-none')
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
        btn.classList.replace('fa-xmark', 'fa-bars');

    }
})

function displayareas(Arr, ID) {
    var boxx = '';
    for (i = 0; i < 27; i++) {
        boxx += `
        <div class="col-3  ">
        <i class="fa-solid fa-house-laptop fa-4x text-white p-3 "></i>
        <h1 class=" fs-2 text-white">${Arr[i].strArea}</h1>
     </div>
        
           `
    }
    ID.innerHTML += boxx
}

var IngredsArr = []
const Ingreds = document.getElementById("Ingreds")
const ingredsbutton = document.getElementById("Ingredients")
ingredsbutton.addEventListener('click', function () {
    Ingreds.classList.replace('d-none', 'd-flex')
    categoriesdiv.classList.replace('d-block', 'd-none')
    contactsdiv.classList.replace('d-block', 'd-none')
    Areas.classList.replace('d-flex', 'd-none')
    searchdiv.classList.replace('d-block', 'd-none')
    var xml = new XMLHttpRequest()
    xml.open('GET', `https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    xml.send()
    xml.addEventListener('readystatechange', function () {
        if (xml.readyState == 4 && xml.status == 200) {
            IngredsArr = JSON.parse(xml.response).meals
            console.log(IngredsArr)
            displayIngreds(IngredsArr, Ingreds)

        };
    })
    Row.classList.replace('d-flex', 'd-none')
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
        btn.classList.replace('fa-xmark', 'fa-bars');

    }
})

function displayIngreds(Arr, ID) {
    var boxxx = '';
    for (i = 0; i < 20; i++) {
        boxxx += `
        <div class="col-3 p-3 inghov">
        <i class="fa-solid fa-drumstick-bite fa-4x text-white p-3"></i>
        <h1 class=" fs-2 text-white">${Arr[i].strIngredient}</h1>
        <p class="truncate text-white">${Arr[i].strDescription}</p>
     </div>
        
           `
    }
    ID.innerHTML += boxxx
}




const Row = document.getElementById("Row")
var xml = new XMLHttpRequest()
xml.open('GET', "https://www.themealdb.com/api/json/v1/1/search.php?s=");
xml.send()
xml.addEventListener('readystatechange', function () {
    if (xml.readyState == 4 && xml.status == 200) {
        mealsss = JSON.parse(xml.response).meals
        display(mealsss, Row)

    };
});

function display(Arr, ID) {
    var box = '';
    for (i = 0; i < Arr.length; i++) {
        box += `
           <div class="col-3 ">
              <div class=" layoutdiv" id="imgdesc"><h1 >${Arr[i].strMeal}</h1></div>
              <img src="${Arr[i].strMealThumb}" alt="" class="p-2 " >
             
           </div>
        
           `
    }
    ID.innerHTML += box
}

// const imgdesc=document.getElementById("imgdesc")
// imgdesc.addEventListener('click',function(){
//     var xml = new XMLHttpRequest()
//     xml.open('GET', `https:www.themealdb.com/api/json/v1/1/lookup.php?i=${Arr[i].idMeal}`);
//     xml.send()
//     xml.addEventListener('readystatechange', function () {
//         if (xml.readyState == 4 && xml.status == 200) {
//             nmealsArr = JSON.parse(xml.response)
//             console.log(nmealsArr)
//             // displaydetails(nmealsArr, searchimgs)

//         };
//     });

// })
// // function displaydetails{
// //     divbox=''
    
// // }
function display2(Arr, ID) {
    var box = '';
    for (i = 0; i < Arr.length; i++) {
        box += `
           <div class="col-3 rounded-2">
              
              <img src="${Arr[i].strCategoryThumb}" alt="" class="p-2">
             
           </div>
        
           `
    }
    ID.innerHTML += box
}
const search = document.getElementById("Search")
const searchdiv = document.getElementById("forms")
search.addEventListener('click', function () {
    searchdiv.classList.replace('d-none', 'd-block')
    Ingreds.classList.replace('d-flex', 'd-none')
    categoriesdiv.classList.replace('d-block', 'd-none')
    contactsdiv.classList.replace('d-block', 'd-none')
    Areas.classList.replace('d-flex', 'd-none')
    Row.classList.replace('d-flex', 'd-none')
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
        btn.classList.replace('fa-xmark', 'fa-bars');

    }
})

var nmealsArr = []
function SearchByName(e) {
    const nameOfMeal = e.target.value;
    var xml = new XMLHttpRequest()
    xml.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?s=${nameOfMeal}`);
    xml.send()
    xml.addEventListener('readystatechange', function () {
        if (xml.readyState == 4 && xml.status == 200) {
            nmealsArr = JSON.parse(xml.response).meals
            display(nmealsArr, searchimgs)

        };
    });

}
const input = document.getElementById("userInput");
input.addEventListener("change", SearchByName);

var fmealsArr = []

function SearchByFirstLetter(e) {
    const letterOfMeal = e.target.value;
    var xml = new XMLHttpRequest()
    xml.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?f=${letterOfMeal}`);
    xml.send()
    xml.addEventListener('readystatechange', function () {
        if (xml.readyState == 4 && xml.status == 200) {
            fmealsArr = JSON.parse(xml.response).meals
            display(fmealsArr, searchimgs)
        };
    });
}

const input2 = document.getElementById("userInput2");
input2.addEventListener("change", SearchByFirstLetter);


const categoriesimgs = document.getElementById("categoriesimgs")
const Categories = document.getElementById("Categories")
const categoriesdiv = document.getElementById("categories")
var cArr = []
Categories.addEventListener('click', function () {
    categoriesdiv.classList.replace('d-none', 'd-block')
    contactsdiv.classList.replace('d-block', 'd-none')
    Ingreds.classList.replace('d-flex', 'd-none')
    Areas.classList.replace('d-flex', 'd-none')
    searchdiv.classList.replace('d-block', 'd-none')
    var xml = new XMLHttpRequest()
    xml.open('GET', `https://www.themealdb.com/api/json/v1/1/categories.php`);
    xml.send()
    xml.addEventListener('readystatechange', function () {
        if (xml.readyState == 4 && xml.status == 200) {
            cArr = JSON.parse(xml.response).categories
            // console.log(cArr)
            display2(cArr, categoriesimgs)
        };
    });
    Row.classList.replace('d-flex', 'd-none')
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
        btn.classList.replace('fa-xmark', 'fa-bars');

    }
})

const Contact = document.getElementById("Contact")
const contactsdiv = document.getElementById("contactus")
Contact.addEventListener('click', function () {
    contactsdiv.classList.replace('d-none', 'd-block')
    categoriesdiv.classList.replace('d-block', 'd-none')
    Ingreds.classList.replace('d-flex', 'd-none')
    Areas.classList.replace('d-flex', 'd-none')
    searchdiv.classList.replace('d-block', 'd-none')
    Row.classList.replace('d-flex', 'd-none')
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
        btn.classList.replace('fa-xmark', 'fa-bars');

    }
})