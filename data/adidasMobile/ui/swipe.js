module.exports = `
    <style type="text/css">
        .banner_slider_wrap{
            width: 100%;
            position: relative;
            overflow: hidden;
            text-align:center;
        }

        #slide_swipe1 ul{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            overflow: hidden;
        }
        #slide_swipe1{
            position:relative;
            padding-bottom:60%;
        }
        #slide_swipe1 ul li{
            position: relative;
            float: left;
        }
        #slide_swipe1 ul li img{
            width:100%;
        }
        .banner_slider_wrap .swipe_num{
            position:relative;
        }
        .banner_slider_wrap .swipe_num span{
            padding:10px;
        }
        .banner_slider_wrap .swipe_num span a{
            display:inline-block;
            width:5px;
            height:5px;
            background:#ddd;
        }
        .banner_slider_wrap .swipe_num span.on a{
            background:#000;
        }
        .banner_slider_wrap .swipe_nav{}
        .banner_slider_wrap .swipe_nav .prev,
        .banner_slider_wrap .swipe_nav .next{
            float:left;
        }
        .banner_slider_wrap .swipe_nav .next{
            float:right;
        }


    </style>
    <div class="code-wrap">
        <div class="prefix">Swipe 슬라이드 <small>(개발자도구 모바일버전으로만 확인가능)</small></div>
        <div class="desc">HTML</div>
        <div class="code-box">
            <pre class="brush: html">
                <div class="banner_slider_wrap" style="width:500px;">
                    <div id="slide_swipe" class="swiper_element">
                        <ul>
                            <li><img src="http://imagem.adidas.co.kr/images/adidas/event/iniki/originals-ss17-iniki-item-3-m_tcm65-141445.png"></li>
                            <li><img src="http://imagem.adidas.co.kr/images/adidas/event/iniki/originals-ss17-iniki-item-4-m_tcm65-141448.png"></li>
                            <li><img src="http://imagem.adidas.co.kr/images/adidas/event/iniki/originals-ss17-iniki-item-3-m_tcm65-141445.png"></li>
                            <li><img src="http://imagem.adidas.co.kr/images/adidas/event/iniki/originals-ss17-iniki-item-3-m_tcm65-141445.png"></li>
                        </ul>
                    </div>
                    <div class="swipe_num">
                        <span class="on"><a href="javascript:void(0)"></a></span>
                        <span><a href="javascript:void(0)"></a></span>
                        <span><a href="javascript:void(0)"></a></span>
                        <span><a href="javascript:void(0)"></a></span>
                    </div>
                </div>
            </pre>
        </div>

        <div class="code-box">
            <pre class="brush: js">

                var mainSwipe = Swipe(document.getElementById('slide_swipe'),{
                    stopPropagation: true,
                    callback : function(index , element){
                        $('.swipe_num span').removeClass('on').eq(index).addClass('on');
                    }
                });

                $('.prev').bind('click',function(){
                    //이전으로 슬라이드 하는 element에 클릭 이벤트를 잡아서 Swipe를 선언 한 변수에서 prev 메소드를 실행합니다.
                    mainSwipe.prev();
                });

                $('.next').bind('click',function(){
                    //다음으로 슬라이드 하는 element에 클릭 이벤트를 잡아서 Swipe를 선언 한 변수에서 next 메소드를 실행합니다.
                    mainSwipe.next();
                });

                $('.swipe_num span').bind('click',function(){
                    //버튼의 element에 클릭 이벤트를 잡아서 Swipe를 선언 한 변수에서 slide 메소드를 이동하고자 하는 index값을 전달하여 실행합니다.
                    mainSwipe.slide($(this).index());
                });

            </pre>
        </div>

        <div class="result_box">

            <div class="banner_slider_wrap" style="width:800px;margin:0 auto;">
                <div id="slide_swipe1" class="swiper_element">
                    <ul>
                        <li><img src="http://imagem.adidas.co.kr/images/adidas/event/iniki/originals-ss17-iniki-item-3-m_tcm65-141445.png"></li>
                        <li><img src="http://imagem.adidas.co.kr/images/adidas/event/iniki/originals-ss17-iniki-item-4-m_tcm65-141448.png"></li>
                        <li><img src="http://imagem.adidas.co.kr/images/adidas/event/iniki/originals-ss17-iniki-item-3-m_tcm65-141445.png"></li>
                        <li><img src="http://imagem.adidas.co.kr/images/adidas/event/iniki/originals-ss17-iniki-item-3-m_tcm65-141445.png"></li>
                    </ul>
                </div>
                <div class="swipe_num">
                    <span class="on"><a href="javascript:void(0)"></a></span>
                    <span><a href="javascript:void(0)"></a></span>
                    <span><a href="javascript:void(0)"></a></span>
                    <span><a href="javascript:void(0)"></a></span>
                </div>
                <div style="width:800px;overflow:hidden;">
                    <a href="javascript:void(0)" class="prev" style="font:700 13px 'noto sans kr'; float:left;">이전</a>
                    <a href="javascript:void(0)" class="next" style="font:700 13px 'noto sans kr'; float:right;">다음</a>
                </div>
            </div>

        </div>
    </div>



    <script src="http://imagem.adidas.co.kr/MO/js/jquery/jquery-1.4.2.js"></script>
    <script src="http://imagem.adidas.co.kr/js/swipe.js"></script>


    <script type="text/javascript">
        (function($){
            var mainSwipe = Swipe(document.getElementById('slide_swipe1'),{
                stopPropagation: true,
                callback : function(index , element){
                    $('.swipe_num span').removeClass('on').eq(index).addClass('on');
                }
            });

            $('.prev').bind('click',function(){
                mainSwipe.prev();
            });

            $('.next').bind('click',function(){
                mainSwipe.next();
            });

            $('.swipe_num span').bind('click',function(){
                mainSwipe.slide($(this).index());
            });

        })(jQuery);
    </script>


`;
