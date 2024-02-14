import ProductsComponent from "../components/ProductsComponent"

type Product = {
  title:string,
  price:number,
  image:string,
  bestseller?:boolean,
  productid:number
}


const data:Product[] = [
  {
    productid: 1,
    title: "Nike Air Force 1 '07",
    price: 90,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",

  },
  {
    productid: 2,
    title: "Nike Air Force 1 '07",
    price: 90,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    productid: 3,
    title: "Nike Air Force 1 '07",
    price: 90,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    productid: 4,
    title: "Nike Air Force 1 '07",
    price: 90,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    bestseller:true
  },
]

const Stickers = () => {
  return (
    <>
 <ProductsComponent heading="Stickers and Posters" tagline="Explore Our Stickers and Posters" description="This is our best selling collection from Zara to Gucci all but best sellings" data={data}/>
    </>
  )
}

export default Stickers