<template>
  <v-app>
    <v-app-bar v-if="showAppBar" app color="primary" dark height="64">
      <v-btn @click="goToHome" target="_blank" text>
        <v-icon color="error">mdi-fruit-cherries</v-icon>
        <span class="mr-2">台中果菜運銷股份有限公司</span>
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-row justify="center" align="center">
    <v-col cols="12">
    <v-main>
        <!-- 左側菜單容器 -->
      
      <div class="sidebar" v-if="showAppBar">
          <!-- 使用 v-for 渲染按钮列表 -->
        <v-btn v-for="button in buttons"
              :key="button.text"
              @click="button.action"
              :color="button.color"
              :disabled="button.disabled"
              class="menu-btn"
        >
          <i :class="button.iconClass"></i>
          <span class="menu-text">{{ button.text }}</span>
        </v-btn>
          <!-- 使用 v-for 渲染下拉按钮列表 -->
       <v-list-group>
        <template v-slot:activator>
          <v-list-item-title class="menu-text active-menu">工作表單</v-list-item-title>
        </template>
        <v-list class="list-item">
          <v-list-item v-for="(listbtn, index) in listbtns" :key="index">
            <v-btn :color="listbtn.color" class="menu-btn" @click="listbtn.action">
              <i :class="listbtn.iconClass"></i>
              <span class="menu-text">{{ listbtn.text }}</span>
            </v-btn>
          </v-list-item>
       </v-list>
      </v-list-group>

  </div>
 


      
  <!-- 頁面內容 -->
  <div class="page-container">
    <router-view :showAppBar="showAppBar" />
  </div>
    </v-main>
  </v-col>
  </v-row>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  computed: {
    showAppBar() {
      // 在这里获取子组件传递的 showAppBar 值
      return this.$route.meta.showAppBar !== false; // 默认为 true
    }
  },

  data() { // 括号匹配正确
    return {
      buttons: [
        { text: '我的假單', iconClass: 'menu-icon mdi mdi-file-document-outline', color: '#9eee68', action: this.goToMyRequestView, disabled: false },
        { text: '我的打卡', iconClass: 'menu-icon mdi mdi-clock-outline', color: '#9eee68', action: this.goToAboutView, disabled: false },
        { text: '我的班表', iconClass: 'menu-icon mdi mdi-calendar-clock', color: '#9eee68', action: this.goToMyWorkView, disabled: false },
        { text: '我的資料', iconClass: 'menu-icon mdi mdi-account-outline', color: '#9eee68', action: this.goToMyDataView, disabled: false },
      ],
      listbtns: [
        { text: '補打卡', iconClass: 'menu-icon mdi mdi-clock', color: '#9eee68', action: this.goToMyCheckView},
        { text: '加班申請', iconClass: 'menu-icon mdi mdi-calendar-edit', color: '#9eee68', action: this.goToOvertimeView},
        { text: '我要請假', iconClass: 'menu-icon mdi mdi-calendar', color: '#9eee68', action: this.goToMyLeaveView},
      ]
    } 
  },
  methods: {
    goToHome() {
      // 如果當前路由不是首頁，則執行導航操作
      if (this.$route.path !== '/') {
        this.handleButtonClick();// 恢复按钮的原始颜色
        this.$router.push('/');
      } else {
        // 如果當前路由已經是首頁，則重新加載首頁
        window.location.reload();
      }
    },
    goToMyRequestView() {
      this.$router.push('/myrequest');
      this.handleButtonClick();// 恢复按钮的原始颜色
      this.buttons[0].disabled = true; // 根据按钮的索引来禁用
      this.buttons[0].color = '#CCCCCC'; // 禁用后的按钮颜色
     },
    goToAboutView() {
      this.$router.push('/about');
      this.handleButtonClick();// 恢复按钮的原始颜色
      this.buttons[1].disabled = true; // 根据按钮的索引来禁用
      this.buttons[1].color = '#CCCCCC'; // 禁用后的按钮颜色
    },
    goToMyWorkView() {
      this.$router.push('/mywork');
      this.handleButtonClick();// 恢复按钮的原始颜色
      this.buttons[2].disabled = true; // 根据按钮的索引来禁用
      this.buttons[2].color = '#CCCCCC'; // 禁用后的按钮颜色
     }, 
    goToMyDataView() {
      this.$router.push('/mydata');
      this.handleButtonClick();// 恢复按钮的原始颜色
      this.buttons[3].disabled = true; // 根据按钮的索引来禁用
      this.buttons[3].color = '#CCCCCC'; // 禁用后的按钮颜色
    }, 
    goToNewWindow(url) {
      window.open(url, '_blank', 'width=800,height=600');
    },
    goToMyCheckView() {
     
      this.goToNewWindow('/mycheck');
    }, 
    goToMyLeaveView() {
     
      this.goToNewWindow('/myleave');
    },  
    goToOvertimeView() {
      
      this.goToNewWindow('/overtime');
    }, 
    
    handleButtonClick() {
      this.buttons.forEach(button => {
      button.disabled = false;
      button.color = '#9eee68'; // 恢复按钮的原始颜色
    });
  }

  }
};
</script>

<style scoped>


/* 頁面整體樣式 */
.page-container {
  height: 800px; /* 設置內容容器的高度 */
  background-color: #f0f0f0; /* 設置背景顏色 */
  border: 1px solid #ccc; /* 設置邊框 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 設置陰影 */
  width: 90%; /* 設置內容容器的寬度為視口寬度的90% */
  max-width: 1200px; /* 設置內容容器的最大寬度為1200像素 */
  margin: 0 auto; /* 在水平方向上居中顯示內容容器 */
  padding: 20px; /* 設置內容容器的內邊距 */
  box-sizing: border-box; /* 讓 padding 和 border 不會增加容器的尺寸 */
}

/* 左側菜單容器樣式 */
.sidebar {
  width: 200px; /* 設置菜單容器的寬度 */
  height: 100%; /* 設置菜單容器的高度，與視口高度相同 */
  background-color: #9eee68; /* 設置菜單容器的背景顏色 */
  position: fixed; /* 將菜單固定在頁面左側 */
  top: 64px; /* 與橫幅底部對齊 */
  left: 0; /* 距離頁面左側的距離為0 */
  overflow-y: auto; /* 當菜單內容超出容器高度時，顯示滾動條 */
  padding: 20px; /* 設置菜單容器的內邊距 */
  box-sizing: border-box; /* 讓 padding 和 border 不會增加容器的尺寸 */
  z-index: 999; /* 提高層級，確保位於其他元素上方 */
}

/* 菜單按鈕樣式 */
.menu-btn {
  display: flex; /* 使用 flex 布局 */
  align-items: left; /* 垂直居中 */
  width: 100%; /* 設置按鈕寬度為容器寬度 */
  height: 40px; /* 設置按鈕高度 */
  background-color: #9eee68; /* 設置按鈕背景顏色 */
  border: none; /* 去除按鈕邊框 */
  cursor: pointer; /* 設置鼠標樣式為手型 */
  transition: background-color 0.6ms; /* 設置過渡效果 */
  
}

/* 菜單按鈕悬停樣式 */
.menu-btn:hover {
  background-color: #18ef05; /* 設置按鈕懸停時的背景顏色 */
}

/* 圖標樣式 */
.menu-icon {
  margin-right: 19px; /* 設置圖標與文字之間的間距 */
  font-size: 19px; /* 設置圖標大小 */
}

/* 文字樣式 */
.menu-text {
  font-size: 15px; /* 文字大小 */
  font-weight: bold; /* 設置文字加粗 */
}
/* 功能表背景顏色 */
.list-item {
  background-color: #9eee68;
}
.active-menu {
  color: rgb(18, 18, 18); /* 展开状态下标题的字体颜色为黑色 */
}
</style>
