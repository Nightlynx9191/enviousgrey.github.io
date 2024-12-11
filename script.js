// -- PICTURES SEITE --

var galeryButton = 0;
var picText = document.getElementById("pictext");


function picNext(){
    galeryButton = (galeryButton + 1) % 5;  // Zirkuliert von 0 bis 4
    galery();
}

function picBack(){
    galeryButton = (galeryButton === 0) ? 4 : galeryButton - 1;  // Zirkuliert von 0 bis 4
    galery();
}




function galery()
{
    if (galeryButton === 0)
    {
        picText.innerHTML ="b e s t - o f - 2 0 2 4";
        pictures0();
    }
    else if (galeryButton === 1)
    {
        picText.innerHTML ="b e s t - o f - 2 0 2 4 / 2 0 2 3";
        pictures1();
    }
    else if (galeryButton === 2)
    {
        picText.innerHTML ="b e s t - o f - 2 0 2 2";
        pictures2();
    }
    else if (galeryButton === 3)
    {
        picText.innerHTML ="b e s t - o f - s k e t c h e s";
        pictures3();
    }
    else if (galeryButton === 4)
    {
        picText.innerHTML ="b e s t - o f - p i x e l a r t";
        pictures4();
    }
    else
    {
        picText.innerHTML ="b e s t - o f - 2 0 2 4";
        pictures0();
        galeryButton = 0;
    }
}

//2024
function pictures0(){
    document.getElementById("galery1").setAttribute("src", "https://www.dropbox.com/scl/fi/pqcmwzvuibw73ow11yzo9/2024-2.jpg?rlkey=0wfj8yi9hi9bwsqavrf7xq1p4&st=9ur7k8a2&raw=1");
    document.getElementById("galery2").setAttribute("src", "https://www.dropbox.com/scl/fi/mqs0fjptpwycgy38eg3hx/2024-1.jpg?rlkey=bzusfvggbwtkqltw8fepee0jv&st=qtr17y0p&raw=1");
    document.getElementById("galery3").setAttribute("src", "https://www.dropbox.com/scl/fi/vzyydjf2edtil5v40rfah/2024-3.jpg?rlkey=2tkx9qp4hdpujtwz2plylftc5&st=sug57rf4&raw=1");
    document.getElementById("galery4").setAttribute("src", "https://www.dropbox.com/scl/fi/befrracjgsscgyaloi5ig/2024-4.jpg?rlkey=3aa85dui0i4tixmj37w0rc0qf&st=x7w4iq4z&raw=1");
    document.getElementById("galery5").setAttribute("src", "https://www.dropbox.com/scl/fi/va4vmmmy760su9gv842p6/2024-5.jpg?rlkey=6m1ns8167t2faky2k9zf245tt&st=g5rkwl66&raw=1");
    document.getElementById("galery6").setAttribute("src", "https://www.dropbox.com/scl/fi/a6mekehlezsjd8ku9b5cq/2024-6.jpg?rlkey=hlx5awle5mykbd8njpt2fhv3x&st=lxvdj76p&raw=1");
    document.getElementById("galery7").setAttribute("src", "https://www.dropbox.com/scl/fi/0f969gt6ak961ngsrmsb9/2024-7.jpg?rlkey=mjt9uotx9xn5s0n87p32zibbr&st=jbex3t98&raw=1");
    document.getElementById("galery8").setAttribute("src", "https://www.dropbox.com/scl/fi/bcwh9d08lsra6mxj8n4oy/2024-8.jpg?rlkey=ocjtlulpd6ezxu697iry3vees&st=0681mtyd&raw=1");
}

//2024-2023
function pictures1(){
    document.getElementById("galery1").setAttribute("src", "https://www.dropbox.com/scl/fi/qy5nams4m2osiofp4yxaz/2024-2023-1.jpg?rlkey=fnto0d58dreskt4gozxuynnwh&st=bs0mdm40&raw=1");
    document.getElementById("galery2").setAttribute("src", "https://www.dropbox.com/scl/fi/6aoo6lqjfbkc2pvrya4ql/2024-2023-2.jpg?rlkey=b02cdjz5ucmijq5no6wzm458p&st=pi9i6c9r&raw=1");
    document.getElementById("galery3").setAttribute("src", "https://www.dropbox.com/scl/fi/ciq9sjrkxi0lfrkckb6rx/2024-2023-3.jpg?rlkey=buodtqdjgo8e9ju8lyewc3ngy&st=wkvb6wb2&raw=1");
    document.getElementById("galery4").setAttribute("src", "https://www.dropbox.com/scl/fi/7ag3qviodyzaro3q58kg4/2024-2023-4.jpg?rlkey=ty784zh8gdx7sefac7fpxs7oo&st=p8wc9mwt&raw=1");
    document.getElementById("galery5").setAttribute("src", "https://www.dropbox.com/scl/fi/h3h86c28w3v76rrxwfa6u/2024-2023-5.jpg?rlkey=bwyagl7t0nzgwes2astbvje21&st=2jgay40x&raw=1");
    document.getElementById("galery6").setAttribute("src", "https://www.dropbox.com/scl/fi/lc5qfukabsj4bzvhbddva/2024-2023-6.jpg?rlkey=ced7qq056iv48j46ppb8q2cr9&st=6o25v20o&raw=1");
    document.getElementById("galery7").setAttribute("src", "https://www.dropbox.com/scl/fi/5xhy7u7a6n5tk0w7hb9bm/2024-2023-7.jpg?rlkey=07x9zc1ojqncfkg3ryw0no2qb&st=pghwi7df&raw=1");
    document.getElementById("galery8").setAttribute("src", "https://www.dropbox.com/scl/fi/7plhgb7mti1o1t3nu8zax/2024-2023-8.jpg?rlkey=0c59cxsp6lcc1ni7sot4vmsy2&st=zvxlzlvo&raw=1");
}

//2022
function pictures2(){
    document.getElementById("galery1").setAttribute("src", "https://www.dropbox.com/scl/fi/10qljx3e8cf6vu5s6r3ce/2022-1.jpg?rlkey=ww0ccsqjq7uis8v6hu5yvc39n&st=8u17l3mp&raw=1");
    document.getElementById("galery2").setAttribute("src", "https://www.dropbox.com/scl/fi/4coevdgn4s39efzh2c4dj/2022-2.jpg?rlkey=uyjtcn8u83q2km07qsrapq1is&st=mxskwscu&raw=1");
    document.getElementById("galery3").setAttribute("src", "https://www.dropbox.com/scl/fi/wkuixzjldpjgxu2aiq9jz/2022-3.jpg?rlkey=6wfz09d4tdd9g6wpop263mn9l&st=wtd7mirg&raw=1");
    document.getElementById("galery4").setAttribute("src", "https://www.dropbox.com/scl/fi/3zuy5nkph1tztqlirgxe7/2022-4.jpg?rlkey=aznpimqlpocpoxv0ufbpzayvo&st=vm9kan4o&raw=1");
    document.getElementById("galery5").setAttribute("src", "https://www.dropbox.com/scl/fi/ovh19kglz54qbcj44pp6u/2022-5.jpg?rlkey=sd0j4efpezhvclwyu2awo2h5g&st=x9ao47y1&raw=1");
    document.getElementById("galery6").setAttribute("src", "https://www.dropbox.com/scl/fi/b1d9ulzni3h215vxqgem1/2022-6.jpg?rlkey=1zzi095vlzdpzjzemaacfeyuz&st=r1ikxni9&raw=1");
    document.getElementById("galery7").setAttribute("src", "https://www.dropbox.com/scl/fi/31o8uetsv5gg5n3uflicv/2022-7.jpg?rlkey=66wculli2jl49y30sf8wn3jpu&st=eeblikpw&raw=1");
    document.getElementById("galery8").setAttribute("src", "https://www.dropbox.com/scl/fi/rajk9cdmm339eda8a25p8/2022-8.jpg?rlkey=1nl1mlxlpikw4hiul1av6vpz8&st=s8nn5ccf&raw=1");
}

//Skizzen
function pictures3(){
    document.getElementById("galery1").setAttribute("src", "https://www.dropbox.com/scl/fi/w7qo38pss5bf0gkdl87yk/skizze-1.jpg?rlkey=8iq1f4i3i2uqdwmorlicowtac&st=chov44tc&raw=1");
    document.getElementById("galery2").setAttribute("src", "https://www.dropbox.com/scl/fi/hf52vms1okfne6qatk7ex/skizze-2.jpg?rlkey=1c97qiiuzlzh1vj46u5fjx4ul&st=pjhvctw1&raw=1");
    document.getElementById("galery3").setAttribute("src", "https://www.dropbox.com/scl/fi/4pnpyazvhq1xirs343jj7/skizze-3.jpg?rlkey=v9oo8evztqr44lz44tz8tq8xs&st=buhgds3k&raw=1");
    document.getElementById("galery4").setAttribute("src", "https://www.dropbox.com/scl/fi/d19syhbxrkjcihl1320ts/skizze-4.jpg?rlkey=jl8llwhipo0n9ydymnwny6lxi&st=qhg9z61f&raw=1");
    document.getElementById("galery5").setAttribute("src", "https://www.dropbox.com/scl/fi/pfrairzhempz02hmo8rmh/skizze-5.jpg?rlkey=5ax2mxohmusxm9op2wtvsf5ar&st=ko61ml51&raw=1");
    document.getElementById("galery6").setAttribute("src", "https://www.dropbox.com/scl/fi/1vc9gdjg84d8nvuc1bjsg/skizze-6.jpg?rlkey=lf8qlg1y9ijs7r7arfy60jstc&st=4yr7dpbf&raw=1");
    document.getElementById("galery7").setAttribute("src", "https://www.dropbox.com/scl/fi/pl4rleszk3zt4c3t1h5jq/skizze-7.jpg?rlkey=hcbcjkexqzbb4h43tjifp1kag&st=6df4rug9&raw=1");
    document.getElementById("galery8").setAttribute("src", "https://www.dropbox.com/scl/fi/wadh992qf9jfvd1hbm02h/skizze-8.jpg?rlkey=hl8o64gcxupunfxtlh1ksqpid&st=wj70i73x&raw=1");
}

//Pixelart
function pictures4(){
    document.getElementById("galery1").setAttribute("src", "https://www.dropbox.com/scl/fi/5d3kno9ohwmx69yqy3r7d/pixel-1.jpg?rlkey=kwu5pnbnj997qls6p39l6i1so&st=q5tijde7&raw=1");
    document.getElementById("galery2").setAttribute("src", "https://www.dropbox.com/scl/fi/c4ytizdsu1u3pzwuuptpj/pixel-2.jpg?rlkey=8paz5mu5cou3n3db0wzsz6nyx&st=d2eehr27&raw=1");
    document.getElementById("galery3").setAttribute("src", "https://www.dropbox.com/scl/fi/3yiymf20iepnzbcozhwa2/pixel-3.jpg?rlkey=gubahpodr7vhoavuo89mbwuvj&st=5qi0qegy&raw=1");
    document.getElementById("galery4").setAttribute("src", "https://www.dropbox.com/scl/fi/ljb036hki55b4x496vbtr/pixel-4.jpg?rlkey=u3phmsvp5qai6gt5suzq5g39j&st=57qatirc&raw=1");
    document.getElementById("galery5").setAttribute("src", "https://www.dropbox.com/scl/fi/m2gcjdm1v18bw54kjb7uw/pixel-5.jpg?rlkey=wazb30hd8w1irl95qmk015lss&st=8vweg9pw&raw=1");
    document.getElementById("galery6").setAttribute("src", "https://www.dropbox.com/scl/fi/8m7pqplhfjxvqw0pupbco/pixel-6.jpg?rlkey=68v9mcbshaxx2trb0wzufiebo&st=ppr0wmip&raw=1");
    document.getElementById("galery7").setAttribute("src", "https://www.dropbox.com/scl/fi/xksf5fhhslev6vyowsxg9/pixel-7.jpg?rlkey=5bb77bz0ah6latgepulzphy6p&st=rcf540wi&raw=1");
    document.getElementById("galery8").setAttribute("src", "https://www.dropbox.com/scl/fi/g6lo3ocxo4hlo14k15alv/pixel-8.jpg?rlkey=3xoj4l6j7jf1dsbsap3s6oihg&st=j0cnrsa0&raw=1");
}





// -- ABOUT ME Seite --

var text1 = document.getElementById("aboutmeText1");
var text2 = document.getElementById("aboutmeText2");

var bild1 = document.getElementById("aboutmePic1");
var bild2 = document.getElementById("aboutmePic2");

var aboutmeButton = document.getElementById("nextaboutme");

animationButton = 0;

textSeite0();       //Startseiten Text
bildAnimation();    //Startanimation beim Laden der Seite

function bildWechsel()
{
    if (animationButton === 0)
    {
        bildSeite1();
        textSeite1();
        bildAnimation();
        animationButton++;     
    }
    else if (animationButton === 1)
    {
        bildSeite2();
        textSeite2();
        bildAnimation();
        changeColspan();
        animationButton++;
    }
    else if (animationButton === 2)
    {
        changeColspanBack();
        bildSeite3();
        textSeite3();
        bildAnimation();
        animationButton++;
    }
    else if (animationButton === 3)
    {
        bildSeite4();
        textSeite4();
        bildAnimation();
        animationButton++;
    }
    else if (animationButton === 4)
    {
        bildSeite5();
        textSeite5();
        bildAnimation();
        animationButton++;
        aboutmeButton.innerHTML ="B a c k &nbsp; t o &nbsp; s t a r t";
    }
    else
    {
        bildSeite0();
        textSeite0();
        bildAnimation();
        animationButton = 0;
        aboutmeButton.innerHTML ="P r e s s &nbsp; f o r &nbsp; m o r e";
    }
}


function bildAnimation(){
    document.getElementById("aboutmePic1").classList.remove("aboutmeNoAnimation");
    document.getElementById("aboutmePic2").classList.remove("aboutmeNoAnimation");   
    document.getElementById("aboutmePic1").classList.add("aboutmeAnimation");
    document.getElementById("aboutmePic2").classList.add("aboutmeAnimation");
    setTimeout(bildWechselReset, 3000);  
}

function bildWechselReset(){
    document.getElementById("aboutmePic1").classList.remove("aboutmeAnimation");
    document.getElementById("aboutmePic2").classList.remove("aboutmeAnimation");
    document.getElementById("aboutmePic1").classList.add("aboutmeNoAnimation");
    document.getElementById("aboutmePic2").classList.add("aboutmeNoAnimation");
}



//Bildwechsel

function bildSeite0(){
    document.getElementById("aboutmePic2").setAttribute("src", "https://www.dropbox.com/scl/fi/iwlh2rj2fqsgvgur3h8cn/1.jpg?rlkey=qntbi73r6bdoucdbz1p48z6cd&st=g81rww47&raw=1");
    document.getElementById("aboutmePic1").setAttribute("src", "https://www.dropbox.com/scl/fi/5dhdeiu96j1zaiqmcbeti/2.jpg?rlkey=zy6ptd5n9rjcki91w2ztgjjj8&st=h0i42ejh&raw=1"); 
}

function bildSeite1(){
    document.getElementById("aboutmePic1").setAttribute("src", "https://www.dropbox.com/scl/fi/b0u2fnakl1ezovmynia80/speedpaint.GIF?rlkey=z5d9gedjw3an4qvx24ekbnunv&st=ebnb8krs&raw=1");
    document.getElementById("aboutmePic2").setAttribute("src", "https://www.dropbox.com/scl/fi/8belk3yw68e0ycrxwvdnp/4.jpg?rlkey=anbpodpvi1d8n1si0undgzuph&st=jerw3d17&raw=1");
}

function bildSeite2(){
    document.getElementById("aboutmePic2").setAttribute("src", "https://www.dropbox.com/scl/fi/lw2ftudskf3i24jmgjkkc/refsheet.jpg?rlkey=cdojtf7ncmeplvsdlb07fg2q2&st=7v61rlca&raw=1");
    document.getElementById("aboutmePic1").setAttribute("src", "https://www.dropbox.com/scl/fi/9xo6ihibuifpj4yumqxkd/3.jpg?rlkey=63rtwi020qg1tqfabap1aisx2&st=s6a3k27r&raw=1");
}

function bildSeite3(){
    document.getElementById("aboutmePic1").setAttribute("src", "https://www.dropbox.com/scl/fi/xqz1hx2k6vo6byzle1sub/chenvo-1.jpg?rlkey=mhxsawjt0dzzko43gxsgtp2a7&st=mdpfkdyb&raw=1");
    document.getElementById("aboutmePic2").setAttribute("src", "https://www.dropbox.com/scl/fi/bz3y5qbec4zfdl7lj28qq/chenvo-2.jpg?rlkey=01lwrdi5qzozzep2m026gl90o&st=0lwicl4l&raw=1");
}

function bildSeite4(){
    document.getElementById("aboutmePic1").setAttribute("src", "https://www.dropbox.com/scl/fi/v9ivmcmsp2rg8yw2wt7o3/chevysuit1.jpg?rlkey=d4iif0t4m6s4puymo8eckabp5&st=cxpwro0j&raw=1");
    document.getElementById("aboutmePic2").setAttribute("src", "https://www.dropbox.com/scl/fi/xy7f28mnrrc75sqbiz17k/chevysuit2.png?rlkey=e3w3f7b1dfzyjdnr5vzb3kbn0&st=4ua4sf9y&raw=1");
}

function bildSeite5(){
    document.getElementById("aboutmePic1").setAttribute("src", "https://www.dropbox.com/scl/fi/2ryk0e2wym2fnvnh32baz/okbye1.jpg?rlkey=fdcv0106vajwl47lz0hhgo6qx&st=u4lmhzsi&raw=1");
    document.getElementById("aboutmePic2").setAttribute("src", "https://www.dropbox.com/scl/fi/ahixa0cecsaidijyfm30e/okbye2.jpg?rlkey=tbw06e767e7xyx8okzp1kbvd6&st=73sf2d1e&raw=1");
}


//Textwechsel

function textSeite0(){
    text1.innerHTML ="<i>h e y &nbsp; g u y s </i> <br><br> my name is";
    text2.innerHTML ="<b> E N V Y </b>";
}

function textSeite1(){
    text1.innerHTML ="I'm a<br><br> <i>m u s i c i a n &nbsp; ";
    text2.innerHTML ="<b>and</b> &nbsp; a r t i s t</i> <br><br> (and furry <i>uwu</i>)";
}

function textSeite2(){
    text1.innerHTML ="this is my <br><br> <i>f u r s o n a</i>";
    text2.innerHTML ="";
}

function textSeite3(){
    text1.innerHTML ="and this is <br><br><i>m y - b e t t e r - h a l f</i>";
    text2.innerHTML ="<b> C H E V Y </b>";
}

function textSeite4(){
    text1.innerHTML ="she is <br><br> <i><b>c h a o s</i></b> <br><br>";
    text2.innerHTML ="& <br><br> <i> m y &nbsp; l i f e </i> &nbsp; ^-^";
}

function textSeite5(){
    text1.innerHTML ="u h m . . . <br><br> <i> I don't know what else to say </i>";
    text2.innerHTML ="O K &nbsp; B Y E &nbsp; ^-^";
}



//Zellenpassung 

var imageCell = document.querySelector("table tr:nth-child(3) td:first-child");
var textCell = document.getElementById("hiddentext");



function changeColspan() {
    
    imageCell.setAttribute("colspan", "2");
    textCell.style.display = "none";

}


function changeColspanBack() {
    imageCell.setAttribute("colspan", "1");
    textCell.style.display = "table-cell";
}
