import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();


// exemple using db to create a snippet
// db.snippet.create(
//     {
//     data: {
//         title: "title",
//         code :"const abc = () => {}"
// }
// }
// )