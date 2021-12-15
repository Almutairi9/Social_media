




// const getAllComment = async () => {
//   try {
//     const result = await axios.get(`${BASE_URL}/comments`, {
//       headers: {
//         Authorization: `Bearer ${state.users.token}`,
//       },
//     });
//     console.log(result);
//     setComment(result.data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const addNewComment = async () => {
//   console.log(description);
//   console.log(state.users.token);
//   try {
//     const result = await axios.post(`${BASE_URL}/comments/${id}`,
//       {
//         description,
//         post :id ,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${state.users.token}`,
//         },
//       }
//     );
//     console.log(result);
//     setComment("");
//     getAllComment(state.users.token);
//   } catch (error) {
//     console.log(error);
//   }
// };
