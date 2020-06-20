// const todos = (state = [], action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           completed: false,
//         },
//       ];
//     case "TOGGLE_TODO":
//       return state.map((todo) =>
//         todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
//       );
//     default:
//       return state;
//   }
// };

// export default todos;


const medicine = (state = [], action:any) => {
  switch(action.type) {
    case "SAVE_MEDICINE":
      return [
        ...state,
        {
          id: action.id,
          data: action.data,
          completed:false,
        },
      ];
    default:
      return state;
  }
}

export default medicine;