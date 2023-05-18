// Lấy các button group
let result = document.getElementById("result");
let btnGroups = document.getElementsByClassName("btn-group");
let btnWindows = btnGroups[0].children;
let btnScreens = btnGroups[1].children;
let btnLocations = btnGroups[2].children;
let btnHistories = btnGroups[3].children;
let btnNavigators = btnGroups[4].children;
let btnTimings = btnGroups[5].children;
let btnWindows_Yourlabs = btnGroups[6].children;
console.log(btnGroups);

// Thử nghiệm các hàm xử lý window
// ========================================================================

// width x height
btnWindows[0].addEventListener("click", function () {
  result.innerHTML = `w x h của window = ${window.innerWidth} x ${window.innerHeight}`
});

let myWindow;

// open
btnWindows[1].addEventListener("click", function () {
  let width = window.prompt("Nhập chiều ngang của cửa sổ.");
  let height = window.prompt("Nhập chiều cao của cửa sổ.");
  myWindow = window.open(
    "",
    "",
    "width=" + width + ",height=" + height
  );
  myWindow.document.write("Kmin Academy");
});

// close
btnWindows[2].addEventListener("click", function () {
  myWindow.close();
});

// move to
btnWindows[3].addEventListener("click", function () {
  let xPosition = 100; // Tọa độ ngang
  let YPosition = 200; // Tọa độ dọc
  myWindow.moveTo(xPosition,YPosition); // Tọa độ dọc
});

// resize to
btnWindows[4].addEventListener("click", function () {
  let newWidth = 800; // Chiều rộng mới
  let newHeight = 600; // Chiều cao mới
  myWindow.resizeTo(newWidth, newHeight);
});

// Thử nghiệm các hàm xử lý screen
// ========================================================================

// width x height
btnScreens[0].addEventListener("click", function () {
  result.innerHTML = `w x h của screen = ${screen.width} x ${screen.height}`
});

// availWidth x availHeight
btnScreens[1].addEventListener("click", function () {
  result.innerHTML = `availWidth x availHeight = ${screen.availWidth} x ${screen.availHeight}`
});

// colorDepth
btnScreens[2].addEventListener("click", function () {
  result.innerHTML = `Color depth = ${screen.colorDepth}`;
});

// Thử nghiệm các hàm xử lý location
// ========================================================================

// href
btnLocations[0].addEventListener("click", function () {
  result.innerHTML = `href = ${location.href}`;
});

// hostname
btnLocations[1].addEventListener("click", function () {
  result.innerHTML = `hostname = ${location.hostname}`;
});

// pathname
btnLocations[2].addEventListener("click", function () {
  result.innerHTML = `pathname = ${location.pathname}`;
});

// protocal
btnLocations[3].addEventListener("click", function () {
  result.innerHTML = `protocal = ${location.protocol}`;
});

// port
btnLocations[4].addEventListener("click", function () {
  result.innerHTML = `port = ${location.port}`;
});

// Thử nghiệm các hàm xử lý history
// ========================================================================

// back
btnHistories[0].addEventListener("click", function () {
  history.back();
});

// forward
btnHistories[1].addEventListener("click", function () {
  history.forward();
});

// Thử nghiệm các hàm xử lý navigator
// ========================================================================

// language
btnNavigators[0].addEventListener("click", function () {
  result.innerHTML = `language = ${navigator.language}`;
});

// onLine
btnNavigators[1].addEventListener("click", function () {
  result.innerHTML = `onLine = ${navigator.onLine}`;
});

// cookieEnabled
btnNavigators[2].addEventListener("click", function () {
  result.innerHTML = `cookieEnabled = ${navigator.cookieEnabled}`;
});

// Thử nghiệm các hàm xử lý Timing
// ========================================================================

// setTimeout
let timeoutId;
let alert = ("Nhập vào số giây chờ");
let Prompt;
btnTimings[0].addEventListener("click", function () {
  Prompt = prompt(alert);
  if(Prompt != null)
    timeoutId = setTimeout(resuiltFun,Prompt*1000);
});
function resuiltFun(){
  result.innerHTML = "Đã hết thời gian chờ";
}

//clearTimeout
btnTimings[1].addEventListener("click", function () {
  clearTimeout(timeoutId);  
});

//setInterval
let intervalId;
btnTimings[2].addEventListener("click", function () {
  intervalId = setInterval(printTime,1000);
});
function printTime() {
  let date = new Date();
  result.innerHTML = `${date.toLocaleTimeString()}`;
}

//clearInterval
btnTimings[3].addEventListener("click", function () {
  clearInterval(intervalId);
});

// Tự thử nghiệm
// ========================================================================

//open trang web baomoi.com
let myWindow_labs;
btnWindows_Yourlabs[0].addEventListener("click",function(){
  let url = 'https://baomoi.com';
  let windowName = 'newWindow';
  let windowFeatures = 'width=800,height=600';
  myWindow_labs = window.open(url,windowName,windowFeatures);
});

// Chuyển đến trang youtube.com
btnWindows_Yourlabs[1].addEventListener("click",function(){
  location.assign("https://youtube.com")
});

btnWindows_Yourlabs[2].addEventListener("click",function(){
  result.innerHTML = navigator.userAgent;
});
