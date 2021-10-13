$(document).ready(function(){
    
    //通用设置
    var cir1 = $(".circle_1");
    var cir2 = $(".circle_2");
    var cir3 = $(".circle_3");
    var cir4 = $(".circle_4");
    var cir5 = $(".circle_5");
    var cir6 = $(".circle_6");
    var cirIcon1 = $(".circle_icon_1");
    var cirIcon2 = $(".circle_icon_2");
    var cirIcon3 = $(".circle_icon_3");
    var playIcon1 = $(".play_icon_1");
    var playIcon2 = $(".play_icon_2");
    var playIcon3 = $(".play_icon_3");

    //动画控制
    function animationPlay(){
        
    }

    //初始设置
    animationPlay.prototype.default = function(){
        cir1.css({
            scale:0
        })
        cir2.css({
            scale:0
        })
        cir3.css({
            scale:0
        })
        cir4.css({
            scale:0
        })
        cir5.css({
            scale:0
        })
        cir6.css({
            scale:0
        });
        cirIcon1.css({
            scale:0
        });
        cirIcon2.css({
            scale:0
        });
        cirIcon3.css({
            scale:0
        });
    };

    //放大效果
    animationPlay.prototype.scallBox = function(id,time){
      $(id).transition({
        opacity:1,
        scale:1,
        duration:150*time
      })
    };

    //添加滚动效果
    animationPlay.prototype.rotateBox = function(){
        // $(".circle_2").addClass("rotatePrev");
        $(".circle_3").addClass("rotateNext");
        $(".circle_4").addClass("rotatePrev");
        $(".circle_5").addClass("rotateNext");
        $(".circle_6").addClass("rotatePrev");
    };

    //板块弹出
    animationPlay.prototype.tipBox = function(id,time){
        $(id).transition({
            opacity:1,
            scale:1,
            duration:300*time
          });
    };

    var animationTime = new animationPlay();

    animationTime.default();
    
    for(var i = 1;i<=6;i++){
        animationTime.scallBox(".circle_"+i,i);
    }

    //旋转效果
    setTimeout(function(){
        animationTime.rotateBox();
    },1000);

    setTimeout(function(){
        for(var i = 1;i<=6;i++){
            animationTime.tipBox(".circle_icon_"+i,i);
        }
    },1500);

    //登录控制

    function login(){

        //登录通用设置
        var loginBox = $(".login");
        var loginClose = $(".closeLogin");

        this.defautl = function(){
            loginBox.hide().css({
                width:0
            });
        };

        //打开功能
        this.open = function(){
            loginBox.show();
            loginBox.transition({
                width:"100%",
                duration:200
            });
            loginBox.find("h3").transition({
                opacity:1,
                duration:200
            });
            loginBox.find("p").eq(0).transition({
                opacity:1,
                duration:300
            });
            loginBox.find("p").eq(1).transition({
                opacity:1,
                duration:400
            });
            loginBox.find("p").eq(2).transition({
                opacity:1,
                duration:500
            });
            loginBox.find("p").eq(3).transition({
                opacity:1,
                duration:600
            });
            loginClose.show().css({
                opacity:1
            });
        };

        //关闭功能
        this.close = function(){
            loginClose.hide();
            loginBox.find("h3").transition({
                opacity:0,
                duration:200
            });
            loginBox.find("p").eq(0).transition({
                opacity:0,
                duration:300
            });
            loginBox.find("p").eq(1).transition({
                opacity:0,
                duration:400
            });
            loginBox.find("p").eq(2).transition({
                opacity:0,
                duration:500
            });
            loginBox.find("p").eq(3).transition({
                opacity:0,
                duration:600,
                complete:function(){
                    loginBox.transition({
                        width:0,
                        duration:400
                    });
                }
            });
            //loginBox.hide();
        }
    }

    var loginAnimation = new login();
    loginAnimation.defautl();

    //点击打开
    $(".loginInputText").on("click",function(){
        loginAnimation.open();
    });
    //点击关闭触发
     $(".closeLogin").on("click",function(){
          loginAnimation.close();
     });


     //探索雄安效果
     function seachXa(){

     }
     seachXa.prototype.closeSearch = function(id,time){
        $(id).transition({
            opacity:1,
            scale:0,
            duration:150*time
          });
     };

     $(".xionganBegin").on("click",function(){
  
        $(".title").transition({
            opacity:0,
            duration:800
        });$(".title").transition({
            opacity:0,
            duration:800
        });
//		
//		$(".playBox").transition({
//            opacity:0,
//            duration:1000
//        });
        for(var i = 1;i<=6;i++){

            $(".circle_"+i).removeClass("rotatePrev");
            $(".circle_"+i).removeClass("rotateNext");

            seachXaBox.closeSearch(".circle_"+i,i);
        }

        //控制导航弹出
        iconPlay.iconOpen();

     })

     var seachXaBox = new seachXa();


     //图标动态效果
     function iconAnimation(){
          this.max = 11;
          this.size = [
                {x:160,y:-305},
			{x:260,y:-265},
			{x:330,y:-180},
			{x:350,y:-70},
			{x:310,y:35},
			{x:210,y:100},
			{x:90,y:90},
			{x:-0,y:20},
			{x:-55,y:-80},
			{x:-30,y:-190},
			{x:45,y:-275},
                // {x:150,y:-300},
                // {x:150,y:-270},
                // {x:200,y:-300},
                // {x:150,y:-400}
            ];
            this.title1 = $(".tipText1");
            this.title2 = $(".tipText2");
            this.title3 = $(".tipText3");
            this.katong = $(".katong");
     }
     //默认设置
     iconAnimation.prototype.default = function(){
        $(".tipBox").css({
            scale:0
        })
        for (var  index = 1; index <= this.max; index++) {
            $(".tipIcon_"+index).css({
                opacity:0
            });  
        }
     };
     //图标展开运动
     iconAnimation.prototype.iconOpen = function(){
        $(".tipBox").show();
        $(".tipBox").transition({
            scale:1,
            duration:400,
            complete:function(){
                $(".tipBoxBg").addClass("rotatePrev1");
            }
        });
		$(".text").transition({
                opacity:0,
                duration:600
            });
        setTimeout(function(){
            $(".katong").transition({
                opacity:1,
                duration:600
            });
            $(".tipText1").transition({
                opacity:1,
                duration:800
            });
            $(".tipText2").transition({
                opacity:1,
                duration:1200
            });
            $(".tipText3").transition({
                opacity:1,
                duration:1400
            });
			$(".tipText4").transition({
                opacity:1,
                duration:1400
            });
        },1000);

        for (var i = 1; i <= this.max; i++) {
            $(".tipIcon_"+i).transition({
                opacity:1,
                duration:200*i,
                x:this.size[i-1].x,
                y:this.size[i-1].y
            });     
        }
     };
     //图表收缩运动
     iconAnimation.prototype.iconClose = function(){
        for (var index = 1; index <= this.max; index++) {
            $(".tipIcon_"+index).transition({
                opacity:0,
                duration:100*index,
                x:0,
                y:0
            });       
        }
        setTimeout(function(){
            $(".katong").transition({
                opacity:0,
                duration:600
            });
            $(".tipText3").transition({
                opacity:0,
                duration:800
            });
            $(".tipText2").transition({
                opacity:0,
                duration:1200
            });
            $(".tipText1").transition({
                opacity:0,
                duration:1400
            });
        },500);
        setTimeout(function(){
            $(".tipBox").transition({
               scale:0,
               duration:300,
               complete:function(){
                $(".tipBox").hide();
               }
            });
        },1000);
        for(var i = 1;i<=6;i++){
            animationTime.scallBox(".circle_"+i,i);
        }        
        setTimeout(function(){
            animationTime.rotateBox();
			$(".title").transition({
			  opacity:1,
			  duration:300
			  
			})
			$(".playBox").transition({
            opacity:1,
            duration:300
           });
		   $(".text").transition({
            opacity:1,
            duration:300
           });
        },1000);
        setTimeout(function(){
            for(var i = 1;i<=6;i++){
                animationTime.tipBox(".circle_icon_"+i,i);
            }
        },1500);
     };

     var iconPlay = new iconAnimation();
     iconPlay.default();
     //iconPlay.iconOpen();

     //关闭导航动画
     $(".tipText4").on("click",function(){
        console.info("close animation icon!");
        iconPlay.iconClose();
    });
	$(".robot").on("click",function(){
			console.info("close animation icon!");
			iconPlay.iconClose();
		});
    $(".katong").on("click",function(){
        console.info("close animation icon!");
        iconPlay.iconClose();
    })

    //基础设置
    $(".tipIconText").css({
        scale:0
    });
        //打字机效果
        var i = 0;
        function playText(id,str){
            if (i <= str.length) {
                $(id).html =(str.slice(0, i++) + '_');
                setTimeout('playText()', 200);//递归调用
                }
                else{
                $(id).html =(str);
            }
        }
    $(".tipIconBox").on("mouseover",function(){
        var index = $(this).attr("data");

        $(this).transition({
            scale:1.2,
            duration:200,
            complete:function(){
                $("#text"+index).show();
                $("#text"+index).transition({
                    scale:1,
                    duration:200,
                    complete:function(){
                        //var str = $("#text"+index).html();
                        //playText($("#text"+index),str);
                    }
                });
            }
        });
    });
    $(".tipIconBox").on("mouseout",function(){
        var index = $(this).attr("data");
        $(this).transition({
            scale:1,
            duration:200,
            complete:function(){
                $("#text"+index).transition({
                    scale:0,
                    duration:200,
                    complete:function(){
                        $("#text"+index).show();
                    }
                });
            }
        });
    });

	
	//视频播放
    function videoPlay(){
        this.blackBg = $(".blackBg");
        this.videoBox = $(".videoPlay");
        this.videoStart = $("#videoShow")[0];
	    //滚动设置
		var playBox = new Swiper('.playBoxSwiper',{
			loop:true,
			slidesPerView:3,
			autoplay:4000,
			autoplayDisableOnInteraction:false
		 });
		 $(".leftButton").on("click",function(){
		playBox.swipePrev();
		});
		$(".rightButton").on("click",function(){
			playBox.swipeNext();
		});
    }

    videoPlay.prototype.play = function(url){
        $(".blackBg").show();
        $(".videoPlay").show();
	   console.log(url)
        $("#videoShow").attr({"src":url});
    };
    var videoNow = new videoPlay();
    //视频播放触发
    $(".playBox .swiper-slide").on("click",function(){
		        var src = $(this).attr("data");
                videoNow.play(src);
     });
    //关闭视频
    $(".closeTv").on("click",function(){
        $("#videoShow").attr({"src":""});
        $(".blackBg").hide();
        $(".videoPlay").hide();
    })
	
	//打开右侧浮动
	$(".slideRight").on("click",function(){
		$(this).transition({
			right:0,
			duration:300
		});
	});
	$(document).on("mouseleave",".slideRight",function(){
		$(this).transition({
				right:-200,
				duration:300
			});
     });


})