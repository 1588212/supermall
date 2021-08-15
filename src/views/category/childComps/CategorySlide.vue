<template>
  <scroll v-if="categoryName.length !== 0" :probeType="0" :pullUpLoad="true" class="category-slide">
    <template>
      <div >
        <div
          v-for="(item, index) in categoryName"
          class="category-name-item"
          :class="{ active: currentindex === index }"
          @click="ItemClick(index, item.maitKey)"
        >
          {{ item.title }}
        </div>
      </div>
    </template>
  </scroll>
</template>

<script>
import Scroll from "../../../components/common/scroll/Scroll";
export default {
  components: {
    Scroll,
  },
  props: {
    categoryName: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentindex: 0,
    };
  },
  methods: {
    ItemClick(index, maitKey) {
      this.currentindex = index;
      const obj = {
        index,
        maitKey,
      };
      this.$emit("slideItemClick", obj);
    },
  },
  mounted() {},
};
</script>

<style scoped>
.category-slide {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  top: 44px;
  overflow: hidden;
}
.category-name-item {
  height: 50px;
  width: 100px;
  line-height: 50px;
  text-align: center;
  font-size: 15px;
  background-color: rgba(0, 0, 0, 0.05);
}
.active {
  background-color: white;
  color: #ff9198;
  border-left: 4px solid #ff9198;
}
</style>