import { AuthenticatedRequest } from "@/middlewares";
import { Request, Response } from "express";

export async function getTicketTypes(req: Request, res: Response) {
  console.log("oioioi");
    
  return res.sendStatus(200);
}

