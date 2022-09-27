const skills = [
    {id: 123, todo: 'Pasta', done: true},
    {id: 456, todo: 'Pineapple', done: true},
    {id: 789, todo: 'Pine Nuts', done: false}
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return skills;
  } 