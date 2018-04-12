var col= document.querySelector(".col-3");
var col12 = document.querySelector(".container div")
var text= document.querySelector("p");
var divarr=[];
var imgarr= ["images/a1.jpg","images/a2.jpg","images/a3.jpg","images/a4.jpg",
"images/a5.jpg","images/a6.jpg","images/a7.jpg","images/a8.jpg","images/a9.jpg",
"images/a10.jpg"];

var textarr= ["Salam", "Illuminati", "Mene sigar butun cahan men bu cahana sigmaram", "3d Printer",
 "Heyta gedir qaqa lomka", "Code Academy", "Gunesh siz terefde doga biler ama biz terefde batir", 
 "Galaxy", "Senan deyilir Qafiye Mashini bilinir", "Dunya helede bu kodun zulmune dozur"]

var passadd= document.querySelector("#colmadd");
passadd.addEventListener("click", bas)

function bas(){

    var ytex= document.getElementById("colmgelir").value;
    var ytext= ytex*1;
    for (let i = 0; i < 10; i++) {
        if(ytext<4)
        {
        var div = document.createElement("div");
        var image= document.createElement("div");
        var ptext= document.createElement("p");
        var img= document.createElement("img")
        img.setAttribute("src", imgarr[i]);
        image.className= "img"
        div.className= "col-" + ytext*1
        col12.className= "colm-" + ytext*3;
        ptext.innerHTML= textarr[i]
        col12.appendChild(div);
        div.appendChild(image);
        div.appendChild(ptext);
        image.appendChild(img);
        
        divarr.push(div);
        document.getElementById("colmgelir").disabled= true;
        passadd.removeEventListener("click", bas)
        }
        if(ytext>3 && ytext<7)
        {
            var div = document.createElement("div");
            var image= document.createElement("div");
            var ptext= document.createElement("p");
            var img= document.createElement("img")
        img.setAttribute("src", imgarr[i]);
            image.className= "img"
        div.className= "col-" + ytext*1
        col12.className= "colm-" + ytext*2;
        ptext.innerHTML= textarr[i]
        col12.appendChild(div);
        div.appendChild(image);
        div.appendChild(ptext);
        image.appendChild(img);
        divarr.push(div);
        document.getElementById("colmgelir").disabled= true;
        passadd.removeEventListener("click", bas)
        }
        if(ytext>6)
        {
            alert("Xahish olunur 0-6 arasi seciniz!")
            break;
        }
    }
    
    
}


 