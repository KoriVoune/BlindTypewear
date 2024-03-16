setTimeout(function(){
    let spans = document.querySelector(".test-symbols").querySelectorAll('span')
let offset = 0
let total_score = 0
console.log(spans)

document.addEventListener('keypress', function(event){
    let time_start = new Date()
    const keyName = event.key;
    console.log(keyName)
        if (keyName == spans[offset].innerHTML){
            spans[offset].style.color = 'green'
            offset += 1
            
            if (offset == spans.length){
                let data = [];
                if (localStorage.getItem("attempts") != undefined){
                    data = JSON.parse(localStorage.getItem("attempts"));
                }
                total_score += 1
                let time_end = new Date()
                let time = time_end - time_start
                data.push(time)
                localStorage.setItem('attempts', JSON.stringify(data));
                localStorage.setItem('time', time)
                localStorage.setItem('total', total_score)
                location.assign("result.html")
            }
        }
        else{
            spans[offset].style.color = 'red'
        }
})}, 2000)