const { MongoClient } = require("mongodb");

async function testConnection(uri, label) {
  const client = new MongoClient(uri);
  try {
    console.log(`Connecting to MongoDB using ${label}...`);
    await client.connect();
    console.log(`Connected successfully using ${label}!`);
    const db = client.db("PetShop_db");
    const collections = await db.listCollections().toArray();
    console.log("Collections in PetShop_db:", collections.map(c => c.name));
    return true;
  } catch (err) {
    console.error(`Connection failed using ${label}:`, err.message);
    return false;
  } finally {
    await client.close();
  }
}

async function run() {
  const uri1 = "mongodb+srv://PetShop_dbv:3QAfivnv8n0YJQGa@cluster0.srjooxo.mongodb.net/?appName=Cluster0";
  const uri2 = "mongodb+srv://MealCraft_db:jhODbxz14eEgezRO@cluster0.srjooxo.mongodb.net/?appName=Cluster0";
  
  const success1 = await testConnection(uri1, "PetShop_dbv credentials");
  if (!success1) {
    await testConnection(uri2, "MealCraft_db credentials");
  }
}

run();
