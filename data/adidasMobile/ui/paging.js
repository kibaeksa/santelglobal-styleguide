module.exports = `

    <style>
        @font-face {
            font-family: 'adiPictoRegularKo';
            src:url('//imagem.adidas.co.kr/fonts/adipictos/adipictos-Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
        }
        @font-face {
            font-family: 'adinenuPro-light';
            src: url('//image.adidas.co.kr/fonts/adineuePro/eot/adineuePRO-Light.eot');
            src: url('//image.adidas.co.kr/fonts/adineuePro/woff/adineuePRO-Light.woff') format('woff');
        }

        /*.icons:before , .icons:after{	*/
        .icons:before{
        	font-family: 'adiPictoRegularKo','adiPictoRegular';
            content: attr(data-icon);
            speak: none;
            -webkit-font-feature-settings: 'liga', 'dlig';
            -moz-font-feature-settings: 'liga=1, dlig=1';
            -moz-font-feature-settings: 'liga', 'dlig';
            -ms-font-feature-settings: 'liga', 'dlig';
            -o-font-feature-settings: 'liga', 'dlig';
            font-feature-settings: 'liga', 'dlig';
            text-rendering: geometricPrecision;
            -webkit-font-smoothing: antialiased;
            vertical-align: middle;
            font-smooth: always;
            font-weight: normal;
            font-variant: normal;
            text-transform: none;
        }
        /* check box */

        .icons.aft:before{
        	display: none;
        }
        .icons.aft:after{
        	font-family: 'adiPictoRegularKo','adiPictoRegular';
            content: attr(data-icon);
            speak: none;
            -webkit-font-feature-settings: 'liga', 'dlig';
            -moz-font-feature-settings: 'liga=1, dlig=1';
            -moz-font-feature-settings: 'liga', 'dlig';
            -ms-font-feature-settings: 'liga', 'dlig';
            -o-font-feature-settings: 'liga', 'dlig';
            font-feature-settings: 'liga', 'dlig';
            text-rendering: geometricPrecision;
            -webkit-font-smoothing: antialiased;
            vertical-align: middle;
            font-smooth: always;
            font-weight: normal;
            font-variant: normal;
            text-transform: none;
        }

        /* paging */
        .paging{
            position: relative;
            text-align: center;
        }
        .paging>div{
            width:60%;
            height:40px;
            margin:0 auto;
            position: relative;
            text-align: center;
            font-size: 0;
        }

        .paging a{
            width:20%;
            height:40px;
            display:inline-block;
            color: #000;
            font:16px/40px 'adinenuPro-light';
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
        }

        .paging a.on{
            text-decoration: underline;
            font:16px/40px 'adinenuPro-bold';
        }

        .paging a.prev,.paging a.next{
            position: absolute;
            top: 0;
        }

        .paging a.disable{
            color:#a3a3a3;
        }

        .paging a.prev:before,.paging a.next:before{
            position: absolute;
            top:1px;
            left:50%;
            transform:translateX(-50%);
            -webkit-transform:translateX(-50%);
        }
        .paging a.prev{
            left: -20%;
        }
        .paging a.next{
            right: -20%;
        }
        .paging a.prev:before{
            top: -3px;
            transform:rotate(-180deg) translateX(50%);
            -webkit-transform:rotate(-180deg) translateX(50%);
        }



    </style>
    <div class="code-wrap">
        <div class="prefix">체크박스</div>
        <div class="code-box">
            <pre class="brush: html">
                <div class="paging">
                    <div>
                        <a href="#" class="prev icons disable" data-icon=""></a>
                        <a href="#" class="on">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#" class="next icons" data-icon=""></a>
                    </div>
                </div>
            </pre>
        </div>

        <div class="result_box">

            <div class="paging" style="width:320px;margin:0 auto;">
                <div>
                    <a href="#" class="prev icons disable" data-icon=""></a>
                    <a href="#" class="on">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#" class="next icons" data-icon=""></a>
                </div>
            </div>

        </div>
    </div>



    <script type="text/javascript" src="//image.adidas.co.kr/js/customForm.js"></script>
    <script type="text/javascript">
        $.fn.cmtInputInit ();
    </script>

`;
