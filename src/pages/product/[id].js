import MetaHead from "@/components/MetaHead"

export default function ProductDetail({ data }) {
    // console.log('data', data)
    return (
        <section>
            <MetaHead 
                title={data.title}
                description={data.description}
                image={data.image}
                url={`${process.env.NEXT_PUBLIC_HOST_NAME}/products/${data.id}`}
            />
            <div className="image">
                <img src={data.image} alt={data.title} width={150}></img>
            </div>
            <h1>{data.title}</h1>
            <h2>{data.description}</h2>
            <h3>${data.price}</h3>

        </section>
    )
}

//CARA SSR => Server Side Rendering
export async function getServerSideProps(context) {
    //metode destructuring
    const { locale, query: { id } } = context

    //metode normal
    // const id = context.query.id

    // console.log('context', id)

    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_API}/products/${id}`)
    const data = await response.json()

    return {
        props: { data }
    }
}