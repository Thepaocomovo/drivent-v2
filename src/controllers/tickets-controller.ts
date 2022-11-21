import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";
import ticketsService from "@/services/tickets-service";
import httpStatus from "http-status";
// import enrollmentsService from "@/services/enrollments-service"; vou precisar disso aqui????

export async function getTicketTypes(req: AuthenticatedRequest, res: Response) {
  try {
    const allTicketsTypes = await ticketsService.getAllTicketsType();
    return res.status(httpStatus.OK).send(allTicketsTypes);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getTicketsByUserId(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const userTicket = await ticketsService.getAllUserTicketById(userId);
    return res.status(httpStatus.OK).send(userTicket);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function postNewTicket(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const ticketTypeId: number = req.body.ticketTypeId;

  try {
    const createdTicket = await ticketsService.createNewTicket(userId, ticketTypeId);
    return res.status(httpStatus.CREATED).send(createdTicket);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
