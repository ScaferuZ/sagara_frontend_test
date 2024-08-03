import express, { Request, Response } from "express"
import { PrismaClient } from "@prisma/client";
import StudentRouter from "./routes/student.route"

export const prisma = new PrismaClient();

const app = express();
const port = 3000;

async function main() {
  app.use(express.json());

  app.use("/api/v1/student", StudentRouter)

  app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ error: `Route ${req.originalUrl} not found` });
  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  })
}

main().then(async () => {
  await prisma.$connect();
}).catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1)
})
