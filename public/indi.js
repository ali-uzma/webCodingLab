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
});
