function rad2deg(rad) {
  return rad * (180 / Math.PI);
}

document.querySelector('#group1').style.rotate = rad2deg(Math.acos(3 / Math.sqrt(13))) + 'deg';
document.querySelector('#group2').style.rotate = -rad2deg(Math.acos(3 / Math.sqrt(13))) + 'deg';