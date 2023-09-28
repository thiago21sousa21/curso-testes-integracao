import prisma from "./../../src/database"

export const userTest = ()=>{
    return {
        email: "teste@teste.com.br",
        password: "teste"
      }
}

export const createUserTest = async()=>{
    return await prisma.user.create({
        data:userTest()
    })
}

export const createManyUserTest = async()=>{
    const array = [];
    for(let i = 1 ; i <= 2; i++){
        array.push({
            ...userTest(),
            email: `teste${i}@teste.com.br`
        })
    }
    return await prisma.user.createMany({
        data:array
    })
}