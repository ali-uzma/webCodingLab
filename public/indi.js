////////////////Data From CodeMirror Editor///////////////////////////////////
var editorh7854 = CodeMirror.fromTextArea(document.getElementById('editorh78'), {
    mode: { name: "xml", htmlMode: true, matchClosing: true},
    theme: "material-ocean",
    lineNumbers: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    tabMode:"indent",
    matchTags: {bothTags: true},
    styleActiveLine: "enabled"
});
editorh7854.setSize('100%','100%');

var editorC4567 = CodeMirror.fromTextArea(document.getElementById('editorc78'), {
    mode: 'text/css',
    theme: "material-ocean",
    lineNumbers: true,
    autoCloseBrackets: true,
    tabMode:"indent",
    styleActiveLine: "enabled"
});
editorC4567.setSize('100%','100%');

var editorJ2463 = CodeMirror.fromTextArea(document.getElementById('editorj78'), {
    mode: "javascript",
    theme: "material-ocean",
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    tabMode:"indent",
    styleActiveLine: "enabled"
});
editorJ2463.setSize('100%','100%');

//////////////////////////////////////////////////////////////////////////////////
///////////////////html changing function////////////////////////////////////////


function htmlchangingcodebytheuser110(editorh){
    const mainbody = document.querySelector('#change1067');
    var strhtml = editorh7854.getValue();
    strhtml = codehidingfromuser683(strhtml,46);
    mainbody.innerHTML = '';
    ////////////////removing private elements,ids and classes/////////////////////
    
    mainbody.insertAdjacentHTML("afterbegin",`${strhtml}`);
    //////////dragging functionality///////////////////////////////////////
    var children = document.querySelectorAll('#change1067 *');
    domArray220 = Array.from(children);
    domArray220.forEach((e,i)=>{
        dragElement80009(e,e,i);
    });
    olddomarray330 = domArray220;
}

/////////////////////////////////////////////////////////////////////////////////
//////////////////////CSS changing function///////////////////////////////////
function csschangingcodebytheuser110(editorC){

    var str = (editorC4567.getValue()+"}").replace( /[\r\n]+/gm, "" );
    // const nstr = str+"}";
    str = codehidingfromuser683(str,47);
    var regex = /{([^}]+)}/g;
    const mono = str.split(regex).filter(Boolean);

    mono.pop();
    const obj = separate(mono);
    const prop = obj.odd;
    const ele = obj.even;
    let mimi = prop.map(e => {
        return e.split(';');
    });

    // change it to function used multiple times
    mimi.forEach(e => {
        if(e[e.length-1]===""){
            e.pop();
        }
    });
    const fin = mimi.map(e=> {
        return e.map((e1,i)=>{
            return e1.split(':');
        }).map(e3 =>{
            return e3.map(e4=>{ 
                //return e4.replace(/\s+/g,"");  regex method
                return e4.trim(); // simple method :D
            }); // regex for removing white space.
        });

    });
    const elements = ele.map(e => {
        return e.trim();  // white space removed from elements part.
    });
    var restrict = ['body','Body','BOdy','BODy','BODY','bODY','boDY','bodY','HTML','Html','HTml','HTMl','html','htML','hTML','htmL'];
    restrict.forEach(poi =>{
        if(elements.includes(poi)){
            const indices = elements.map((e,i) => e===poi? i: '').filter(String);
            indices.forEach(e=>{
                elements.splice(e,1,"#change1067");
            });
        }

    });

    const doc = document.querySelector('style');  
    doc.innerHTML="";  
    elements.forEach((e,i)=>{
        if(fin[i]){
            fin[i].forEach((e2,j)=>{
                const markup = `
                ${e} {
                    ${e2[0]}:${e2[1]};
                }
                `;
                doc.insertAdjacentText("afterbegin",markup);

            });
        }
    });
        /// this function separates even and odd array element and return object.
    function separate(arr){
        var even = [];
        var odd = [];
        arr.forEach((e,i) => {
            if(i===0 || i%2 === 0){
                even.push(e);
            }
            else {
                odd.push(e);
            }
        });
        const obj = { 
            even,
            odd
        }
        return obj;
    }

}

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////Container flexibility and functionality function////////////////////////

function makeContainerFlexibleAndStretchible(){

    ////////////////////////////////////////////////////////////
    //////Expanding inner Body Code///////////////
    const text = document.querySelector('#control1050');
    const main = document.querySelector('#change1067');
    const handle = document.querySelector("#handle659");
    const check1 = document.querySelector(".check162");
    const check2 = document.querySelector(".check262");
    handle.style.position = "absolute";
    //main.style.position = 'relative';
    const minwidth = 100;
    const maxwidth = 1000;
    text.style.setProperty('--max-width', `${maxwidth}px`);
    text.style.setProperty('--min-width', `${minwidth}px`);
    main.style.setProperty('--max-widthMain', `${maxwidth}px`);
    main.style.setProperty('--min-widthMain', `${minwidth}px`);
    var initialwidthOfText = getComputedStyle(text).getPropertyValue('--resizeable-width');
    var initialwidthOfMain = getComputedStyle(main).getPropertyValue('--resizeable-widthMain');
    var xoffset = 0,newoffset,initialx,iwidth,newwidth,iwidthMain,newwidthMain;
    var active = false;

    const startclick = (e) => {
        e.preventDefault();

        initialx = e.clientX - xoffset;
        iwidth = parseInt(initialwidthOfText,10);
        iwidthMain = parseInt(initialwidthOfMain,10);
        active = true;
        const draggingcursor = (ev) =>{
            if(active){
                ev.preventDefault();
                newoffset = ev.clientX - initialx;
                
                newwidth = Math.min(Math.max(iwidth-newoffset, minwidth), maxwidth);
                newwidthMain = Math.min(Math.max(iwidthMain+newoffset, minwidth), maxwidth);
                newoffset = iwidth - newwidth;
                xoffset = newoffset;
            
                //text.style.transform = "translateX("+newoffset+"px)";
                text.style.setProperty('--resizeable-width',`${newwidth}px`);
                check2.style.setProperty('--resizeable-widthbuton',`${newwidth}px`);
                main.style.setProperty('--resizeable-widthMain',`${iwidthMain+newoffset}px`);
                check1.style.setProperty('--resizeable-widthMainbuton',`${iwidthMain+newoffset}px`);
            }
            
            
        };
        document.querySelector('body').addEventListener('mousemove',draggingcursor);
    }
    const endit = (e)=>{
        active = false;
    }
    handle.addEventListener('mousedown',startclick,false);

    document.body.addEventListener('mouseup',endit,false);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////Expanding Whole Box/////////////////////////////////////////////////////////////////////

    const cont = document.querySelector('#contain56');
    const handleright = document.querySelector("#handleright");
    const handlebottom = document.querySelector("#handlebottom");
    const minwidthOfCont = 400 ;
    const maxwidthOcCont = window.innerWidth ;
    cont.style.setProperty('--max-width',`${maxwidthOcCont}`);


    var activeR = false, chan = false;
    const getwidth = () =>{
        var initialwidthC = getComputedStyle(cont).getPropertyValue('--resizeable-width');
        var iwidthC = (parseInt(initialwidthC,10)*window.innerWidth)/100;
        return iwidthC;
    }

    var xoffsetR = 0,initialxR, newoffsetR =0, newwidthC;



    const rightstartclick= (e) => {
                e.preventDefault();
                initialxR = e.clientX ;
                activeR = true;
                chan = true;
                var widthinitial = getwidth();
    
                const draggingcursorR = (ev) =>{
                    if(activeR){
                        ev.preventDefault();
                        xoffsetR = ev.clientX - initialxR;
                        newwidthC = Math.min(Math.max(widthinitial+xoffsetR, minwidthOfCont), maxwidthOcCont);
                        cont.style.setProperty('--resizeable-width',`${(newwidthC/window.innerWidth)*100}%`);
            
                    }     
                };
                window.addEventListener('mousemove',draggingcursorR,false);
            
                
    }
    const rightendit = () =>  {
        if(chan){
            activeR = false;
        }  
        
    }
    ///////////////////////////////////////////bottom control//////////////////////////////////////////////////


    const minheight = 300 ;
    var initialheight = getComputedStyle(cont).getPropertyValue('--resizeable-height');
    var iheight = parseInt(initialheight,10),newheight, allow = false;
    var chan2;
    var bottomcontrol = {
        yoffsett: '',
        newoffset: 0,
        initialy : '',
        startclick: (e) => {
                e.preventDefault();
                this.initialy = e.clientY;
                chan2 = true;
                allow = true;
                const draggingcursorB = (ev) =>{
                    if(allow){
                        ev.preventDefault();
                        this.yoffsett = ev.clientY - this.initialy;
                        newheight = Math.max(iheight+this.yoffsett, minheight);
                        cont.style.setProperty('--resizeable-height',`${newheight}px`);
            
                    }
                    
                    
                };
                window.addEventListener('mousemove',draggingcursorB,false);
                
                
        },
        enditB: function() {
            
            if(chan2){
                allow = false;
                iheight = newheight;
                chan2 = false;
            }
        
        }
    }

    handleright.addEventListener('mousedown', rightstartclick);
    handlebottom.addEventListener('mousedown', bottomcontrol.startclick);

    window.addEventListener('mouseup',rightendit,false);
    window.addEventListener('mouseup',bottomcontrol.enditB,false);

    //////////////////////////////////////another drag code//////////////////////////////////////////


    function dragit (ele,hand){
        var rectele = ele.getBoundingClientRect();
        var xoffset=0,yoffset=rectele.top,initialx,initialy,newposx,newposy,active=false;
        // var ele = document.querySelector('#drag-1');
        ele.style.position = 'absolute';

        hand.addEventListener('mousedown', e =>{
            initialx = e.clientX - xoffset;
            initialy = e.clientY - yoffset;
            active = true;
            window.addEventListener('mouseup', ev=>{
                active = false
            });
            window.addEventListener('mousemove', ev=>{
                if(active){
                ev.preventDefault();
                newposx = ev.clientX - initialx;
                newposy = ev.clientY - initialy;
                xoffset = newposx;
                yoffset = newposy;
                initialx = ev.clientX - xoffset;
                initialy = ev.clientY - yoffset;
                // ele.style.top = e.client - pos2) + "px";
                ele.style.left = (newposx) +'px';
                ele.style.top = (newposy)+'px';
                // console.log(newposx);
            
                }
            
            
            });
        });
    }
    const hand = document.querySelector('#navpoint56');
    cont.style.position="absolute";
    dragit(cont,hand);

}

makeContainerFlexibleAndStretchible();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////Drag Box Code/////////////////////////////////////////////////////////////////////////////////////
    function dragElement80009(ele,hand,indices){
        
        const mainbody = document.querySelector('#change1067');
        let initialX,initialY,newoffsetx = 0,newoffsety = 0,yoffset=0,xoffset=0, objvalue = 0;
        let active =false;
        if(olddomarray330[indices] && oldoffset440[indices]){
            if(ele.tagName===olddomarray330[indices].tagName){
                xoffset = oldoffset440[indices].x;
                newoffsetx = oldoffset440[indices].x;
                yoffset = oldoffset440[indices].y;
                newoffsety = oldoffset440[indices].y;
                ele.style.setProperty('transform', `translate3d(${newoffsetx}px,${newoffsety}px,0px)`);


            }
        }
       

        hand.addEventListener('mousedown', e =>{
            if (dragactive550) {
            //     ele.addEventListener('click', ev =>{
                    e.preventDefault();
            //         ev.stopPropagation();
            //     });
            } 
            initialX = e.clientX - xoffset;
            initialY = e.clientY - yoffset;
            active = true;
        });
    
        document.body.addEventListener('mouseup', e =>{
            initialX = newoffsetx;
            initialY = newoffsety;
            var objj = {
                x: newoffsetx,
                y: newoffsety
            }
            active = false;
            objvalue = objj;
            oldoffset440[indices] = objj;
        });
    
        document.body.addEventListener('mousemove', e =>{
            if(active && dragactive550){
                e.preventDefault();

                var rect = mainbody.getBoundingClientRect();
                var rectele = ele.getBoundingClientRect();
                if(rectele.left >= rect.left && rectele.top >= rect.top){
                    // if(e.clientY > rect.top && e.clientY < rect.bottom){
                        newoffsetx = e.clientX - initialX;
                        newoffsety = e.clientY - initialY;
                        xoffset = newoffsetx;
                        yoffset = newoffsety;
                        ele.style.setProperty('transform', `translate3d(${newoffsetx}px,${newoffsety}px,0px)`);
                }
                else{
                    ele.style.setProperty('transform', `translate3d(2px,2px,0px)`);
      
                }
                // }
            }
        });
        return objvalue;
    }


///////////////////////////////////////////Drag Box Code End///////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////container Complete//////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////TEXTAREA EDITOR SETUP and its buttons functionality/////////////////////////////////////////////////////////////

function textareaSetupAfterLoading(){
    var htmlareaa = editorh7854.getWrapperElement();
    var cssareaa = editorC4567.getWrapperElement();
    var jsareaa = editorJ2463.getWrapperElement();
    const html = document.querySelector('.html1089');
    const css = document.querySelector('.css1088');
    const js = document.querySelector('.js1087');


    function addhover (event){
        event.target.setAttribute("style","background-color: rgb(15, 15, 15); border-top-left-radius: 7px; border-top-right-radius: 7px;");
    }
    function removehover(event){
        event.target.setAttribute("style","background-color: inherit; border-top-left-radius: inherit; border-top-right-radius: inherit;");
    }
    function hoverevent(ele){
        ele.addEventListener('mouseover', addhover);
        ele.addEventListener('mouseout', removehover);
    }

    function attributeSet(ele){
        ele.setAttribute("style", "color: palegoldenrod; background-color: #0F111A; outline: none; border-top-left-radius: 7px; border-top-right-radius: 7px;");
        ele.removeEventListener('mouseover',addhover);
        ele.removeEventListener('mouseout', removehover);
        displayTextarea('block','none','none');
    }

    function displayTextarea(Html,Css,Js){
        htmlareaa.style.display = Html;
        cssareaa.style.display = Css;
        jsareaa.style.display = Js;
    }
    [html,css,js].forEach(e =>{
        hoverevent(e);
        e.addEventListener('click', e2 => {
            
            [html,css,js].forEach(e3 =>{
                e3.setAttribute("style", "color: gray; background-color: inherit; font-weight: inherit; outline: none; border-top:inherit;border-top-left-radius: inherit; border-top-right-radius: inherit;");
                hoverevent(e3);
            });
            attributeSet(e2.target);
            if(e2.target === html){
                displayTextarea('block','none','none');  
            }
            else if(e2.target === css){
                displayTextarea('none','block','none');
            }
            else if(e2.target){
                displayTextarea('none','none','block');
            }
        
        });
    });
    window.addEventListener('load', attributeSet(html) );

}
textareaSetupAfterLoading();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////Editor setting finished////////////////////////////////////////////////////////////


/////////////////////////////////////Html,Css and js plugin code//////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



[editorh7854,editorC4567,editorJ2463].forEach(item00034 =>{
    item00034.on('change', () => {

        // html change///
        htmlchangingcodebytheuser110(editorh7854);
  
        //// CSS change event//////////////////////////
        csschangingcodebytheuser110(editorC4567);

        /////  Js change event/////////
        var strjs648 = editorJ2463.getValue();
        strjs648 = strjs648 + '   \na';
        strjs648 = codehidingfromuser683(strjs648,47);
        var val = ` 
            try{
                var gha = () =>  {
                    ${strjs648}
                }; \n
                gha(); 
                    
            } \n
            catch(error){         
            }
            `;
        try{
          new Function(val)();  
        }
        catch(err){
            // console.log(err)
        }
        
    });
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////DRAGGING FUNCTIONALITY TO MAIN CHANGING BODY///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var domArray220 = [];
var olddomarray330 = [];
var oldoffset440 = [];
var dragactive550 = false;
var Dragele640 = document.querySelector('.drag364');

Dragele640.addEventListener('click', e =>{
    if(dragactive550){
        dragactive550=false;
        Dragele640.setAttribute("style","background-color: inherit; border-top-left-radius: inherit; border-top-right-radius: inherit;");
        domArray220.forEach(el=>{
            el.style.cursor = 'auto';
        });
    } 
    else{
        dragactive550=true;
        Dragele640.setAttribute("style","color:palegoldenrod; background-color: rgb(15, 15, 15); border-top-left-radius: 7px; border-top-right-radius: 7px;");
        domArray220.forEach(el=>{
            el.style.cursor = 'move';
        });
    }
});  
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
////////////////////privacy to code//////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
function codehidingfromuser683(string,num){
    function name(str,replaceWhat,replaceTo){
        var re = new RegExp(replaceWhat, 'g');
        return str.replace(re,replaceTo);
    }
    var stri = string;
    var stri2 = string;

    var idelements = ['putVideoHere63387','VideoInput455376','theMovingDiv67465','putImageHere63387','ImageInput455376','theMovingDiv6747','theContainingBodyOfTheMovingDiv','functionLikeButtonVideo','functionLikeButtonImage','myLogo90','contain56','handle659','handleleft','handleright','handlebottom','navpoint56','main856','change1067','control1050','editorh78','editorc78','editorj78'];
    var classelements = ['IconToReverseDiv2','IconToReverseDiv1','check162','check262','drag364','html1089','css1088','js1087'];
    if(num===46){
        if(string.includes("<myele90>")){
            stri = string.split('<myele90>').join('<myele98>');
            stri2 = stri.split('</myele90>').join('</myele98>');
        }
        if(string.includes("<style>")){
            stri2 = stri2.split('<style>').join('');
            stri2 = stri2.split('</style>').join('');
        }
        if(string.includes("<script>")){
            stri2 = stri2.split('<script>').join('');
            stri2 = stri2.split('</script>').join('');
        }
        idelements.forEach((e,i)=>{
            stri2 = name(stri2,e,e+"0");
        });
        classelements.forEach(e=>{
            stri2 = name(stri2,e,e+"0");
        }); 
    }
    if(num === 47){
        if(string.includes("myele90")){
            stri2 = string.split('myele90').join('myele98');
        }
        idelements.forEach(e=>{
            stri2 = name(stri2,e,e+"0");
        });
        classelements.forEach(e=>{
            stri2 = name(stri2,e,e+"0");
        });
        var restrict = ['body','Body','BOdy','BODy','BODY','bODY','boDY','bodY'];
        restrict.forEach(poi =>{
            if(stri2.includes("document."+poi)){
                stri2 = stri2.split("document."+poi).join('document.querySelector("#change1067")');
            }    
        });
    }
    return stri2;
}
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////Image and Video Buttons functionality///////////////////////////////////////////////////
var cont = document.querySelector('#theContainingBodyOfTheMovingDiv');
cont.style.width = (window.innerWidth-50);
var div1 = document.querySelector('#theMovingDiv6747');
var div2 = document.querySelector('#theMovingDiv67465');
var buton1 = document.querySelector('#functionLikeButtonImage');
var buton2 = document.querySelector('#functionLikeButtonVideo');

buton1.addEventListener('click', e=>{
    div1.style.transition= '0.8s';
    div1.style.transform= 'translateX(-1250px)';
});
var imgIcon1 = document.querySelector('.IconToReverseDiv1');
var imgIcon2 = document.querySelector('.IconToReverseDiv2');

imgIcon1.addEventListener('click', e=>{
    div1.style.transition= '2s';
    div1.style.transform= 'translateX(1250px)';
});
buton2.addEventListener('click', e=>{
    div2.style.transition= '0.8s';
    div2.style.transform= 'translateX(-2000px)';
});
imgIcon2.addEventListener('click', e=>{
    div2.style.transition= '2s';
    div2.style.transform= 'translateX(2000px)';
});

//////uploading code////////

var fileeleImage = document.querySelector('#ImageInput455376');
var fileeleVideo = document.querySelector('#VideoInput455376');

var put1 =document.querySelector('#putImageHere63387');
var put2 =document.querySelector('#putVideoHere63387');

fileeleImage.addEventListener('input', e=>{
    var file = fileeleImage.files[0];
    const div = document.createElement("myele90");
    put1.appendChild(div);
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.width = 60;
    // img.onload = function() {
    //   URL.revokeObjectURL(this.src);
    // }
    div.appendChild(img);
    const info = document.createElement('span');
    info.style.color = 'white';
    info.innerHTML=file.name+' : '+img.src;
    div.appendChild(info);
    const crossImg = document.createElement("img");
    crossImg.src = 'cross.png';
    crossImg.width =20;
    crossImg.style.paddingLeft = '15px';
    div.appendChild(crossImg);
    crossImg.onclick = function(){
        URL.revokeObjectURL(img.src);
        div.innerHTML = '';
        div.parentNode.removeChild(div);
    }

});

fileeleVideo.addEventListener('input', e=>{
    var file = fileeleVideo.files[0];
    const div = document.createElement("myele90");
    put2.appendChild(div);
    const vid = document.createElement("video");
    vid.src = URL.createObjectURL(file);
    vid.width = 60;
    // img.onload = function() {
    //   URL.revokeObjectURL(this.src);
    // }
    div.appendChild(vid);
    const info = document.createElement('span');
    info.style.color = 'white';
    info.innerHTML='  '+vid.src;
    div.appendChild(info);
    const crossImg = document.createElement("img");
    crossImg.src = 'cross.png';
    crossImg.width =20;
    crossImg.style.paddingLeft = '15px';
    div.appendChild(crossImg);
    crossImg.onclick = function(){
        URL.revokeObjectURL(vid.src);
        div.innerHTML = '';
        div.parentNode.removeChild(div);
    }

});

