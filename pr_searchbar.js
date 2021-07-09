      
var openers = input.value =opener.document.parentText.value;

function openChild()
{
    // window.name = "부모창 이름"; 
    window.name = "parentForm";
    // window.open("open할 window", "자식창 이름", "팝업창 옵션");
    openWin = window.open("pr_search.html",
            "childForm", "width=750, height=750, resizable = no, scrollbars = no");    
    openWin.document.getElementById("cInput").value = document.getElementById("pInput").value;
}

function openLocation()
{
    // window.name = "부모창 이름"; 
    window.name = "parentForm";
    // window.open("open할 window", "자식창 이름", "팝업창 옵션");
    openWin = window.open("yourLocation.html",
            "childForm", "width=750, height=750, resizable = no, scrollbars = no");    
}


function setChildText(){
    openWin.document.getElementById("cInput").value = document.getElementById("pInput").value;
}