<template>
  <div>
    <div id="cesiumContainer"></div>
    <!-- <router-link to="/about">Go to Home</router-link>
    <router-view></router-view> -->
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import * as Cesium from 'cesium'
import request from '@/services/request'
import { useStore } from 'vuex'
onMounted(() => {
  const store = useStore()
  const viewer = new Cesium.Viewer('cesiumContainer', {
    animation: false, // 左下角的动画仪表盘
    baseLayerPicker: false, // 右上角的图层选择按钮
    geocoder: false, // 搜索框
    homeButton: false, // home按钮
    sceneModePicker: false, // 模式切换按钮
    timeline: false, // 底部的时间轴
    navigationHelpButton: false, // 右上角的帮助按钮，
    fullscreenButton: false // 右下角的全屏按钮
  })
  console.log(viewer)
  request({
    url: '/get'
  }).then((res) => {
    console.log(res)
  })
  console.log(store.state.count)
})
</script>
<style scoped></style>
