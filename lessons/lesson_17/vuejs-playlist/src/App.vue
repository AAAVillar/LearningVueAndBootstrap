<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{greeting()}}</p>
  </div>
</template>

<script>
export default {
  
  data () {
    return {
      title:'Your first Vue file, how\'s that? '
    }
  },
  methods:{
    greeting:function(){
      return 'What\'s up Doc?'
    }
  }
}
</script>

<style>

</style>
