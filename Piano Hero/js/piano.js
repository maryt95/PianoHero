function init() {

	var notes = [
		{ src:"do.mp3",  id:"do",  key: 65 }, //A
		{ src:"do_d.mp3", id:"do_d", key: 49 }, //1
		{ src:"re.mp3",  id:"re",  key: 83 }, //S
		{ src:"re_d.mp3", id:"re_d", key: 50 }, //2
		{ src:"mi.mp3",  id:"mi",  key: 68  }, //D
		{ src:"fa.mp3",  id:"fa",  key: 70 }, //F
		{ src:"fa_d.mp3", id:"fa_d", key: 51 }, //3
		{ src:"sol.mp3",  id:"sol",  key: 71 }, //G
        { src:"sol_d.mp3",  id:"sol_d",  key: 52 }, //4
        { src:"la.mp3",  id:"la",  key: 72 }, //H
        { src:"la_d.mp3",  id:"la_d",  key: 53 }, //5
        { src:"si.mp3",  id:"si",  key: 74 }, //J
        { src:"do1.mp3",  id:"do1",  key: 75 }, //K
		{ src:"do1_d.mp3", id:"do1_d", key: 54 }, //6
		{ src:"re1.mp3",  id:"re1",  key: 90 }, //Z
		{ src:"re1_d.mp3", id:"re1_d", key: 55 }, //7
		{ src:"mi1.mp3",  id:"mi1",  key: 88  }, //X
		{ src:"fa1.mp3",  id:"fa1",  key: 67 }, //C
		{ src:"fa1_d.mp3", id:"fa1_d", key: 56 }, //8
		{ src:"sol1.mp3",  id:"sol1",  key: 86 }, //V
        { src:"sol1_d.mp3",  id:"sol1_d",  key: 57 }, //9
        { src:"la1.mp3",  id:"la1",  key: 66 }, //B
        { src:"la1_d.mp3",  id:"la1_d",  key: 48 }, //0
        { src:"si1.mp3",  id:"si1",  key: 78 }, //N
        { src:"do2.mp3",  id:"do2",  key: 77 }, //M
	];
	
	createjs.Sound.registerManifest(notes, "notenuove/")

	createjs.Sound.addEventListener("fileload", function (event) { 
     // particolare oggetto che sta aspettando gli eventi affinchè possa far suonare la nota

		createjs.Sound.defaultInterruptBehavior = createjs.Sound.INTERRUPT_ANY; 

		// elaborazione degli eventi della tastiera
		window.onkeydown = function(event) {

		var keydown = event.which;
		for (n in notes) {
			if (notes[n].key === keydown) {
				createjs.Sound.play(notes[n].id);
                if (keydown===65)
					addNota(0);
				if (keydown===49) 
					addNota(1);
				if (keydown===83)
					addNota(2);
				if (keydown===50)
					addNota(3);
				if (keydown===68)
					addNota(4);
				if (keydown===70)
					addNota(5);
				if (keydown===51) 
					addNota(6);
				if (keydown===71)
					addNota(7);
				if (keydown===52) 
					addNota(8);
				if (keydown===72) 
					addNota(9);
				if (keydown===53)
					addNota(10);
				if (keydown===74)
					addNota(11);
				if (keydown===75)
					addNota(12);
                if (keydown===54)
					addNota(13);
				if (keydown===90)
					addNota(14);
				if (keydown===55) 
					addNota(15);
				if (keydown===88)
					addNota(16);
				if (keydown===67) 
					addNota(17);
				if (keydown===56)
					addNota(18);
				if (keydown===86) 
					addNota(19);
				if (keydown===57)
					addNota(20);
				if (keydown===66)
					addNota(21);
				if (keydown===48)
					addNota(22);
				if (keydown===78)
					addNota(23);
				if (keydown===77)
					addNota(24);					
				break;
			}
		}
		return;
	};
});

}

var composizione = "";

function addNota(n)
{
	if (n===0)
		composizione = composizione + "do ";
	if (n===1)
		composizione = composizione + "do# ";
	if (n===2)
		composizione = composizione + "re ";
	if (n===3)
		composizione = composizione + "re# ";
	if (n===4)
		composizione = composizione + "mi ";
	if (n===5) 
		composizione = composizione + "fa ";	
	if (n===6)
		composizione = composizione + "fa# ";
	if (n===7) 
		composizione = composizione + "sol ";
	if (n===8) 
		composizione = composizione + "sol# ";
	if (n===9) 
		composizione = composizione + "la ";
	if (n===10)
		composizione = composizione + "la# ";	
	if (n===11)
		composizione = composizione + "si ";		
	if (n===12) 
		composizione = composizione + "do ";
	if (n===13) 
		composizione = composizione + "do# ";
	if (n===14) 
		composizione = composizione + "re ";
	if (n===15) 
		composizione = composizione + "re# ";
	if (n===16) 
		composizione = composizione + "mi ";
	if (n===17) 
		composizione = composizione + "fa ";
	if (n===18) 
		composizione = composizione + "fa# ";
	if (n===19) 
		composizione = composizione + "sol ";
	if (n===20) 
		composizione = composizione + "sol# ";
	if (n===21) 
		composizione = composizione + "la ";	
	if (n===22) 
		composizione = composizione + "la# ";	
	if (n===23) 
		composizione = composizione + "si ";		
	if (n===24) 
		composizione = composizione + "do ";			
		
	var div = document.getElementById("textDiv");  
    var nestedDiv = document.getElementById("nested");  
    nestedDiv.textContent = composizione
}

function cancellatutto(){
	composizione = "";
	
	var div = document.getElementById("textDiv");  
    var nestedDiv = document.getElementById("nested");  
    nestedDiv.textContent = composizione;
}