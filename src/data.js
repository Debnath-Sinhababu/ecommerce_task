const data={
    products:[
        {
            name: 'Free Shirt',
            slug: 'free-shirt',
            category: 'Shirt',
            image: './images/shirt1.jpg',
            price: 70,
            brand: 'Nike',
             stock:true,
            countInStock: 20,
            description: 'A popular shirt',
            size:'XL',
            color:'gray',
            check:false
          },
          {
            name: 'Fit Shirt',
            slug: 'fit-shirt',
            category: 'Shirt',
            image: './images/shirt2.jpg',
            price: 80,
            brand: 'Adidas',
            check:false,
            countInStock: 20,
            description: 'A popular shirt',
            stock:true,
            size:'XXL',
            color:'pink'
          },
          {
            name: 'Slim Shirt',
            slug: 'slim-shirt',
            category: 'Shirt',
            image: './images/shirt3.jpg',
            price: 90,
            brand: 'Raymond',
            stock:true,
            countInStock: 20,
            description: 'A popular shirt',
            size:'M',
            check:false,
            color:'white'
          },
          {
            name: 'Golf Pants',
            slug: 'golf-pants',
            category: 'Pant',
            image: './images/pants1.jpg',
            price: 90,
            brand: 'Oliver',
            check:false,
            countInStock: 20,
            description: 'Smart looking pants',
            stock:true,
            size:30,
            color:'black'
          },
          {
            name: 'Fit Pants',
            slug: 'fit-pants',
            category: 'Pant',
            image: './images/pants2.jpg',
            price: 95,
            brand: 'Zara',
            check:false,
            countInStock: 20,
            description: 'A popular pants',
            stock:true,
            size:32,
            color:'blue'
          },
          {
            name: 'Classic Pants',
            slug: 'classic-pants',
            category: 'Pant',
            image: './images/pants3.jpg',
            price: 75,
            brand: 'Casely',
            check:false,
            countInStock: 20,
            description: 'A popular pants',
            stock:true,
            size:34,
            color:'white'
          },
          {
            name: 'Woo Ninja',
            slug: 'classic-hoodi1',
            image: './images/hoodie1.jpg',
            price: 75,
            brand: 'Casely',
            check:false,
            countInStock: 20,
            description: 'A popular pants',
            stock:true,
            size:'M',
            color:'Black',
            category:'Hoodies'
          },
          {
            name: 'Woo Logo',
            slug: 'classic-hoodi2',
            category: 'Hoodies',
            image: './images/hoodie2.jpg',
            price: 75,
            brand: 'Casely',
            check:false,
            countInStock: 20,
            description: 'A popular pants',
            stock:true,
            size:'L',
            color:'Blue'
          },
          {
            name: 'Patient Ninja',
            slug: 'classic-hoodi3',
            category: 'Hoodies',
            image: './images/hoodie3.jpg',
            price: 75,
            brand: 'Casely',
            check:false,
            countInStock: 20,
            description: 'A popular pants',
            stock:true,
            size:'XL',
            color:'gray'
          },
        
    ]
}
export default data
let sizeobj={
  Shirt:['XL','XXL','M'],
  Pant:[30,32,34],
  Hoodies:['M','L','XL']
}
 
export {sizeobj}

let categoryarr=[]
function ispresent(ele){
  let arr= categoryarr.filter((val)=>{
       return val==ele
  })
  if(arr.length==0)
  return false
  else
  return true
}
 data.products.map((obj)=>{
     if( !ispresent(obj.category))
       categoryarr.push(obj.category)
       return null;
 })
 categoryarr.push('select')
export {categoryarr}
  