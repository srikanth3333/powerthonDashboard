import { connectToDatabase } from "../../../lib/mongodb";


export default async function handler(req, response) {

    const { database } = await connectToDatabase();
    const collection = database.collection("pay_oct_mar_2022")
    if(req.method === "POST") {
      let query = {}
      let page = req.query.page;
  
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

      
      let totalCount = await collection.find(query).count();
      let data = await collection.aggregate(
        [
            {$match:query},
            {$skip:page*20},
            {$limit:20},
            {
              $project: {
                    _id: 0,
                },
            },
            // {$sort:{"delay":1}}
        ]).toArray();
      return  response.status(200).json({totalCount: totalCount,data:data});
    }
   
}