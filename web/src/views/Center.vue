<template>
  <div>
    <div class="content">
      <div class="contentson">
        <p>我的钱包</p>
        <p>余额：￥1000</p>
      </div>
      <div class="contentson">
        <p>我的订单</p>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
          <el-table-column prop="name" label="商品" width="300"></el-table-column>
          <el-table-column prop="count" label="数量(件)" width="150"></el-table-column>
          <el-table-column prop="money" label="金额(元)" width="150"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          count: "1",
          money: "100"
        }
      ]
    };
  },
  };
</script>
<style scoped>
.content {
  width: 800px;
  height: 100%;
  margin: 0 auto;
}
.contentson {
  background-color: white;
  padding: 10px 20px;
  margin: 10px 0;
}
</style>