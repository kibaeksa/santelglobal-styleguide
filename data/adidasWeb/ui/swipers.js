module.exports = `
    <style type="text/css">
        #sliders-real li{
            background:#ccc;
            font:40px/300px 'noto sans kr';
            color:#000;
            text-align: center;
        }

        .control{
            overflow:hidden;
            width:700px;
            position:relative;
        }

        .indicator{
            margin-top:10px;
            padding:10px 0;
            text-align:center;
        }

        .indicator a{
            padding:5px;
            margin:0 3px;
            display:inline-block;
        }

        .indicator a::after{
            content:'';
            display:block;
            width:5px;
            height:5px;
            background:#ccc;
            border-radius:5px;
        }

        .indicator a.on::after{
            background:#000;
        }

        .prev-button,
        .next-button{
            position:absolute;
            top:0;
            left:0;
            font-size:26px;
            line-height:26px;
            color:#000;
            padding:10px;
        }

        .next-button{
            left:auto;
            right:0;
        }

    </style>
    <div class="code-wrap">
        <div class="prefix">PDP (Product Display Page)</div>
        <div class="desc">HTML</div>
        <div class="code-box">
            <pre class="brush: html">
                &lt;div id="sliders"&gt;
                    &lt;ul&gt;
                        &lt;li&gt;1번째&lt;/li&gt;
                        &lt;li&gt;2번째&lt;/li&gt;
                        &lt;li&gt;3번째&lt;/li&gt;
                        &lt;li&gt;4번째&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
            </pre>

            <pre class="brush: html">
                <!-- 커스텀 화살표 -->
                &lt;a class="prev-button" href="javascript:void(0)"&gt;<&lt;/a&gt;
                &lt;a class="next-button" href="javascript:void(0)"&gt;>&lt;/a&gt;
            </pre>

            <pre class="brush: html">
                <!-- 커스텀 넘버링 버튼 -->
                &lt;div class="indicator"&gt;
                    &lt;a class="on" href="javascript:void(0)"&gt;<&lt;/a&gt;
                    &lt;a href="javascript:void(0)"&gt;<&lt;/a&gt;
                    &lt;a href="javascript:void(0)"&gt;<&lt;/a&gt;
                    &lt;a href="javascript:void(0)"&gt;<&lt;/a&gt;
                &lt;/div&gt;
            </pre>
        </div>

        <div class="code-box">
            <pre class="brush: js">
                var sliders = $('#sliders').Swipers({
                    width : 700,
                    height : 300,
                    duration : 600,
                    easing : 'easeOutQuad',
                    auto : true,
                    loop: true,
                    autoTime : 3000,
                    callback : function( index , prevIdx ){
                        $('.indicator a').removeClass('on').eq(index).addClass('on');
                    }
                });

                $('.prev-button').bind('click',function(){
                    sliders.prev();
                });

                $('.prev-button').bind('click',function(){
                    sliders.next();
                });

                $('.indicator a').bind('click',function(){
                    sliders.move($(this).index());
                });
            </pre>
        </div>

        <div class="result_box">
            <div id="sliders-real">
                <ul>
                    <li>1번째</li>
                    <li>2번째</li>
                    <li>3번째</li>
                    <li>4번째</li>
                </ul>
            </div>


            <div class="control">
                <a class="prev-button" href="javascript:void(0)">&lt;</a>
                <a class="next-button" href="javascript:void(0)">&gt;</a>
                <div class="indicator">
                    <a href="javascript:void(0)" class="on"></a>
                    <a href="javascript:void(0)"></a>
                    <a href="javascript:void(0)"></a>
                    <a href="javascript:void(0)"></a>
                </div>
            </div>

        </div>
    </div>

    <script src="//image.adidas.co.kr/js/jquery/easing/jquery.easing.1.3.js"></script>
    <script type="text/javascript">
        $.fn.Swipers=function(a){function m(){f.loop&&(c.prepend($(d[d.length-1]).clone()),c.append($(d[0]).clone()),d=c.children()),f.easing&&!$.easing[f.easing]&&(f.easing=!1),b.css({width:f.width,height:f.height,position:"relative",overflow:"hidden"}),c.css({width:f.loop?(d.length+2)*j:d.length*j,height:f.height,position:"absolute",overflow:"hidden",left:f.loop?-1*f.width:0}),d.css({width:f.width,height:f.height,float:"left"}),f.auto&&(k=setInterval(function(){o(g+1,!0)},f.autoTime)),f.init&&f.init.call(b.get(0),i)}function n(a){h=g,g=a}function o(a,b){var d=b?e.autoDuration||e.duration:e.duration,g={isAuto:b,duration:d||void 0};if(f.loop)a<0?(n(i-1),c.css({left:(i+1)*j*-1}),g.num=i):a>=i?(n(0),c.css({left:0}),g.num=1):(g.num=a+1,n(a));else{if(b)a<0?g.num=i-1:a>i-1&&(g.num=0);else if(a<0||a>i-1)return!1;n(a)}p(g)}function p(a){var b=a.duration,e=a.num,i=a.isAuto?"easeOutSine":f.easing;f.autoTime&&!a.isAuto&&clearInterval(k),c.stop().animate({left:j*e*-1},b,i),f.callback&&f.callback.call($(d[g]),g,h),setTimeout(function(){l=!1,f.autoTime&&!a.isAuto&&(clearInterval(k),k=setInterval(function(){o(g+1,!0)},f.autoTime))},b)}var k,b=$(this),c=b.children(),d=c.children(),e={width:$(d[0]).get(0).clientWidth,height:$(d[0]).get(0).clientHeight,loop:!1,auto:!1,autoTime:!!a.auto&&3e3,dragable:!1,easing:!1,duration:800,autoDuration:800},f=$.extend(e,a),g=0,h=-1,i=d.length,j=f.moveValue?f.moveValue:f.width,l=!1;return m(),{prev:function(){return o(g-1),!1},next:function(){return o(g+1),!1},move:function(a){return a!==g&&o(a),!1}}};


        var sliders = $('#sliders-real').Swipers({
            width : 700,
            height : 300,
            duration : 600,
            easing : 'easeOutQuad',
            auto : true,
            loop: true,
            autoTime : 3000,
            callback : function(index,prevIdx){
                $('.indicator a').removeClass('on').eq(index).addClass('on');
            }
        });

        $('.prev-button').bind('click',function(){
            sliders.prev();
            });

        $('.next-button').bind('click',function(){
            sliders.next();
        });

        $('.indicator a').bind('click',function(){
            sliders.move($(this).index());
        });

    </script>


`;
