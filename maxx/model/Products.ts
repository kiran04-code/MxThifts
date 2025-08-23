import { image } from "framer-motion/client"
import mongoose from "mongoose"


export interface IProduct {
    _id:string
  name:string,
  description:string,
  shirt:string,
  price:number,
  size:string,
  offerPrice:number,
  length:string,
  chest:string
  category:string
  instock:boolean
  images:{image:string}[]
}

const ProductSchema = new mongoose.Schema<IProduct>({
  name:{
    type:String,
    require:true
  },
  description:{
    type:String,
    require:true
  },
  category:{
    type:String,
    require:true
  },
  price:{
    type:Number,
    require:true
  },
  size:{
    type:String,
    require:true
  },
  offerPrice:{
    type:Number,
    require:true
  },
  length:{
    type:String,
    require:true
  },
  chest:{
    type:String,
    require:true
  },
 images:[
  {
    image:{
      type:String,
      require:true
  }
}
],
instock:{
    type:Boolean,
    default:true
}
})


const CretaetdProduct = mongoose.models.CretaetdProducts || mongoose.model("CretaetdProducts",ProductSchema)
export default CretaetdProduct