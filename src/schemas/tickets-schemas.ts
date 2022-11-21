import Joi from "joi";

export const createNewTicketSchema = Joi.object<{ticketTypeId: number}>({
  ticketTypeId: Joi.number().min(0).required()
});
