import { NextResponse } from "next/server";
import Aircraft from "@/models/Aircraft"; 
import {connectToMongoDB} from "@/lib/db"; 

export async function GET(_: Request, { params }: { params: { aircraftId: string  } }) {

  try {
    await connectToMongoDB();

    let aircraftId = params?.aircraftId;
  
      if (!aircraftId)
          return NextResponse.json({ message: "please provide aircraftId" }, { status: 403 });
      
      const aircraft = await Aircraft.findOne({ _id: aircraftId });
     
      return NextResponse.json({         
        data: aircraft,
      }, { status: 200 });

    } catch (error) {
      console.error("Error :", error);
      return NextResponse.json({ err:error,message: "Internal server error" }, { status: 500 });
    }
  };