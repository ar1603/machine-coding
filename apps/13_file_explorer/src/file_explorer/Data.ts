import { Data } from "./types";

export const data: Data = {
  name: "Project",
  type: "folder",
  children: [
    {
      name: "apps",
      type: "folder",
      children: [
        {
          type: "file",
          name: "app1",
        },
        {
          type: "file",
          name: "app1",
        },
        {
          type: "file",
          name: "app1",
        },
      ],
    },
    {
      name: "assets",
      type: "folder",
      children: [
        {
          name: "images",
          type: "folder",
          children: [
            {
              type: "file",
              name: "a.png",
            },
            {
              type: "file",
              name: "b.png",
            },
            {
              type: "file",
              name: "c.png",
            },
          ],
        },
        {
          type: "file",
          name: "app1",
        },
        {
          type: "file",
          name: "app1",
        },
      ],
    },
  ],
};
