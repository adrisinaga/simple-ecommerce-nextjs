import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DetailMenuSlug() {
    const router = useRouter()

    // console.log('apa isi router', router)

    // console.log('slugName, slugId', slugname, id)

    useEffect(() => {
        if (!router.query.slug) return
        const [slugName, idMenu] = router.query.slug 
        console.log('slugName, idMenu', slugName,idMenu)
    }, [router.query])

    // console.log('slugName, slugId', slugName, id)

    return (
        <section>
            Ini detail menu
            <h2 className="m-4 pt-8">
                Slug Name: 
            </h2>
            <h3 className="m-4">
                id: 
            </h3>
        </section>
    )
}