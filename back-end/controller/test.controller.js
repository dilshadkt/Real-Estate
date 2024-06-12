import { Prisma } from "@prisma/client";

export const shouldBeLogedIn = (req, res) => {
  console.log(req.userId);
  res.status(200).json({ message: "user is loged" });
};
