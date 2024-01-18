document.addEventListener('DOMContentLoaded', async ()=>{

async function fetchProductList(){
const response = await axios.get("https://fakestoreapi.com/products")
return response.data
}

async function allcategories(){
    const response=  await fetch('https://fakestoreapi.com/products/categories');
   const data =await response.json();
  return data
  }
 
    async function populateCategories(){
        const categories = await allcategories();
        const categoryList = document.getElementById('categoryList')

        categories.forEach(categories =>{
            const products = document.createElement('div')
            const anchorTags = document.createElement('a')
   
            categoryList.classList.add('categoryList')
            products.classList.add('products1')
            anchorTags.textContent=categories
            anchorTags.href=`productList.html?category=${categories}`
            products.append(anchorTags)
        categoryList.append(products)

        })
       

    }
    populateCategories()

async function fetchProductsByCategories(category){
    const response = await axios(`https://fakestoreapi.com/products/category/${category}`)
    return response.data
}

const  fetchproducts = await fetchProductList()
//Creation of all items function
 async function productList(flag,customproducts) { 
const queryParams = new URLSearchParams(window.location.search)
const queryParamsObject = Object.fromEntries(queryParams.entries())

products=customproducts;
if(flag==false){
if (queryParamsObject['category']) {
    products=await fetchProductsByCategories(queryParamsObject['category'])
}else{
products=await fetchProductList()
}
}

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
// console.log(product.title);
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
productList(false,fetchproducts)



const search = document.getElementById('search')
search.addEventListener('click',async ()=>{
    const productListBox = document.getElementById('productList');
const minvalue=Number(document.getElementById('min-price').value)
const maxvalue=Number(document.getElementById('max-price').value)
console.log(fetchproducts);
filteredList=fetchproducts.filter(product =>{
return product.price>=minvalue&&product.price<=maxvalue
})
console.log(filteredList);
productListBox.innerHTML=''
productList(true,filteredList)

})

})



