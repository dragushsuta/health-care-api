import { Allergy } from "../internal/db/allergies.js";

const CreateAllergy = () => async (req, res) => {
  try {
    const { petId, food, symptoms, severity, notes } = req.body;
    console.log(symptoms);
    const newAllergy = new Allergy(petId, food, symptoms, severity, notes);
    await newAllergy.save();
    res.status(201).json(newAllergy);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const GetAllergiesByPetId = () => async (req, res) => {
  try {
    const petId = req.params.id;
    console.log(req.params.id);
    const allergies = await Allergy.getAllAllergies(petId);
    res.status(200).json(allergies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { CreateAllergy, GetAllergiesByPetId };
