

async function fetchProductList(){
const response = await axios.get("https://fakestoreapi.com/products")
return response.data



}
 async function productList() {
const data = fetchProductList()

//creating  elements
const productListBox= document.createElement('div')
const imgDiv=document.createElement('div')
const productName = document.createElement('div')
const productPrice = document.createElement('div')
const productDetails = document.createElement('a')
productDetails.href='productDetails.html'

//adding class name
productListBox.classList.add('product-list-box')
imgDiv.classList.add('imgDiv')
productName.classList.add('product-name')
productPrice.classList.add('product-price')







 }
 productList()