import { prisma } from "@/config";
import { TicketType, Ticket } from "@prisma/client";

async function findTicketTypes() {
  return prisma.ticketType.findMany();
}

async function findAllUserTickets(enrollmentId: number) {
  return prisma.ticket.findMany({
    where: { enrollmentId },
    include: { TicketType: true }
  });
}

const ticketsRepository = { findTicketTypes, findAllUserTickets };

export default ticketsRepository;
