const products = [
    {
        id: crypto.randomUUID(),
        cover: 'babywatch.jpg',
        title: 'Baby Watch',
        rating: 4,
        price: 90,
        tag: 'New'
    },
    {
        id: crypto.randomUUID(),
        cover: 'camera.jpg',
        title: 'Camera',
        price: 200,
        rating: 5,
        tag: 'Premium'
    },
    {
        id: crypto.randomUUID(),
        cover: 'gamecar.jpg',
        title: 'Game Car',
        price: 100,
        rating: 3,
        tag: 'Limited'
    },
    {
        id: crypto.randomUUID(),
        cover: 'hillshows.jpg',
        title: 'Ladies Shoes',
        price: 300,
        rating: 4,
        tag: 'Premium'
    },
    {
        id: crypto.randomUUID(),
        cover: 'roundsunglass.jpg',
        title: 'Stylish Sunglass',
        price: 120,
        rating: 5,
        tag: 'Premium'
    },
    {
        id: crypto.randomUUID(),
        cover: 'smartshoes.jpg',
        title: 'Sports Shoes',
        price: 150,
        rating: 4,
        tag: 'Premium'
    },
    {
        id: crypto.randomUUID(),
        cover: 'sunglass.jpg',
        title: 'Unique Sunglass',
        price: 80,
        rating: 3,
        tag: 'New'
    },
     {
        id: crypto.randomUUID(),
        cover: 'tablelamp.jpg',
        title: 'Table Lamp',
        price: 160,
        rating: 5,
        tag: 'Premium'
    },
]

export const getAllProduct = ()=>{
    return products;
}
