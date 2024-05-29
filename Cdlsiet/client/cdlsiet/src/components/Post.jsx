/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { PostList } from '../Store/post-list-store';
import { useEffect } from 'react';
const Post = () => {
    const { postList, addInitialPosts } = useContext(PostList);
    // console.log(postList)
    useEffect(() => {
        async function getPosts() {
            await fetch('https://cdlsiet-server.onrender.com/cdlsiet/posts')
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data)
                    addInitialPosts(data)
                })

        }
        getPosts();
    }, [addInitialPosts])



    let Postitems = postList.map((post) => {
        // console.log(post);
        return (

            <PostsItems key={post.id} post={post} />

        )
    })
    return (
        <main className="h-[70vh] w-[100vw] bg-[black] mt-[70px] pt-[10px] ">

            <section className="h-[95%] w-[95vw] rounded-[20px] m-auto  bg-[whitesmoke] overflow-scroll  flex flex-wrap justify-center " >
                {Postitems}
            </section>

        </main>
    )
}

export default Post;
const PostsItems = ({ post }) => {
    // console.log(post)

    return (
        <div className='m-[10px] p-[10px] bg-[#ece8e8] bg-img2   h-[28vh] w-[28vw] rounded-[12px]  shadow-xl shadow-black' >
            <h1>{post.ID}</h1>
            <h2 className='font-black uppercase text-center underline'>{post.title}</h2>
            <h2 className='p-[20px] font-mono font-bold text-[18px] text-[green]'>{post.body}</h2>
            <h2 className='p-[20px] font-serif text-[16px] font-bold uppercase '>{post.author}</h2>
            {/* <h2>{post.CreatedAt}</h2> */}
        </div >
    )
}
