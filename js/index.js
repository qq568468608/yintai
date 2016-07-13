$(".kuai").hover(function(){
	var index=$(this).index(".kuai");
	$(".wx").eq(index).css("display","block")
},function(){
	var index=$(this).index(".kuai");
	$(".wx").eq(index).css("display","none")})



$(".bannerpic>a").fadeOut(0).eq(0).fadeIn(0);
var num=0;
function move(){
	num++;
	if(num>=$(".bannerpic>a").length){
		num=0
	}
	$(".bannerpic>a").fadeOut(500).eq(num).fadeIn(1000)
	$(".btn").css("background","#211616").eq(num).css("background","#e5004f")
}
var t=setInterval(move,2000)



$(".bannerpic").hover(function(){
	clearInterval(t);
	$(".left").css("display","block");
	$(".right").css("display","block");
},function(){
	
	t=setInterval(move,2000)
	$(".left").css("display","none");
	$(".right").css("display","none");
})



$(".right").click(function(){
	stop(true,true)
	move();
})



$(".left").click(function(){
	
	num--;
	if(num<=-1){
		num=$(".bannerpic>a").length-1
	}
	$(".bannerpic>a").fadeOut(500).eq(num).fadeIn(1000)
	$(".btn").css("background","#211616").eq(num).css("background","#e5004f")
	stop(true,true)
})

$(".btn").hover(function(){
	stop(true,true)
	var index=$(this).index();
	$(".bannerpic>a").stop(true,true)
	$(".bannerpic>a").fadeOut(500).eq(index).fadeIn(1000)
	$(".btn").css("background","#211616").eq(index).css("background","#e5004f");
	num=index;
})


$(".fllb").hover(function(){
	var index=$(this).index(".fllb");
	$(".spxq").eq(index).css("display","block")
},function(){
	var index=$(this).index(".fllb");
	$(".spxq").eq(index).css("display","none")})


$(".kuai2").hover(function(){
	var index=$(this).index(".kuai2");
	$(".sp1list").css("display","none").eq(index).css("display","block");
	$(".sj").css("display","none").eq(index).css("display","block");
	$(".kuai2").css("borderBottom","3px solid #333").eq(index).css("borderBottom","3px solid #e5004f");
	$(".kuai2").css("fontWeight","normal").eq(index).css("fontWeight","bold");
})



$(".splfl").hover(function(){
	$(".tiao1").stop(true,true)
	$(".tiao2").stop(true,true)
	$(".tiao3").stop(true,true)
	$(".tiao4").stop(true,true)
	$(".tiao1",this).animate({"width":"218px"},700)
	$(".tiao4",this).animate({"width":"218px"},700)
	$(".tiao2",this).animate({"height":"258px"},700)
	$(".tiao3",this).animate({"height":"258px"},700)
},function(){
	$(".tiao1").stop(true,true)
	$(".tiao2").stop(true,true)
	$(".tiao3").stop(true,true)
	$(".tiao4").stop(true,true)
	$(".tiao1",this).animate({"width":"0px"},700)
	$(".tiao4",this).animate({"width":"0px"},700)
	$(".tiao2",this).animate({"height":"0px"},700)
	$(".tiao3",this).animate({"height":"0px"},700)
})

$(".rmpp").hover(function(){
	var index=$(this).index(".rmpp");
	$(".xxkbottom").css("display","none").eq(index).css("display","block");
	$(".sp2sj").css("display","none").eq(index).css("display","block");
	$(".rmpp").css("borderBottom","3px solid #333").eq(index).css("borderBottom","3px solid #e5004f");
	$(".rmpp").css("fontWeight","normal").eq(index).css("fontWeight","bold");
})



$(".sp2xq").hover(function(){
	$(".bk1").stop(true,true)
	$(".bk3").stop(true,true)
	$(".bk2").stop(true,true)
	$(".bk4").stop(true,true)
	$(".bk1",this).animate({"width":"198px"},700)
	$(".bk3",this).animate({"width":"198px"},700)
	$(".bk2",this).animate({"height":"248px"},700)
	$(".bk4",this).animate({"height":"248px"},700)
},function(){
	$(".bk1").stop(true,true)
	$(".bk3").stop(true,true)
	$(".bk2").stop(true,true)
	$(".bk4").stop(true,true)
	$(".bk1",this).animate({"width":"0px"},700)
	$(".bk3",this).animate({"width":"0px"},700)
	$(".bk2",this).animate({"height":"0px"},700)
	$(".bk4",this).animate({"height":"0px"},700)})






$(".s3ban2").click(function(){
	var index=$(this).index(".s3ban2")
	$(".s3bpic1").eq(index).stop(true,true)	
	$(".s3bpic2").eq(index).stop(true,true)
	$(".s3bpic1").eq(index).animate({"left":"-390px"},700)
	$(".s3bpic2").eq(index).animate({"left":"0px"},700)
	$(".s3ban4").eq(index).css("background","#e5004f")
	$(".s3ban3").eq(index).css("background","#999")
})
$(".s3ban1").click(function(){
	var index=$(this).index(".s3ban1")
	$(".s3bpic1").eq(index).stop(true,true)	
	$(".s3bpic2").eq(index).stop(true,true)
	$(".s3bpic1").eq(index).animate({"left":"0px"},700)
	$(".s3bpic2").eq(index).animate({"left":"390px"},700)
	$(".s3ban3").eq(index).css("background","#e5004f")
	$(".s3ban4").eq(index).css("background","#999")
})

$(".s3ban4").click(function(){
    var index=$(this).index(".s3ban4")
	$(".s3bpic1").eq(index).stop(true,true)	
	$(".s3bpic2").eq(index).stop(true,true)
	$(".s3bpic1").eq(index).animate({"left":"-390px"},700)
	$(".s3bpic2").eq(index).animate({"left":"0px"},700)
	$(".s3ban4").eq(index).css("background","#e5004f")
	$(".s3ban3").eq(index).css("background","#999")
})
$(".s3ban3").click(function(){
    var index=$(this).index(".s3ban3")
	$(".s3bpic1").eq(index).stop(true,true)	
	$(".s3bpic2").eq(index).stop(true,true)
	$(".s3bpic1").eq(index).animate({"left":"0px"},700)
	$(".s3bpic2").eq(index).animate({"left":"390px"},700)
	$(".s3ban3").eq(index).css("background","#e5004f")
	$(".s3ban4").eq(index).css("background","#999")
})

$(".s3bmid").hover(function(){
	var index=$(this).index(".s3bmid")
	$(".s3ban1").eq(index).stop(true,true)	
	$(".s3ban2").eq(index).stop(true,true)
	$(".s3ban1").eq(index).animate({"left":"0px"},500)
	$(".s3ban2").eq(index).animate({"right":"0px"},500)
},function(){
	var index=$(this).index(".s3bmid")
	$(".s3ban1").eq(index).stop(true,true)	
	$(".s3ban2").eq(index).stop(true,true)	
	$(".s3ban1").eq(index).animate({"left":"-30px"},500)
	$(".s3ban2").eq(index).animate({"right":"-30px"},500)
})





$(".s3bbk").hover(function(){
	$(".s3bbk1").stop(true,true)
	$(".s3bbk3").stop(true,true)
	$(".s3bbk2").stop(true,true)
	$(".s3bbk4").stop(true,true)
	$(".s3bbk1",this).animate({"width":"272px"},700)
	$(".s3bbk3",this).animate({"width":"272px"},700)
	$(".s3bbk2",this).animate({"height":"182px"},700)
	$(".s3bbk4",this).animate({"height":"182px"},700)
},function(){
	$(".s3bbk1").stop(true,true)
	$(".s3bbk3").stop(true,true)
	$(".s3bbk2").stop(true,true)
	$(".s3bbk4").stop(true,true)
	$(".s3bbk1",this).animate({"width":"0px"},700)
	$(".s3bbk3",this).animate({"width":"0px"},700)
	$(".s3bbk2",this).animate({"height":"0px"},700)
	$(".s3bbk4",this).animate({"height":"0px"},700)})



$(".bcdhbox").each(function(index,obj){
	$(".bcdhbox").eq(index).hover(function(){
	$(".dcdnhz").css("display","none").eq(index).css("display","block")
	},function(){
	$(".dcdnhz").css("display","none").eq(index).css("display","none")})
})


$(".bcdhbox2").hover(function(){
	$(".dcdnhz2").css("display","block")
},function(){
	$(".dcdnhz2").css("display","none")
})


$(window).scroll(function(){
    var tops=$(window).scrollTop()
		if(tops>=500){
			$(".bcdh").show(500)
		}else{
			$(".bcdh").hide(500)
		}
		$(".floor").each(function(index,obj){
            if(tops>=$(obj).position().top-120){
            	$(".dcdnhz").css("display","none").eq(index).css("display","block")
            }
		})
	})

$(".dcdnhz").each(function(index,obj){
	$(".dcdnhz").eq(index).click(function(){
	$(window).scrollTop($(".floor").eq(index).position().top);
	
})
})

$(".zsj").click(function(){
	$(".s3bgdt1").animate({"left":"-75px"})
	$(".s3bgdt1").addClass("s3bgdt3").removeClass("s3bgdt1")
	$(".s3bgdt2").animate({"left":"0px"})
	$(".s3bgdt2").addClass("s3bgdt1").removeClass("s3bgdt2")
	$(".s3bgdt3").animate({"left":"75px"},0)
	$(".s3bgdt3").addClass("s3bgdt2").removeClass("s3bgdt3")
})


