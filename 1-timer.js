import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as c,i as r}from"./assets/vendor-D9L3Qz0t.js";const o=document.querySelector("#datetime-picker"),s=document.querySelector("[data-start]");let n=null;s.disabled=!0;o.disabled=!1;c(o,{enableTime:!0,timeout:1e3,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){n=e[0],n<=new Date?(s.disabled=!0,r.error({title:"Ошибка",message:"Пожалуйста введите дату в будущем.",position:"topRight",closeOnClick:!0})):(s.disabled=!1,r.success({title:"Успешно",message:"Выбрана корректная дата!",position:"topRight",closeOnClick:!0}))}});const l={intevalId:null,elements:{days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},start(){this.intevalId=setInterval(()=>{const e=n-Date.now();if(e<=0){this.stop();return}this.intevalId!==0&&(o.disabled=!0);const t=this.convertMs(e);this.elements.days.textContent=this.addLeadingZero(t.days),this.elements.hours.textContent=this.addLeadingZero(t.hours),this.elements.minutes.textContent=this.addLeadingZero(t.minutes),this.elements.seconds.textContent=this.addLeadingZero(t.seconds)},1e3)},stop(){clearInterval(this.intevalId)},convertMs(e){const i=Math.floor(e/864e5),a=Math.floor(e%864e5/36e5),d=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:a,minutes:d,seconds:u}},addLeadingZero(e){return String(e).padStart(2,"0")}};s.addEventListener("click",()=>{l.start()});
//# sourceMappingURL=1-timer.js.map
