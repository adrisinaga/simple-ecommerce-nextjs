import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DetailMenu() {
    const router = useRouter()

    // console.log('apa isi router', router)

    const { id } = router.query

    // console.log('id = ', id)

    useEffect(() => {
        if (!id) return
        console.log('id = ', id)
    }, [router.query])

    return (
        <section>
            Ini detail menu
        </section>
    )
}