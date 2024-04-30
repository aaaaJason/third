<template>
  <div>
    <!-- 員工個人資料表格 -->
    <v-data-table
      :items="employees"
      hide-actions="true"
      item-key="id"
      hide-default-footer
      class="my-table title-table"
    >
    <template v-slot:item="{ item }">
  <tr>
    <!-- 表格1：放置圖片 -->
    <td>
      <div class="image-container" style="margin: 10px;">
      <img :src="imagePath" alt="員工圖片" style="width: 200px; height: 200px; "> 
    </div>
    </td>

    <!-- 表格2：放置文字資料 -->
    <td>
      <table>
        <tr>
          <td>員工代號:</td>
          <td>{{ item.code }}</td>
        </tr>
        <tr>
          <td>員工姓名:</td>
          <td>{{ item.name }}</td>
        </tr>
        <tr>
          <td>所屬部門:</td>
          <td>{{ item.department }}</td>
        </tr>
        <tr>
          <td>上班時間:</td>
          <td>{{ item.shiftTime }}</td>
        </tr>
        <tr>
          <td>聯絡電話:</td>
          <td>{{ item.phone }}</td>
        </tr>
        <tr>
          <td>職稱:</td>
          <td>{{ item.title }}</td>
        </tr>
      </table>
    </td>
  </tr>
</template>

    </v-data-table>

    <!-- 2024休假申請 -->
    <v-data-table
      :headers="leaveHeaders"
      :items="leaveApplications"
      item-key="id"
      hide-default-footer
      class="my-table"
    ></v-data-table>

    <!-- 2024加班申請 -->
    <v-data-table
      :headers="overtimeHeaders"
      :items="overtimeApplications"
      item-key="id"
      hide-default-footer
      class="my-table"
    ></v-data-table>

    <!-- 2024打卡申請 -->
    <v-data-table
      :headers="clockHeaders"
      :items="clockApplications"
      item-key="id"
      hide-default-footer
      class="my-table"
    ></v-data-table>
  </div>
</template>


<script>
import { getUserData } from '@/axios/api'
export default {
  
  data() {
    return {
      imagePath: require('../assets/pika.jpg'), 
      userData: {},
      leaveHeaders: [
        { text: '已退回', value: 'rejected' },
        { text: '已批准', value: 'approved' },
        { text: '審批中', value: 'pending' },
      ],
      overtimeHeaders: [
        { text: '已退回', value: 'rejected' },
        { text: '已批准', value: 'approved' },
        { text: '審批中', value: 'pending' },
      ],
      clockHeaders: [
        { text: '已退回', value: 'rejected' },
        { text: '已批准', value: 'approved' },
        { text: '審批中', value: 'pending' },
      ],
      employees: [],
      leaveApplications: [
        { id: 1, rejected: '0', approved: '2', pending: '3' },
        // 其他休假申請資料...
      ],
      overtimeApplications: [
        { id: 1, rejected: '1', approved: '2', pending: '3' },
        // 其他加班申請資料...
      ],
      clockApplications: [
        { id: 1, rejected: '34', approved: '0', pending: '2' },
        // 其他打卡申請資料...
      ],
    };
  },
  methods: {
    async getUserData() {
    try {
      let res = await getUserData({ cid: 1 });
      console.log(res, '/api', '获取的用户信息');
      this.userData = res.data; 
      console.log('emp', this.userData[0].cimg);
      this.employees.push({
        image:this.userData[0].cimg,
        code: this.userData[0].cid,
        name: this.userData[0].cname,
        department: this.userData[0].cemp,
        shiftTime: this.userData[0].ctime,
        phone: this.userData[0].ctel,
        title: this.userData[0].clname,
          });
    } catch (error) {
      console.error('获取用户信息失败:', error);
    }
    },
  },
  mounted() {
    this.getUserData();
  },
};
</script>

<style scoped>
.my-table {
  margin-bottom: 10px;
}
.title-table {
  height:300px;
}
.image-container {
  border: 20px solid transparent; /* 這裡設置圖片的邊框寬度和顏色 */
}

</style>
