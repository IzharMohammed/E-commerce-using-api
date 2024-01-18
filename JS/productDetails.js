document.addEventListener('DOMContentLoaded',async()=>{

async function getProductsDetails(id){
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
return response.data;
}
getProductsDetails()

function getQueryParams() {
    const queryParams = new URLSearchParams(window.location.search);
    const queryParamsObject = Object.fromEntries(queryParams.entries());
    return queryParamsObject;
}


async function productsCreation(){
    

    const queryParams = new URLSearchParams(window.location.search);
    const queryParamsObject = Object.fromEntries(queryParams.entries());
if(queryParamsObject['id']){
 const productDetailsWrapper = document.getElementById('productDetails-wrapper')
const productDetailsImg = document.createElement('div')
const test = document.createElement('div')
const productDetails = document.createElement('div')
const productDescriptionHeading = document.createElement('h2')
const productDescriptionamt= document.createElement('div')
const productDescriptiontitle = document.createElement('div')
const productDescriptiondata = document.createElement('div')
const image = document.createElement('img')
const div=document.createElement('div')
const button=document.createElement('button')
const anchorTag=document.createElement('a') 

productDetailsImg.classList.add('productDetails-img')
test.classList.add('test')
productDetails.classList.add('productDetails')
productDescriptionHeading.classList.add('product-description-heading')
productDescriptionamt.classList.add('product-description-amt')
productDescriptiontitle.classList.add('product-description-title')
productDescriptiondata.classList.add('product-description-data')
div.classList.add('buttons')
button.classList.add('button1')
anchorTag.classList.add('button2')

const productId=queryParamsObject['id']
const products= await getProductsDetails(productId)
// console.log(products.id);


productDescriptionHeading.textContent=products.title
productDescriptionamt.textContent=`$ ${products.price}`
productDescriptiontitle.textContent=products.category
image.src=products.image
productDescriptiondata.textContent=products.description
anchorTag.href='cart.html'
button.textContent='Add to cart'
anchorTag.textContent='Go to cart'

div.append(button)
test.appendChild(productDetails)
productDetails.appendChild(productDescriptionHeading)
productDetails.appendChild(productDescriptionamt)
productDetails.appendChild(productDescriptiontitle)
productDetails.appendChild(productDescriptiondata)
productDetails.appendChild(div)

productDetails.append(anchorTag)
productDetailsImg.appendChild(image)


productDetailsWrapper.append(productDetailsImg)
productDetailsWrapper.append(test)
}
}

productsCreation()






})