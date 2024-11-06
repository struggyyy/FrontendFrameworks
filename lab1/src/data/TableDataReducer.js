const TableDataReducer = (state, action) => {
    switch (action.type) {
      case "SORT_USER_ASC":
        return [...state].sort((a, b) => a.user.name.localeCompare(b.user.name));
      case "SORT_USER_DESC":
        return [...state].sort((a, b) => b.user.name.localeCompare(a.user.name));
      case "SORT_TITLE_ASC":
        return [...state].sort((a, b) => a.post.title.localeCompare(b.post.title));
      case "SORT_TITLE_DESC":
        return [...state].sort((a, b) => b.post.title.localeCompare(a.post.title));
      case "SORT_COMMENTS_ASC":
        return [...state].sort((a, b) => a.comments.length - b.comments.length);
      case "SORT_COMMENTS_DESC":
        return [...state].sort((a, b) => b.comments.length - a.comments.length);
      case "RESET":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default TableDataReducer;
  