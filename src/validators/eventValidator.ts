import * as Joi from 'joi'

export default Joi.object({
  name: Joi.string().required().max(50).messages({
    'string.max': "The name field exceeds the 50-character limit.",
  }),
})
