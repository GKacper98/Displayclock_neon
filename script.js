
setInterval(()=>{
    const time = document.querySelector("#time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    // here can do code for PM/AM
    time.textContent = hours +":"+ minutes +":"+ seconds;
});
