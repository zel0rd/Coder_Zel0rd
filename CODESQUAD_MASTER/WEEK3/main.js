var log = document.querySelector(".log");
var lists = document.querySelectorAll("ul > li");
var ul = document.querySelector("ul");
var img = document.querySelector("img");

// 1. for문을 사용한 경우
// for(var i=0, len=lists.length; i < lists.length; i++){
//     lists[i].addEventListener("click", function(evt) {
//         console.log(evt.currentTarget.firstElementChild.src);
        
//     })
// }

// 2.  이벤트 버블링
// ul > li > img 에서 img태그를 클릭하면 ul태그에 속하기 때문에 이벤트 리스너 실행
// 이러한 현상을 이벤트 버블링이라고 함. 클릭한 지점이 하위엘리먼트라고 하여도 그것을 감싸고 있는 상위 엘리먼트까지 올라가면서 이벤트 리스너를 찾음
// img.addEventListener("click", function(){
//     console.log("img tag Clicked")
// })
// ul.addEventListener("click", function(evt){
//     console.log(evt.target.tagName, evt.currentTarget.tagName);
// })

// 3. EventDelegation
// ul.addEventListener("click", function(evt) {
//     // console.log(evt.target.tagName);
//     var target = evt.target;
//     if(target.tagName === "IMG"){
//         console.log(target.src)
//     } else if(target.tagName === "LI"){
//         console.log(target.firstElementChild.src)
//     }
// })

// 4. closeset Test
for(var i=0, len=lists.length; i < lists.length; i++){
    lists[i].addEventListener("click", function(evt) {
        // console.log(evt.currentTarget.firstElementChild.src);
        console.log("li clicked")
        // evt.stopPropagation(); // 없으면 li > ul 버블링 일어남
    })
}
ul.addEventListener("click", function(evt){
    // console.log(evt.target.tagName, evt.currentTarget.tagName);
    console.log("ul clicked")
})
