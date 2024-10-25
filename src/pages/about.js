import MetaHead from "@/components/MetaHead"
import Head from "next/head"
import { Dropdown } from "flowbite-react";

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
            <Dropdown label="Dropdown button">
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
        </section>
    )
}