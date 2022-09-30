const skills = [
    {skill: 'Javascript', level: 5},
    {skill: 'CSS', level: 2},
    {skill: 'HTML', level: 7},
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    removeOne,
    update,
  };
  
  function getAll() {
    return skills;
  } 

  function getOne(skill) {
    return skills.find(s => s.skill === skill)
  }

  function create(skill) {
    skill.level = parseInt(skill.level)
    skills.push(skill);
  }

  function removeOne(skill) {
    const skillIdx = skills.findIndex(s => s.skill === skill);
    skills.splice(skillIdx, 1);
  }

  function update(skill, updateData) {
    // const skillToUpdate = getOne(skill)
    
  }