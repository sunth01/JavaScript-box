<template>
  <div>
    <!-- v-bind:style="对象/数组"  (了解)
         :style="样式对象"
         :style="[样式对象, 样式对象]"
    -->
    <div :style="obj"></div>
    <div :style="{ background: 'red', width: '200px', height: '100px'}"></div>

    <div :style="[obj, obj2]"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      obj: {
        width: '200px',
        height: '200px',
        backgroundColor: 'pink'
      },
      obj2: {
        borderRadius: '50%'
      }
    }
  }
}
</script>

<style>

</style>