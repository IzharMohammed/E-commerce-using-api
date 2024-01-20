//fetching categories through api using async and await
async function allcategories() {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const data = await response.json();
    return data
}

async function categoriesDom() {
    const categories = await allcategories()
    const categoryRow = document.getElementById('row')
    //Adding all categories using forEach
    categories.forEach((element) => {
        const div = document.createElement('div')
        const a = document.createElement('a')
        div.classList.add('products')
        a.href = `productList.html?category=${element}`
        div.append(a)
        a.textContent = element
        categoryRow.append(div)
    })
}
categoriesDom()