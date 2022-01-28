 
const initialState={
    discover:[],
    addToReadingList:[],
    finishedList:[]
}


function foodReducer(state=initialState, action) {
  switch (action.type) {
    case "ADD_TO_READING_LIST": {
      const newState = {...state, addToReadingList:[...state.addToReadingList,action.payload]};
      return newState;
    }
    case "REMOVE_FROM_READING_LIST": {
      const newState = {...state, addToReadingList:state.addToReadingList.filter((food)=>food.id!==action.payload)}
       ;
      return newState;
    }
    default:
      return state;
  }
}
export default foodReducer;
