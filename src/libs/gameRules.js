export default function gameRules(player, probs) {
  const rules = [
    {
      kertas: {
        win: "batu",
        draw: "kertas",
        lose: "gunting",
      },
    },
    {
      batu: {
        win: "gunting",
        draw: "batu",
        lose: "kertas",
      },
    },
    {
      gunting: {
        win: "kertas",
        draw: "gunting",
        lose: "batu",
      },
    },
  ];
  
  const rulesPick = rules.find(el => Object.keys(el)[0] === player);
  const arr = []
  
  for(let i = 0; i < probs.win * 100; i++) {
    arr.push(rulesPick[player].win)
  }
  for(let i = 0; i < probs.draw * 100; i++) {
    arr.push(rulesPick[player].draw)
  }
  for(let i = 0; i < probs.lose * 100; i++) {
    arr.push(rulesPick[player].lose)
  }
  
  const computer = arr[Math.floor(Math.random() * arr.length)]

  if(computer === rulesPick[player].win) {
    return [computer, 'win']
  } else if(computer === rulesPick[player].draw) {
    return [computer, 'draw']
  } else {
    return [computer, 'lose']
  }
}

