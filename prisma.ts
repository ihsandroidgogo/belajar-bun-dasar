import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const contact = await prisma.contact.create({
    data: {
        name: "Muhammad Ihsan",
        email: "ihsan@gmail.com",
        phone: "081233456789",
    }
});

console.info(contact)