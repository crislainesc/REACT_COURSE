import { MongoClient } from "mongodb";

// api/new-meetup
// POST api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect('[MONGO BATABASE URL]');
    const db = client.db();

    const meetupsColletction = db.collection("meetups");

    const result = await meetupsColletction.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
