const forBanEng = (item, mark, dispatch) => {
  const { name, max } = item;
  let failCount = 0;
  let subCount = 0;
  const marks = mark.split(",");

  marks.forEach((el) => {
    if (el != "") {
      if (el < Math.floor(max / 3)) {
        failCount += 1;
        subCount += 1;
      } else {
        subCount += 1;
      }
    }
  });
  let avgmark =
    marks[1] / 1 ? (marks[0] / 1 + marks[1] / 1) / subCount : marks[0] / 1;
  console.log(failCount);
  if (failCount) {
    dispatch({
      type: "upDateMarksheet",
      value: {
        subMark: avgmark * subCount,
        fail: failCount,
        gpa: 0,
        subjectCount: subCount,
        subjInfo: {
          subject: name,
          subGpa: "",
          subGreate: "F",
          subMarks: mark,
        },
      },
    });
  } else {
    if (avgmark <= max / 1 && avgmark >= Math.floor((max / 5) * 4)) {
      dispatch({
        type: "upDateMarksheet",
        value: {
          subMark: avgmark * subCount,
          fail: 0,
          gpa: 5,
          subjectCount: 1,
          subjInfo: {
            subject: name,
            subGpa: 5,
            subGreate: "A+",
            subMarks: mark,
          },
        },
      });
    } else if (
      avgmark < Math.floor((max / 5) * 4) &&
      avgmark >= Math.floor((max / 10) * 7)
    ) {
      dispatch({
        type: "upDateMarksheet",
        value: {
          subMark: avgmark * subCount,
          fail: 0,
          gpa: 4,
          subjectCount: 1,
          subjInfo: {
            subject: name,
            subGpa: 4,
            subGreate: "A",
            subMarks: mark,
          },
        },
      });
    } else if (
      avgmark < Math.floor((max / 10) * 7) &&
      avgmark >= Math.floor((max / 10) * 6)
    ) {
      dispatch({
        type: "upDateMarksheet",
        value: {
          subMark: avgmark * subCount,
          fail: 0,
          gpa: 3.5,
          subjectCount: 1,
          subjInfo: {
            subject: name,
            subGpa: 3.5,
            subGreate: "A-",
            subMarks: mark,
          },
        },
      });
    } else if (
      avgmark < Math.floor((max / 10) * 6) &&
      avgmark >= Math.floor((max / 10) * 5)
    ) {
      dispatch({
        type: "upDateMarksheet",
        value: {
          subMark: avgmark * subCount,
          fail: 0,
          gpa: 3,
          subjectCount: 1,
          subjInfo: {
            subject: name,
            subGpa: 3,
            subGreate: "B",
            subMarks: mark,
          },
        },
      });
    } else if (
      avgmark < Math.floor((max / 10) * 5) &&
      avgmark >= Math.floor((max / 10) * 4)
    ) {
      dispatch({
        type: "upDateMarksheet",
        value: {
          subMark: avgmark * subCount,
          fail: 0,
          gpa: 2,
          subjectCount: 1,
          subjInfo: {
            subject: name,
            subGpa: 2,
            subGreate: "C",
            subMarks: mark,
          },
        },
      });
    } else if (
      avgmark < Math.floor((max / 10) * 4) &&
      avgmark >= Math.floor(max / 3)
    ) {
      dispatch({
        type: "upDateMarksheet",
        value: {
          subMark: avgmark * subCount,
          fail: 0,
          gpa: 1,
          subjectCount: 1,
          subjInfo: {
            subject: name,
            subGpa: 1,
            subGreate: "D",
            subMarks: mark,
          },
        },
      });
    } else {
      console.log("something went wrong");
    }
  }
};
export default forBanEng;
