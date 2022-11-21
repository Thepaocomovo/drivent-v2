import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { getTicketTypes, getTicketsByUserId, postNewTicket } from "@/controllers";
import { createNewTicketSchema } from "@/schemas";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/types", getTicketTypes)
  .get("/", getTicketsByUserId)
  .post("/", validateBody(createNewTicketSchema), postNewTicket);

export { ticketsRouter };
