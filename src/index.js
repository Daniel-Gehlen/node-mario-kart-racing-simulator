const player1 = {
  NAME: "Mario",
  SPEED: 4,
  HANDLING: 3,
  POWER: 3,
  POINTS: 0,
};

const player2 = {
  NAME: "Luigi",
  SPEED: 3,
  HANDLING: 4,
  POWER: 4,
  POINTS: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "STRAIGHT";
      break;
    case random < 0.66:
      result = "CURVE";
      break;
    default:
      result = "CLASH";
  }

  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolled a ${block} block: ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Round ${round}`);

    let block = await getRandomBlock();
    console.log(`Block: ${block}`);

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "STRAIGHT") {
      totalTestSkill1 = diceResult1 + character1.SPEED;
      totalTestSkill2 = diceResult2 + character2.SPEED;

      await logRollResult(
        character1.NAME,
        "straight",
        diceResult1,
        character1.SPEED
      );

      await logRollResult(
        character2.NAME,
        "straight",
        diceResult2,
        character2.SPEED
      );
    }

    if (block === "CURVE") {
      totalTestSkill1 = diceResult1 + character1.HANDLING;
      totalTestSkill2 = diceResult2 + character2.HANDLING;

      await logRollResult(
        character1.NAME,
        "curve",
        diceResult1,
        character1.HANDLING
      );

      await logRollResult(
        character2.NAME,
        "curve",
        diceResult2,
        character2.HANDLING
      );
    }

    if (block === "CLASH") {
      let powerResult1 = diceResult1 + character1.POWER;
      let powerResult2 = diceResult2 + character2.POWER;

      console.log(`${character1.NAME} clashed with ${character2.NAME}! 🥊`);

      await logRollResult(
        character1.NAME,
        "power",
        diceResult1,
        character1.POWER
      );

      await logRollResult(
        character2.NAME,
        "power",
        diceResult2,
        character2.POWER
      );

      if (powerResult1 > powerResult2 && character2.POINTS > 0) {
        console.log(
          `${character1.NAME} won the clash! ${character2.NAME} lost 1 point 🐢`
        );
        character2.POINTS--;
      }

      if (powerResult2 > powerResult1 && character1.POINTS > 0) {
        console.log(
          `${character2.NAME} won the clash! ${character1.NAME} lost 1 point 🐢`
        );
        character1.POINTS--;
      }

      console.log(
        powerResult2 === powerResult1
          ? "Clash tied! No points were lost."
          : ""
      );
    }

    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.NAME} scored a point!`);
      character1.POINTS++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.NAME} scored a point!`);
      character2.POINTS++;
    }

    console.log("-----------------------------");
  }
}

async function declareWinner(character1, character2) {
  console.log("Final Result:");
  console.log(`${character1.NAME}: ${character1.POINTS} point(s)`);
  console.log(`${character2.NAME}: ${character2.POINTS} point(s)`);

  if (character1.POINTS > character2.POINTS)
    console.log(`\n${character1.NAME} won the race! Congratulations! 🏆`);
  else if (character2.POINTS > character1.POINTS)
    console.log(`\n${character2.NAME} won the race! Congratulations! 🏆`);
  else console.log("The race ended in a tie.");
}

(async function main() {
  console.log(
    `🏁🚨 Race between ${player1.NAME} and ${player2.NAME} starting...\n`
  );

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})();
