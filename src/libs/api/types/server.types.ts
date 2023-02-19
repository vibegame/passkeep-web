export type User = {
  id: string;
  email: string;
};

export type Clue = {
  id: string;
  title: string;
  userId: string;
};

export type ClueField = {
  id: string;
  title: string;
  value: string;
  secret: boolean;
  clueId: string;
};
