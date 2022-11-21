import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";

export async function getTicketTypes(req: AuthenticatedRequest, res: Response) {
  console.log("oioioi");
    
  return res.sendStatus(200);
}

export async function getTicketsByUser(req: AuthenticatedRequest, res: Response) {
  res.send("GET: /tickets");
}

export async function postNewTicket(req: AuthenticatedRequest, res: Response) {
  res.send("POST: /tickets");
}
