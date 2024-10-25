import Link from "next/link"

export default function Header() {
    return (
        <header>
            <Link href="/">
                <img src="/images/logo/adidas.svg" alt="adidas logo" width={50} height={50}/>
            </Link>
            <Link href="/about">About</Link>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/menu/makanan">Our Food</Link>
            <Link href="/menu/minuman">Our Drink</Link>
        </header>
    )
}