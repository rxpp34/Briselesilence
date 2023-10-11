import io from 'socket.io-client';


const socket=io("http://172.70.8.6:3000")

function callAPI (endpointName, ...args) {
    return new Promise((res, rej) => {
        const idResponse = crypto?.randomUUID?.() ?? Math.random();
        socket.emit("api", endpointName, idResponse, args);
        const clear = () => {
            socket.removeAllListeners(`${idResponse}@success`);
            socket.removeAllListeners(`${idResponse}@error`);
        }
        socket.on(`${idResponse}@success`, (result) => {
            res(result);
            clear();
        })
        socket.on(`${idResponse}@error`, (err) => {
            rej(err);
            clear();
        })
    })
}


export default callAPI ; 