
const openContent = (e, tabId) => {

    if(document.getElementById(tabId).style.display === "table-row") {
        document.getElementById(tabId).style.display = "none"
        e.currentTarget.className = e.currentTarget.className.replace(/ active/g, "")
    }
    else if(document.getElementById(tabId).style.display !== "table-row") {
        document.getElementById(tabId).style.display = "table-row"; //매개변수로 가져온 tab id는 화면에 보여줌
        e.currentTarget.className += " active"; // 내가 클릭한 요소의 부모 요소 위치 반환 
    }
}

const closeAllContent = () => {
    let tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent")
    tablinks = document.getElementsByClassName("tablinks")
    
    for(let i=0;i<tabcontent.length;i++) {
        
        if(tabcontent[i].style.display === "table-row") {
            tablinks[i].className = tablinks[i].className.replace(/ active/g, "")
            tabcontent[i].style.display = "none"
            //tabcontent[i].className = tabcontent[i].parentNode.className.replace(/ active/g, "")
        }
    }
}

const getSum = () => {
    
    let i = 0;
    let sum = 0;

    const table = document.getElementById('table') ;
    //const rowList = document.getElementById("table-body").getElementsByTagName("tr")
    const rowList = table.rows;

    for (i=1; i<rowList.length; i++) {
        
        let cells = rowList[i].getElementsByTagName("td")
        if(cells[4]){
            sum += Number(cells[4].firstChild.data)
        }
    }

    document.getElementById("sum").innerText = String(sum)
    
}


window.onload = getSum()