const initialState = {
  User: null,
  token: "",
};

const users = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      const { User, token } = payload; // user info
      localStorage.setItem("token", token);
      return { User, token };
    case "LOGOUT":
      localStorage.removeItem("token");
      return { User: null, token: "" };
      default:
        const tokenStorage = localStorage.getItem("token");
        if (tokenStorage) return { token: tokenStorage };
        else return state;
  }
};

export default users;

export const userLogin = (data) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};

export const userLogout = (data) => {
  return {
    type: "LOGOUT",
    payload: data,
  };
};
