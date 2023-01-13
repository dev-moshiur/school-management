const reducer = (state, action) => {
  switch (action.type) {
    case "popup":
      return {
        ...state,
        popup: action.value == state.popup ? "" : action.value,
      };
    case "load":
      return {
        ...state,
        loading: action.value,
      };
    case "setAdmin":
      return {
        ...state,
        isAdmin: action.value,
        adminChecked: action.value,
      };
    case "popupMessage":
      return {
        ...state,
        popup: action.value.popup,
        popupMessage: action.value.message,
        formFields: [],
        loading: false,
        submitFunction: (e) => {
          e.preventDefault();
        },
      };
    case "setLink":
      return {
        ...state,
        popup: "",
        link: action.value,
      };
    case "createForm":
      return {
        ...state,
        popup: action.value.popup == state.popup ? "" : action.value.popup,
        formFields: action.value.formFields,
        submitFunction: action.value.submitFunction,
        formHeading: action.value.formHeading,
        loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
