const calculateStylePoints = (styleNotes) => {
  styleNotes.sort();
  return styleNotes[1] + styleNotes[2] + styleNotes[3];
};


module.exports = calculateStylePoints;
