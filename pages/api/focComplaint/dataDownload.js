import { connectToDatabase } from "../../../lib/mongodb";

export default async function handler(req, response) {
    
    if(req.method == "POST") {
      let query = {}
      let page = req.query.page;
      const { database } = await connectToDatabase();
      const collection = database.collection("FOC_ivrs_mobileno")

      if (req.body.startDate && req.body.startDate != null) {
        query = {...query, "complaint_reg_dt": {$gte:new Date(req.body.startDate)}};
      }

      if(req.body.feeder_type) {
        query = {...query, "feeder_type": req.body.feeder_type};
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

      if(req.body.minutes) {
        query = {...query, "delay": {$gte:parseInt(req.body.minutes)}}
      }

      let data = await collection.aggregate(
        [
          {$match:query},
          {$skip:page*5000},
          {$limit:5000},
          {
            $project: {
                  _id: 0,
                  "region_name": 1,
                  "circle_name": 1,
                  "division_name": 1,
                  "subdivision_name":1,
                  "dc_name": 1,
                  "ss_name": 1,
                  "feeder_name": 1,
                  "feeder_cat": 1,
                  "feeder_type": 1,
                  "block_name": 1,
                  "area_name": 1,
                  "colony_name": 1,
                  "full_complaint_id": 1,
                  "complaint_reg_dt": 1,
                  "closed_ts": 1,
                  "category": 1,
                  "type": 1,
                  "circle_name":1,
                  "ivrs":1,
                  "delay":1,
              },
          },
          {$sort:{"delay":1}}
        ]).toArray();
      response.status(200).json({data: data});
    }
    
}