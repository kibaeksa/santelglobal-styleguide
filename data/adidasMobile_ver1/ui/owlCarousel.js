module.exports = `
    <style type="text/css">
        .banner_slider_wrap{
            width: 730px;
            position: relative;
            overflow: hidden;
            background-size: 100% 100%;
        }
        .banner_slider_wrap .owl-stage .owl-item>li{
            background: #ccc;
            font: 40px/300px 'noto sans kr';
            color: #000;
            text-align: center;
        }
        .banner_slider_wrap .owl-controls{
            text-align:center;
        }
        .banner_slider_wrap .owl-controls .owl-nav .owl-next,
        .banner_slider_wrap .owl-controls .owl-nav .owl-prev{
            display:inline-block;
            font-size:20px;
            float:left;
        }
        .banner_slider_wrap .owl-controls .owl-nav .owl-next{
            float:right;
        }
        .banner_slider_wrap  .owl-dots{}
        .banner_slider_wrap  .owl-dots .owl-dot{
            display:inline-block;
            padding:10px;
        }
        .banner_slider_wrap  .owl-dots .owl-dot>span{
            display:inline-block;
            width:5px;
            height:5px;
            background:#ddd;
        }
        .banner_slider_wrap  .owl-dots .owl-dot.active>span{
            background:#000;
        }

        /*  owl carosel element */
        .owl-item{
        float: left;
        box-sizing:border-box;
        -webkit-box-sizing:border-box;
        }
        .owl-stage{
        overflow: hidden;
        }
        .owl-stage .owl-item li>a>img{width:100%;}


    </style>
    <div class="code-wrap">
        <div class="prefix">Owl 슬라이드 <small>(화살표, 네비게이션 유무는 디자인에 따라 커스터마이징)</small></div><br/>
        <div class="prefix">공식 홈페이지 <small><a href="https://owlcarousel2.github.io/OwlCarousel2/" target="_blank">https://owlcarousel2.github.io/OwlCarousel2/</a></small></div>
        <div class="desc">HTML</div>
        <div class="code-box">

            <pre class="brush: html">
                <div class="banner_slider_wrap">
                    <ul id="slider_owl">
                        <li><a href="#">1번째</a></li>
                        <li><a href="#">2번째</a></li>
                        <li><a href="#">3번째</a></li>
                        <li><a href="#">4번째</a></li>
                    </ul>
                </div>
            </pre>

        </div>

        <div class="code-box">
            <pre class="brush: js">
                var owlSlider = $('#slider_owl');

                owlSlider.on('initialized.owl.carousel', function(event) {
                    /*
                        최초 로딩 시 한번만 호출하는 함수
                    */
                });

                owlSlider.on('changed.owl.carousel', function(event) {
                    /*
            		    Callback 이벤트 (슬라이드가 실행 될 떄마다 실행되는 함수)
                        * index 사용하기
                        event.item.index

                        * length 사용하기
                        event.item.count
                    */
            	});

                owlSlider.owlCarousel({
                    stagePadding: 60,
                    margin:15,
                    items : 1,
                    merge: true,
                    loop : true,
                    navigation: true,
                    nav: true
                });

            </pre>
        </div>

        <div class="result_box">

            <div class="banner_slider_wrap">
                <ul class="banner_slider1">
                    <li><a href="#">1번째</a></li>
                    <li><a href="#">2번째</a></li>
                    <li><a href="#">3번째</a></li>
                    <li><a href="#">4번째</a></li>
                </ul>
            </div>

        </div>
    </div>


    <script src="//imagem.adidas.co.kr/js/owl.carousel.js"></script>
    <script type="text/javascript">

        var owlSlider = $('.banner_slider1');

        owlSlider.on('initialized.owl.carousel', function(event) {
            console.log('initialized')
        });

        owlSlider.on('changed.owl.carousel', function(event) {
            console.log('index : ',event.item.index);
            console.log('Length : ',event.item.count);
        });

        owlSlider.owlCarousel({
            stagePadding: 60,
            margin:15,
            items : 1,
            merge: true,
            loop : true,
            navigation: true,
            nav: true
        });

    </script>


`;
