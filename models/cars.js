const { Schema, model } = require('mongoose');

const carsSchema = new Schema(
  {
    year: { type: Number, required: [true, 'Enter the car year'] },
    make: { type: String, required: [true, 'Enter the car make'] },
    model: { type: String, required: [true, 'Enter the car model'] },
    type: {
      type: String,
      required: [true, 'Enter the car type'],
      enum: [
        'Microcar',
        'Subcompact Car',
        'Compact Car',
        'Mid-size Car',
        'Full-size Car',
        'SUV',
        'Sedan',
        'Crossover',
        'Convertible',
        'Sports Car',
        'Luxury Car',
        'Electric Car',
        'Hybrid Car',
      ],
    },
    img: { type: String, default: '' },
    description: { type: String, default: '' },
    fuelConsumption: { type: String, default: '0.0' },
    engineSize: { type: String, required: [true, 'Enter the car engine size'] },
    accessories: { type: [String], default: [] },
    functionalities: { type: [String], default: [] },
    rentalPrice: { type: String, required: [true, 'Enter the car price'] },
    rentalCompany: { type: String, default: '' },
    address: { type: String, default: '' },
    rentalConditions: { type: String, default: '' },
    mileage: {
      type: Number,
      default: 0,
      required: [true, 'Enter the car mileage'],
    },
  },
  { versionKey: false, timestamps: true }
);

const Cars = model('car', carsSchema);
module.exports = { Cars };
