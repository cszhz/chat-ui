import { base } from "$app/paths";

export function starttgi(modelId : string
): void {
	console.log("start container, model id is "+modelId);

	const res = fetch(`${base}/tgi/starttgi?modelId=`+modelId)
    		.then((response) => response.text())
    		.then((body) => {
        	console.log(body);
    	}); 

	return;
}


export async function modelstatus(): string {
	let result="";
        const res = await fetch(`${base}/tgi/status`)
                .then((response) => response.text())
                .then((body) => {
                result=body;
        });
	return result;

}
