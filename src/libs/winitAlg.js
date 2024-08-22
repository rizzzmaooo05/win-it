import gameRules from "./gameRules.js";

export default function winitAlg(cashInit, taruhan, player) {
  const probs = {}
  if((cashInit <= 10000) && (taruhan < 10000)) {
    probs.win  = 0.8
    probs.draw = 0.2
    probs.lose = 0.0
  } else if((cashInit > 10000) && (taruhan < 10000)) {
    probs.win  = 0.6
    probs.draw = 0.1
    probs.lose = 0.3
  } else if((cashInit < 10000) && (taruhan === 10000)) {
    probs.win  = 0.4
    probs.draw = 0.1
    probs.lose = 0.5
  } else if((cashInit > 10000) || (taruhan === 10000)) {
    probs.win  = 0.1
    probs.draw = 0.0
    probs.lose = 0.9
  }

  const result = gameRules(player, probs)

  if(result[1] === 'win') {
    return {
      computer: result[0],
      result: 'win',
      cashNow: cashInit + taruhan,
    }
  } else if(result[1] === 'draw') {
    return {
      computer: result[0],
      result: 'draw',
      cashNow: cashInit,
    }
  } else if(result[1] === 'lose') {
    return {
      computer: result[0],
      result: 'lose',
      cashNow: cashInit - taruhan,
    }
  }
}