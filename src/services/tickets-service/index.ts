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

  if (userTickets.length === 0) throw notFoundError();

  return userTickets;
}

const ticketsService = { getAllTicketsType, getAllUserTicketById };

export default ticketsService;
