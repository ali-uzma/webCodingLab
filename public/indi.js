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
let props = {};

var texti = document.querySelector("#story");
texti.addEventListener('input', e => {
  
    const str = (e.target.value+"}").replace( /[\r\n]+/gm, "" );
    const nstr = str+"}";

    var regex = /{([^}]+)}/g;
    const mono = nstr.split(regex).filter(Boolean);

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
            elements.splice(e,1,"#noella");
        });
    }
    const sporp = {};
        
    elements.forEach((e,i)=>{
        if(fin[i]){
            sporp[e] = [];
            fin[i].forEach((e2,j) => {


                //cancelling css part when property is removed
                sporp[e].push(e2[0]);

                // // to remove empty elements
                sporp[e].forEach((y,i) => {
                    if(y ===""){
                        sporp[e].splice(i,1);
                    }
                });


                const h = Array.from(document.querySelectorAll(`${e}`));
                h.forEach(e3=>{
                    if(e2[0] in e3.style){
                        e3.style[e2[0]] = e2[1];

                     }

                });
            });
        }
    });
// deleting or removing style
    for(var key in props){
        if(props.hasOwnProperty(key)){
            if(key in sporp){
                 props[key].forEach(e=>{
                     if(!sporp[key].includes(e)){
                        //console.log("includes");
                        
                        const v = Array.from(document.querySelectorAll(`${key}`));
                        v.forEach(e3=>{
                            if(e in e3.style){
                                //console.log("style");
                                e3.style[e] = "";
               
                            }
               
                        });

                    }
                });
            }
        }
    }
    props = sporp;
});
