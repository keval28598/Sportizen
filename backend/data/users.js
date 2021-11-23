import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "codebusters",
    email: "codebusters@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "keval patel",
    email: "keval@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
