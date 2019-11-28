<template>

    <div>

      <!-- 添加按钮 -->
      <el-button type="success" icon="el-icon-edit" @click="addForm = true">增加</el-button>
      <!-- 表格 -->
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="changeFun"
      >
        <el-table-column
          type="selection"
          prop="id"
          width="55">
        </el-table-column>
        <el-table-column
          label="ID"
          width="60"
          prop="id">
        </el-table-column>
        <el-table-column
          prop="userName"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="60"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          label="日期"
          show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.createDate | formatDate }}</template>
        </el-table-column>
        <el-table-column
          prop="paramContent"
          label="操作"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="info"
          label="参数"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="action"
          label="方法"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="deletes(scope.$index, scope.row.id)">删除</el-button>
            <el-button
              size="mini"
              @click="updates(scope.$index, scope.row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[5, 10, 20, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount">
      </el-pagination>


      <!-- 添加模态 -->
      <el-dialog title="添加模态" :visible.sync="addForm">
        <el-form :label-position="labelPosition" label-width="80px" :model="form">
          <el-form-item label="名称" prop="userName">
            <el-input v-model="form.userName" placeholder="填写名称" style="width:80%;"></el-input>
          </el-form-item>
          <el-form-item label="状态" prop="status">
            <el-input v-model="form.status" placeholder="填写状态" style="width:80%;"></el-input>
          </el-form-item>
          <el-form-item label="日期" prop="datetime">
            <el-date-picker type="datetime" placeholder="选择日期" v-model="form.createDate" style="width:80%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="操作" prop="paramContent">
            <el-input v-model="form.paramContent" placeholder="填写操作" style="width:80%;"></el-input>
          </el-form-item>
          <el-form-item label="方法" prop="action">
            <el-input v-model="form.action" placeholder="填写方法" style="width:80%;"></el-input>
          </el-form-item>
          <el-form-item label="参数" prop="info">
            <el-input v-model="form.info" placeholder="填写参数" style="width:80%;"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addForm = false">取 消</el-button>
          <el-button type="primary" @click="add(-1)">确 定</el-button>
        </div>
      </el-dialog>
    </div>

</template>


<style></style>

<script>
    //自定义的时间过滤器
    import moment from 'moment'

    var https = '/api';
    export default {
        data() {
            return {
              tableData:null,
              pageNum:2,
              pageSize:5,
              totalCount:null,
              addForm: false,     //模态
              labelPosition:"right", //模态字体位置
              results:-1,           //增加 修改的状态
              updateid:-1,          //修改id
              form: {
                userName  : '',
                createDate: '',
                paramContent:'',
                action:'',
                status:'',
                info:'',
              },
            }
        },
        mounted:function () {
            var pageNum = this.pageNum;
            var pageSize = this.pageSize;
            this.queryList(pageNum,pageSize);
        },
        methods:{
            queryList:function (pageNum,pageSize) {
                var obj = this;
                this.$ts.get(
                  "/api/vue/queryList",
                  {params:{
                      pageNum:pageNum,
                      pageSize:pageSize
                  }}
                ).then(function (res) {
                    obj.tableData = res.data.data;
                    obj.totalCount = res.data.totalCount;
                    obj.pageNum = res.data.pageNum;
                })
            },
            //下拉列触发
            handleSizeChange(val) {
              this.pageSize = val;
              this.queryList(this.pageNum,val);
            },
            //跳页触发
            handleCurrentChange(val) {
              this.queryList(val,this.pageSize);
            },
            changeFun(row){
              alert(JSON.stringify(row));
            },
            //删除
            deletes(index,id){
                var obj = this;
                this.$ts.delete(https+"/vue/delete",{params:{id:id}})
                  .then(function (res) {
                    var pageNum = obj.pageNum;
                    var pageSize = obj.pageSize;
                    obj.queryList(pageNum,pageSize);
                  })
            },
            //修改
            updates(index,row){
                this.addForm = true;
                this.form = row ;
                this.results=-2;
                this.updateid = row.id;
            },
            //添加
            add(){
                var results = this.results;
                var obj = this;
                alert(this.form.createDate);
                //增加
                if(results==-1){
                  this.$ts.post(https+"/vue/add",this.form)
                    .then(function (res) {
                      var pageNum = obj.pageNum;
                      var pageSize = obj.pageSize;
                      //关闭时表单重置表单
                      //  obj.$ref.form.resetFields();
                      obj.addForm = false;
                      obj.queryList(pageNum,pageSize);
                    })
                }
                //修改
                else{
                  //将id添加进去
                  this.form.id = this.updateid;
                  this.$ts.post(https+"/vue/update",this.form)
                    .then(function (res) {
                      var pageNum = obj.pageNum;
                      var pageSize = obj.pageSize;
                      //关闭时表单重置表单
                      //  obj.$ref.form.resetFields();
                      obj.addForm = false;
                      obj.queryList(pageNum,pageSize);
                      obj.results = -1;
                    })
                }


            }
        },
        //时间过滤器
        filters: {
          formatDate: function (value) {
            return moment(value).format('YYYY-MM-DD HH:MM:SS')
          }
        },
    }



</script>
