const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function main() {
  await prisma.User_Job.deleteMany({})
  await prisma.Job.deleteMany({}),
    await prisma.Company.deleteMany({});
  await prisma.User.deleteMany({});
  const companys = await prisma.Company.create({
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
  // console.log(companys)
  const Users = await prisma.User.create({
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
  const Jobs = await prisma.Job.create({
    data: {
      Title: "Software Engineeer",
      Referral_Payout: 100,
      Number_of_positions: 2,
      Location: "Noida",
      Salary: 450000,
      Joining_Date: new Date("2023-05-30"),
      Status: "Inactive",
      // company : companys.id,
      company: {
        connect: {
          // Connect the job to the newly created company
          id: companys.id,
        },
      },
    },
  });
  await prisma.User_Job.create({
    data: {
      candidate_email: "chirag@poplify.com",
      application_status: "Accept",
      user: {
        connect: {
          id: Users.id
        }
      },
      job: {
        connect: {
          id: Jobs.id,
        }
      }
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



//------------earlier process-----------------

/*const { PrismaClient } = require("@prisma/client");
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

  await prisma.job.create({
    data: {
      Title: 'Software Engineer',
      Referral_Payout: 10000,
      Number_of_positions: 2,
      Location: 'Noida',
      Salary: 450000,
      Joining_Date: new Date('2023-05-30T00:00:00.000Z'),
      Status: 'Inactive',
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

*/

/*
  Title: 'Software Engineer',
      Referral_Payout: 10000,
      Number_of_positions: 2,
      Location: 'Noida',
      Salary: 450000,
      Joining_Date: new Date('2023-05-30T00:00:00.000Z'),
      Status: 'Inactive',
      company: {
        create: {
          Name: "Poplify",
          Company_Description:
            "We research and build World Class software, Quickly",
          email: "lokesh.rathi@poplify.com",
          password: "123456789",
          Location: "Panchkula",
          Contact_Number: "123456789",
          Organisation: "Poplify",
          Designation: "Consultant",
          Linkedin_Profiles: 'Company LinkedIn profiles',
          */