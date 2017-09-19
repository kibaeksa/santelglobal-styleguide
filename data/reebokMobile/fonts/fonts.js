module.exports = `
    <style type="text/css">
        .result_box div{
            margin-bottom:3px;
        }
        @font-face{
        	font-family: 'NotoSansKRBold';
        	src: url('//imagem.reebok.co.kr/fonts/NotoSansKr/eot/NotoSansKRBold.eot'),
                 url('//imagem.reebok.co.kr/fonts/NotoSansKr/woff/NotoSansKr-bold.woff') format('woff');
        }

        @font-face{
        	font-family: 'NotoSansKRThin';
            src: url('//imagem.reebok.co.kr/fonts/NotoSansKr/eot/NotoSansKRThin.eot'),
        	     url('//imagem.reebok.co.kr/fonts/NotoSansKr/woff/NotoSansKr-thin.woff') format('woff');
        }

        @font-face{
        	font-family: 'NotoSansKRLight';
        	src: url('//imagem.reebok.co.kr/fonts/NotoSansKr/eot/NotoSansKRLight.eot'),
                 url('//imagem.reebok.co.kr/fonts/NotoSansKr/woff/NotoSansKr-light.woff') format('woff');
        }

        @font-face{
        	font-family: 'NotoSansKRRegular';
            src: url('//imagem.reebok.co.kr/fonts/NotoSansKr/eot/NotoSansKRRegular.eot'),
        	     url('//imagem.reebok.co.kr/fonts/NotoSansKr/woff/NotoSansKr-regular.woff') format('woff');

        }

        @font-face{
        	font-family: 'NotoSansKR';
            src: url('//imagem.reebok.co.kr/fonts/NotoSansKr/eot/NotoSansKRMedium.eot'),
                 url('//imagem.reebok.co.kr/fonts/NotoSansKr/woff/NotoSansKr-medium.woff') format('woff');
        }

        @font-face {
        	font-family: 'reefont-bold';
            src: url('//imagem.reebok.co.kr/fonts/mygirl/EOT/ReefontTT-Bold.eot'),
                 url('//imagem.reebok.co.kr/fonts/mygirl/EOT/ReefontTT-Bold.eot?#iefix') format('embedded-opentype'),
                 url('//imagem.reebok.co.kr/fonts/mygirl/TTF/ReefontTT-Bold.ttf') format('truetype');

        }

        @font-face {
            font-family: 'reefont';
            src: url('//imagem.reebok.co.kr/fonts/mygirl/EOT/ReefontTT-Regular.eot'),
                 url('//imagem.reebok.co.kr/fonts/mygirl/EOT/ReefontTT-Regular.eot?#iefix') format('embedded-opentype'),
                 url('//imagem.reebok.co.kr/fonts/mygirl/TTF/ReefontTT-Regular.ttf') format('truetype');

        }

        @font-face {
          font-family: 'reefont-condensed';
          src: url('//imagem.reebok.co.kr/fonts/mygirl/EOT/ReefontTT-Condensed.eot'),
               url('//imagem.reebok.co.kr/fonts/mygirl/EOT/ReefontTT-Condensed.eot?#iefix') format('embedded-opentype'),
               url('//imagem.reebok.co.kr/fonts/mygirl/TTF/ReefontTT-Condensed.ttf') format('truetype');
        }

        @font-face {
          font-family: 'reefont-light';
          src: url('//imagem.reebok.co.kr/fonts/mygirl/EOT/ReefontTT-Light.eot');
               url('//imagem.reebok.co.kr/fonts/mygirl/EOT/ReefontTT-Light.eot?#iefix') format('embedded-opentype'),
               url('//imagem.reebok.co.kr/fonts/mygirl/TTF/ReefontTT-Light.ttf') format('truetype');
        }

        @font-face {
          font-family:'dinpro cond';
          font-weight : 700;
          font-style: normal;
          src: url('//imagem.reebok.co.kr/fonts/dinWebpro/woff/DINWebPro-CondBold.woff') format('woff');
        }

        @font-face {
          font-family:'dinpro cond';
          font-weight: 500;
          font-style: normal;
          src: url('//imagem.reebok.co.kr/fonts/dinWebpro/woff/DINWebPro-CondMedium.woff') format('woff');
        }

        @font-face {
          font-family:'dinpro cond';
          font-weight: 300;
          font-style: normal;
          src: url('//imagem.reebok.co.kr/fonts/dinWebpro/woff/DINWebPro-Cond.woff') format('woff');
        }

        @font-face {
          font-family:'dinpro cond';
          font-weight: 100;
          font-style: normal;
          src: url('//imagem.reebok.co.kr/fonts/dinWebpro/woff/DINWebPro-CondLight.woff') format('woff');
        }

        @font-face {
          font-family: 'dinpro';
          font-weight: 500;
          font-style: normal;
          src: url('//imagem.reebok.co.kr/fonts/dinpro/DINPro-Bold.woff2') format('woff2'),
               url('//imagem.reebok.co.kr/fonts/dinpro/DINPro-Bold.woff') format('woff'),
               url('//imagem.reebok.co.kr/fonts/dinpro/DINPro-Bold.ttf') format('truetype');
        }

        @font-face {
          font-family: 'dinpro';
          font-weight: 300;
          font-style: normal;
          src: url('//imagem.reebok.co.kr/fonts/dinpro/DINPro-Regular.woff2') format('woff2'),
               url('//imagem.reebok.co.kr/fonts/dinpro/DINPro-Regular.woff') format('woff'),
               url('//imagem.reebok.co.kr/fonts/dinpro/DINPro-Regular.ttf') format('truetype');
        }

        @font-face {
          font-family: 'QStencil';
          src: url('//imagem.reebok.co.kr/fonts/QStencil/woff/Q-Stencil.woff') format('woff');
        }

        @font-face {
          font-family: 'adiPictoRegular';
          src: url('//imagem.reebok.co.kr/fonts/adipictos/adipictos-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        .notoSansBold{
            font: 1.5rem 'NotoSansKRBold';
        }
        .notoSansMedium{
            font: 1.5rem 'NotoSansKR';
        }
        .notoSansRegular{
            font: 1.5rem 'NotoSansKRRegular';
        }
        .notoSansLight{
            font: 1.5rem 'NotoSansKRLight';
        }
        .notoSansThin{
            font: 1.5rem 'NotoSansKRThin';
        }

        .reefontBold{
            font: 1.5rem 'reefont-bold';
        }
        .reefont{
            font: 1.5rem 'reefont';
        }
        .reefontLight{
            font: 1.5rem 'reefont-light';
        }

        .reefontCond{
            font: 1.5rem 'reefont-condensed';
        }


        .dinpro-CondLight{
            font:100 1.5rem 'dinpro cond';
        }
        .dinpro-Cond{
            font:300 1.5rem 'dinpro cond';
        }
        .dinpro-CondMedium{
            font:500 1.5rem 'dinpro cond';
        }
        .dinpro-CondBold{
            font:700 1.5rem 'dinpro cond';
        }

        .QStencil{
            font: 1.5rem 'QStencil';
        }



    </style>


    <div class="code-wrap">
        <div class="prefix" style="">구글 노토산스 폰트</div>
        <div class="code-box">
            <pre class="brush: css">

                Bold {
                    font:700 25px 'NotoSansKR';
                }

                Medium {
                    font:500 25px 'NotoSansKR';
                }

                Regular {
                    font:400 25px 'NotoSansKR';
                }

                Light {
                    font:300 25px 'NotoSansKR';
                }

                Thin {
                    font:100 25px 'NotoSansKR';
                }

            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <div class="notoSansBold">본고딕 볼드체</div>
            <div class="notoSansMedium">본고딕 미디움체</div>
            <div class="notoSansRegular">본고딕 레귤러체</div>
            <div class="notoSansLight">본고딕 라이트체</div>
            <div class="notoSansThin">본고딕 Thin체</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font: 25px reefont">reefont</div>
        <div class="code-box">
            <pre class="brush: css">

                Bold {
                    font-family:'reefont-bold';
                    font-size:1.5rem;
                }
                Regular {
                    font-family:'reefont';
                    font-size:1.5rem;
                }

            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="reefontBold">reefontBold</div>
            <div class="reefont">reefont</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font-family:reefontCond">reefontCond</div>
        <div class="code-box">
            <pre class="brush: css">
                Regular {
                    font-family:'reefont-condensed';
                    font-size: 1.5rem;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="reefontCond">reefontCond</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font-family:dinpro cond; font-size:1.5rem;">dinpro cond</div>
        <div class="code-box">
            <pre class="brush: css">
                Bold {
                    font-family:'dinpro cond';
                    font-size: 1.5rem;
                    font-weight: 700;
                }
                Regular {
                    font-family:'dinpro cond';
                    font-size: 1.5rem;
                    font-weight: 500;
                }
                Medium {
                    font-family:'dinpro cond';
                    font-size: 1.5rem;
                    font-weight: 300;
                }
                Light {
                    font-family:'dinpro cond';
                    font-size: 1.5rem;
                    font-weight: 100;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="dinpro-CondBold">dinpro-CondBold</div>
            <div class="dinpro-CondMedium">dinpro-CondMedium</div>
            <div class="dinpro-Cond">dinpro-Cond</div>
            <div class="dinpro-CondLight">dinpro-CondLight</div>
        </div>
    </div>


    <div class="code-wrap">
        <div class="prefix" style="font-family:QStencil">QStencil</div>
        <div class="code-box">
            <pre class="brush: css">
                Regular {
                    font-family:'QStencil';
                    font-size:1.5rem;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="QStencil">QStencil</div>
        </div>
    </div>






`;
