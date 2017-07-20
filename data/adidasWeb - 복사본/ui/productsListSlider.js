module.exports = `
    <style type="text/css">

    @font-face {
    	font-family: 'adihaus-bold';
        src: url('//image.adidas.co.kr/fonts/adihaus/bold/ADIHDB.eot');
    	src: url('//image.adidas.co.kr/fonts/adihaus/bold/ADIHDB.eot?#iefix') format('embedded-opentype'),
    	     url('//image.adidas.co.kr/fonts/adihaus/bold/ADIHDB.ttf')  format('truetype');
    }
    @font-face {
    	font-family: 'adihaus';
        src: url('//image.adidas.co.kr/fonts/adihaus/regular/ADIHRG.eot');
    	src: url('//image.adidas.co.kr/fonts/adihaus/regular/ADIHRG.eot?#iefix') format('embedded-opentype'),
    	     url('//image.adidas.co.kr/fonts/adihaus/regular/ADIHRG.ttf')  format('truetype');
    }

    /* rating */
    .rating-star{
    	position: relative;
    }

    .rating-star::after{
    	content:'.'; display:block; height:0; font-size:0; clear:both; visibility:hidden;
    }

    .rating-star .star-container{
    	position: relative;
    	display: inline-block;
    	vertical-align: middle;
    }

    .rating-star .star-container .star-bg{
    	width: 100%;
    	position: absolute;
    	top: 0;
    	left: 0;
    }
    .rating-star .star-container .star-bg img{
    	width: 62px;
    }

    .rating-star .star-container .star-point{
    	position: relative;
    	overflow: hidden;
    }

    .rating-star .star-container .star-point img{
    	width: 62px;
    	vertical-align:top;
    }

    .rating-star .star-count{
    	padding-left: 5px;
    	display: inline-block;
    	vertical-align: middle;
    	color: #000;
    	font:13px/13px 'adinenuPro-light';
    }

    /* price */
    .price-container{
    	display: inline-block;
    }

    .price-container .prc{
    	position: relative;
    	font:16px 'adihaus-bold';
    	color: #000;
    	vertical-align: baseline;
    }

    .price-container .prc .won{
    	margin-left: 1px;
    	color: #000;
    	font:12px 'noto sans kr';
    	vertical-align: baseline;
    }

    .price-container .prc.sale{
    	color: #c53622;
    }

    .price-container .prc.sale .won{
    	color: #c53622;
    }

    .price-container .prc.line{
    	margin-right: 5px;
    	font:15px 'adihaus';
    	color: #000;
    	text-decoration: line-through;
    }

    .price-container .prc.line .won{
    	color: #000;
    	font:12px 'NotoSansKRLight','Nanum Gothic';
    }

    /* product list */
    .products-list-tpl{
        position: relative;
    }

    .products-list-tpl.viewed_items{
        padding-bottom:85px;
    }

    .products-list-tpl .h_tit{
        margin-bottom: 20px;
        font:30px/30px 'NotoSansKRRegular','Nanum Gothic';
        color: #000;
        text-align: center;
    }

    .products-list-tpl .products-list-wrapper{
        width: 950px;
        height: 330px;
        position: relative;
        padding: 10px;
    }

    .viewed_items.products-list-tpl .products-list-wrapper{
        height: auto;
    }

    .products-list-tpl .products-list-wrapper .products-list{
        position: absolute;
        top:0;
        left: 0;
        margin: 10px 0 0 10px;
    }

    .products-list-tpl .products-list-wrapper .products-list::after{
        content:'.'; display:block; height:0; font-size:0; clear:both; visibility:hidden;
    }

    .products-list-tpl .products-list-wrapper .products-slide-wrapper{
        width: 940px;
        height: 330px;
        position: relative;
        overflow: hidden;
        padding: 15px;
    }

    .products-list-tpl .products-list-wrapper .products-slide-wrapper .prev,
    .products-list-tpl .products-list-wrapper .products-slide-wrapper .next{
        width: 25px;
        height: 25px;
        position: absolute;
        top:115px;
        z-index: 10;
        background: #fff;
        transition:background 0.3s;
        -webkit-transition:background 0.3s;
    }

    .products-list-tpl .products-list-wrapper .products-slide-wrapper .prev:hover,
    .products-list-tpl .products-list-wrapper .products-slide-wrapper .next:hover{
        background: #f0f0f0;
    }

    .products-list-tpl .products-list-wrapper .products-slide-wrapper .prev{
        left:10px;
    }

    .products-list-tpl .products-list-wrapper .products-slide-wrapper .next{
        right: 10px;
    }

    .products-list-tpl .products-list-wrapper .products-slide-wrapper .prev span,
    .products-list-tpl .products-list-wrapper .products-slide-wrapper .next span{
        width: 6px;
        height: 12px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -6px 0 0 -3px;
    }

    .products-list-tpl .products-list-wrapper .products-slide-wrapper .prev span{
        background-position:-385px -945px;
    }

    .products-list-tpl .products-list-wrapper .products-slide-wrapper .next span{
        background-position:-400px -945px;
        margin-left: -2px;
    }


    .products-list-tpl .products-list-wrapper .products-slide-wrapper .products-list{
        width: 5000px;

    }

    .products-list-tpl .products-list-wrapper .products-list li{
        position: relative;
        width: 230px;
        height: 330px;
        margin-right: 10px;
        float: left;
        transition: box-shadow 0.2s ease-out;
        -webkit-transition: box-shadow 0.2s ease-out;
    }

    .products-list-tpl .products-list-wrapper .products-list li:hover{
        box-shadow: 0 0 20px rgba(0,0,0,0.5);
    }

    .products-list-tpl .products-list-wrapper .products-list li:last-child{
        margin-right: 0;
    }

    .products-list-tpl .products-list-wrapper .products-list li .img{
        position: relative;
        margin-bottom: 15px;
    }

    .products-list-tpl .products-list-wrapper .products-list li .img img{
        width: 230px;
    }

    .products-list-tpl .products-list-wrapper .products-list li .tit{
        height:18px;
        padding-left: 10px;
        margin-bottom: 8px;
        overflow: hidden;

        display: -webkit-box;
        text-overflow: ellipsis;
        white-space:normal;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .products-list-tpl .products-list-wrapper .products-list li .tit a{
        font: 14px/17px 'noto sans kr';
        color: #000;
    }

    .products-list-tpl .products-list-wrapper .products-list li .rating-star{
        position: absolute;
        bottom: 20px;
        left: 10px;
    }

    .products-list-tpl .products-list-wrapper .products-list li .rating-star .star-count{
        color: #999;
        font:13px 'adihaus';
    }

    .products-list-tpl .products-list-wrapper .products-list li .price{
        position: absolute;
        bottom: 18px;
        right: 10px;
        text-align: right;
        padding-left: 8px;
    }

    .products-list-tpl .products-list-wrapper .products-list li .price .line{
        position: absolute;
        top: -15px;
        right: 0;
        font-size: 13px;
        margin-right: 0;
        color: #666;
        font:14px 'adihaus';
    }

    .products-list-tpl .products-list-wrapper .num{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
    }

    .products-list-tpl .products-list-wrapper .num a{
        padding: 5px;
        display: inline-block;
        overflow: hidden;
    }

    .products-list-tpl .products-list-wrapper .num a span{
        width: 5px;
        height: 5px;
        display: block;
        border-radius:50%;
        background: #999;
    }

    .products-list-tpl .products-list-wrapper .num a.on span{
        background: #0286cd;
    }

    </style>
    <div class="code-wrap">
        <div class="prefix">기본 슬라이드</div>
        <div class="desc">HTML</div>
        <div class="code-box">
            <pre class="brush: html">
                <!-- 필수 클래스명 -->
                &lt;div class="products-list-wrapper" id="productlist-slider"&gt;
                   <!-- 필수 클래스명 -->
                   &lt;div class="products-slide-wrapper"&gt;
                       <!-- 필수 클래스명 -->
                       &lt;ul class="products-list"&gt;
                           &lt;li&gt;
                               &lt;div class="img"&gt;
                                   &lt;a href="#"&gt;
                                       &lt;img src="http://image.adidas.co.kr/upload/prod/basic/320/S81858-1_320X320.jpg" alt="" /&gt;
                                   &lt;/a&gt;
                               &lt;/div&gt;
                               &lt;div class="rating-star"&gt;
                                   &lt;div class="star-container"&gt;
                                       &lt;div class="star-point" style="width:50%;"&gt;&lt;img src="/images/adidas/common/ico_rating.png" alt=""&gt;&lt;/div&gt;
                                       &lt;div class="star-bg"&gt;&lt;img src="/images/adidas/common/ico_rating_empty.png" alt=""&gt;&lt;/div&gt;
                                   &lt;/div&gt;
                                   &lt;div class="star-count"&gt;102&lt;/div&gt;
                               &lt;/div&gt;

                               &lt;div class="tit"&gt;&lt;a href="#"&gt;슈퍼스타 파운데이션 슈퍼스타 파운데이션 슈퍼스타 파운데이션 파운데이션 슈퍼스타 파운데이션파운데이션 슈퍼스타 파운데이션&lt;/a&gt;&lt;/div&gt;
                               &lt;div class="price"&gt;
                                   &lt;div class="price-container"&gt;
                                       &lt;span class="prc line"&gt;249,000&lt;span class="won"&gt;원&lt;/span&gt;&lt;/span&gt;
                                       &lt;span class="prc sale"&gt;249,000&lt;span class="won"&gt;원&lt;/span&gt;&lt;/span&gt;
                                   &lt;/div&gt;
                               &lt;/div&gt;
                           &lt;/li&gt;
                           ...
                           <!-- Item 이 10개가 있다고 쳤을 때 -->
                       &lt;/ul&gt;
                   &lt;/div&gt;
                &lt;/div&gt;
            </pre>
        </div>

        <div class="code-box">
            <pre class="brush: js">
                //.products-list-wrapper 클래스명의 셀렉터 전달
                $.fn.productsSlider('#productlist-slider');
            </pre>
        </div>

        <div class="result_box">
            <div class="products-list-tpl">
                <div class="products-list-wrapper" id="productlist-slider"><div class="products-slide-wrapper"><ul class="products-list"><li> <div class="img"> <a href="#"> <img src="http://image.adidas.co.kr/upload/prod/basic/320/BB2791-1_320X320.jpg" alt="" /> </a> </div> <div class="tit"><a href="#">EQT 서포트 ADV EQT 서포트 ADV EQT 서포트 ADV</a></div> <div class="price"> <div class="price-container"> <span class="prc line">249,000<span class="won">원</span></span><span class="prc sale">249,000<span class="won">원</span></span> </div> </div> </li> <li> <div class="img"> <a href="#"> <img src="http://image.adidas.co.kr/upload/prod/basic/320/BA7253-1_320X320.jpg" alt="" /> </a> </div> <div class="tit"><a href="#">NMD R2 PK</a></div> <div class="price"> <div class="price-container"> <span class="prc">249,000<span class="won">원</span></span> </div> </div> </li><li> <div class="img"> <a href="#"> <img src="http://image.adidas.co.kr/upload/prod/basic/320/AY7710-1_320X320.jpg" alt="" /> </a> </div> <div class="tit"><a href="#">트레포일 반팔티</a></div> <div class="price"> <div class="price-container"> <span class="prc line">249,000<span class="won">원</span></span><span class="prc sale">249,000<span class="won">원</span></span> </div> </div> </li> <li> <div class="img"> <a href="#"> <img src="http://image.adidas.co.kr/upload/prod/basic/320/S98396-1_320X320.jpg" alt="" /> </a> </div> <div class="tit"><a href="#">리스판스쇼츠</a></div> <div class="price"> <div class="price-container"> <span class="prc">249,000<span class="won">원</span></span> </div> </div> </li><li> <div class="img"> <a href="#"> <img src="http://image.adidas.co.kr/upload/prod/basic/320/BB2791-1_320X320.jpg" alt="" /> </a> </div> <div class="tit"><a href="#">EQT 서포트 ADV EQT 서포트 ADV EQT 서포트 ADV</a></div> <div class="price"> <div class="price-container"> <span class="prc line">249,000<span class="won">원</span></span><span class="prc sale">249,000<span class="won">원</span></span> </div> </div> </li> <li> <div class="img"> <a href="#"> <img src="http://image.adidas.co.kr/upload/prod/basic/320/BA7253-1_320X320.jpg" alt="" /> </a> </div> <div class="tit"><a href="#">NMD R2 PK</a></div> <div class="price"> <div class="price-container"> <span class="prc">249,000<span class="won">원</span></span> </div> </div> </li><li> <div class="img"> <a href="#"> <img src="http://image.adidas.co.kr/upload/prod/basic/320/AY7710-1_320X320.jpg" alt="" /> </a> </div> <div class="tit"><a href="#">트레포일 반팔티</a></div> <div class="price"> <div class="price-container"> <span class="prc line">249,000<span class="won">원</span></span><span class="prc sale">249,000<span class="won">원</span></span> </div> </div> </li> <li> <div class="img"> <a href="#"> <img src="http://image.adidas.co.kr/upload/prod/basic/320/S98396-1_320X320.jpg" alt="" /> </a> </div> <div class="tit"><a href="#">리스판스쇼츠</a></div> <div class="price"> <div class="price-container"> <span class="prc">249,000<span class="won">원</span></span> </div> </div> </li><li> <div class="img"> <a href="#"> <img src="http://image.adidas.co.kr/upload/prod/basic/320/BB2791-1_320X320.jpg" alt="" /> </a> </div> <div class="tit"><a href="#">EQT 서포트 ADV EQT 서포트 ADV EQT 서포트 ADV</a></div> <div class="price"> <div class="price-container"> <span class="prc line">249,000<span class="won">원</span></span><span class="prc sale">249,000<span class="won">원</span></span> </div> </div> </li> <li> <div class="img"> <a href="#"> <img src="http://image.adidas.co.kr/upload/prod/basic/320/BA7253-1_320X320.jpg" alt="" /> </a> </div> <div class="tit"><a href="#">NMD R2 PK</a></div> <div class="price"> <div class="price-container"> <span class="prc">249,000<span class="won">원</span></span> </div> </div> </li><li> <div class="img"> <a href="#"> <img src="http://image.adidas.co.kr/upload/prod/basic/320/AY7710-1_320X320.jpg" alt="" /> </a> </div> <div class="tit"><a href="#">트레포일 반팔티</a></div> <div class="price"> <div class="price-container"> <span class="prc line">249,000<span class="won">원</span></span><span class="prc sale">249,000<span class="won">원</span></span> </div> </div> </li> <li> <div class="img"> <a href="#"> <img src="http://image.adidas.co.kr/upload/prod/basic/320/S98396-1_320X320.jpg" alt="" /> </a> </div> <div class="tit"><a href="#">리스판스쇼츠</a></div> <div class="price"> <div class="price-container"> <span class="prc">249,000<span class="won">원</span></span> </div> </div> </li><li> <div class="img"> <a href="#"> <img src="http://image.adidas.co.kr/upload/prod/basic/320/BB2791-1_320X320.jpg" alt="" /> </a> </div> <div class="tit"><a href="#">EQT 서포트 ADV EQT 서포트 ADV EQT 서포트 ADV</a></div> <div class="price"> <div class="price-container"> <span class="prc line">249,000<span class="won">원</span></span><span class="prc sale">249,000<span class="won">원</span></span> </div> </div> </li> <li> <div class="img"> <a href="#"> <img src="http://image.adidas.co.kr/upload/prod/basic/320/BA7253-1_320X320.jpg" alt="" /> </a> </div> <div class="tit"><a href="#">NMD R2 PK</a></div> <div class="price"> <div class="price-container"> <span class="prc">249,000<span class="won">원</span></span> </div> </div> </li></ul></div></div>
            </div>

        </div>
    </div>

    <script src="//image.adidas.co.kr/js/jquery/easing/jquery.easing.1.3.js"></script>
    <script type="text/javascript">
        $.fn.productsSlider=function(a){function j(){b.append(function(){for(var a='<div class="num">',b=Math.floor(i/g)+(0!==Math.floor(i%g)?1:0),c=0;c<b;c++)a+=0==c?'<a href="javascript:void(0)" class="on"><span></span></a>':'<a href="javascript:void(0)"><span></span></a>';return a}()),c.prepend('<a href="javascript:void(0)" class="prev disabled"><span class="spt_bg"></span></a><a href="javascript:void(0)" class="next"><span class="spt_bg"></span></a>')}function k(a,b){d.stop().animate({left:a},b,"easeOutCubic")}function l(a){return!(a<0||a+g>i)}function m(){b.find(".num a").removeClass("on"),b.find(".num a").eq(f).addClass("on")}var b=$(a),c=b.find(".products-slide-wrapper"),d=c.find(">ul"),e=0,f=0,g=4,h=-240,i=d.find("li").length;i>4&&j(),b.find(".prev").bind("click",function(){if(0!=e){var a=1e3;l(e-4)?(f-=1,e-=4):(a=500,e=0,f-=1),m(),k(e*h,a)}}),b.find(".next").bind("click",function(){if(e+g!=i){var a=1e3;l(e+4)?(e+=4,f+=1):(a=500,e=i-g,f+=1),m(),k(e*h,a)}}),b.find(".num a").bind("click",function(){if($(this).hasClass("on"))return!1;var a=1e3;l($(this).index()*g)?e=$(this).index()*g:(a=500,e=i-g),f=$(this).index(),m(),k(e*h,a)})};

        $.fn.productsSlider('#productlist-slider');

    </script>
`;
