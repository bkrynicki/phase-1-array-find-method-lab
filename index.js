function superbowlWin(yearArray) {
  let yearWin = yearArray.find((element) => element.result === `W`);
  if (yearWin) {
    return yearWin.year;
  } else return undefined;
}
superBowlWin(record);
