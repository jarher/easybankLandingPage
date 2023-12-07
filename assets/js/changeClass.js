function change(addClass, target, className) {
  addClass
    ? target.classList.add(className)
    : target.classList.remove(className);
}

function toogleInterval(addClass, classes, target, timeInterval) {
  let index = 0;

  let interval = setInterval(() => {
    if (index > 1) {
      clearInterval(interval);
    }
    change(addClass, target, classes[index]);
    index += 1;
  }, timeInterval);
}

export function toogleClass({
  timer,
  isTimeout,
  addClass,
  classes,
  target,
  timeInterval,
}) {
  if (timer) {
    if (isTimeout) {
      setTimeout(
        () =>
          classes.forEach((className) => {
            change(addClass, target, className);
          }),
        300
      );
    } else {
      toogleInterval(addClass, classes, target, timeInterval);
    }
  } else {
    classes.forEach((className) => {
      change(addClass, target, className);
    });
  }
}
