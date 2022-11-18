import { connectToDatabase } from "../../../lib/mongodb";


export default async function handler(req, response) {

    const { database } = await connectToDatabase();
    
    if(req.method === "POST") {
      let query = {}
      let dbName = "bill_complaint_ivrs_mobileno"

      if(req.body.db) {
        dbName = req.body.db.toString()
      }
      const collection = database.collection(dbName)
      console.log(dbName)
      if(req.body.division_name) {
        query = {...query, "division_name": req.body.division_name};
      }

      if(req.body.subdivision_name) {
        query = {...query, "subdivision_name": req.body.subdivision_name};
      }
      if(req.body.category) {
        query = {...query, "category": req.body.category};
      }

      if(req.body.sub_category) {
        query = {...query, "sub_category": req.body.sub_category};
      }

      if(req.body.circle_name) {
        query = {...query, "circle_name": req.body.circle_name};
      }

      if(req.body.region) {
        query = {...query, "region": req.body.region};
      }

      if(req.body.dc_name) {
        query = {...query, "dc_name": req.body.dc_name};
      }

      if(req.body.feeder_type) {
        query = {...query, "feeder_type": req.body.feeder_type};
      }
  
      console.log('query')
      console.log(query)

      let data = await collection.aggregate(
        [
            {$match:query},
            {$group: {_id: 1, division:{$addToSet:"$division_name"}, subdivision:{$addToSet:"$subdivision_name"}, 
                category:{$addToSet:"$category"}, sub_category:{$addToSet:"$sub_category"}, circle_name:{$addToSet:"$circle_name"}, 
                region:{$addToSet:"$region_name"}, dc_name: {$addToSet:"$dc_name"}, feeder_type: {$addToSet:"$feeder_type"},
                zone: {$addToSet:"$Zone"},bill_division: {$addToSet:"$Division"},
              }}, 
            {$project: {_id:0, division:1, subdivision:1, category:1, sub_category:1, 
              circle_name:1, region:1, dc_name:1,feeder_type:1,bill_division:1,zone:1}}
      ]).toArray();

      return response.status(200).send(data);
    }
}