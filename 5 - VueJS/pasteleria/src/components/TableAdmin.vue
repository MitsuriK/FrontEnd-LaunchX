<template>
    <h2>Ordenes</h2>
    <table style="width: 100%;">
        <tr>
            <th># Orden</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Especificaciones</th>
            <th>Sabores</th>
        </tr>
        <tr>
            <td align="center">{ num }</td>
            <td align="center">Emilio Montiel</td>
            <td align="center">2288******</td>
            <td align="center">emilyaestheticunde@gmail.com</td>
            <td align="center">Quiero el pastel grande, iré por el 5:30 P.M</td>
            <td align="center">
                <li>Mantequilla con chocolate</li>
                <li>Dominó</li>
            </td>
        </tr>
    </table><br><br>
</template>

<script>
export default {
    name: 'TableAdmin',
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    table, th, td {
        border: 1px solid black;
    }
    li {
        list-style: none;
    }
</style>