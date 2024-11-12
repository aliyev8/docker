import {codecs} from "next/dist/server/lib/squoosh/codecs";



export const metadata = {

    title: 'My Packages | perfect-days',
    openGraph: {
        title: 'My Packages | perfect-days',
        description:'perfect-days: A React date picker with options for single and multiple date selection, easily customizable and multilingual.',
        images: [
            {
                url: 'https://res.cloudinary.com/dawsyfhbt/image/upload/v1730721898/npm_cm9ygm.webp',
                width: 800,
                height: 600,
                alt: 'img',
            }
        ]
    }
}
export default async function page() {

    let data = await fetch('https://jsonplaceholder.typicode.com/posts')
    let posts = await data.json()

    return <div>
        <code>
            {JSON.stringify(posts)}
        </code>
        <h1>About</h1>
    </div>
}