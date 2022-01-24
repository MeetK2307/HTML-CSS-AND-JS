function clickbutton1(){
    let a = document.getElementById('d1');
    console.log(a.value);
    
    let b = document.getElementById('d2');
    b.value = a.value;

}

function clickbutton2(){
    let c = document.getElementById('a1');
    let d = document.getElementById('a2');
    console.log(c.value);
    console.log(d.value);
    let e = document.getElementById('a3');
    e.value = parseInt(c.value) + parseInt(d.value);
}

function clickbutton3(){
    let f = document.getElementById('a4');
    let g = document.getElementById('a5');
    console.log(f.value);
    console.log(g.value);
    let h = document.getElementById('a6');
    h.value = parseInt(f.value) - parseInt(g.value);
}

function clickbutton4(){
    let i = document.getElementById('a7');
    let j = document.getElementById('a8');
    console.log(i.value);
    console.log(j.value);
    let k = document.getElementById('a9');
    k.value = parseInt(i.value) * parseInt(j.value);
}

function clickbutton5(){
    let l = document.getElementById('a10');
    let m = document.getElementById('a11');
    console.log(l.value);
    console.log(m.value);
    let n = document.getElementById('a12');
    n.value = parseInt(l.value) / parseInt(m.value);
}

function clickbutton6(){
    let o = document.getElementById('a13');
    let p = document.getElementById('a14');
    console.log(o.value);
    console.log(p.value);
    let q = document.getElementById('a15');
    q.value = parseInt(o.value) % parseInt(p.value);
}

function clickbutton7(){
    let r = document.getElementById('a16');
    let s = document.getElementById('a17');
    console.log(r.value);
    console.log(s.value);
    let t = document.getElementById('a18');
    t.value = parseInt(r.value) ** parseInt(s.value);
}