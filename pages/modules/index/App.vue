<template>
  <layouts>
    <div class="index" slot="content">
      <img class="index-icon" src="./imgs/index.png"/>
      <div class="index-resources">
        <div class="index-resources-doc">
          <h3>文档：</h3>
          <a>无</a>
        </div>
        <div class="index-resources-link">
          <h3>资源：</h3>
          <div>
            <a href="https://webpack.js.org/">webpack</a>
            <a href="https://cn.vuejs.org/">Vue</a>
            <a href="https://www.baidu.com/">Sass</a>
            <a href="https://eslint.org/">Eslint</a>
            <a href="https://stylelint.io/">Stylelint</a>
          </div>
        </div>
      </div>
    </div>
  </layouts>
</template>
<script>
  import Layouts from '../../components/layouts';
  export default {
    name: 'index',
    components: {
      Layouts
    }
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
      font-size: 16px;
      h3{
        margin-right: 12px;
        color: #333333;
      }
      &-doc{
        display: flex;
        margin-bottom: 12px;
      }
      &-link{
        display: flex;
        justify-content: center;
        div{
          display: flex;
          width: 240px;
          flex-wrap: wrap;
          justify-content: center;
        }
        a{
          margin-right: 12px;
          margin-bottom: 12px;
        }
        a:hover{
          border-bottom: solid 1px #20a0ff;
          color: #20a0ff;
        }
      }
    }
  }
</style>