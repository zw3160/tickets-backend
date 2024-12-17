import express from "express";
import TicketController from "../Controllers/TicketController.js";

const TicketRouter = express.Router();

TicketRouter.get("/", TicketController.get);

export default TicketRouter;