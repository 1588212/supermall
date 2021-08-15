import { ADDCOUNTER,
         ADDTOCART,
} from "./mutation-type"
export default {
  ['ADDCOUNTER'](state,payload){
    payload.count += 1
  },
  ['ADDTOCART'](state,payload){
    payload.check = true
    state.cartList.push(payload)
  }
}