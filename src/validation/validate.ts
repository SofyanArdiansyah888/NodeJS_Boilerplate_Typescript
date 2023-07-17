import Joi from "joi";
import {Request} from "express";

const validate = (schema: Joi.Schema, request: Request) => {
    const result = schema.validate(request);
    if (result.error) {
        throw result.error;
    } else {
        return result.value;
    }
}

export {validate}