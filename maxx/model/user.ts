import mongoose from "mongoose";
export interface IAddress {
   address1: string,
   address2?: string,
   city: string,
   pincode: number,
   state: string,

}
export interface IUser {
   name: string,
   email: string,
   password: string
   number: Number
   address: IAddress[]
   addressSubmit:boolean
}

const UserSchema = new mongoose.Schema<IUser>({
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   number: {
      type: Number,
   },
    addressSubmit:{
      type:Boolean,
      default:false
   },
   address: [
      {
         address1: { type: String, required: true },
         address2: { type: String },
         city: { type: String, required: true },
         state: { type: String, required: true },
         pincode: { type: Number, required: true },
      }
   ]
  
})

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema)

export default User