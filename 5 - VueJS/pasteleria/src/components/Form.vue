<template>
    <form action="./shopping.html">
        <fieldset>
            <legend>Place your Order</legend>
            <label for="nombre">Nombre:</label><br>
            <input type="text" id="nombre"><br><br>

            <label for="Phone">Teléfono:</label><br>
            <input type="tel" name="tel" maxlength="10" id="phone"><br><br>

            <label for="email">Email:</label><br>
            <input type="email" name="email" id="email"><br><br>

            <label for="specs">Especificaciones:</label><br>
            <textarea name="specs" id="specs" cols="30" rows="5" style="resize: none;"></textarea><br><br>

            <label for="flavors">Selecciona tus sabores:</label><br>
            <input class="single-checkbox" type="checkbox" value="mantequillaChoco" id="mantequillaChoco">
            <label for="mantequillaChoco">Mantequilla con chocolate</label>
            <input class="single-checkbox" type="checkbox" value="chocoTradi" id="chocoTradi">
            <label for="chocoTradi">Chocolate tradicional</label>
            <input class="single-checkbox" type="checkbox" value="marmol" id="marmol">
            <label for="marmol">Mármol</label><br><br>
            <input class="single-checkbox" type="checkbox" value="domino" id="domino">
            <label for="domino">Dominó</label>
            <input class="single-checkbox" type="checkbox" value="cocoMere" id="cocoMere">
            <label for="cocoMere">Coco con merengue</label>
            <input class="single-checkbox" type="checkbox" value="chocoCoco" id="chocoCoco">
            <label for="chocoCoco">Choco coco</label><br><br>
            
            <input type="submit" value="Enviar">
        </fieldset>
    </form>
    <br><br>
</template>

<script>import { limit } from "@/helpers/limit"

export default {
    name: 'Form',
    mounted() {
        limit()
    },
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>