import { connectToDatabase } from "../../../lib/mongodb";

export default async function handler(req, response) {
    
    const { database } = await connectToDatabase();
    const collection = database.collection("arrearsReport")
    if(req.method === "POST") {
      let query = {}

      if(req.body.division) {
        query = {...query, "division": req.body.division};
      }

      if(req.body.month) {
        query = {...query, "month": req.body.month};
      }


      if (req.body.startDate && req.body.startDate != null) {
        query = {...query, "date": {$gte:new Date(req.body.startDate)}};
      }
  
      if (req.body.endDate && req.body.endDate != null) {
        query = {...query, "date": {$lte:new Date(req.body.endDate)}};
      }
  
      if(req.body.startDate && req.body.endDate && req.body.startDate != null && req.body.endDate != null) {
        query = {...query, "date": {$gte:new Date(req.body.startDate),$lte:new Date(req.body.endDate)}};
      }

      console.log(query)

      let data = await collection.aggregate([
        {$match:query},
        {$project:{_id:0}}
      ]).toArray();
      return response.status(200).json({data:data});
    }

}