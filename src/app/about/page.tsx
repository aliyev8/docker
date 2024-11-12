import {codecs} from "next/dist/server/lib/squoosh/codecs";


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