import { mapping } from '../const';

export const groupCard = (cards: Card[]) =>
  cards.reduce(
    (pre, cur) => ({
      ...pre,
      [cur['type']]: pre[cur['type']] === undefined ? 1 : pre[cur['type']] + 1,
      [cur['value']]: pre[cur['value']] === undefined ? 1 : pre[cur['value']] + 1,
    }),
    {}
  );

export const stringToCard = (text: string): Card[] => {
  return text.split(' ').map(card => {
    if (card.length === 3)
      return {
        value: 10,
        type: card[2],
      } as Card;
    return {
      value: mapping[card[0]],
      type: card[1],
    } as Card;
  });
};
