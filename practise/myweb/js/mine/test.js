
    window.onload = function(){
        var ulEle = document.getElementById("ul-test");
        ulEle.onclick = function(evaa){
            var ev = evaa || window.event;
            var target = ev.target || ev.srcElement;
            if(target.nodeName.toLowerCase() == 'li'){
                alert(target.innerHTML);
                if(target.id == 'li-3'){
                    alert('click li-3');
                }
            }
        }
    }
