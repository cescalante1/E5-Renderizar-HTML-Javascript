let PIZZAS = [

    {
    
    id: 1,
    nombre:`Especial`,
    ingredientes:["Muzzarella","Jamon","Morrones"],
    precio:800,
    imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/0a/27/05/pizza-especial-salsa.jpg' ,


    },

    {
    
        id: 2,
        nombre:`Napolitana`,
        ingredientes:["Muzzarella","Tomate","Ajo"],
        precio:750,
        imagen: 'https://1.bp.blogspot.com/-cVyINRrJePk/YIF73zMERXI/AAAAAAAAMpg/WxWJ75h6s1UOqWjQCREuSPaN1hzvcwC3ACLcBGAsYHQ/s538/Napolitana23456.jpg' ,
    
    
        },

        {
    
            id:3,
            nombre:`Huevon`,
            ingredientes:["Muzzarella","Huevo","Jamon"],
            precio:550,
            imagen: 'https://www.supermercedes.com.ar/lagringa/wp-content/uploads/2020/11/pizza-jamon-y-huevo-picado.jpg',
        
        
            },

            {
    
                id:4,
                nombre:`Calabresa`,
                ingredientes:["Muzzarella","Salame"],
                precio:500,
                imagen:'https://www.recetas-argentinas.com/base/stock/Recipe/43-image/43-image_web.jpg' ,
            
            
                },

                {
    
                    id:5,
                    nombre:`Tropical`,
                    ingredientes:["Muzzarella","Jamon","Anana"],
                    precio:780,
                    imagen:'https://cocina-casera.com/wp-content/uploads/2017/12/pizza-tropical.jpg' ,
                
                
                    },

                    {
    
                        id:6,
                        nombre:`Anchoas`,
                        ingredientes:["Muzzarella","Anchoas","Alcaparras"],
                        precio:850,
                        imagen: 'https://cdn7.kiwilimon.com/recetaimagen/15736/16754.jpg',
                    
                    
                        }




];





const contenedor = document.getElementById('container');
const ingreso = document.querySelector("input");
const sendboton = document.querySelector("button");
const tarjetas = document.getElementById('cards');


const renderizarDom = () =>{


    PIZZAS.forEach(pizza => {
 

    
    const card = document.createElement('div');
    card.classList.add("tarjeta");

    
    const div_imagen = document.createElement('div');
    div_imagen.classList.add("tarjeta_imagen");


    const imagen= document.createElement('img');
    imagen.setAttribute("src",pizza.imagen);
    imagen.classList.add("image");
    div_imagen.appendChild(imagen);
  
    
    const div_cont= document.createElement('div');
    div_cont.classList.add("tarjeta_cont");

    const nombrepizza = document.createElement('p');
    const rendername = document.createTextNode(`Pizza: ${pizza.nombre}`);
    nombrepizza.appendChild(rendername);
    div_cont.appendChild(nombrepizza);

    
    const price = document.createElement('p');
    const renderprice = document.createTextNode(`Precio: $ ${pizza.precio}`);
    price.appendChild(renderprice);
    div_cont.appendChild(price);


    const ingredientes = document.createElement('p');   
    const renderingredientes = document.createTextNode(`Ingredientes: ${pizza.ingredientes}`);
    ingredientes.appendChild(renderingredientes);
    div_cont.appendChild(ingredientes);

    card.appendChild(div_imagen);
    card.appendChild(div_cont);
    tarjetas.appendChild(card);


});


}
    

const renderbusqueda = (pizzaname) => {

 ingreso.value= "";

 while (tarjetas.firstChild) {
    tarjetas.removeChild(tarjetas.firstChild);
}

// while (div_imagen.firstChild) {
//     div_imagen.removeChild(div_imagen.firstChild);

// }

//  while (div_cont.firstChild) {
//     div_cont.removeChild(div_cont.firstChild);

// }


 const pizza = arrayparseado.find(p => p.nombre.toLowerCase() == pizzaname);

if(!pizza){

 alert("No existe la pizza con ese nombre");
 renderizarDom();
return;
}

const card = document.createElement('div');
card.classList.add("tarjeta");


const div_imagen = document.createElement('div');
div_imagen.classList.add("tarjeta_imagen");


const imagen= document.createElement('img');
imagen.setAttribute("src",pizza.imagen);
imagen.classList.add("image");
div_imagen.appendChild(imagen);


const div_cont= document.createElement('div');
div_cont.classList.add("tarjeta_cont");

const nombrepizza = document.createElement('p');
const rendername = document.createTextNode(`Pizza: ${pizza.nombre}`);
nombrepizza.appendChild(rendername);
div_cont.appendChild(nombrepizza);


const price = document.createElement('p');
const renderprice = document.createTextNode(`Precio: $ ${pizza.precio}`);
price.appendChild(renderprice);
div_cont.appendChild(price);


const ingredientes = document.createElement('p');   
const renderingredientes = document.createTextNode(`Ingredientes: ${pizza.ingredientes}`);
ingredientes.appendChild(renderingredientes);
div_cont.appendChild(ingredientes);

card.appendChild(div_imagen);
card.appendChild(div_cont);
tarjetas.appendChild(card);


}




document.addEventListener('DOMContentLoaded', () => {

    const array = localStorage.setItem('array', JSON.stringify(PIZZAS));
 


    renderizarDom();




})

const arrayPizzas = localStorage.getItem('array');

const arrayparseado = JSON.parse(arrayPizzas);



sendboton.addEventListener('click',(e)=> {


    const array = localStorage.setItem('array', JSON.stringify(PIZZAS));
 
    const arrayPizzas = localStorage.getItem('array');

    const arrayparseado = JSON.parse(arrayPizzas);



    let valor = ingreso.value.toLowerCase();
    
    
//     PIZZAS.forEach(pizzas => { 

//         pizzas.nombre.toLowerCase();
//         console.log(pizzas.nombre);
// });

    renderbusqueda(valor);

    console.log(valor);


})




