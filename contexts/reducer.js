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
      case "addSubject":
      return {
        ...state,
        inputSubjects: [...state.inputSubjects, action.value],
      };
      case "addSubjOpen":
      return {
        ...state,
        addSubj:action.value
        };
      case "removeSubject":
      return {
        ...state,
        inputSubjects: state.inputSubjects.filter(
          (item) => item.name != action.value
        ),
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
      case "upDateMarksheet":
      return {
        ...state,
        total: state.total + action.value.subMark,
        fail: state.fail + action.value.fail,
        gpa: state.gpa + action.value.gpa,
        subjInfo: [...state.subjInfo, action.value.subjInfo],
        subjectCount: state.subjectCount + action.value.subjectCount,
      };
      case "imptyMarksheet":
      return {
        ...state,
        total: 0,
        fail: 0,
        gpa: 0,
        subjInfo: [],
        subjectCount: 0,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
