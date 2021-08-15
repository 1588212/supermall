import { debounce } from "./utils";
import BackTop from '../components/content/backTop'

export const itemListenerMixin = {
  data(){
    return{
      itemListener:null
    }
  },
  mounted(){
    const newRefresh = debounce(this.$refs.scroll.refresh, 200);
    this.itemListener = () => { newRefresh()};
    this.$bus.$on("imageLoad", this.itemListener);
  }
}

export const backTopMixin = {
  components:{
    BackTop,
  },
  data(){
    return{
      isShowBackTop:false,
    }
  },
  methods:{
    
  }
}


