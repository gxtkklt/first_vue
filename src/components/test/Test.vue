<template>

  <div id="app">
    <p>{{message}}</p>
    <p>{{message2}}</p>
    <p>{{message3}}</p>
    <div v-if="bbb">
      <h1>菜鸟教程</h1>
      <p>学的不仅是技术，更是梦想！</p>
      <p>哈哈哈，打字辛苦啊！！！</p>
    </div>


    <div>
      <div v-if="ccc">
        Sorry
      </div>
      <div v-else>
        Not sorry
      </div>
    </div>

    <ul>
      <li v-for="value in vzxc">
        <br/>
          {{ value.url }}:{{value.name}}:{{value.slogan}}
      </li>
    </ul>


  </div>


</template>

<style></style>

<script>

    export default {

      data() {
        return{
          message: "张三!!",
          bbb: true,
          ccc: false,
          vzxc: [
            {
              name : 1,
              url: 'http://www.runoob.com',
              slogan: '青铜德1'
            },
            {
              name : 2,
              url: 'http://www.runoob.com',
              slogan: '黑铁旗2'
            }
          ]
        }
      },
      // 计算
      computed: {
        // 计算属性的 getter
        message2: function () {
          // `this` 指向 vm 实例
          return  this.message.split('').reverse().join('')
        },
      }
    }

</script>

