import {prismaClient} from "../application/database";
import {validate} from "../validation/validate";
import {registerUserValidation} from "../validation/user-validation";
import {Request} from "express";
import {ResponseError} from "../error/response-error";
import {hashSync} from 'bcrypt';

const register = async (request: Request) => {
    const user = validate(registerUserValidation,request)

    const countUser = await prismaClient.user.count({
        where: {
            username: user.username
        }
    });
    if(countUser > 0){
        throw new ResponseError(400,"Username already exists");
    }

    return prismaClient.user.create({
        data: {
            username: user.username,
            password: hashSync(user.password,10)
        },
        select: {
            username: true,
            email: true
        }
    });

}

export default {
    register
}