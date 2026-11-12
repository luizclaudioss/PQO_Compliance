/* Lógica do simulado – Guia Por Dentro da B3 */
var $=function(i){return document.getElementById(i)};
function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;")}
function save(){try{localStorage.setItem(K,JSON.stringify(S))}catch(e){}}
function load(){try{return JSON.parse(localStorage.getItem(K))}catch(e){return null}}
function wipe(){try{localStorage.removeItem(K)}catch(e){}}
function byN(n){return D.filter(function(q){return q.n===n})[0]}
function pct(a,b){return String(Math.round(a*1000/b)/10).replace(".",",")}
var QN=60;
function prefs(){try{return JSON.parse(localStorage.getItem('pqo_prefs'))||{}}catch(e){return {}}}
function setPrefs(p){try{localStorage.setItem('pqo_prefs',JSON.stringify(p))}catch(e){}}
function bankPool(b){return D.filter(function(q){return b==="novas"?q.n>=82:(b==="guia"?q.n<=81:true)}).map(function(q){return q.n})}
function strat(pool,k){if(pool.length<=k)return pool.slice().sort(function(a,b){return a-b});var g={};pool.forEach(function(n){var t=byN(n).tit;(g[t]=g[t]||[]).push(n)});var ks=Object.keys(g),tot=pool.length,q={},rem=[],s=0;ks.forEach(function(t){var x=k*g[t].length/tot;q[t]=Math.floor(x);s+=q[t];rem.push([t,x-q[t]])});rem.sort(function(a,b){return b[1]-a[1]});for(var i=0;s<k;i++){q[rem[i%rem.length][0]]++;s++}var out=[];ks.forEach(function(t){out=out.concat(shuffle(g[t].slice()).slice(0,q[t]))});return out.sort(function(a,b){return a-b})}
function setup(){
  $("quiz").className="hide";$("bar").className="bar hide";$("setup").className="setup";
  var p=prefs(),md=p.mode==="prova"?"prova":"estudo",bk=(p.bank==="todas"||p.bank==="novas")?p.bank:"guia",sf=p.shuf!==false;
  var nG=bankPool("guia").length,nN=bankPool("novas").length,nT=D.length;
  var sv=load(),h="";
  if(sv&&sv.ids&&!sv.done){h+='<div class="resume"><span>Você tem um simulado em andamento ('+Object.keys(sv.ans).length+' de '+sv.ids.length+' respondidas).</span><button type="button" class="alt" id="cont">Continuar</button></div>'}
  function rd(name,val,title,sub,ck){return '<label class="opt'+(ck?' sel':'')+'"><input type="radio" name="'+name+'" value="'+val+'"'+(ck?' checked':'')+'><span><b>'+title+'</b><small>'+sub+'</small></span></label>'}
  h+='<div class="sec">Modo</div><div class="ogrid g2">'+rd("mode","estudo","Estudo","Mostra se acertou e o comentário logo após cada resposta.",md==="estudo")+rd("mode","prova","Prova","O resultado e os comentários aparecem só depois de finalizar.",md==="prova")+'</div>';
  h+='<div class="sec">Banco de questões</div><div class="ogrid g3">'+rd("bank","guia","Guia","Questões originais baseadas no guia.",bk==="guia")+rd("bank","todas","Guia + questões novas","Todo o banco: guia e questões criadas nas últimas versões.",bk==="todas")+rd("bank","novas","Questões novas","Somente as questões criadas nas últimas versões.",bk==="novas")+'</div><p class="note" id="bnote"></p>';
  h+='<div class="sec">Opções</div><label class="chk"><input type="checkbox" id="shuf"'+(sf?' checked':'')+'><span><b>Embaralhar alternativas</b><small>A ordem das alternativas muda a cada simulado; as letras seguem a nova ordem.</small></span></label>';
  h+='<button id="go" class="primary">Iniciar simulado</button><p class="hint">Formato prova oficial: '+QN+' questões. Responda e clique em Avançar.<br>Você pode voltar e revisar antes de finalizar.</p>';
  $("setup").innerHTML=h;
  function upd(){document.querySelectorAll("#setup label.opt").forEach(function(l){var i=l.querySelector("input");l.classList.toggle("sel",!!(i&&i.checked))});var b=document.querySelector("input[name=bank]:checked").value,n=bankPool(b).length,nt=$("bnote");if(n<QN){nt.textContent="O banco de questões novas tem "+n+" questões; a prova terá "+n+".";nt.style.display="block"}else{nt.textContent="";nt.style.display="none"}}
  $("setup").onchange=upd;upd();
  $("go").onclick=function(){var mode=document.querySelector("input[name=mode]:checked").value,b=document.querySelector("input[name=bank]:checked").value,sh=$("shuf").checked;setPrefs({mode:mode,bank:b,shuf:sh});begin(mode,strat(bankPool(b),QN),sh)};
  if($("cont"))$("cont").onclick=function(){S=sv;show()};
}

function begin(mode,ids,sh){sh=(sh!==false);S={mode:mode,ids:ids,ans:{},done:false,shuf:sh,ord:{},cur:0};ids.forEach(function(n){var L=byN(n).opts.map(function(o){return o[0]});S.ord[n]=sh?shuffle(L.slice()):L});save();show()}
function order(q){var L=q.opts.map(function(o){return o[0]});var o=S&&S.ord&&S.ord[q.n];if(!o||o.length!==L.length)return L;for(var i=0;i<L.length;i++){if(o.indexOf(L[i])<0)return L}return o}
function disp(q,orig){var i=order(q).indexOf(orig);return i<0?orig:String.fromCharCode(97+i)}
function optText(q,L){var o=q.opts.filter(function(x){return x[0]===L})[0];return o?o[1]:""}
function show(){
  warned=false;$("setup").className="setup hide";$("quiz").className="";$("bar").className="bar";
  $("res").className="hide";$("send").className="";$("errs").className="alt hide";$("again").className="hide";if($("pdfReport"))$("pdfReport").className="alt hide";$("home").className="alt";
  $("send").textContent=S.mode==="estudo"?"Finalizar":"Enviar respostas";
  $("sub").textContent=(S.mode==="estudo"?"Modo Estudo: ":"Modo Prova: ")+S.ids.length+(S.mode==="estudo"?" questões. Cada resposta é corrigida na hora.":" questões. Envie para ver o resultado, o gabarito e os comentários.");
  var h="",lt="",lc="";
  S.ids.forEach(function(n,ix){var q=byN(n);
    h+='<div class="q" id="q'+q.n+'"><div class="qhead"><span class="qn">Questão '+(ix+1)+' de '+S.ids.length+'</span><span class="qt">Título '+q.tit+' – '+esc(q.titn)+' · Cap. '+q.cap+' – '+esc(q.capn)+'</span></div><p>'+esc(q.stem)+"</p>";
    order(q).forEach(function(L,i){h+='<label id="l'+q.n+L+'"><input type="radio" name="r'+q.n+'" value="'+L+'"><span><b>'+String.fromCharCode(97+i)+")</b> "+esc(optText(q,L))+"</span></label>"});
    h+='<div class="exp hide" id="e'+q.n+'"></div><div class="pnav"><button type="button" class="alt pv">‹ Voltar</button><button type="button" class="nx">Avançar ›</button></div><div class="pmsg"></div></div>'});
  if(typeof S.cur!=="number"||S.cur<0||S.cur>=S.ids.length)S.cur=0;$("qs").innerHTML=h;renderNav();$("qs").onclick=function(e){var b=e.target.closest("button");if(!b)return;if(b.hasAttribute("data-pg")){openGuide(+b.getAttribute("data-pg"));return}if(b.classList.contains("pv"))goTo(S.cur-1);else if(b.classList.contains("nx"))nextAct()};
  S.ids.forEach(function(n){var a=S.ans[n];if(a){var i=document.querySelector('input[name=r'+n+'][value='+a+']');if(i)i.checked=true;if(S.mode==="estudo")reveal(byN(n))}});
  $("qs").onchange=function(e){var m=/^r(\d+)$/.exec(e.target.name);if(!m||S.done)return;S.ans[m[1]]=e.target.value;warned=false;save();if(S.mode==="estudo")reveal(byN(+m[1]));prog()};
  goTo(S.cur);prog();
}
function renderNav(){var nav=$("qnav"),h="";S.ids.forEach(function(n,i){h+='<button type="button" class="qnav-btn" id="nav'+n+'" data-q="'+n+'">'+(i+1)+'</button>'});nav.innerHTML=h;nav.onclick=function(e){var b=e.target.closest("button[data-q]");if(!b)return;goTo(S.ids.indexOf(+b.getAttribute("data-q")))};updateNav()}
function updateNav(){var ok=0,bad=0,missing=0;S.ids.forEach(function(n){var b=$("nav"+n);if(!b)return;var a=S.ans[n],cls="qnav-btn";if(a){if(S.done||S.mode==="estudo"){if(a===byN(n).ans){cls+=" correct";ok++}else{cls+=" incorrect";bad++}}else cls+=" answered"}else missing++;b.className=cls});$("legendOk").textContent=ok+" "+(ok===1?"Acerto":"Acertos");$("legendBad").textContent=bad+" "+(bad===1?"Erro":"Erros");$("legendMiss").textContent=missing+" "+(missing===1?"Faltante":"Faltantes")}
function prog(){updateNav()}
  function wrongReason(q,a){
    if(!a||a===q.ans)return "";
    if(WHY[q.n]&&WHY[q.n][a])return WHY[q.n][a];
    var chosen=q.opts.filter(function(o){return o[0]===a})[0];
    var correct=q.opts.filter(function(o){return o[0]===q.ans})[0];
    return "A alternativa escolhida (“"+(chosen?chosen[1]:"")+"”) não corresponde ao que o enunciado pede. O correto é “"+(correct?correct[1]:"")+"”.";
  }
  function reveal(q){
  var a=S.ans[q.n],r=a===q.ans;
  var _qe=$("q"+q.n),_h=_qe.classList.contains("pg-hide");_qe.className="q "+(r?"ok":"bad")+(_h?" pg-hide":"");
  $("l"+q.n+q.ans).className="right";
  if(a&&!r)$("l"+q.n+a).className="wrong";
  var e=$("e"+q.n);e.className="exp";
  var status = !a ? "Sem resposta." : (r ? "✔ Você acertou." : "✘ Você marcou "+disp(q,a)+").");
  var wrong=(!r&&a)?'<div class="whybox whywrong"><b>Por que a alternativa '+disp(q,a)+') não é a correta?</b><br>'+esc(wrongReason(q,a))+'</div>':"";
  var right='<div class="whybox whyright"><b>Por que a alternativa '+disp(q,q.ans)+') é a correta?</b><br>'+esc(q.exp)+'</div>';
  e.innerHTML=status+wrong+right;if(q.pg)e.innerHTML+='<div class="pgref"><button type="button" class="pgbtn" data-pg="'+q.pg+'">📖 Consultar Guia, '+pgLabel(q.pg)+'</button></div>';
  document.querySelectorAll("input[name=r"+q.n+"]").forEach(function(i){i.disabled=true});
}
function finish(){
  var miss=S.ids.length-Object.keys(S.ans).length;
  if(miss>0&&!warned){warned=true;showWarn(miss);return}
  S.done=true;var _w=document.getElementById('warnbar');if(_w)_w.remove();wipe();
  var ok=0,by={};
  S.ids.forEach(function(n){var q=byN(n),r=S.ans[n]===q.ans;if(r)ok++;
    var b=by[q.tit]||(by[q.tit]={n:q.titn,t:0,c:0});b.t++;if(r)b.c++;reveal(q)});
  var t="";Object.keys(by).forEach(function(k){t+="<tr><td>Título "+k+" – "+esc(by[k].n)+"</td><td>"+by[k].c+"/"+by[k].t+"</td></tr>"});
  var r=$("res");r.className="";
  r.innerHTML='<div class="big">'+ok+" acertos de "+S.ids.length+" ("+pct(ok,S.ids.length)+"%)</div><div style=\"margin:12px 0 16px;\"><button type=\"button\" id=\"resPdfBtn\" class=\"primary\" style=\"width:100%;min-height:46px;\">📄 Baixar Relatório Completo em PDF</button></div>Resultado final. Revise abaixo o gabarito comentado, uma questão por tela.<table>"+t+"</table>";setTimeout(function(){var b=$("resPdfBtn");if(b)b.onclick=generatePDFReport;},10);
  $("send").className="hide";$("home").className="hide";$("again").className="";if($("pdfReport"))$("pdfReport").className="alt";
  S.wrong=S.ids.filter(function(n){return S.ans[n]!==byN(n).ans});
  if(S.wrong.length)$("errs").className="alt";
  S.cur=0;goTo(0);histRender(histSave());window.scrollTo(0,0);
}
$("send").onclick=function(){finish();window.scrollTo(0,0)};
$("home").onclick=function(){setup()};
$("again").onclick=function(){setup()};
$("errs").onclick=function(){begin(S.mode,S.wrong.slice(),S.shuf!==false)};
function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
function showWarn(m){var w=document.getElementById('warnbar');if(!w){w=document.createElement('div');w.id='warnbar';var qz=document.getElementById('quiz');qz.insertBefore(w,qz.firstChild)}w.innerHTML='<b>Faltam '+m+' questões sem resposta.</b><div class="wb"><button type="button" id="wgo">Ir para a primeira sem resposta</button><button type="button" class="alt" id="wfin">Finalizar mesmo assim</button></div>';w.scrollIntoView({behavior:'smooth',block:'start'});document.getElementById('wgo').onclick=function(){var n=S.ids.filter(function(x){return !S.ans[x]})[0];goTo(S.ids.indexOf(n))};document.getElementById('wfin').onclick=function(){warned=true;finish()}}
function curIdx(){var b=0,bd=1e9;S.ids.forEach(function(n,i){var el=document.getElementById('q'+n);if(!el)return;var d=Math.abs(el.getBoundingClientRect().top-80);if(d<bd){bd=d;b=i}});return b}
function goQ(i){if(i<0||i>=S.ids.length)return;var el=document.getElementById('q'+S.ids[i]);if(el)el.scrollIntoView({behavior:'smooth',block:'start'})}
document.getElementById('prev').onclick=function(){goTo(S.cur-1)};document.getElementById('next').onclick=function(){goTo(S.cur+1)};
document.getElementById('cnt').onclick=function(e){e.stopPropagation();document.body.classList.toggle('dopen')};
document.addEventListener('click',function(e){if(!document.body.classList.contains('dopen'))return;if(e.target.closest('.qnav-btn')){setTimeout(function(){document.body.classList.remove('dopen')},50);return}if(!e.target.closest('.qnav-wrap'))document.body.classList.remove('dopen')});
var _un=updateNav;updateNav=function(){_un();var c=document.getElementById('cnt');if(c&&typeof S!=='undefined'&&S&&S.ids)c.textContent=Object.keys(S.ans||{}).length+'/'+S.ids.length};
function mobLabels(){var m=matchMedia('(max-width:700px)').matches;var s=document.getElementById('send'),h=document.getElementById('home');if(s)s.textContent=m?'Finalizar':'Enviar respostas';if(h)h.textContent=m?'⌂':'Início'}mobLabels();window.addEventListener('resize',mobLabels);
function histGet(){try{return JSON.parse(localStorage.getItem('pqo_hist')||'[]')}catch(e){return []}}
function capKey(q){return 'Tít. '+q.tit+' / Cap. '+q.cap+' – '+q.capn}
function histSave(){var ok=0,caps={};S.ids.forEach(function(n){var q=byN(n);if(S.ans[n]===q.ans)ok++;else{var k=capKey(q);caps[k]=(caps[k]||0)+1}});var h=histGet();h.unshift({d:new Date().toISOString(),mode:S.mode,total:S.ids.length,ok:ok,pct:Math.round(100*ok/S.ids.length),wrong:S.ids.filter(function(n){return S.ans[n]!==byN(n).ans}),caps:caps});h=h.slice(0,30);try{localStorage.setItem('pqo_hist',JSON.stringify(h))}catch(e){}return caps}
function histRender(caps){var r=document.getElementById('res');var by={};S.ids.forEach(function(n){var q=byN(n),k=capKey(q);var b=by[k]||(by[k]={t:0,c:0});b.t++;if(S.ans[n]===q.ans)b.c++});var t='<h4>Desempenho por capítulo</h4><table>';Object.keys(by).forEach(function(k){t+='<tr><td>'+esc(k)+'</td><td>'+by[k].c+'/'+by[k].t+' ('+Math.round(100*by[k].c/by[k].t)+'%)</td></tr>'});t+='</table>';var ks=Object.keys(caps).sort(function(a,b){return caps[b]-caps[a]}).slice(0,5);if(ks.length){t+='<h4>Temas mais errados</h4><ol>';ks.forEach(function(k){t+='<li>'+esc(k)+' – '+caps[k]+' erro(s)</li>'});t+='</ol>'}var h=histGet().slice(0,10);t+='<h4>Histórico</h4><table>';h.forEach(function(x){t+='<tr><td>'+new Date(x.d).toLocaleString('pt-BR')+' · '+esc(String(x.mode))+' · '+x.total+' questões</td><td>'+x.pct+'%</td></tr>'});t+='</table><button type="button" class="alt" id="hclr" style="margin-top:10px">Limpar histórico</button>';var old=document.getElementById('histbox');if(old)old.remove();var d=document.createElement('div');d.id='histbox';d.innerHTML=t;r.appendChild(d);document.getElementById('hclr').onclick=function(){try{localStorage.removeItem('pqo_hist')}catch(e){}histRender(caps)}}
function goTo(i){if(!S||!S.ids||!S.ids.length)return;if(i<0)i=0;if(i>=S.ids.length)i=S.ids.length-1;S.cur=i;S.ids.forEach(function(n,k){var el=$("q"+n);if(el)el.classList.toggle("pg-hide",k!==i)});var el=$("q"+S.ids[i]);if(el){var pv=el.querySelector(".pv"),nx=el.querySelector(".nx");if(pv)pv.disabled=(i===0);if(nx){var last=(i===S.ids.length-1);nx.textContent=last?(S.done?"Voltar à 1ª questão":(S.mode==="estudo"?"Finalizar":"Finalizar prova")):"Avançar ›"}}updateNav();if(!S.done)save();window.scrollTo(0,0)}
function flash(t){var el=$("q"+S.ids[S.cur]);if(!el)return;var m=el.querySelector(".pmsg");if(!m)return;m.textContent=t;clearTimeout(flash._t);flash._t=setTimeout(function(){m.textContent=""},2500)}
function nextAct(){if(!S||!S.ids)return;var last=S.cur===S.ids.length-1,n=S.ids[S.cur];if(!last){var blank=!S.done&&!S.ans[n];goTo(S.cur+1);if(blank)flash("A questão anterior ficou sem resposta – você pode voltar a ela pela grade.");return}if(S.done){goTo(0);return}finish();window.scrollTo(0,0)}
var _un2=updateNav;updateNav=function(){_un2();if(S&&S.ids)S.ids.forEach(function(n,i){var b=$("nav"+n);if(b)b.classList.toggle("cur",i===S.cur)})};
var PM_MAX=715,pmCur=1;
function openGuide(p){
  p=Math.max(1,Math.min(PM_MAX,parseInt(p,10)||1));
  pmCur=p;
  var m=$("pmodal"),img=$("pmImg"),st=$("pmStat"),lbl=$("pmLbl"),inp=$("pmInp");
  m.classList.remove("hide");
  lbl.textContent=PRINTED[p]?"p. "+PRINTED[p]+" · arquivo "+p+"/"+PM_MAX:"pág. "+p+"/"+PM_MAX;
  inp.value=PRINTED[p]||p;
  $("pmPrev").disabled=(p<=1);
  $("pmNext").disabled=(p>=PM_MAX);
  st.textContent="Carregando página "+p+"...";
  st.style.display="block";
  img.style.opacity="0.25";
  img.onload=function(){st.style.display="none";img.style.opacity="1";$("pmBody").scrollTop=0};
  img.onerror=function(){st.textContent="Não foi possível carregar a página "+p+"."};
  img.src="pages/p"+p+".webp";
  if(p<PM_MAX){var pre1=new Image();pre1.src="pages/p"+(p+1)+".webp"}
  if(p>1){var pre0=new Image();pre0.src="pages/p"+(p-1)+".webp"}
}
function closeGuide(){$("pmodal").classList.add("hide")}
$("pmPrev").onclick=function(){if(pmCur>1)openGuide(pmCur-1)};
$("pmNext").onclick=function(){if(pmCur<PM_MAX)openGuide(pmCur+1)};
$("pmClose").onclick=closeGuide;
$("pmZoom").onclick=function(){$("pmBody").classList.toggle("zoom")};
$("pmImg").onclick=function(){$("pmBody").classList.toggle("zoom")};
$("pmInp").onchange=function(){var v=parseInt(this.value,10);openGuide(PRINTED_REV[v]||v)};
$("pmodal").onclick=function(e){if(e.target===$("pmodal"))closeGuide()};
document.addEventListener("keydown",function(e){
  var pmOpen=!$("pmodal").classList.contains("hide");
  if(pmOpen){
    if(e.key==="Escape"){e.preventDefault();closeGuide();return}
    if(e.target.tagName==="INPUT")return;
    if(e.key==="ArrowRight"){e.preventDefault();if(pmCur<PM_MAX)openGuide(pmCur+1);return}
    if(e.key==="ArrowLeft"){e.preventDefault();if(pmCur>1)openGuide(pmCur-1);return}
    return;
  }
  if(!S||!S.ids||$("quiz").className==="hide")return;var t=e.target.tagName;if(t==="SELECT"||t==="TEXTAREA"||t==="BUTTON"||(t==="INPUT"&&e.target.type!=="radio"))return;if(e.key==="ArrowRight"||e.key==="Enter"){e.preventDefault();nextAct()}else if(e.key==="ArrowLeft"){e.preventDefault();goTo(S.cur-1)}
});
var _un3=updateNav;updateNav=function(){_un3();if(!S||!S.ids)return;var f=$("pfill");if(f)f.style.width=(100*Object.keys(S.ans||{}).length/S.ids.length)+"%";var b=$("nav"+S.ids[S.cur]),nv=$("qnav");if(b&&nv&&nv.scrollWidth>nv.clientWidth){var l=b.offsetLeft-(nv.clientWidth-b.offsetWidth)/2;if(nv.scrollTo)nv.scrollTo({left:l,behavior:"smooth"});else nv.scrollLeft=l}};
var sv0=load();
setup();


function generatePDFReport() {
  if (!S || !S.ids) return;
  var ok = 0;
  S.ids.forEach(function (n) { if (S.ans[n] === byN(n).ans) ok++; });
  var total = S.ids.length;
  var pctVal = pct(ok, total);
  var dataStr = new Date().toLocaleString("pt-BR");

  var w = window.open("", "_blank");
  if (!w) {
    alert("Por favor, habilite popups para gerar o relatório em PDF.");
    return;
  }

  var html = '<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8">';
  html += '<title>Relatório de Desempenho – Simulado PQO Compliance</title>';
  html += '<style>';
  html += '@page { size: A4; margin: 15mm; }';
  html += 'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #14213d; background: #fff; margin: 0; padding: 0; line-height: 1.5; font-size: 11pt; }';
  html += '.header { border-bottom: 2px solid #0b2f6b; padding-bottom: 12px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-end; }';
  html += '.title h1 { margin: 0; font-size: 18pt; color: #0b2f6b; }';
  html += '.title p { margin: 4px 0 0; color: #55607a; font-size: 10pt; }';
  html += '.meta { text-align: right; font-size: 9pt; color: #55607a; }';
  html += '.summary-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 24px; }';
  html += '.stat-box { border: 1px solid #d8dfec; border-radius: 6px; padding: 12px; text-align: center; background: #f8fafc; }';
  html += '.stat-val { font-size: 18pt; font-weight: 700; color: #0b2f6b; }';
  html += '.stat-lbl { font-size: 9pt; text-transform: uppercase; letter-spacing: 0.05em; color: #55607a; margin-top: 2px; }';
  html += '.q-card { border: 1px solid #d8dfec; border-radius: 6px; padding: 14px 16px; margin-bottom: 16px; page-break-inside: avoid; }';
  html += '.q-card.is-ok { border-left: 5px solid #0f7a4a; }';
  html += '.q-card.is-bad { border-left: 5px solid #b3261e; }';
  html += '.q-top { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 9pt; color: #55607a; font-weight: 600; }';
  html += '.q-badge { padding: 2px 8px; border-radius: 4px; font-weight: 700; }';
  html += '.b-ok { background: #e0f4ea; color: #0f7a4a; }';
  html += '.b-bad { background: #fdeae8; color: #b3261e; }';
  html += '.q-stem { font-weight: 600; font-size: 11pt; margin-bottom: 12px; }';
  html += '.answers { margin: 10px 0; font-size: 10pt; }';
  html += '.ans-row { margin: 4px 0; padding: 6px 10px; border-radius: 4px; }';
  html += '.ans-user-bad { background: #fdeae8; color: #b3261e; font-weight: 600; }';
  html += '.ans-correct { background: #e0f4ea; color: #0f7a4a; font-weight: 600; }';
  html += '.just-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; padding: 10px 12px; font-size: 9.5pt; margin-top: 10px; line-height: 1.45; }';
  html += '.just-title { font-weight: 700; margin-bottom: 3px; color: #14213d; }';
  html += '.print-bar { background: #0b2f6b; color: #fff; padding: 12px 20px; text-align: center; position: sticky; top: 0; z-index: 100; margin-bottom: 20px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; }';
  html += '.print-btn { background: #e3b655; color: #14213d; border: 0; padding: 8px 18px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 10pt; }';
  html += '@media print { .print-bar { display: none !important; } }';
  html += '</style></head><body>';

  html += '<div class="print-bar">';
  html += '<span><b>Relatório Pronto para Impressão/Salvar em PDF</b></span>';
  html += '<button class="print-btn" onclick="window.print()">🖨️ Salvar em PDF / Imprimir</button>';
  html += '</div>';

  html += '<div class="header">';
  html += '<div class="title"><h1>Simulado PQO Compliance</h1><p>Relatório de Desempenho e Gabarito Comentado</p></div>';
  html += '<div class="meta">Data: ' + dataStr + '<br>Modo: ' + (S.mode === "estudo" ? "Estudo" : "Prova") + '</div>';
  html += '</div>';

  html += '<div class="summary-grid">';
  html += '<div class="stat-box"><div class="stat-val">' + ok + ' / ' + total + '</div><div class="stat-lbl">Acertos</div></div>';
  html += '<div class="stat-box"><div class="stat-val">' + pctVal + '%</div><div class="stat-lbl">Aproveitamento</div></div>';
  html += '<div class="stat-box"><div class="stat-val">' + (total - ok) + '</div><div class="stat-lbl">Erros</div></div>';
  html += '</div>';

  S.ids.forEach(function (n, idx) {
    var q = byN(n);
    var uAns = S.ans[n];
    var isRight = uAns === q.ans;
    var uText = "";
    var cText = "";

    q.opts.forEach(function (o) {
      if (o[0] === uAns) uText = o[1];
      if (o[0] === q.ans) cText = o[1];
    });

    html += '<div class="q-card ' + (isRight ? "is-ok" : "is-bad") + '">';
    html += '<div class="q-top">';
    html += '<span>Questão ' + (idx + 1) + ' · Título ' + q.tit + ' · Cap. ' + q.cap + '</span>';
    html += '<span class="q-badge ' + (isRight ? "b-ok" : "b-bad") + '">' + (isRight ? "ACERTO" : (uAns ? "ERRO" : "NÃO RESPONDIDA")) + '</span>';
    html += '</div>';

    html += '<div class="q-stem">' + esc(q.stem) + '</div>';
    html += '<div class="answers">';
    if (!isRight) {
      if (uAns) {
        html += '<div class="ans-row ans-user-bad">❌ Sua resposta: (' + disp(q, uAns) + ') ' + esc(uText) + '</div>';
      } else {
        html += '<div class="ans-row ans-user-bad">⚠️ Você não respondeu esta questão.</div>';
      }
    }
    html += '<div class="ans-row ans-correct">✔️ Resposta correta: (' + disp(q, q.ans) + ') ' + esc(cText) + '</div>';
    html += '</div>';

    var wrReason = (!isRight && uAns) ? wrongReason(q, uAns) : "";
    if (wrReason) {
      html += '<div class="just-box">';
      html += '<div class="just-title">Por que a alternativa (' + disp(q, uAns) + ') está errada?</div>';
      html += esc(wrReason);
      html += '</div>';
    }

    if (q.exp) {
      html += '<div class="just-box">';
      html += '<div class="just-title">Justificativa da alternativa (' + disp(q, q.ans) + '):</div>';
      html += esc(q.exp);
      if (q.pg && typeof pgLabel === "function") {
        html += '<div style="margin-top:6px; color:#55607a; font-size:8.5pt;">📖 Referência no Guia: ' + pgLabel(q.pg) + '</div>';
      }
      html += '</div>';
    }

    html += '</div>';
  });

  html += '<script>setTimeout(function(){ window.print(); }, 400);<\/script>';
  html += '</body></html>';

  w.document.open();
  w.document.write(html);
  w.document.close();
}

if ($("pdfReport")) $("pdfReport").onclick = generatePDFReport;
