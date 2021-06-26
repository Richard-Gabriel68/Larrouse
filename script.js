const s = (e) => document.querySelector(e);
const st = (e) => document.querySelectorAll(e);


pizzaJson.map((item, index) =>
{
    let itemPizza = s('.models .element').cloneNode(true);
    let Modal = s('.fundoModal');
    
    itemPizza.querySelector('.name').innerHTML = item.name;
    itemPizza.querySelector('img').src = item.img;
    itemPizza.querySelector('.price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    itemPizza.addEventListener('click', (e) => 
    {
        Modal.style.opacity = 0;
        Modal.style.display = 'flex';
        setTimeout(() =>
        {
            Modal.style.opacity = 1;
        }, 200);
        Modal.querySelector('.nomePizza').innerHTML = item.name;
        Modal.querySelector('.campoPizza img').src = item.img;
        Modal.querySelector('.descPizza').innerHTML = item.description;
        Modal.querySelector('.valorPizza').innerHTML = `R$ ${item.price.toFixed(2)}`;


        Modal.querySelector('.closeModal').addEventListener('click', (e)=>
        {
            Modal.style.display = 'none';
        })
    })

    s('.conteudo').append(itemPizza);


})