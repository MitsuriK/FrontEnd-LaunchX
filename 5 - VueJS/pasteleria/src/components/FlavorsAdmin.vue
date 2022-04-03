<template>
    <h2>Sabores:</h2>
    <ul>
        <li>Mantequilla con chocolate: { num }</li>
        <li>Chocolate tradicional: { num }</li>
        <li>Mármol: { num }</li>
        <li>Dominó: { num }</li>
        <li>Coco con merengue: { num }</li>
        <li>Choco coco: { num }</li>
    </ul>
</template>

<script>
export default {
    name: 'FlavorsAdmin',
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    li {
        list-style: none;
    }
</style>