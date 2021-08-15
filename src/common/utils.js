// 防抖函数
export function debounce(func,dealy){
  let timer = null
  return function(...argus){
    clearTimeout(timer)
    const timer = setTimeout(() => {
      func.apply(this,argus)
    },dealy)
  }
}

//  将时间戳转换为正常日期时间
export function formatData(number){
  let n = number*1000;
  let date = new Date(n);
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth() + 1 < 10? '0' + (date.getMonth() + 1): date.getMonth() + 1) + '-' ;
  let D = date.getDate() < 10? "0" + date.getDate():date.getDate();
  let h = date.getHours() + ':';
  let m = date.getMinutes();
  let s = date.getSeconds;
  return Y + M + D + '  ' + h + m ;

}