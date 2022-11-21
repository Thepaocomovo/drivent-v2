import { prisma } from "@/config";
import { TicketType, Ticket } from "@prisma/client";

async function findTicketTypes() {
  return prisma.ticketType.findMany();
}

async function findAllUserTickets(enrollmentId: number) {
  return prisma.ticket.findFirst({
    where: { enrollmentId },
    include: { TicketType: true }
  });
}

async function insertNewTicket(enrollmentId: number, ticketTypeId: number) {
  return prisma.ticket.create({
    data: {
      ticketTypeId,
      enrollmentId,
      status: "RESERVED"
    },
    include: {
      TicketType: true,
    }
  });
}

const ticketsRepository = { findTicketTypes, findAllUserTickets, insertNewTicket };

export default ticketsRepository;
