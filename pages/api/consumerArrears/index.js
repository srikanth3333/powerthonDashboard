import { connectToDatabase } from "../../../lib/mongodb";
import cacheData from "memory-cache";

export default async function handler(req, response) {
    
    const { database } = await connectToDatabase();
    const collection = database.collection("bill_data")
    if(req.method === "POST") {
      let query = {}
      let page = req.query.page;
  
      if(req.body.consumer_no) {
        query = {...query, "consumer_no": req.body.consumer_no};
      }

      if(req.body.consumer_no) {
        query = {...query, "consumer_no": req.body.consumer_no};
      }

      if(req.body.circle_name) {
        query = {...query, "Zone": req.body.circle_name};
      }
      
      if(req.body.division_name) {
        query = {...query, "Division": req.body.division_name};
      }

      if(req.body.region) {
        query = {...query, "Region": req.body.region};
      }

      if(req.body.location_code) {
        query = {...query, "location_code": parseInt(req.body.location_code)};
      }

      if(req.body.divisionId) {
        query = {...query, "Div_Id": parseInt(req.body.divisionId)};
      }

      if (req.body.startDate && req.body.startDate != null) {
        query = {...query, "bill_month": {$gte:new Date(req.body.startDate)}};
      }
  
      if (req.body.endDate && req.body.endDate != null) {
        query = {...query, "bill_month": {$lte:new Date(req.body.endDate)}};
      }
  
      if(req.body.startDate && req.body.endDate && req.body.startDate != null && req.body.endDate != null) {
        query = {...query, "bill_month": {$gte:new Date(req.body.startDate),$lte:new Date(req.body.endDate)}};
      }


      console.log(query)

      let totalCount = await collection.find({...query,arrear:{$gt:0}}).count();
      let data = await collection.aggregate(
        [
            {$match:{...query,arrear:{$gt:0}}},
            {$skip:page*20},
            {$limit:20},
            {
              $project: {
                    _id:0,consumer_no:1,bill_month:1,arrear:1,location_code:1
                },
            },
        ]).toArray();
      return response.status(200).json({totalCount: totalCount,data:data});
    }

}