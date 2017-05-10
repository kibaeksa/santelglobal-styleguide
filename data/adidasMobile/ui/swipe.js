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
                <div class="banner_slider_wrap">
                    <div id="slide_swipe" class="swiper_element">
                        <ul>
                            <li><img src="http://imagem.adidas.co.kr/images/adidas/event/iniki/originals-ss17-iniki-item-3-m_tcm65-141445.png"></li>
                            <li><img src="http://imagem.adidas.co.kr/images/adidas/event/iniki/originals-ss17-iniki-item-4-m_tcm65-141448.png"></li>
                            <li><img src="http://imagem.adidas.co.kr/images/adidas/event/iniki/originals-ss17-iniki-item-3-m_tcm65-141445.png"></li>
                            <li><img src="http://imagem.adidas.co.kr/images/adidas/event/iniki/originals-ss17-iniki-item-3-m_tcm65-141445.png"></li>
                        </ul>
                    </div>
                    <div class="swipe_num">
                        <span class="on"><a href="#"></a></span>
                        <span><a href="#"></a></span>
                        <span><a href="#"></a></span>
                        <span><a href="#"></a></span>
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

            </pre>
        </div>

        <div class="result_box">

            <div class="banner_slider_wrap">
                <div id="slide_swipe1" class="swiper_element">
                    <ul>
                        <li><img src="http://imagem.adidas.co.kr/images/adidas/event/iniki/originals-ss17-iniki-item-3-m_tcm65-141445.png"></li>
                        <li><img src="http://imagem.adidas.co.kr/images/adidas/event/iniki/originals-ss17-iniki-item-4-m_tcm65-141448.png"></li>
                        <li><img src="http://imagem.adidas.co.kr/images/adidas/event/iniki/originals-ss17-iniki-item-3-m_tcm65-141445.png"></li>
                        <li><img src="http://imagem.adidas.co.kr/images/adidas/event/iniki/originals-ss17-iniki-item-3-m_tcm65-141445.png"></li>
                    </ul>
                </div>
                <div class="swipe_num">
                    <span class="on"><a href="#"></a></span>
                    <span><a href="#"></a></span>
                    <span><a href="#"></a></span>
                    <span><a href="#"></a></span>
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
        })(jQuery);
    </script>


`;
