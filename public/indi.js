////////////////////////////////////////////////////////////
//////Expanding inner Body Code///////////////

const text = document.querySelector('#control');
const main = document.querySelector('#change');
const handle = document.querySelector("#handle");
const check1 = document.querySelector(".check1");
const check2 = document.querySelector(".check2");
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

const cont = document.querySelector('#contain');
const handleright = document.querySelector("#handleright");
const handlebottom = document.querySelector("#handlebottom");

// const minwidthOfCont = (40*window.innerWidth)/100 ;
// const maxwidthOcCont = (100*window.innerWidth)/100 ;
const minwidthOfCont = 400 ;
const maxwidthOcCont = 1200 ;

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



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////Drag Box Code/////////////////////////////////////////////////////////////////////////////////////

function dragElement(ele,hand){
    let initialX,initialY,newoffsetx,newoffsety,yoffset=0,xoffset=0;
    let active =false;
    hand.addEventListener('mousedown', e =>{
        initialX = e.clientX - xoffset;
        initialY = e.clientY - yoffset;
        active = true;
    });

    document.body.addEventListener('mouseup', e =>{
        initialX = newoffsetx;
        initialY = newoffsety;
        active = false;
    });

    document.body.addEventListener('mousemove', e =>{
        if(active){
            e.preventDefault();
            newoffsetx = e.clientX - initialX;
            newoffsety = e.clientY - initialY;
            xoffset = newoffsetx;
            yoffset = newoffsety;
            // ele.style.transform = "translateX("+newoffsetx+"px)";
            // ele.style.transform = "translateY("+newoffsety+"px)";
            ele.style.setProperty('transform', `translate3d(${newoffsetx}px,${newoffsety}px,0px)`);
            // ele.style.transform = "translate3d("+newoffsetx+"px,"+newoffsety+"px,0)";
        }
    });
}

const hand = document.querySelector('#navpoint56');
cont.style.position="absolute";
// dragElement(cont,hand);
dragit(cont,hand);

///////////////////////////////////////////Drag Box Code End///////////////////////////////////////////////////////


///////////////////////////////////////another drag code//////////////////////////////////////////


function dragit (ele,hand){
    var xoffset=0,yoffset=0,initialx,initialy,newposx,newposy,active=false;
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////container Complete//////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////TEXT EDITOR SETUP and its buttons functionality/////////////////////////////////////////////////////////////


var htmlareaa = editorh.getWrapperElement();
var cssareaa = editorC.getWrapperElement();
var jsareaa = editorJ.getWrapperElement();
const html = document.querySelector('.html');
const css = document.querySelector('.css');
const js = document.querySelector('.js');


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



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////Editor setting finished////////////////////////////////////////////////////////////


/////////////////////////////////////Html,Css and js plugin code//////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const mainbody = document.querySelector('#change');


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

[editorh,editorC,editorJ].forEach(item =>{
    item.on('change', eva => {

        // html change///
        var strhtml = editorh.getValue();
        mainbody.innerHTML = '';

        mainbody.insertAdjacentHTML("afterbegin",`${strhtml}`);


                //// CSS change event//////////////////////////

        const str = (editorC.getValue()+"}").replace( /[\r\n]+/gm, "" );
        const nstr = str+"}";
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
        if(elements.includes("body")){
            const indices = elements.map((e,i) => e==="body"? i: '').filter(String);
            indices.forEach(e=>{
                elements.splice(e,1,"#change");
            });
        }
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

        /////  Js change event/////////

        var strjs = editorJ.getValue();
        strjs = strjs + '   \na';
        var val = ` 
            try{
                var gha = () =>  {
                    ${strjs}
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
        }
    });
});


