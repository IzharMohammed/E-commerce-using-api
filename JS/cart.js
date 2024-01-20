//Fetching a single product through this function
async function fetchProducts(id) {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return response.data
}
fetchProducts()

//main function of adding  a cart 
async function cartCreation() {
    //Fetching the id through url using the urlsearchparams
    const queryParams = new URLSearchParams(window.location.search);
    const queryParamsObject = Object.fromEntries(queryParams.entries());
    //get element by id
    const div1 = document.getElementById('item-img')
    const div2 = document.getElementById('Product-price')
    //creating elements
    const image = document.createElement('img')
    const productName = document.createElement('div')
    const productPrice = document.createElement('div')
    //Adding class names
    productName.classList.add('product-name')
    productPrice.classList.add('product-price')
    //fetching product from api and with using it we add image,title and price 
    const products = await fetchProducts(queryParamsObject['id'])
    image.src = products.image
    productName.textContent = products.title
    productPrice.textContent = `$${products.price}`
    //Appending elements which we create through js and appending it to a div which is the parent div and
    //which is hardcoded in html file
    div1.append(image)
    div2.append(productName)
    div2.append(productPrice)
    //Adding price details
    const price = document.getElementById('price')
    const total = document.getElementById('total')
    const div3 = document.createElement('div')
    const div4 = document.createElement('div')
    div3.textContent = `$${products.price}`
    div4.textContent = `$${products.price - 100}`
    price.append(div3)
    total.append(div4)
    const quantity = document.getElementById('quantity1')
    quantity.addEventListener('change', () => {
        console.log(quantity.value);
        const value = quantity.value
        const newPrice = products.price * value
        div3.textContent = `$${newPrice}`
        div4.textContent = `$${newPrice - 100}`
    })
    //Adding remove btn functionality
    const remove = document.getElementById('btn2')
    const Parentcontainer = document.getElementById('container')
    remove.addEventListener('click', () => {
        Parentcontainer.textContent = ''
    })
}
cartCreation()