<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">

    <div>

      <p>单个复选框：</p>
      <input type="checkbox" id="checkbox" v-model.lazy="checked">
      <label for="checkbox">{{ checked }}</label>
      <br/>


      <input v-model.number="age" type="number">

      <br/>

      <select v-model="selected1">
        <option value="a">A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>选中的为: {{ selected1 }}</span><br/>

      <!---->
      <input type="radio" id="small" value="small" v-model="picked">
      <label for="small">small1</label>
      <br>
      <input type="radio" id="big" value="big" v-model="picked">
      <label for="big">big2</label>
      <br>
      <span>Picked: {{ picked }}</span><br/>


      <input type="checkbox" id="one" value="value_one" v-model="checkedNames">
      <label for="one">选项一</label>
      <input type="checkbox" id="two" value="value_two" v-model.lazy="checkedNames">
      <label for="two">选项二</label>
      <input type="checkbox" id="three" value="value_three" v-model.lazy="checkedNames">
      <label for="three">选项三</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>

      <br/>

      <runoob></runoob><br/>

      <input id="#asda"type="button" @click="dadasda" value="点击"/>

      <br/>


      <aaaa message="hello!"></aaaa>


      <select v-model="urls">
        <option value="http://localhost:8080/#/from">A</option>
        <option value="http://localhost:8080/#/test">B</option>
        <option value="https://www.baidu.com">C</option>
      </select>
      <a :href="urls1">{{urls}}</a>

      <br/>


      <ol>
        <todoitem v-for="item1 in sites" v-bind:todo="item1"></todoitem>
      </ol><br/><br/>

      <button @click = "show = !show">点我</button>
      <transition name = "fade">
        <p v-show = "show" v-bind:style = "styleobj">动画实例</p>
      </transition>

    </div>


</template>

<style></style>

<script>
    var Child = {
      template: '<h1>自定义组件!</h1>'
    }
    export default {

        data() {
            return {
              checked:true,
              age:0,
              selected1:'',
              picked:'',
              checkedNames:[],
              aaa:"",
              urls:"",
              urls1:"#",
              sites:[
                {id:1},
                {id:2},
                {id:3}
                ],
              counter:0,
              show:true,
              styleobj :{
                fontSize:'30px',
                color:'red'
              }
            }
        },
        computed: {
        },
        mounted:function () {
          let ID = this.$route.params.id;
          alert(ID);
        },
        watch: {
          checked:function (val) {
            alert(val);
          },
          age:function (val) {
            alert(val);
          },
          selected1:function (val) {
            alert(val);
          },
          picked:function (val) {
            alert(val);
          },
          checkedNames:function (val) {
            alert(val);
          },
          aazcxz:function (val) {
            alert(val);
          },
          urls:function (val) {
            this.urls1 = val;
          }
        },
        methods: {
          dadasda:function () {
            alert(runoob);
          },

        },
        components: {
          // <runoob> 将只在父模板可用
          runoob: {
              template: '<h1>2222</h1>'
          },
          aaaa :{
            props: ['message'],
            template: '<span>{{ message }}</span>'
          },
          todoitem:{
            props: ['todo'],
            template: '<li>{{ todo.id }}</li>'
          },
        },

    }

</script>

