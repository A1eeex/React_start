import profilePageReducer, { addPostActionCreator, deletePost } from "./profilePage-reduser";
let state = {
  postData: [
    {id: 1, message: 'Hi bro!', likesCount: '3'},
    {id: 2, message: 'Do you study React?', likesCount: '9'},
    {id: 3, message: 'Yes, I do!', likesCount: '100'},
  ],
};

test('length of postdata should be incremented ', () => {
  let action = addPostActionCreator("Alex-hear")
  let newState = profilePageReducer (state, action)
  
  expect(newState.postData.length).toBe(4)
})

test('message of new post should be incremented correct', () => {
  let action = addPostActionCreator("Alex-hear")
  let newState = profilePageReducer (state, action)
  
  expect(newState.postData[3].message).toBe('Alex-hear')
});


test('length after deleting shod be decremented', () => {
  let action = deletePost (1)
  let newState = profilePageReducer (state, action)
  
  expect(newState.postData.length).toBe(2)
});

test('if id is not correct', () => {
  let action = deletePost (1000)
  let newState = profilePageReducer (state, action)
  
  expect(newState.postData.length).toBe(3)
});