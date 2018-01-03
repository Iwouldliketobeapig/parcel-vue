<template>
  <div class="index" slot="content">
    <img class="index-icon" src="./assets/imgs/index.png"/>
    <div class="index-resources">
      <div class="index-resources-doc">
        我说这是一个项目，你信吗
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'index',
  };
</script>
<style lang="scss">
  .index{
    display: flex;
    margin: 60px 0px;
    flex-direction: column;
    align-items: center;
    &-icon{
      height: 200px;
      margin-bottom: 20px;
    }
    &-resources{
      &-doc{
        margin-bottom: 12px;
        display: flex;
      }
    }
  }
</style>