<template>
  <div class="carts">
    <h2>购物车</h2>
    <el-table :data="tableData">
      <el-table-column label="日期">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="shop" label="商品"></el-table-column>

      <el-table-column prop="count" label="数量"></el-table-column>

      <el-table-column prop="amount" label="价格"></el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <button @click="settle">结算</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          shop: "王小虎",
          count: "1",
          amount: "100"
        },
        {
          date: "2016-05-03",
          shop: "王小虎",
          count: "1",
          amount: "100"
        },
        {
          date: "2016-05-03",
          shop: "王小虎",
          count: "1",
          amount: "100"
        },
      
      ]
    };
  },

  methods: {
    handleDelete(index, row) {
      console.log(index, row);
    },
    settle(){
      alert("去结算")
    }
  }
};
</script>
<style scoped>
.carts {
  width: 800px;
  height: 100%;
  text-align: center;
  margin: 0 auto;
}

</style>