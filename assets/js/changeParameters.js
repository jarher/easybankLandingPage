const initialClasses = ["nullVisibility", "hidden"];
const repeatedClasses = ["nullVisibility", "translateY"];

const objectSource = {
  timer: true,
  isTimeout: false,
  addClass: false,
  classes: initialClasses.sort(),
  target: null,
  timeInterval: 100,
};

export function firstParameters(firstTarget, secondTarget) {
  const firstData = { ...objectSource };
  firstData.target = firstTarget;

  const secondData = { ...objectSource };
  secondData.isTimeout = true;
  secondData.classes = repeatedClasses;
  secondData.target = secondTarget;
  secondData.timeInterval = 300;

  return [firstData, secondData];
}

export function secondParameters(firstTarget, secondTarget) {
  const firstData = { ...objectSource };
  firstData.timer = false;
  firstData.addClass = true;
  firstData.classes = repeatedClasses;
  firstData.target = firstTarget;
  firstData.timeInterval = 0;

  const secondData = { ...objectSource };
  secondData.addClass = true;
  secondData.classes = initialClasses;
  secondData.target = secondTarget;
  secondData.timeInterval = 300;

  return [firstData, secondData];
}
