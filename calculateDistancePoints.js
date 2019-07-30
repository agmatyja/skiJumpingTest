// calculateDistancePoints.js
const calculateDistancePoints = (distance, hillSize, kPoint) => {
  var w, ppk;

  if (hillSize === 'xl') {
  		w = 1.2;
  		ppk = 120;
  };
  if (hillSize === 'l') {
  		w = 1.8;
  		ppk = 60;	
  };
  if (hillSize === 'm') {
  		w = 2;
  		ppk = 60;
  };

  return ppk + ((distance - kPoint) * w);
};

module.exports = calculateDistancePoints;

