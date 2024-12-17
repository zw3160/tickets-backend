import tickets from '../DB/Ticket.js';

const TicketController = {
    get: (req, res) => {
        const userType = req.query.userType;
        const filterText = req.query.filter;
        const page = parseInt(req.query.page) || 1;
        const limit = 8;
        let filteredTickets = tickets.filter(ticket => {
            return (!userType || ticket.userType === userType) && ( !filterText || 
                (
                    ticket.title.toLowerCase().includes(filterText.toLowerCase()) ||         
                    ticket.description.toLowerCase().includes(filterText.toLowerCase())
                )
            )
        });
        
        const startIndex = (page - 1) * limit;
        
        const endIndex = startIndex + limit;
        
        const paginatedTickets = filteredTickets.slice(startIndex, endIndex);
        
        res.json({ tickets: paginatedTickets, total: filteredTickets.length });
        
    }
  };
  
  export default TicketController;