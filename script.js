var dir = "pics/";
var cats = [
	"cat1.jpg",
	"cat2.jpg",
	"cat3.jpg",
	"cat4.jpg",
	"cat5.jpg",
	"cat6.jpg",
	"cat7.jpg",
	"cat8.jpg",
	"cat9.jpg",
	"cat10.jpg",
	"cat11.png",
	"cat12.jpg",
	"cat13.jpg",
	"cat14.jpg",
	"cat15.png",
	"cat16.jpg"
];
var counter = 0;
for (var i = 0; i< cats.length; i++) {
	$("#preview").append(`<img src="${dir+cats[i]}">`);
}
$("#prev").click(function(){
	counter==0?counter=cats.length:counter--;
	setImage(counter);
});
$("#next").click(function(){
	counter==cats.length-1?counter=0:counter++;
	setImage(counter);
});
function setImage(index){
	$("#cat").attr("src", dir+cats[index]);
}