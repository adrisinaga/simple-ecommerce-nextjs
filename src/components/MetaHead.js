import Head from "next/head"

export default function MetaHead(props) {
    
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta property="og:title" content="Shopmart77 Product Ecommerce" />
            <meta property="og:description" content="Buy your needs here" />
            <meta property="og:image" content={props.image} />
            <meta property="og:url" content={props.url} />
            <meta property="og:type" content="ecommerce" />
            <meta property="og:locale" content="id_ID" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@shopmart77" />
            <meta name="twitter:creator" content="@shopmart77" />
        </Head>
    )
}