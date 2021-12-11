const initialState = {
  comments: [],
};

const CommentFun = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_COMMENT":
      const { comments } = payload;
      return { comments };
    case "ADD_COMMENT":
      const { comment } = payload;
      const addedComments = [...state.comments, comment];
      return { comments: addedComments };
    case "UPDATE_COMMENT":
      const { updatedComment } = payload;
      const updatedComments = state.comments.map((comment) => {
        if (comment._id === updatedComment._id) {
          return updatedComment;
        } else {
          return comment;
        }
      });
      return { comments: updatedComments };
    case "DELETE_COMMENT":
      const { deletedComment } = payload;
      const deletedComments = state.comments.filter(
        (comment) => comment._id !== deletedComment._id
      );
      return { comments: deletedComments };
    default:
      return state;
  }
};

export default CommentFun;

export const getCommentFunction = (data) => {
  return {
    type: "GET_COMMENTS",
    payload: { comments: data },
  };
};

export const addCommentFunction = (data) => {
  return {
    type: "ADD_COMMENT",
    payload: { comment: data },
  };
};

export const updateCommentFunction = (data) => {
  return {
    type: "UPDATE_COMMENT",
    payload: { updatedComment: data },
  };
};

export const deleteCommentFunction = (data) => {
  return {
    type: "DELETE_COMMENT",
    payload: { deletedComment: data },
  };
};