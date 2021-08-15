<template>
  <div v-if="Object.keys(paramInfo).length !== 0" class="param-info">
    <table
      v-for="(table, index) in paramInfo.sizes"
      class="info-size"
      :key="index"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>
    <table class="info-rule">
      <tr v-for="(info, index) in paramInfo.infos" :key="index">
        <td class="info-param-key">{{ info.key }}</td>
        <td class="info-param-value">{{ info.value }}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.param-info{
  padding: 10px;
  padding-bottom: 20px;
  border-bottom: 3px solid rgba(0, 0, 0, .1);
}
.info-size tr td:first-child{
  width: 30%;
}
.info-size tr td:nth-child(n+2){
text-align: center;
}
.info-rule tr td:first-child{
  width: 80px;
}
.info-rule tr td:nth-child(n+2){
  color:#ff8198 ;
}
.info-size,.info-rule{
  width: 100%;
  border-collapse: collapse; 
}
.info-size{
 border-bottom: 3px solid rgba(0, 0, 0, .1);
}
.info-size tr td,.info-rule tr td{
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  height: 40px;
  font-size: 14px;
}
.info-img img{
  width: 100%;
}
</style>