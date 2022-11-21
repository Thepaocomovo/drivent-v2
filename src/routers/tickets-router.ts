import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import {  getTicketsByUser, getTicketTypes,  } from "@/controllers";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/types", getTicketTypes)
  .get("/", getTicketsByUser);
//   .post("/", /*validateBody(createTicketSchema),*/ postNewTicket);

export { ticketsRouter };
