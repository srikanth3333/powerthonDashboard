import { connectToDatabase } from "../../../lib/mongodb";

export default async function handler(req, response) {
    
    if(req.method == "POST") {
      let query = {}
      let page = req.query.page;
      const { database } = await connectToDatabase();
      const collection = database.collection("pay_oct_mar_2022")

      if (req.body.startDate && req.body.startDate != null) {
        query = {...query, "posting_date": {$gte:new Date(req.body.startDate)}};
      }
  
      if(req.body.consumerNo) {
        query = {...query, "consumer_no": req.body.consumerNo};
      }
  
      if (req.body.endDate && req.body.endDate != null) {
        query = {...query, "posting_date": {$lte:new Date(req.body.endDate)}};
      }
  
      if (req.body.endDate && req.body.endDate != null) {
        query = {...query, "posting_date": {$lte:new Date(req.body.endDate)}};
      }
  
      if(req.body.startDate && req.body.endDate && req.body.startDate != null && req.body.endDate != null) {
        query = {...query, "posting_date": {$gte:new Date(req.body.startDate),$lte:new Date(req.body.endDate)}};
      }

      console.log(query)

      let data = await collection.aggregate(
        [
          {$match:query},
          {$skip:page*5000},
          {$limit:5000},
          {
            $project: {
                  _id: 0,
              },
          },
        ]).toArray();
      return response.status(200).json({data: data});
    }
    
}