jQuery(document).ready(function($){
  jQuery('#block-views-collect-block-1 .views-row').wjin('flipInX',Math.floor(Math.random()*2000));
  jQuery('#block-views-collect-block-1 .views-row').hoverAni('pulse');
  jQuery('#block-views-food-ingredients-block .views-row').wjin('flipInX',Math.floor(Math.random()*2000));
  jQuery('#block-views-food-ingredients-block .views-row').hoverAni('pulse');
  jQuery('#block-views-on-the-road-block tr').wjin('bounceInRight');
  jQuery('a').hoverAni('pulse');


	//Egg XD
	//Please type doyouaflavor.
	var str = "";
	var sample = "doyouaflavor";
	$(window).keydown(function(e) {
        //b
        var key = String.fromCharCode(e.which).toLowerCase();
        //追縱大家按鍵盤
        //ga('send', 'event', 'key', 'down', e.keyName());
        // console.log(e.keyName());
        // console.log(key);
        str = (str == "" && key == sample[0]) ? key : (sample.split(str).pop()[0] == key) ? str + key : "";

        if (str == sample) {
            //追蹤彩蛋
            ga('send', 'event', 'eggs', 'doyouaflavor');
            str = "";
            $('div').addClass('animated').addClass('tada');
            setTimeout(function() {
                $('div').removeClass('tada');
            }, 3000);
            setTimeout(function() {
                $(shuffle($('.field, .field-content, .view-content tr'))).each(function(i) {
                    var $th = $(this);
                    // console.log(i);
                    setTimeout(function() {
                        $th.addClass('animated').addClass('hinge');
                    }, i * 50);
                });
                setTimeout(function() {
                    $('.field, .field-content, .view-content tr').removeClass('hinge').wjin('bounceInDown');
                }, 5000);
            }, 1300);
        }
    });

    function shuffle(o) { //v1.0
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    /**
     * 時間: 每秒+1
     */
    var seconds = 0;
    setInterval(function(){
        seconds++;
    }, 1000);
    get_second = function(){
        return seconds;
    }
    get_time =function (s){
        var m = Math.floor(s / 60);
        s %= 60;
        var h = Math.floor(m / 60);
        m %= 60;
        return h+":"+m+":"+s;
    }
    gt =function (){
        return get_time(seconds);
    }


/** ga scroll
 * 追縱有幾個人有看到底
 */
    // var after_scroll = false;
    function ga_scroll() {
        /*
        if(!after_scroll){
            after_scroll = true;
            ga('send', 'event', 'scroll', 'start',gt());
        }*/
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            ga('set', 'metric1', get_second());
            ga('send', 'event', 'scroll','bottom', gt());
            // console.log("hello");
            $(window).off("scroll", ga_scroll);
        }
    }
    $(window).scroll(ga_scroll);


});