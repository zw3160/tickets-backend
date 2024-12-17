import tickets from '../DB/Ticket.js';

const isUserTypeMatch = (ticketUserType, userType) => ticketUserType === userType;
const isFilterMatch  = (ticket, filterText) => {
    return !filterText ? true :
     (ticket.title.toLowerCase().includes(filterText) ||ticket.description.toLowerCase().includes(filterText))
}

const TicketController = {
    get: (req, res) => {
        const userType = req.query.userType;
        const filterText = req.query.filter;
        const page = parseInt(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const filteredTickets = tickets.filter(ticket => {
            return isUserTypeMatch(ticket.userType, userType) && isFilterMatch(ticket, filterText.toLowerCase())
        });
        
        const startIndex = (page - 1) * limit;
        
        const endIndex = startIndex + limit;
        
        const paginatedTickets = filteredTickets.slice(startIndex, endIndex);
        
        res.json({ tickets: paginatedTickets, total: filteredTickets.length });
    }
  };
  
  export default TicketController;