const dias=["Lunes","Martes","Miércoles","Jueves","Viernes"];
// nombre|descripción|precio|emoji
const M={
Lunes:{p:["Bowl de quinua y pollo|Pollo a la plancha, quinua, palta, tomate y cebolla morada con limón|20|🍗","Ají de gallina light|Crema de ají amarillo con yogur griego, huevo duro y arroz integral|19|🥘","Ensalada de salmón|Salmón al horno, mix de hojas, palta, queso y cebolla morada con vinagreta|25|🥗"],d:["Mousse de maracuyá|Yogur griego y semillas de chía|6|🍮","Brownie de cacao y camote|Sin harina refinada|7|🍫"],b:["Limonada de hierbabuena|Sin azúcar refinada|4|🍋","Naranjada sin azúcar|Naranja natural, sin azúcar añadida|4|🍊"]},
Martes:{p:["Tacu tacu de lentejas|Con filete de pollo y salsa criolla|21|🫘","Lomo saltado light|Res magra, verduras y quinua|24|🥩","Wrap integral de pavo|Pechuga de pavo, queso, lechuga, tomate y cebolla morada|18|🌯"],d:["Chia pudding de coco|Con frutos rojos|6|🥥","Muffin de avena|Con avena y frutos secos|5|🧁"],b:["Chicha morada|Natural, sin azúcar añadida|4|🍇","Té helado|Con limón y hierbabuena|3|🧊"]},
Miércoles:{p:["Pescado a la plancha con puré de espárragos|Filete de pescado a la plancha sobre puré de espárragos|25|🐟","Quinotto de hongos|Quinua cremosa con hongos y hierbas frescas|22|🍄","Buddha bowl vegano|Garbanzos, palta, hojas verdes y verduras|20|🥙"],d:["Mousse de arándanos|Con arándanos frescos|7|🫐","Cheesecake de yogurt|Base de avena y frutos rojos|9|🍰"],b:["Agua de piña|Natural, sin azúcar añadida|3|🍍","Té helado de maracuyá|Endulzado con stevia|4|🧊"]},
Jueves:{p:["Pasta integral al pesto|Con pesto de albahaca|21|🍝","Ensalada de lentejas|Lentejas, tomate, queso y hojas verdes|19|🥗","Poke de atún|Atún, brócoli y pepino sobre granos integrales|25|🍣"],d:["Tarta de manzana integral|Con harina integral y canela|8|🥧","Carrot cake con harina de avena|Con zanahoria y nueces|8|🥕"],b:["Limonada de fresa|Con stevia|4|🍓","Maracumango|Maracuyá y mango|5|🥭"]},
Viernes:{p:["Hamburguesa de lentejas|Con cebolla morada y vegetales|20|🍔","Pollo al horno|Con arroz y ensalada fresca|22|🍗","Wrap integral de garbanzo|Garbanzos y verduras frescas|18|🌯"],d:["Flan de plátano|Con nueces|6|🍮","Mazamorra de piña|Con piña fresca|5|🍍"],b:["Carambola|Jugo de carambola natural|5|⭐","Agua de sandía|Natural, sin azúcar añadida|3|🍉"]},
};
const tabs=document.getElementById("tabs"),body=document.getElementById("menuBody"),toast=document.getElementById("toast");
let tt;
function say(t){toast.textContent=t;toast.classList.add("on");clearTimeout(tt);tt=setTimeout(()=>toast.classList.remove("on"),3200)}
const FOTOS={
  "Bowl de quinua y pollo":"images/bowl-de-quinua-y-pollo.jpg",
  "Ají de gallina light":"images/aji-de-gallina-light.jpg",
  "Ensalada de salmón":"images/ensalada-de-salmon.jpg",
  "Tacu tacu de lentejas":"images/tacu-tacu-de-lentejas.jpg",
  "Lomo saltado light":"images/lomo-saltado-light.jpg",
  "Wrap integral de pavo":"images/wrap-integral-de-pavo.jpg",
  "Mousse de maracuyá":"images/mousse-de-maracuya.jpg",
  "Chia pudding de coco":"images/chia-pudding-de-coco.jpg",
  "Muffin de avena":"images/muffin-de-avena.jpg",
  "Brownie de cacao y camote":"images/brownie-de-cacao-y-camote.jpg",
  "Chicha morada":"images/chicha-morada.jpg",
  "Limonada de hierbabuena":"images/limonada-de-hierbabuena.jpg",
  "Naranjada sin azúcar":"images/naranjada-sin-azucar.jpg",
  "Té helado":"images/te-helado.jpg",
  "Mousse de arándanos":"images/mousse-de-arandanos.jpg",
  "Pescado a la plancha con puré de espárragos":"images/pescado-a-la-plancha-con-pure-de-esparragos.jpg",
  "Quinotto de hongos":"images/quinotto-de-hongos.jpg",
  "Cheesecake de yogurt":"images/cheesecake-de-yogurt.jpg",
  "Agua de piña":"images/agua-de-pina.jpg",
  "Buddha bowl vegano":"images/buddha-bowl-vegano.jpg",
  "Té helado de maracuyá":"images/te-helado-de-maracuya.jpg",
  "Limonada de fresa":"images/limonada-de-fresa.jpg",
  "Ensalada de lentejas":"images/ensalada-de-lentejas.jpg",
  "Pasta integral al pesto":"images/pasta-integral-al-pesto.jpg",
  "Poke de atún":"images/poke-de-atun.jpg",
  "Tarta de manzana integral":"images/tarta-de-manzana-integral.jpg",
  "Maracumango":"images/maracumango.jpg",
  "Carrot cake con harina de avena":"images/carrot-cake-con-harina-de-avena.jpg",
  "Hamburguesa de lentejas":"images/hamburguesa-de-lentejas.jpg",
  "Carambola":"images/carambola.jpg",
  "Pollo al horno":"images/pollo-al-horno.jpg",
  "Agua de sandía":"images/agua-de-sandia.jpg",
  "Wrap integral de garbanzo":"images/wrap-integral-de-garbanzo.jpg",
  "Flan de plátano":"images/flan-de-platano.jpg",
  "Mazamorra de piña":"images/mazamorra-de-pina.jpg"
};
function card(s){const [n,d,p,e]=s.split("|");return `<div class="item">${FOTOS[n]?`<img class="ph" src="${FOTOS[n]}" alt="${n}">`:`<div class="emo">${e}</div>`}<h4>${n}</h4><p>${d}</p><div class="price">S/ ${p}.00</div><button class="btn" data-n="${n}" data-p="${p}" data-d="${diaActual}">Agregar al carrito</button></div>`}
let diaActual="";
function show(dia){
  diaActual=dia;
  [...tabs.children].forEach(b=>b.setAttribute("aria-selected",b.textContent===dia));
  const m=M[dia];
  body.innerHTML=`<h3>Platos de fondo</h3><div class="grid">${m.p.map(card).join("")}</div><h3>Postres saludables</h3><div class="grid">${m.d.map(card).join("")}</div><h3>Bebidas</h3><div class="grid">${m.b.map(card).join("")}</div>`;
  rv(body);
}
dias.forEach(d=>{const b=document.createElement("button");b.className="tab";b.setAttribute("role","tab");b.textContent=d;b.onclick=()=>show(d);tabs.appendChild(b)});
const cart=[];
const cartList=document.getElementById("cartList"),cnt=document.getElementById("cnt"),modal=document.getElementById("registro");
function render(){
  cnt.textContent=cart.reduce((a,i)=>a+i.q,0);
  const tot=cart.reduce((a,i)=>a+i.q*i.p,0);document.getElementById("barf").style.width=Math.min(100,tot/35*100)+"%";document.getElementById("free").textContent=tot>=35?"🎉 ¡Tu pedido califica para delivery gratis!":"Te faltan S/ "+(35-tot)+" para tener delivery gratis";
  cartList.innerHTML=cart.length?cart.map((i,k)=>`<div class="line"><span>${i.n}<br><small style="color:var(--muted)">Para el ${i.d}</small></span><span><button type="button" data-k="${k}" data-d="-1">−</button> ${i.q} <button type="button" data-k="${k}" data-d="1">+</button></span><b>S/ ${i.q*i.p}.00</b></div>`).join("")+`<div class="line tot"><span>Total</span><b>S/ ${tot}.00</b></div>`:"<p>Tu carrito está vacío. Agrega platos desde el menú.</p>";
}
let user="";try{user=localStorage.getItem("brotaUser")||""}catch(x){}
function setModal(m,o){m.hidden=!o;document.body.style.overflow=o?"hidden":"";if(o){document.getElementById("msg").textContent="";document.getElementById("omsg").textContent="";render();document.getElementById("needreg").hidden=!!user}}
body.addEventListener("click",e=>{const b=e.target.closest("button[data-n]");if(!b)return;const n=b.dataset.n,p=+b.dataset.p,d=b.dataset.d,f=cart.find(i=>i.n===n&&i.d===d);if(f)f.q++;else cart.push({n,p,q:1,d});render();feedback(b);say("Agregado al carrito ("+d+"): "+n)});
cartList.addEventListener("click",e=>{const b=e.target.closest("button[data-k]");if(!b)return;const k=+b.dataset.k;cart[k].q+=+b.dataset.d;if(cart[k].q<=0)cart.splice(k,1);render()});
const cartModal=document.getElementById("carrito");
document.getElementById("openCart").onclick=()=>setModal(cartModal,true);
document.getElementById("openReg").onclick=()=>setModal(modal,true);
document.getElementById("goReg").onclick=e=>{e.preventDefault();setModal(cartModal,false);setModal(modal,true)};
document.getElementById("close").onclick=()=>setModal(modal,false);
document.getElementById("closeCart").onclick=()=>setModal(cartModal,false);
[modal,cartModal].forEach(m=>m.addEventListener("click",e=>{if(e.target===m)setModal(m,false)}));
document.getElementById("ord").addEventListener("submit",e=>{
  e.preventDefault();
  const m=document.getElementById("omsg");
  if(!cart.length){m.textContent="Agrega al menos un producto al carrito antes de comprar.";return}
  if(!user){m.textContent="Para completar tu compra, primero regístrate.";return}
  const h=document.getElementById("hora").value;
  say("¡Gracias por tu preferencia"+(user?", "+user:"")+"!");confetti();
  cart.length=0;render();e.target.reset();
  m.textContent="¡Gracias por tu preferencia! Recibimos tu pedido. Hora de entrega solicitada: "+h+".";
});
// ---- Chat con el equipo de ventas (atención personalizada, sin chatbot) ----
const TEMAS=[
["Estado de mi pedido","Quisiera saber el estado de mi pedido. "],
["Cambiar mi dirección","Quiero cambiar la dirección de entrega de mi pedido. Nueva dirección en Miraflores: "],
["Problema con mi pedido","Tuve un problema con mi pedido: "],
["Alergias e ingredientes","Tengo una consulta sobre alergias o ingredientes de: "],
["Calificar mi experiencia","Quiero calificar mi pedido del 1 al 5. Mi calificación es: "],
["Cancelar un pedido","Quiero cancelar mi pedido. "]
];
const chat=document.getElementById("chat"),cm=document.getElementById("cmsgs"),chBtn=document.getElementById("chatBtn"),cin=document.getElementById("cin"),cname=document.getElementById("cname"),chips=document.getElementById("chips");
function bub(t,c){const d=document.createElement("div");d.className="b "+c;d.textContent=t;cm.appendChild(d);cm.scrollTop=cm.scrollHeight}
chips.innerHTML=TEMAS.map((x,i)=>`<button type="button" data-i="${i}">${x[0]}</button>`).join("");
chips.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;cin.value=TEMAS[+b.dataset.i][1];cin.focus()});
function setChat(o){
  chat.hidden=!o;chBtn.hidden=o;
  if(!o)return;
  if(user&&!cname.value)cname.value=user;
  cin.focus();
}
chBtn.onclick=()=>setChat(true);
document.getElementById("chatX").onclick=()=>setChat(false);
document.getElementById("cform").addEventListener("submit",e=>{
  e.preventDefault();
  const v=cin.value.trim(),n=cname.value.trim();
  if(!v||!n)return;
  bub(v,"me");
  const st=document.createElement("small");st.textContent="Enviado ✓";st.style.cssText="align-self:flex-end;font-size:.75rem;color:var(--muted)";cm.appendChild(st);cm.scrollTop=cm.scrollHeight;
  cin.value="";
});
// ---- Efectos visuales e interactivos ----
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
function rv(root){root.querySelectorAll(".pill,.item,#nosotros h2,#menu h2,#encuentranos h2").forEach(el=>{el.classList.add("rv");io.observe(el)})}
rv(document);
document.getElementById("collage").innerHTML=["Bowl de quinua y pollo","Ensalada de salmón","Mousse de maracuyá"].map(n=>`<img src="${FOTOS[n]}" alt="${n}">`).join("");
function feedback(b){b.textContent="✓ Agregado";b.classList.add("ok");setTimeout(()=>{b.textContent="Agregar al carrito";b.classList.remove("ok")},1100);const c=document.getElementById("openCart");c.classList.remove("bump");void c.offsetWidth;c.classList.add("bump")}
function confetti(){for(let i=0;i<24;i++){const s=document.createElement("span");s.className="cf";s.textContent=["🥗","🍓","🥑","🍋","🎉"][i%5];s.style.left=Math.random()*100+"vw";s.style.animationDelay=Math.random()*.6+"s";document.body.appendChild(s);setTimeout(()=>s.remove(),3200)}}
const lb=document.getElementById("lb"),lbi=document.getElementById("lbi"),lbp=document.getElementById("lbp");
body.addEventListener("click",e=>{const im=e.target.closest(".ph");if(!im)return;const it=im.closest(".item");lbi.src=im.src;lbp.textContent=it.querySelector("h4").textContent+" — "+it.querySelector("p").textContent;lb.hidden=false});
lb.onclick=()=>{lb.hidden=true};
document.getElementById("theme").onclick=()=>{const d=document.documentElement;const dark=d.dataset.theme?d.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;d.dataset.theme=dark?"light":"dark"};
// abre el día actual (domingo -> lunes)
const hoy=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"][new Date().getDay()];
show(dias.includes(hoy)?hoy:"Lunes");
document.getElementById("reg").addEventListener("submit",e=>{
  e.preventDefault();
  const n=document.getElementById("nombre").value.trim();
  user=n;try{localStorage.setItem("brotaUser",n)}catch(x){}
  document.getElementById("msg").textContent="¡Bienvenido/a, "+n+"! Ya estás registrado/a.";
  say("¡Registro exitoso, gracias por tu preferencia!");e.target.reset();
  if(cart.length)setTimeout(()=>{setModal(modal,false);setModal(cartModal,true)},900);
});
