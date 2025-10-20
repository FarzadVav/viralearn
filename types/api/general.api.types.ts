export type CategoryT = {
  id: number;
  name: string;
  children: CategoryT[];
}

export type FaqT = {
  id: number;
  title: string;
  description: string
}