<template>
  <div>about</div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue'
export default defineComponent({
  name: 'aboutPage',
  setup() {
    const data = reactive({})
    return {
      ...toRefs(data)
    }
  }
})
</script>
<style scoped lang="less"></style>
