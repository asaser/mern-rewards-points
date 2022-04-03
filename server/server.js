const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT_NETWORK || 5000;

// middleware który łączy nas z MongoDB i parsuje dane na json
app.use(cors());
app.use(express.json());

const URI = process.env.ATLAS_URI;

const usersRoute = require('./routes/userRoutes')
app.use('/users', usersRoute);

mongoose.connect(URI, { 
    // flagi aby dodawać nowe url oraz indexy w MongoDB
    useNewUrlParser: true, 
    useUnifiedTopology: true
    }
)
.then(() => {
    app.listen(PORT, () => console.log(`Server running on ${PORT} port`))
}).catch((err) => {
    console.log(`Connection error: ${err}`)
});

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
