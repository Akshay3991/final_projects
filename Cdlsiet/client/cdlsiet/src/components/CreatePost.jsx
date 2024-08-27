import { useContext, useRef } from "react";
import { Form } from "react-router-dom";
import { PostList } from "../Store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const { addPost } = useContext(PostList);
  // const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const authorElement = useRef();
  // const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    // const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const postauthor = authorElement.current.value;
    // const tags = tagsElement.current.value.split(" ")
    // userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    authorElement.current.value = "";
    // tagsElement.current.value = "";

    fetch("https://cdlsiet-server.onrender.com/cdlsiet/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // ID: userId,
        title: postTitle,
        body: postBody,
        author: postauthor,
        // tags: tags,
      }),
    })
      .then((res) => res)
      .then((post) => {
        // console.log(post)
        addPost(post);
        navigate("/post");
      });
    // addPost(userId, postTitle,postBody,reactions,tags);
  };

  return (
    <main className="h-[77vh] w-[100vw]  pt-[100px]  bg-black ">
      <Form
        method="POST"
        onSubmit={handleSubmit}
        className="m-auto rounded-[20px] h-[87%] w-[80%] bg-[green] border-[3px] border-[green] "
      >
        {/* <div className='p-[10px] '>
                    <label htmlFor="userId">

                    </label>
                    <input className='p-[7px] rounded-[12px] border-[4px] border-[green] w-[100%]' type="text" ref={userIdElement} id="userId" placeholder='Enter your User Id here' />

                </div> */}
        <div className="p-[10px] ">
          <label htmlFor="title" className=""></label>
          <input
            className="p-[7px] rounded-[12px] border-[4px] border-[green] w-[100%]"
            type="text"
            ref={postTitleElement}
            id="title"
            placeholder="Title of your post"
          />
        </div>
        <div className="p-[10px] ">
          <label htmlFor="body"></label>
          <textarea
            className="p-[7px] overflow-scroll rounded-[12px] border-[4px] border-[green] w-[100%]"
            type="text"
            ref={postBodyElement}
            id="body"
            cols=""
            rows="3"
            placeholder="Tell us more about it"
          ></textarea>
        </div>
        <div className="p-[10px]">
          <label htmlFor="author"></label>
          <input
            className="p-[7px] rounded-[12px] border-[4px] border-[green] w-[100%]"
            type="text"
            ref={authorElement}
            id="author"
            placeholder="Enter Author Name.."
          />
        </div>

        {/* <div className="">
                <label htmlFor="tags" className="">
                Enter your hashtags here
                </label>
                <input
                type="text"
                className=""
                id="tags"
                ref={tagsElement}
                placeholder="Please enter tags using space"
                />
            </div> */}

        <button
          type="submit"
          className="rounded-[17px] text-[34px]  font-extrabold w-[100%] mt-[19px] bg-[green] h-[64px]"
        >
          Post
        </button>
      </Form>
    </main>
  );
};

export default CreatePost;
