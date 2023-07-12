
const getPostsData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json();
}

const getUsersData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json();

}

export default async function ListsOfData() {

    const [posts, users] = await Promise.all([getPostsData(), getUsersData()]);
    return (
        <div>
            {posts.map((posts) => {
                return (
                    <div key={posts.id}>
                        <p>Title: {posts.title}</p>
                        <p>Body: {posts.body}</p>
                        <br />
                    </div>
                )
            })
            }
        </div>

    )
}


