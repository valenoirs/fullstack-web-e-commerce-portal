import { model, Schema } from "mongoose";
import { IAdmin } from "../interface/admin";

const AdminSchema: Schema = new Schema<IAdmin>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    description: {
      type: String,
      required: true,
      default: "Deskripsi singkat toko.",
    },
    certificatePIRT: { type: String, required: true },
    certificateHalal: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: false },
    isOpen: { type: Boolean, required: true, default: false },
    address: { type: String, default: " ", required: true },
    rated: { type: String, required: true, default: "3" },
    rating: { type: [Number], required: true, default: [3] },
  },
  {
    timestamps: true,
  }
);

export const Admin = model<IAdmin>("Admin", AdminSchema);
