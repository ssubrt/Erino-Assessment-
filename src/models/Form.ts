import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  company: string;
  jobTitle: string;
}

const ContactSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    company: { type: String, required: true },
    jobTitle: { type: String, required: true },
  },
  { timestamps: true }
);

const Contact =  mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);
export default Contact;
