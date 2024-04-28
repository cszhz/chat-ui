import { base } from "$app/paths";
import { spawn } from 'child_process';


export const GET: RequestHandler = (async ({ url }) => {
	const modelId = url.searchParams.get('modelId');
	console.log(modelId);
	const command="/home/ubuntu/work/start.sh";
	//const modelId="mistralai/Mistral-7B-Instruct-v0.2";
	const instance=spawn(command, [modelId], {});
	instance.on("message", (msg) => {
  		console.log('msg:', msg);
	});

	return new Response("Invoke success.", { status: 200, headers: { "Content-Type": "text" } });
}) satisfies RequestHandler;
