<template>
  <div id="wrap">
    <SideBar />
    <router-view></router-view>

  </div>

  <!-- <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link> -->
</template>

<script>
import { data, data2 } from '../data.js'
// import axios from "axios";
const schinfo = localStorage.getItem('schinfo');
const stdnt = localStorage.getItem('stdnt');
const lastUpdated = localStorage.getItem('lastUpdated');
const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;

if (!schinfo || !stdnt || !lastUpdated || new Date().getTime() - parseInt(lastUpdated) >= oneWeekInMilliseconds) {  //스토리지에 데이터가 없거나 마지막으로 저장한지 일주일이 지났다면
  const currentTime = new Date().getTime();
  localStorage.setItem('schinfo', JSON.stringify(data));
  localStorage.setItem('stdnt', JSON.stringify(data2));
  localStorage.setItem('lastUpdated', currentTime.toString());
}


import SideBar from './components/SideBar.vue'
export default {
  name: "App",
  components: {
    SideBar
  }
}
</script>

<style>

@font-face {
    font-family: 'SUITE-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  font-family: 'SUITE-Regular';
}

::-webkit-scrollbar {
  display: none;
}


#wrap {
  width: 100vw;
  height: 1900px;
  display: flex;
  background-color: #F0F5F9;
  z-index: -2;
}

#content {
  width: 100%;
  height: 100%;
}
</style>
