import { base } from "$app/paths";
import * as net from 'net';
import http from 'http';


export const GET: RequestHandler = (async () => {

function checkWebsite() {
   const url= "http://127.0.0.1:8080"
   return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      if (res.statusCode === 200) {
        resolve(true);
      } else {
        resolve(false);
      }
    }).on('error', (e) => {
      resolve(false);
    });
  });
}

  let result = false;
  let message="Available";
  result=await checkWebsite();
  if (result){
       message="Available";
  }
  else {
      message="Model server is not ready";
  }

  return new Response(message, { status: 200, headers: { "Content-Type": "text" } });
}) satisfies RequestHandler;

/*
export const GET: RequestHandler = (async () => {
	const tgi= "127.0.0.1"
	const port=8080
	//console.log(tgi);
	let message="Available";
	const socket = new net.Socket();

  	socket.setTimeout(500); 

  	socket.on('timeout', () => {
	    message="Model server is not ready";
    	    socket.destroy();
  	});

	socket.on('error', () => {
	    message="Model server is not ready";
            socket.destroy();
        });

	//not accurate, when server is starting, it shows connect
	socket.on('connect', () => {
            message="Available";
            socket.destroy();
        });

  	socket.connect(port, tgi, () => {
    	socket.end();
  	});
  await new Promise(f => setTimeout(f, 1000));
  //console.log(message);
  return new Response(message, { status: 200, headers: { "Content-Type": "text" } });


}) satisfies RequestHandler;

*/

