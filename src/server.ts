import { serverHttp } from "./app";

serverHttp.listen(3001, () => {
    console.log("-> Server running 3001");
});