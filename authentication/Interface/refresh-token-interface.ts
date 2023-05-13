import { User } from "../schema/user.schema";
import { Document } from "mongoose";

export interface RefreshToken extends Document {
    userId: User;
    refreshToken: string;
}