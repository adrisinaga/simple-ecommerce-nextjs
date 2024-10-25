import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import MetaHead from "@/components/MetaHead";
import { useEffect, useState } from "react";

//Cara CSR => Client Side Rendering. Perlu javascript
export default function Home() {

  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchProduct = async () => {
    setIsLoading(true)
    //Cara lama dengan Concat
    // const response = await fetch(process.env.NEXT_PUBLIC_HOST_API+'/products')
    
    //Cara template literal
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_API}/products`)
    const data = await response.json()

    setProduct(data)
    setIsLoading(false)
  }

  useEffect(() => {
    // console.log('process.env.NEXT_PUBLIC_TWITTER_URL', process.env.NEXT_PUBLIC_TWITTER_URL)
    fetchProduct()
  }, [])

  const router = useRouter()
  const { locale } = router
  const onRedirect = () => {
    router.push('/about')
  }

  if(isLoading) return 'Loading....'
  return (
    <>
      <MetaHead 
        title="Home" 
        description="Ini adalah halaman Home" 
        image={`${process.env.NEXT_PUBLIC_HOST_NAME}/images/logo/adidas.svg`}
        url={process.env.NEXT_PUBLIC_HOST_NAME}
      />
      
      <section className="product-list">
        {product.map((value) => (
          <div className="item" key={value.id}>
            <div className="image">
              <img src={value.image} alt={value.title} width={150}></img>
            </div>
            <h2>{value.title}</h2>
            <Link href={`/product/${value.id}`}>selengkapnya...</Link>
          </div>
        ))}
      </section>
    </>
  );
}
