import { PrismaMariaDb } from "@prisma/adapter-mariadb"
import { PrismaClient } from "./src/generated/prisma"

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5,
})

const prisma = new PrismaClient({ adapter })

const contact = await prisma.contact.create({
  data: {
    name: "Muhammad Ihsan",
    email: "ihsan@gmail.com",
    phone: "081233456789",
  }
})

console.info(contact)