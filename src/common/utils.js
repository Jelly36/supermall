export function debouce(fuc,delay){
    var timer=null;
    return function(...args){
      if(timer){clearTimeout(timer)}
      timer=setTimeout(()=>{
        fuc.apply(this,args)
      },delay)
    }
  }