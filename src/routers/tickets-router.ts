import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import {  getTicketTypes } from "@/controllers";

const ticketsRouter = Router();

ticketsRouter
  .get("/types", getTicketTypes);

export { ticketsRouter };
