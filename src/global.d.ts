type CardValue = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
type CardType = "H" | "D" | "S" | "C";

type Card = {
  type: CardType;
  value: CardValue;
};

type GroupByCardType = {
  [key in CardType]: Number;
};
type GroupByCardValue = {
  [key in CardValue]: Number;
};

type Player = {
  name: string;
  cardOnHands: Card[];
  isWinner: boolean;
};
