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
            {/* <div className="image">
                <img src={data.image} alt={data.title} width={150}></img>
            </div>
            <h1>{data.title}</h1>
            <h2>{data.description}</h2>
            <h3>${data.price}</h3> */}

            <section class="text-gray-700 body-font overflow-hidden bg-white">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img src={data.image} alt={data.title} class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">{data.category}</h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{data.title}</h1>
                            <div class="flex mb-4">
                                <span class="flex items-center">
                                    <div class="flex items-center">
                                        <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">{data.rating.rate}</p>
                                        <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                        <a href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{data.rating.count} reviews</a>
                                    </div>
                                </span>
                                {/* <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                    <a class="text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a class="ml-2 text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a class="ml-2 text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span> */}
                            </div>
                            <p class="leading-relaxed">{data.description}</p>
                            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">

                            </div>
                            <div class="flex">
                                <span class="title-font font-medium text-2xl text-green-500">${data.price}</span>
                                <button class="flex ml-auto text-white bg-amber-500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-500 rounded">Add to Cart</button>
                                {/* <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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