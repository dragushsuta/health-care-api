import { Pet } from "../internal/db/pet.js";

const CreatePet = () => {
  return async (req, res) => {
    try {
      let profileImage = null;
      if (req.file) {
        profileImage = {
          data: req.file.buffer,
          contentType: req.file.mimetype,
        };
      }
      const { name, age, breedId, sex } = req.body;
      const pet = new Pet(req.user.id, name, age, breedId, sex, profileImage);
      const savedPet = await pet.save();
      res.status(201).json(savedPet);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};

const UpdatePet = () => {
  return async (req, res) => {
    try {
      let profileImage = null;
      if (req.file) {
        profileImage = {
          data: req.file.buffer,
          contentType: req.file.mimetype,
        };
      }
      const { name, age, breedId, sex } = req.body;
      const pet = new Pet(req.user.id, name, age, breedId, sex, profileImage);
      await pet.updateById(req.params.id);
      res.status(200).json(pet);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};

const GetPets = () => {
  return async (req, res) => {
    try {
      // console.log("here", req.user.id);
      const pets = await new Pet().getAll(req.user.id);
      res.status(200).json(pets);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};

const GetPet = () => {
  return async (req, res) => {
    try {
      const pet = await Pet.getById(req.params.id);
      res.status(200).json(pet);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};

export { CreatePet, GetPets, GetPet, UpdatePet };
