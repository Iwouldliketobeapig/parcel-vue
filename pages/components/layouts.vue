<template>
  <div class="body">
    <div class="container">
      <div class="header"></div>
      <slot name="content"></slot>
    </div>
    <div class="footer">
      <div class="copyright"></div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss">
  @import "../assets/css/index.scss";
  .body{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between;
  }
  .header{
    height: 60px;
    min-width: $width;
    background: $basB;
    background: $basB;
  }
  .footer{
    display: flex;
    min-width: $width;
    justify-content: center;
    background: $basG;
    .copyright{
      height: 50px;
      background: #273035;
    }
  }
</style>