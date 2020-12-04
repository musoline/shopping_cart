const products = [
    {id:1, name:"prod1", cat:"cat1", price: 10},
    {id:2, name:"prod2", cat:"cat2", price: 13},
    {id:3, name:"prod3", cat:"cat3", price: 18},
    {id:4, name:"prod4", cat:"cat4", price: 16},
    {id:5, name:"prod5", cat:"cat5", price: 9},
    {id:6, name:"prod6", cat:"cat6", price: 7}
];

let cart = [];
let fullPrice;



let prodTable = document.getElementById("prod-table");


function initializeProducs(){
    products.forEach((Element,key) => {
        prodTable.innerHTML+=`
            <tr> 
                <td> ${Element.id} </td> 
                <td>${Element.name}</td>
                <td>${Element.cat}</td> 
                <td>${Element.price}</td>
                <td> <button onclick="addCartElement(${key})">კალათაში დამატება</button> </td> 
            </tr>`
    });
}



function addCartElement(n){

    if(typeof cart[n] === 'undefined'){
        cart[n] = 1;
    }else{
        cart[n] ++;
    }

        showCart();
    
}

let cartTable = document.getElementById("cart");
function showCart(){
    fullPrice = 0;
    cartTable.innerHTML= `
    <tr>
        <th>პროდუქციის სახელი</th>
        <th>ფასი</th>
        <th>რაოდენობა</th>
        <th>ფასი სრულად</th>
    </tr>
    `;
    cart.forEach((element,key) => {
        // console.log(products[key].id);
        cartTable.innerHTML+=`
            <tr>
                <td>${products[key].name}</td>
                <td>${products[key].price}</td>
                <td>${element}</td>
                <td>${products[key].price*element}</td>
            </tr>
        `;
        fullPrice += products[key].price*element;
    });
    console.log(fullPrice);
}

    initializeProducs();