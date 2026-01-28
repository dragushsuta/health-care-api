import express from "express";
import { AuthMiddleware } from "../middlewares/authMiddleware.js";
import {
  GetAllRemindersByPetId,
  GetAllRemindersNextWeekPetId,
} from "../handlers/reminderHandlers.js";
export default function reminderRoutes(services) {
  const router = express.Router();
  router.use(AuthMiddleware(services));

  router.get("/pet/:petId", GetAllRemindersByPetId());
  router.get("/pet/:petId/week", GetAllRemindersNextWeekPetId());

  return router;
}
