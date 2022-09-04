import Component from "../../template/Component";
import Page from "../../template/Page";

class SprintPage extends Page {
  render() {
    const statisticConteiner = new Component("div", "statistics__conteiner", "").node;
    const statisticDay = new Component("div", "statistics__day", "").node;
    const statisticDayTitle = new Component("h2", "statistics__day-title", "Statistics for today").node;
    const statisticDayIn = new Component("div", "statistics__day-in", "").node;
    
    statisticDay.append(statisticDayTitle, statisticDayIn);
    const learnedWords = new Component("div", "statistics__day-words", "").node;
    const correctAnswear = new Component("div", "statistics__day-answear", "").node;
    statisticDayIn.append(learnedWords, correctAnswear);

    const learnedWordsNumber = new Component("b", "day-words__number", "0").node;
    const learnedWordsText = new Component("p", "day-words__text", "Words learned").node;
    learnedWords.append(learnedWordsNumber, learnedWordsText);

    const correctAnswearNumber = new Component("b", "day-answear__number", "0").node;
    const correctAnswearText = new Component("p", "day-words__text", "Correct answers").node;
    correctAnswear.append(correctAnswearNumber, correctAnswearText);

    const statisticGames = new Component("div", "statistics__games", "").node;
    const statisticGamesTitle = new Component("h2", "statistics__games-title", "Game stats").node;
    const statisticGamesIn = new Component("div", "statistics__game-in", "").node;
    statisticGames.append(statisticGamesTitle, statisticGamesIn);

    const gameSprint = new Component("div", "statistics__sprint", "").node;
    const gameAudioCall = new Component("div", "statistics__audiocall", "").node;
    statisticGamesIn.append(gameSprint, gameAudioCall);

    const gameSprintTitle = new Component("p", "game__sprint-title", "Sprint").node;
    const gameSprintLeaned = new Component("p", "game__sprint-leaned", "✓ 0 words learned").node;
    const gameSprintCorrect = new Component("p", "game__sprint-correct", "✓ Сorrect answers 0 %").node;
    const gameSprintLong = new Component("p", "game__sprint-long", "✓ The longest series of correct answers: 0").node;
    gameSprint.append(gameSprintTitle, gameSprintLeaned, gameSprintCorrect, gameSprintLong);

    const gameAudiocallTitle = new Component("p", "game__audiocall-title", "Audiocall").node;
    const gameAudiocallLeaned = new Component("p", "game__audiocall-leaned", "✓ 0 words learned").node;
    const gameAudiocallCorrect = new Component("p", "game__audiocall-correct", "✓ Сorrect answers 0 %").node;
    const gameAudiocallLong = new Component("p", "game__audiocall-long", "✓ The longest series of correct answers: 0").node;
    gameAudioCall.append(gameAudiocallTitle, gameAudiocallLeaned, gameAudiocallCorrect, gameAudiocallLong);

    statisticConteiner.append(statisticDay, statisticGames);

    return statisticConteiner;
  }
}

export default new SprintPage();
