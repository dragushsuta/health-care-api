import express from "express";
import { AuthMiddleware } from "../middlewares/authMiddleware.js";
import {
  CreateReport,
  GetReportByPetIdMonthAndYear,
} from "../handlers/reportHandlers.js";
export default function reportRoutes(services) {
  const router = express.Router();
  router.use(AuthMiddleware(services));

  router.post(`/`, CreateReport());
  router.get(`/pets/:petId`, GetReportByPetIdMonthAndYear());
  return router;
}
