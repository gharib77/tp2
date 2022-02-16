import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name:'posts',
    initialState:{
        posts:[]
    },
    reducers:{
        addPost : function(state,action){
            state.posts.push(action.payload)

        },        
        listPost : function(state,action){
            state.posts={ ...state,posts:action.payload}
            
            //state.posts.push(action.payload)

        }

    }
})
export const {addPost,listPost} = postsSlice.actions


export const listPosts = () => async dispatch => {
    console.log("trestt")
    const myListe=[
        {id:1,nom:'jouali',prenom:"gharib"},
        {id:2,nom:'baba',prenom:"mohammeed"},
        {id:3,nom:'tikki',prenom:"mustapha"},
    ]
    dispatch(listPost(myListe))
}
export default postsSlice.reducer