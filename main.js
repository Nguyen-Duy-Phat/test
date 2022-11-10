const color1 = (x) => {
    x.style.backgroundColor = "#E5E5E5";
}
const color2 = (x) => {
    x.style.backgroundColor = "#FFFFFF";
}
const color3 = () => {
// bật ra cửa sổ
document.getElementById("mySidebar").style.display = "block";
}
const mClose = () => {
    document.getElementById("mySidebar").style.display = "none";
}