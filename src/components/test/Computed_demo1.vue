<template xmlns:v-on="http://www.w3.org/1999/xhtml">

    <div>

      <p>{{ obj }}</p>
      <p>{{ obj2 }}</p>

      <p style = "font-size:25px;">计数器: {{ counter }}</p>
      <button @click = "aaaa">点我</button>
      <br/>

      千米 : <input type = "text" v-model = "kilometers">
      米 : <input type = "text" v-model = "meters">
      <br/>

      <a :href="urls">百度</a>
      <br/>

      <!--   -->
      <input :hidden="false" value="adasddasd"/>
      <br/>

      <p @click.self="doThat" style="background: red"><button>doThat</button></p>
      <br/>
      <a @click.once="doThis">doThis</a><br/>

      <!-- 对应a -->
      <input v-on:keyup.65="submit"/><br/>

      <input @keyup.enter="submit">

      <input @click.ctrl ="submit">

      <br/>
    </div>

</template>

<style></style>

<script>

    export default {

      data(){
        return{
          obj:"张三2",
          name:"aaaa",
          url:"bbbb",
          counter :1,
          kilometers :0,
          meters : 0,
          urls:"https://www.baidu.com",
          arr:[
            {
              id:1,
              name:"张三"
            },
            {
              id:2,
              name:"李四"
            }
          ]
        }
      },
      computed: {
        obj2:{
          get: function () {
            for(var i=0;i<this.arr.length;i++){
              if(this.arr[i].id==1){
                return this.arr[i].id + ' ' + this.arr[i].name
              }
            }
          },
        }
      },
      watch : {
        kilometers:function(val) {
          this.kilometers = val;
          this.meters = this.kilometers * 1000
        },
        meters : function (val) {
          this.kilometers = val/ 1000;
          this.meters = val;
        },
      },
      methods:{
        aaaa : function(){
          this.counter++;
          alert(this.counter);
        },
        doThat : function () {
          alert("doThat");
        },
        doThis : function () {
          alert("doThis");
        },
        submit : function () {
          alert("submit");
        },
        all : function () {
          alert("all");
        }
      }
    }


</script>

