export type Field = {
  title: string;
  value: string;
  secret: boolean;
};

export type FormValues = {
  title: string;
  fields: Field[];
};
