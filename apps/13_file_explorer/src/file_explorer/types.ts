export type Data = {
  name: string;
} & (
  | {
      type: "folder";
      children: Data[];
    }
  | {
      type: "file";
    }
);
