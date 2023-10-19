const skills = [
    {id: 845697, skill: 'Patience', achieved: true},
    {id: 381647, skill: 'Programming', achieved: false},
    {id: 926153, skill: 'Determination', achieved: true}
  ];
	
  module.exports = {
    getAll
  };
	
  function getAll() {
    return skills;
  }