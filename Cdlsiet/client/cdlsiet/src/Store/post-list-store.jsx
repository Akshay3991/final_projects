import { createContext, useCallback, useReducer } from "react";
export const PostList = createContext({
  postList: [],
  SyllabusList: [],
  NotesList: [],
  PyqList: [],
  addPost: () => { },
  deletePost: () => { },
});


const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const syllabusListReducer = (currsyllabusList, action) => {
  let newSyllabusList = currsyllabusList;
  if (action.type === "ADD_SYLLABUS_LIST") {
    newSyllabusList = action.payload.data;
  }
  return newSyllabusList;
}
const pyqListReducer = (currpyqList, action) => {
  let newpyqList = currpyqList;
  if (action.type === "ADD_PYQ_LIST") {
    newpyqList = action.payload.data;
  }
  return newpyqList;
}
const notesListReducer = (currnotesList, action) => {
  let newnotesList = currnotesList;
  if (action.type === "ADD_NOTES_LIST") {
    newnotesList = action.payload.data;
  }
  return newnotesList;
}
const PostListProvider = ({ children }) => {

  const [postList, dispatchPostList] = useReducer(
    postListReducer, []
  );
  const [SyllabusList, dispatchsyllabusList] = useReducer(
    syllabusListReducer, []
  );
  const [PyqList, dispatchpyqList] = useReducer(
    pyqListReducer, []
  );
  const [NotesList, dispatchnotesList] = useReducer(
    notesListReducer, []
  );

  const addnotesList = (data) => {
    dispatchnotesList({
      type: "ADD_NOTES_LIST",
      payload: {
        data,
      },
    });
  }
  const addPyqList = (data) => {
    dispatchpyqList({
      type: "ADD_PYQ_LIST",
      payload: {
        data,
      },
    });
  }


  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };
  const addInitialPosts = (posts) => {
    // console.log("addinitialpost called")
    // console.log(postList)

    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const addsyllabusList = (data) => {
    dispatchsyllabusList({
      type: "ADD_SYLLABUS_LIST",
      payload: {
        data,
      },
    });
  }

  const deletePost = useCallback((postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  },
    [dispatchPostList]
  );

  return (
    <PostList.Provider value={{ NotesList, addnotesList, PyqList, addPyqList, postList, addInitialPosts, addPost, deletePost, addsyllabusList, SyllabusList }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;