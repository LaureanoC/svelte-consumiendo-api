<script>
    import { createEventDispatcher } from "svelte";


let dispatch = createEventDispatcher();
let texto = "";

function enviar(e){
    if(e.key === "Enter"){
        dispatch("enviar", {
            texto,
            
        })
        texto="";
    } 
   
}

</script>

<input type="search" on:keydown={enviar} bind:value={texto} placeholder="Escribe un mensaje..."/>

<style>
    input{
       all: unset;
       background-color: rgb(94, 45, 61);
       padding: 1rem;
       width: 20rem;
       color:wheat;
       font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style>