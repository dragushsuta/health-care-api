import { Reminder } from "../internal/db/reminder.js";

const GetAllRemindersByPetId = () => {
  return async (req, res) => {
    try {
      const { petId } = req.params;
      const reminders = await Reminder.getAllByPet(petId);
      res.status(200).json(reminders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};

const GetAllRemindersNextWeekPetId = () => {
  return async (req, res) => {
    try {
      const { petId } = req.params;
      const reminders = await Reminder.getNextWeek(petId);
      res.status(200).json(reminders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};

export { GetAllRemindersByPetId, GetAllRemindersNextWeekPetId };
