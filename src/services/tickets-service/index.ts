import ticketsRepository from "@/repositories/tickets-repository";
import { notFoundError } from "@/errors";
import enrollmentRepository from "@/repositories/enrollment-repository";

async function getAllTicketsType() {
  const allTicketsTypes = await ticketsRepository.findTicketTypes();

  return allTicketsTypes;
}

async function getAllUserTicketById(userId: number) {
  const userEnrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!userEnrollment) throw notFoundError();

  const userTickets = await ticketsRepository.findAllUserTickets(userEnrollment.id);

  if (!userTickets) throw notFoundError();

  return userTickets;
}

async function createNewTicket( userId: number, ticketTypeId: number ) {
  const userEnrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!userEnrollment) throw notFoundError();

  const createdTicket = await ticketsRepository.insertNewTicket(userEnrollment.id, ticketTypeId);

  return createdTicket;
}

const ticketsService = { getAllTicketsType, getAllUserTicketById, createNewTicket };

export default ticketsService;
