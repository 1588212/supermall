<template>
  <div class="tabcontrol-item">
    <div v-for="(item, index) in titles" :key="index">
      <span :class="{active: currentindex === index}" @click="activeClick(index)" >{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data(){
    return{
      currentindex:0,
    }
  },
  methods:{
    activeClick(index){
      this.currentindex = index
      this.$emit('tabChange', index)
    }
  }
};
</script>

<style scoped>
.tabcontrol-item {
  display: flex;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size:15px;
  background-color: white;
}
.tabcontrol-item div {
  flex: 1;
}
.tabcontrol-item span{
  padding: 2px;
}
.active{
  color:#ff8198;
  border-bottom: 2px solid #ff8198;
}
</style>