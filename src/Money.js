import { ERRORMESSAGES } from "./util/Message";
class Money {
  #money;
  #winningMoney = 0;
  #rankingCounts = [0, 0, 0, 0, 0];

  constructor(money) {
    this.#validate(money);
    this.#money = money;
  }

  get getMoney() {
    return this.#money;
  }

  get getWinningMoney() {
    return this.#winningMoney;
  }
  get getRankingCounts() {
    return this.#rankingCounts;
  }

  #validate(money) {
    if (Number.isNaN(Number(money))) {
      throw new Error(ERRORMESSAGES.NOT_A_NUMBER);
    }
    if (money < 1000) {
      throw new Error(ERRORMESSAGES.MONEY_RANGE);
    }
    if (money % 1000 !== 0) {
      throw new Error(ERRORMESSAGES.MONEY_DEVISION);
    }
    return true;
  }

  winnings(rank) {
    switch (rank) {
      case 1:
        return 2000000000;
      case 2:
        return 30000000;
      case 3:
        return 1500000;
      case 4:
        return 50000;
      case 5:
        return 5000;
      default:
        break;
    }
  }
  rankingCountsArray(rank) {
    switch (rank) {
      case 1:
        return this.#rankingCounts[0]++;
      case 2:
        return this.#rankingCounts[1]++;
      case 3:
        return this.#rankingCounts[2]++;
      case 4:
        return this.#rankingCounts[3]++;
      case 5:
        return this.#rankingCounts[4]++;
      default:
        return;
    }
  }

  rankingMoney(ranks) {
    ranks.forEach((rank) => {
      if (!Number.isNaN(Number(this.winnings(rank)))) {
        this.#winningMoney += this.winnings(rank);
        this.rankingCountsArray(rank);
      }
      return;
    });
  }
}

export default Money;
