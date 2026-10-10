// 独立教学示例，不是红鸟原始工程。
export function gamesForMode(games, mode) {
  if (!['room', 'coin'].includes(mode)) throw new Error('未知模式');
  return games.filter(game => game.modes.includes(mode))
    .map(({id, name}) => ({id, name}));
}
const games = [
  {id:'doudizhu', name:'斗地主', modes:['room','coin']},
  {id:'hongzhong', name:'红中麻将', modes:['room','coin']},
  {id:'demo-room', name:'示例房间玩法', modes:['room']}
];
console.log(gamesForMode(games, 'coin'));
