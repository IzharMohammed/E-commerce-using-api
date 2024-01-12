async function allcategories(){
  const response=  await fetch('https://fakestoreapi.com/products/categories');
 const data =await response.json();
return data
}

async function categoriesDom(){
    const categories = await allcategories()
    const categoryRow=document.getElementById('row')

        categories.forEach((element)=> {
            const div =document.createElement('div')
            const a = document.createElement('a')
            div.classList.add('products')
            a.href=''
            div.append(a)
            a.textContent=element
            categoryRow.append(div)
        })
        
        // document.append(div)


}

categoriesDom()



