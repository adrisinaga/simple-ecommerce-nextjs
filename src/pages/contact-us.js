import MetaHead from "@/components/MetaHead";

export default function ContactUs() {
    return (
        <section>
            <MetaHead 
                title="Contact Us" 
                description="Ini halaman contact us"
                image={`${process.env.NEXT_PUBLIC_HOST_API}/images/logo/adidas.svg`}
                url={`${process.env.NEXT_PUBLIC_HOST_API}/contact-us`}
            />
            <h1>
                Contact us
            </h1>
        </section>
    )
}