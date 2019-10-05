import { stringToCard, groupCard } from './utils';
import { BLACK_WIN_MESSAGE, TIE_MESSAGE, WHITE_WIN_MESSAGE, cardTypes, cardValues, mapping } from './const';
import {
  isContainHighCard,
  isContainThreeOfAKind,
  isContainFourOfAKind,
  isContainFlush,
  isContainPair,
  isContainTwoPair,
  isContainStraight,
  isContainFullHouse,
  isContainStraightFlush,
  handleBothStraightFlush,
  handleBothFourOfAKind,
  handleBothFullHouse,
  handleBothFlush,
  handleBothStraight,
  handleBothThreeOfAKind,
  handleBothTwoPair,
  handleBothHighCard,
  handleBothPair,
} from './rules';

import { playGame } from './game';

describe('poker test', () => {
  it('get GruopOfCard Object', () => {
    expect(groupCard(stringToCard('2H 3D 2D 3H 6H'))).toStrictEqual({
      '2': 2,
      '3': 2,
      '6': 1,
      D: 2,
      H: 3,
    });
  });

  const expectWithGroupCard = (cardString: string, testFunction: any) =>
    expect(testFunction(groupCard(stringToCard(cardString))));

  it('Get pair of card when have three', () => {
    expectWithGroupCard('AH AS 2C 3D 4D', isContainPair).toBe(true);
  });
  it('Get three of card when have three', () => {
    expectWithGroupCard('AH AS AC 3D 4D', isContainThreeOfAKind).toBe(true);
  });
  it('Get four of card when have four', () => {
    expectWithGroupCard('AH AS AC AD 4D', isContainFourOfAKind).toBe(true);
  });
  it('Get Flush  when have five same card type', () => {
    expectWithGroupCard('2H 3H 4H 5H 6H', isContainFlush).toBe(true);
  });
  it('Get Fullhouse', () => {
    expectWithGroupCard('2H 4S 4C 2D 4H', isContainFullHouse).toBe(true);
  });
  it('Get Staight when have order five card', () => {
    expectWithGroupCard('2H 3H 4H 5H 6H', isContainStraight).toBe(true);
  });
  it('Get Straight when have same card type and consecutive ordered', () => {
    expectWithGroupCard('2H 3H 4H 5H 6H', isContainStraightFlush).toBe(true);
  });
  it('Get TwoPair', () => {
    expectWithGroupCard('2H 4S AC 2D 4H', isContainTwoPair).toBe(true);
  });
  it('White win when in draw in straigh flush rank', () => {
    const whiteCards = groupCard(stringToCard('3H 4H 5H 6H 7H'));
    expect(isContainStraightFlush(whiteCards)).toBe(true);
    const blackCards = groupCard(stringToCard('2S 3S 4S 5S 6S'));
    expect(isContainStraightFlush(blackCards)).toBe(true);
    expect(handleBothStraightFlush(whiteCards, blackCards)).toBe(WHITE_WIN_MESSAGE);
  });
  it('White win when in draw in 4 card rank', () => {
    const whiteCards = groupCard(stringToCard('AH AS AC AD 4D'));
    expect(isContainFourOfAKind(whiteCards)).toBe(true);
    const blackCards = groupCard(stringToCard('3H 3S 3C 3D 4D'));
    expect(isContainFourOfAKind(blackCards)).toBe(true);
    expect(handleBothFourOfAKind(whiteCards, blackCards)).toBe(WHITE_WIN_MESSAGE);
  });
  it('White win when in draw in full house rank', () => {
    const whiteCards = groupCard(stringToCard('AH AS AC 2D 2D'));
    expect(isContainFullHouse(whiteCards)).toBe(true);
    const blackCards = groupCard(stringToCard('3H 3S 3C KD KD'));
    expect(isContainFullHouse(blackCards)).toBe(true);
    expect(handleBothFullHouse(whiteCards, blackCards)).toBe(WHITE_WIN_MESSAGE);
  });
  it('White win when in draw in flush rank', () => {
    const whiteCards = groupCard(stringToCard('2H 3H 4H 5H 10H'));
    expect(isContainFlush(whiteCards)).toBe(true);
    const blackCards = groupCard(stringToCard('2S 3S 4S 5S 9S'));
    expect(isContainFlush(blackCards)).toBe(true);
    expect(handleBothFlush(whiteCards, blackCards)).toBe(WHITE_WIN_MESSAGE);
  });
  it('White win when in draw in straight rank', () => {
    const whiteCards = groupCard(stringToCard('3H 4H 5H 6H 7H'));
    expect(isContainStraight(whiteCards)).toBe(true);
    const blackCards = groupCard(stringToCard('2S 3S 4S 5S 6S'));
    expect(isContainStraight(blackCards)).toBe(true);
    expect(handleBothStraight(whiteCards, blackCards)).toBe(WHITE_WIN_MESSAGE);
  });
  it('White win when in draw in 3 of a kind rank', () => {
    const whiteCards = groupCard(stringToCard('AH AS AC 3D 4D'));
    expect(isContainThreeOfAKind(whiteCards)).toBe(true);
    const blackCards = groupCard(stringToCard('2H 2S 2C 6D 4D'));
    expect(isContainThreeOfAKind(blackCards)).toBe(true);
    expect(handleBothThreeOfAKind(whiteCards, blackCards)).toBe(WHITE_WIN_MESSAGE);
  });
  it('White win when in draw in 2 pair rank', () => {
    const whiteCards = groupCard(stringToCard('AH AS 2C 2D 4D'));
    expect(isContainTwoPair(whiteCards)).toBe(true);
    const blackCards = groupCard(stringToCard('3H 3S 2C 2D 4D'));
    expect(isContainTwoPair(blackCards)).toBe(true);
    expect(handleBothTwoPair(whiteCards, blackCards)).toBe(WHITE_WIN_MESSAGE);
  });
  it('White win when in draw in 2 pair rank then use high card rule', () => {
    const whiteCards = groupCard(stringToCard('AS AH 2S 2H 5D'));
    expect(isContainTwoPair(whiteCards)).toBe(true);
    const blackCards = groupCard(stringToCard('AD AC 2D 2C 4D'));
    expect(isContainTwoPair(blackCards)).toBe(true);
    expect(handleBothTwoPair(whiteCards, blackCards)).toBe(WHITE_WIN_MESSAGE);
  });
  it('White win when in draw in pair rank', () => {
    const whiteCards = groupCard(stringToCard('AS AH 9S 6H 5D'));
    expect(isContainPair(whiteCards)).toBe(true);
    const blackCards = groupCard(stringToCard('2D 2C 3D 4C 4D'));
    expect(isContainPair(blackCards)).toBe(true);
    expect(handleBothPair(whiteCards, blackCards)).toBe(WHITE_WIN_MESSAGE);
  });
  it('White win when in draw in pair rank then use high card rule', () => {
    const whiteCards = groupCard(stringToCard('2S 2H JS QH AD'));
    expect(isContainPair(whiteCards)).toBe(true);
    const blackCards = groupCard(stringToCard('2D 2C JD QC KD'));
    expect(isContainPair(blackCards)).toBe(true);
    expect(handleBothPair(whiteCards, blackCards)).toBe(WHITE_WIN_MESSAGE);
  });
  it('White win when in draw in pair rank then use high card rule', () => {
    const whiteCards = groupCard(stringToCard('AS 2H 4S 5H 6D'));
    expect(isContainHighCard(whiteCards)).toBe(true);
    const blackCards = groupCard(stringToCard('8D 2C 4D 3C KD'));
    expect(isContainHighCard(blackCards)).toBe(true);
    expect(handleBothHighCard(whiteCards, blackCards)).toBe(WHITE_WIN_MESSAGE);
  });
  it('White win', () => {
    const whiteCards = 'AS AH 4S 5H 6D';
    const blackCards = '8D 2C 4D 3C KD';
    expect(playGame(whiteCards, blackCards)).toBe(WHITE_WIN_MESSAGE);
  });
  it('White win', () => {
    const whiteCards = 'AS 2H 4S 5H 6D';
    const blackCards = '8D 2C 4D 3C KD';
    expect(playGame(whiteCards, blackCards)).toBe(WHITE_WIN_MESSAGE);
  });
});
