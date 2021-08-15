import { ADDCOUNTER,
  ADDTOCART,
} from "./mutation-type"
export default {
  addCart(context,payload){
    return new Promise((reslove,reject) => {
      let product = context.state.cartList.find( n => n.iid === payload.iid)
      if(product){
        context.commit('ADDCOUNTER',product)
        reslove('当前商品数量+1')
      } else {
        payload.count = 1
        context.commit('ADDTOCART',payload)
        reslove('添加了新的商品')
      }
    })
  }
}