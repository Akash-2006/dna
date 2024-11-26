function getSinRaidus(x, waveLength, amplitude, constant) {

  return Math.floor(Math.sin(x * waveLength) * amplitude) + constant;
}

function delay() {
  for (let i = 0; i < 100000000; i++) {

  }
}

function repeat(character, noOfTimes) {
  if (noOfTimes < 0) {
    return '';
  }

  return character + repeat(character, noOfTimes - 1);
}

function getLine(x, y, noOfTimes) {
  let min = Math.min(x, y);
  let distance = Math.abs(x - y);
  //change variable name
  const totalSpaces = repeat(' ', min);
  const totalEqualbetween = repeat('-', distance - 1);
  const totalEqualtos = repeat(' ', distance - 1) + totalSpaces;
  const color1 = noOfTimes % 2 === 0 ? '🟢' : '🔵';
  let color2 = color1 === '🔵' ? '🟢' : '🔵';
  color2 = distance === 0 ? '' : color2;

  return totalSpaces + color1 + '\n\n' + totalEqualtos + color2 + '\n\n';
}

for (let noOfTimes = 0; noOfTimes < 174; noOfTimes++) {
  for (let i = 0; i < 15; i += 2.5) {
    const x = getSinRaidus(i, 0.2, 9, 11);
    const y = getSinRaidus(-i, 0.2, 9, 9);
    delay();
    console.log(getLine(x, y, noOfTimes));
  }
}
