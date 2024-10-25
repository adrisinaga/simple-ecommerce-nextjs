import Header from "@/components/Header";

import Footer from "@/components/Footer";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="flex justify-center max-w-screen-xl mx-auto mt-20 p-1">
                {children}
            </main>
            <Footer />
        </>
    )
}