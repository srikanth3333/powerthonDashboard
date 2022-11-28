import { connectToDatabase } from "../../../lib/mongodb";

export const config = {
  api: {
    externalResolver: true,
  },
}

export default async function handler(req, response) {
    
    if(req.method == "POST") {
      let query = {}
      let page = req.query.page;
      const { database } = await connectToDatabase();
      const collection = database.collection("bill_complaint_ivrs_mobileno")

      if (req.body.startDate && req.body.startDate != null) {
        query = {...query, "complaint_reg_dt": {$gte:new Date(req.body.startDate)}};
      }

      if(req.body.category) {
        query = {...query, "feeder_type": req.body.category};
      }

      if(req.body.minutes) {
        query = {...query, "delay": parseInt(req.body.minutes)};
      }

      if(req.body.circle_name) {
        query = {...query, "circle_name": req.body.circle_name};
      }

      if(req.body.division_name) {
        query = {...query, "division_name": req.body.division_name};
      }

      if(req.body.subdivision_name) {
        query = {...query, "subdivision_name": req.body.subdivision_name};
      }

      if (req.body.endDate && req.body.endDate != null) {
        query = {...query, "complaint_reg_dt": {$lte:new Date(req.body.endDate)}};
      }

      if (req.body.endDate && req.body.endDate != null) {
        query = {...query, "complaint_reg_dt": {$lte:new Date(req.body.endDate)}};
      }

      if(req.body.startDate && req.body.endDate && req.body.startDate != null && req.body.endDate != null) {
        query = {...query, "complaint_reg_dt": {$gte:new Date(req.body.startDate),$lte:new Date(req.body.endDate)}};
      }

      console.log(query)

      
      let totalCount = await collection.find(query).count();
      let data = await collection.aggregate(
        [
            {$match:query},
            {$group: {_id:"$sub_category", 
                complaint_Greater_Than_Days:{$sum:{
                    $cond: { if: { $gt: [ "$delay", 7200 ] }, then: 1, else: 0 },
                }}, 
                complaint_Less_Than_Days:{$sum:{
                    $cond: { if: { $lt: [ "$delay", 7200 ] }, then: 1, else: 0 },
                }},
                count:{$sum:1}}},
                {$project: {_id:1,complaint_Greater_Than_Days:1,complaint_Less_Than_Days:1,count:1,
                  percentage:{$round:{$multiply:[{$divide:["$count",totalCount]},100]}}}}
        ]).toArray();
        Promise.all([totalCount,data]).then(() => response.status(200).json({totalCount: totalCount,data: data}))
    }
}