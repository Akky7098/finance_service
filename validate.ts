import * as Joi from 'joi';

const refundSchema = Joi.object({
    description: Joi.string().max(255).optional()
});



export { refundSchema};
