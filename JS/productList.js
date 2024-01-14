document.addEventListener('DOMContentLoaded', async ()=>{

async function fetchProductList(){
const response = await axios.get("https://fakestoreapi.com/products")
return response.data
}

const fetchproducts = await fetchProductList()


 async function productList() {
const products = await fetchProductList()


const productListBox= document.getElementById('productList')

const container = document.createElement('div')
container.classList.add('container')

products.forEach((product) =>{

//creating  elements
const imgDiv=document.createElement('div')
const productName = document.createElement('div')
const productPrice = document.createElement('div')
const productDetails = document.createElement('a')
productDetails.href='productDetails.html'

//adding class name
imgDiv.classList.add('imgDiv')
productName.classList.add('product-name')
productPrice.classList.add('product-price')
productDetails.classList.add('product-list-item')

console.log(product.title);

productName.textContent=product.title.substring(0,12)+"..."
productPrice.textContent=product.price

const image = document.createElement('img')
image.src=product.image

//Attaching according to hardcoded 
productDetails.appendChild(imgDiv)
imgDiv.appendChild(image)
productDetails.appendChild(productName)
productDetails.appendChild(productPrice)

productListBox.appendChild(productDetails)
 })
 document.body.appendChild(container)
}
productList()
})



const search = document.getElementById('search')
search.addEventListener('click',()=>{

const minvalue=document.getElementsByClassName('min-range')
const maxvalue=document.getElementsByClassName('max-price')

console.log();

})





