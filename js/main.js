console.log("JS file connected");

const iconCon = document.querySelectorAll(".icon-con svg");
console.log(iconCon);

function logId() {
    console.log(this.id);
}

iconCon.forEach(function(iconConClick) {
    iconConClick.addEventListener("click", logId);
})