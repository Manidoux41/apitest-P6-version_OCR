const mongoose = require('mongoose');


const dbconnect = process.env.MONGODB_CONNECTION

mongoose.set('strictQuery', true)
mongoose.connect(`mongodb+srv://${dbconnect}retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));