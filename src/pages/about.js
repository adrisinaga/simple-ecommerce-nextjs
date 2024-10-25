import MetaHead from "@/components/MetaHead"
import Head from "next/head"

export default function About() {
    return (
        <section>

            <MetaHead
                title="About Us"
                description="Ini halaman about"
                image={`${process.env.NEXT_PUBLIC_HOST_API}/images/logo/adidas.svg`}
                url={`${process.env.NEXT_PUBLIC_HOST_API}/about`}
            />
            <h1>About</h1>
        </section>
    )
}