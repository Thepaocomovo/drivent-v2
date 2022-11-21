import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import {  getPaymentsById, postNewPayment } from "@/controllers";

const paymentsRouter = Router();

paymentsRouter
  .all("/*", authenticateToken)
  .get("/", getPaymentsById)
  .post("/", postNewPayment);

export { paymentsRouter };
