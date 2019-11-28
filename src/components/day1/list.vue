<template>
  <div style="margin-top: -58px">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="" target="_blank">订单管理</a></el-menu-item>
    </el-menu>

    <el-table
      ref="multipleTable"
      :data="tableData3"
      tooltip-effect="dark"
      style="width: 100%"
      @select-all="changeFun"
      >
      <el-table-column
        type="selection"
        prop="name"
        width="55">
      </el-table-column>
      <el-table-column
        label="日期"
        width="120"
        prop="date">
        <!--<template slot-scope="scope">{{ scope.row.date }}</template>-->
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="asdsad"
        label="地址"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[5, 10, 20, 100]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="aaaa">
    </el-pagination>
  </div>


</template>

<style></style>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        currentPage4: 1,
        aaaa:21,
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          asdsad: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          asdsad: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          asdsad: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          asdsad: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          asdsad: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          asdsad: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          asdsad: '上海市普陀区金沙江路 1518 弄'
        }],
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      changeFun(row){
        alert(JSON.stringify(row));
      },
      handleSizeChange(val) {
        alert(`当前页: ${val}`);
      },
      handleCurrentChange(val) {
        alert(`当前页: ${val}`);
      }
    }
  }


</script>
