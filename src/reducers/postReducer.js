export default (state = [], action) => {
 swtich (action.type) {
  case 'FETCH_POSTS': 
    return action.payload;
  default: 
    return state;
  }
};