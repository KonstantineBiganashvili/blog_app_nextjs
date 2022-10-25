import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      !name.trim() ||
      !message ||
      !message.trim()
    ) {
      res.status(422).json({ message: 'Invalid Input!' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        `mongodb+srv://${process.env.dbUser}:${process.env.dbPassword}@${process.env.dbCluster}.s1lrivz.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`
      );
    } catch (error) {
      res.status(500).json({ message: 'Connection Could Not Be Established' });
      return;
    }

    const db = client.db();

    try {
      await db.collection('messages').insertOne(newMessage);
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Message Could Not Be Stored!' });
      return;
    }

    client.close();

    res.status(201).json({ message: 'Message Received Successfully!' });
  }
};

export default handler;
