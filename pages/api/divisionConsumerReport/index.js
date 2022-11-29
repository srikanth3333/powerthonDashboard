import { connectToDatabase } from "../../../lib/mongodb";

export default async function handler(req, response) {
    
    const { database } = await connectToDatabase();
    const collection = database.collection("consumerReport")

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

      let monthList = [
        {name:"December",date:"12",year:"2021"},
        {name:"November",date:"11",year:"2021"},
        {name:"April",date:"04",year:"2021"},
        {name:"March",date:"03",year:"2022"},
        {name:"July",date:"07",year:"2021"},
        {name:"September",date:"09",year:"2021"},
        {name:"October",date:"10",year:"2021"},
        {name:"May",date:"05",year:"2021"},
        {name:"June",date:"06",year:"2021"},
        {name:"August",date:"08",year:"2021"},
        {name:"January",date:"01",year:"2022"},
        {name:"February",date:"02",year:"2022"},

   ]
  //  let count = 0;
  //  monthList.map(async (item,i) => {
        
  //       let data =  await collection.aggregate([
  //           {$match:{bill_month: {$gte:new Date(`${item.year}-${item.date}-01`),$lte:new Date(`${item.year}-${item.date}-31`)}}},
  //           {$group:{_id:{division:"$Division",location:"$location_code"},count:{$sum:1},
  //               current_bill:{$sum:"$current_bill"},
  //               net_bill:{$sum:"$net_bill"},
  //               arrear:{$sum:"$arrear"},
  //           },},
  //           {$project:{_id:0,division:"$_id.division",location_code:"$_id.location",net_bill:"$net_bill",
  //               arrear:"$arrear",current_bill:"$current_bill",consumer:"$count",month:item.name,date: new Date(`${item.year}-${item.date}-01`)
  //           }}
  //       ]).toArray();
  //       await collectionInsert.insertMany(data)
  //       console.log('count')
  //       console.log(count)
  //       count += 1
  //  })
      
    //   return response.status(200).json({data:data});

    let data = await collection.aggregate([
      {$match:query},
      {$project:{_id:0,date:0}}
    ]).toArray();
    return response.status(200).json({data:data});

    }

}