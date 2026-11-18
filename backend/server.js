import app from "./app.js"
import config from "./config/app.js";
const port = config.PORT;

app.listen(port,()=>{
    console.log(`server running: ${port}`);
})