import"./assets/modulepreload-polyfill-3cfb730f.js";const t=document.querySelector(".feedback-form"),o=t.elements.email,n=t.elements.message;let e={email:"",message:""};const s=JSON.parse(localStorage.getItem("feedback-form-state"));s!==null&&(n.value=s.message,o.value=s.email,e=s);t.addEventListener("input",a=>{const l=a.currentTarget.elements.email.value,m=a.currentTarget.elements.message.value;e.email=l.trim(),e.message=m.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))});t.addEventListener("submit",a=>{a.preventDefault(),e.email.length==0||e.message.length==0?console.log("please fill all field"):(console.log(e),localStorage.removeItem("feedback-form-state"),t.reset(),e.email="",e.message="")});
//# sourceMappingURL=commonHelpers2.js.map
