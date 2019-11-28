<template>

    <div>

        <el-button type="primary" round>主要按钮</el-button>
        <a @click="aaaa">跳转</a><br/>

        <a @click="bbbb">跳转2</a><br/>

        <input type="file" @change="upfile"/><br/>

        <router-link to="/from" tag="li" event="click">@@@@</router-link>


        <router-link :to="{name:'from',params:{id:'asdasd'}}"
                     tag="button"
                     event="click">Home
        </router-link>

        <router-link :to="{path:'/from'}"
                     active-class="activeClass">about
        </router-link>

    </div>

</template>

<style></style>

<script>

    var https = 'http://localhost:8081';
    export default {
      linkActiveClass:'is-active',
      routes: [
        {
          path:'/from',
          component:""
        }
      ],
        data() {
            return {
              msg: 'vue模板页',
              url:"",

            }
        },
        methods:{
          aaaa:function(){
            this.$router.push({path: '/from',query:{ id:'1'}});
          },
          bbbb:function(){
            this.$router.push({name: 'from',params:{ id:'1'}});
          },
          upfile:function (obj) {

            var file = obj.target.files;
            var fromdate = new FormData();
            fromdate.append("file",file[0]);

            this.$ts({
              url:https+"/vue/upfile",
              data:fromdate,
              method:"post"
            }).then(function (res) {
              alert("可以!");
            })

            alert(JSON.stringify(obj));
          },

        },
        mounted:function () {

        }
    }

</script>
