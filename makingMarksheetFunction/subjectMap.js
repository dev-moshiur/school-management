import forNormal from "../makingMarksheetFunction/forNormal";
import forBanEng from "../makingMarksheetFunction/forBanEng";
import forOptional from "../makingMarksheetFunction/forOptional";

const subjectMap = (item, dispatch) => {
  let mark = document.getElementById(item.id).value;
  if (item.type == "main") {
    if (item.id == "Bangla" || item.id == "English") {
      forBanEng(item, mark, dispatch);
    } else {
      forNormal(item, mark, dispatch);
    }
  } else if (item.type == "optional") {
    forOptional(item, mark, dispatch);
  } else {
  }
};
export default subjectMap;
