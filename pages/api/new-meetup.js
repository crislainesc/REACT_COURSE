import { MongoClient } from 'mongodb'
import mongoUrl from '../../services/mongoConect'

// api/new-meetup
// POST api/new-meetup

function handler(req, res) {
   if (req.method === 'POST') {
      const data = req.body;

      const client = await MongoClient.connect(mongoUrl);
      const db = client.db();

      const meetupsColletction = db.collection('meetups');

      const result = await meetupsColletction.insertOne(data);

      console.log(result);

      client.close();

      res.status(201).json({message: 'Meetup inserted!'});

   }
}

export default handler;