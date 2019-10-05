import { isContainHighCard, handleBothHighCard } from './hightCardRule';
import { isContainPair, handleBothPair } from './pairRule';
import { isContainTwoPair, handleBothTwoPair } from './twoPairRule';
import { isContainThreeOfAKind, handleBothThreeOfAKind } from './threeOfAKindRule';
import { isContainStraight, handleBothStraight } from './straightRule';
import { isContainFlush, handleBothFlush } from './flushRule';
import { isContainFullHouse, handleBothFullHouse } from './fullHouseRule';
import { isContainFourOfAKind, handleBothFourOfAKind } from './fourOfAKindRule';
import { isContainStraightFlush, handleBothStraightFlush } from './straightFlushRule';
import { getWinner } from '../utils';
export {
  isContainHighCard,
  handleBothHighCard,
  isContainPair,
  handleBothPair,
  isContainTwoPair,
  handleBothTwoPair,
  isContainThreeOfAKind,
  handleBothThreeOfAKind,
  isContainStraight,
  handleBothStraight,
  isContainFlush,
  handleBothFlush,
  isContainFullHouse,
  handleBothFullHouse,
  isContainFourOfAKind,
  handleBothFourOfAKind,
  isContainStraightFlush,
  handleBothStraightFlush,
};

class Ruler {
  whiteRank = 1000;
  blackRank = 1000;

  rules = [
    isContainHighCard,
    isContainPair,
    isContainTwoPair,
    isContainThreeOfAKind,
    isContainStraight,
    isContainFlush,
    isContainFullHouse,
    isContainFourOfAKind,
    isContainStraightFlush,
  ];

  handleSameRules = [
    handleBothHighCard,
    handleBothPair,
    handleBothTwoPair,
    handleBothThreeOfAKind,
    handleBothStraight,
    handleBothFlush,
    handleBothFullHouse,
    handleBothFourOfAKind,
    handleBothStraightFlush,
  ];

  public calculateRank = (whiteGroupedCard: any, blackGroupedCard: any) => {
    this.rules.some((rule, index) => {
      if (rule(whiteGroupedCard)) {
        this.whiteRank = index;
        return true;
      }
      return false;
    });
    this.rules.some((rule, index) => {
      if (rule(blackGroupedCard)) {
        this.blackRank = index;
        return true;
      }
      return false;
    });
    if (this.whiteRank === this.blackRank) {
      return this.handleSameRules[this.whiteRank](whiteGroupedCard, blackGroupedCard);
    }
    return getWinner(this.whiteRank, this.blackRank);
  };
}

export default Ruler;
