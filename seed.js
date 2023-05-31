const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.Company.create({
    data: {
      Name: "Poplify",
      Company_Description:
        "We research and build World Class software, Quickly and Cost Effectively with the Top 5% local and off shore talent",
      email: "lokesh.rathi@poplify.com",
      password: "123456789",
      Location: "Panchkula",
      Contact_Number: "123456789",
      Organisation: "Poplify",
      Designation: "Consultant",
    },
  });

  await prisma.User.create({
    data: {
      name: "lokesh",
      email: "lokesh.rathee@poplify.com",
      password: "123456789",
      Current_Company: "poplify",
      Location: "sonipat",
      Contact_Number: "123456789",
      is_Company: false,
      is_Social: false,
    },
  });

  await prisma.Job.create({
    data: {
      Title: "Software Engineeer",
      Referral_Payout: 10000,
      Number_of_positions: 2,
      Location: "Noida",
      Salary: 450000,
      Joining_Date: new Date("2023-05-30"),
      Status: "Inactive",
    },
  });

  await prisma.User_Job.create({
    data: {
      candidate_email: "chirag@poplify.com",
      application_status: "Accept",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
