import mongoose from "mongoose";
// this might get changed in the future according to
// what the pdf will be like (from what we decide)
const VaccinationSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const VaccinationModel = mongoose.model("Vaccination", VaccinationSchema);

class Vaccination {
  constructor(type, date, place) {
    this.type = type;
    this.date = date;
  }
  async save() {
    const vaccination = new VaccinationModel(this);
    this.id = String(vaccination._id);
    return await vaccination.save();
  }
  async getById(id) {
    return await VaccinationModel.findById(id);
  }
  async getAll() {
    return await VaccinationModel.find();
  }
}

export { Vaccination, VaccinationModel };
