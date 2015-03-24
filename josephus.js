function josephus(circleSize, startIndex, skipInterval) {
  var circle = [];
  for (var i = 0; i < circleSize; i++) {
    circle[i] = "person" + ( i + 1 );
  }
  console.log(circle);
  if (startIndex > circleSize) {
    startIndex = startIndex - circleSize;
  }
  while (circle.length > 1) {
    if (startIndex + skipInterval > circle.length) {
      startIndex = skipInterval - (circle.length - startIndex);
    }
    console.log("removing item at index" + startIndex);
    circle.splice((startIndex + skipInterval + 1), 1);
    console.log(circle);
    startIndex = startIndex + skipInterval + 1;
  }
  return circle[0];
}
