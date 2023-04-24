<script>
import  {modificarMensaje, url} from "./services.js";
import Input from "./Input.svelte";
import Respuesta from "./Respuesta.svelte";
import Mensaje from "./Mensaje.svelte";

    class Chat {
        constructor(m, r) {
            this.mensaje = m;
            this.respuesta = r;
        }
        mensaje
        respuesta
    }

let chats = []

async function obtenerRespuesta(e) {
  let options = modificarMensaje(e.detail.texto)

  const respuesta = await fetch(url, options)
  const objetoRespuesta = await respuesta.json()

  let c = new Chat(e.detail.texto,objetoRespuesta.choices[0].message.content)
 

  chats = [...chats, c]
  return objetoRespuesta
}

</script>


<Input on:enviar={obtenerRespuesta}/>

{#each chats as c}
<Mensaje mensaje={c.mensaje}/>
<Respuesta respuesta={c.respuesta}/>
{/each}





