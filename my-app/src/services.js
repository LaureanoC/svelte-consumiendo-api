export const url = 'https://openai80.p.rapidapi.com/chat/completions';



export function modificarMensaje(texto){
    let op = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '6fb791a089msh5642b40d3f10250p1b63f1jsn60b37a4a0b02',
            'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
        },
        body:JSON.stringify( {
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: `${texto}`,
                }
            ]
        })
    };

    return op
}

/*
{#await obtenerRespuesta()}
<p>Espere unos segundos</p>
{:then data}
{console.log(data.choices[0].message.content)}
{/await}*/
