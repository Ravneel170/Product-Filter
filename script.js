const input = document.querySelector('input');

const searchBtn = document.querySelector ('button');

const categoryBtns = document.querySelectorAll('.category-btn');

const productList = document.querySelector('.cards');

let selectedCategory = 'All';



function filter () {

 const inputValue = input.value.trim().toLowerCase();

    const products = document.querySelectorAll('.card');

   for (let product of products) {

      const title = product.querySelector('h3');

    const titleText = title.innerText.toLowerCase();

    const category = product.dataset.category;

     if ((selectedCategory === 'All' || category === selectedCategory) && (inputValue === '' ||titleText.includes(inputValue))) {


        product.style.display = 'block';
     
      } else {

        product.style.display = 'none';
      }

}

}



input.addEventListener('keypress', filter);

searchBtn.addEventListener('click', filter);


categoryBtns.forEach(btn=>{

    btn.addEventListener('click', () =>{

        categoryBtns.forEach(button => {

            button.classList.remove('active');

            btn.classList.add('active');

            selectedCategory = btn.dataset.category;

           input.value = '';

           filter();
        })
    })
})
