import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.Company.create({
    data: {
      Name: "Poplify",
      Company_Description:
        "We research and build World Class software, Quickly and Cost Effectively with the Top 5% local and off shore talent",
        email : "lokesh.rathee@poplify.com",
        password : "123456789",
        Location : "Panchkula",
        Contact_Number : "123456789",
        Organisation : "Poplify",
        Designation : "Consultant",
    },
  });
}
