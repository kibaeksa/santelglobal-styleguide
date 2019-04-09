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
        	src: url('//imagem.reebok.co.kr/fonts/dinWebpro/woff/DINWebPro-CondBlack.woff') format('woff');
        	font-weight:900;
        	font-style:normal;
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
        	font-family: 'dinpro';
        	src: url('//imagem.reebok.co.kr/fonts/dinpro/DINPro-Black.woff') format('woff'),
            url('//imagem.reebok.co.kr/fonts/dinpro/DINPro-Black.ttf') format('truetype');
        	font-weight: 700;
        	font-style: normal;
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

        @font-face{
            font-family: 'FrankRuhlLibre';
            font-weight: 700;
            src: url('//imagem.reebok.co.kr/fonts/FrankRuhlLibre/FrankRuhlLibre-Black.ttf');
        }
        @font-face{
            font-family: 'FrankRuhlLibre';
            font-weight: 500;
            src: url('//imagem.reebok.co.kr/fonts/FrankRuhlLibre/FrankRuhlLibre-Bold.ttf');
        }
        @font-face{
            font-family: 'FrankRuhlLibre';
            font-weight: 400;
            src: url('//imagem.reebok.co.kr/fonts/FrankRuhlLibre/FrankRuhlLibre-Medium.ttf');
        }
        @font-face{
            font-family: 'FrankRuhlLibre';
            font-weight: 300;
            src: url('//imagem.reebok.co.kr/fonts/FrankRuhlLibre/FrankRuhlLibre-Regular.ttf');
        }
        @font-face{
            font-family: 'FrankRuhlLibre';
            font-weight: 100;
            src: url('//imagem.reebok.co.kr/fonts/FrankRuhlLibre/FrankRuhlLibre-Light.ttf');
        }
        @font-face{
            font-family: 'PFDinMonoPro-Bold';
            font-weight: 700;
            src:url('//imagem.reebok.co.kr/fonts/PFDINMonopro/PFDINMonoPro-Bold.eot') format('embedded-opentype'),
            url('//imagem.reebok.co.kr/fonts/PFDINMonopro/PFDINMonoPro-Bold.otf') format('opentype'),
            url('//imagem.reebok.co.kr/fonts/PFDINMonopro/PFDINMonoPro-Bold.ttf') format('truetype'),
            url('//imagem.reebok.co.kr/fonts/PFDINMonopro/PFDINMonoPro-Bold.woff') format('woff'),
            url('//imagem.reebok.co.kr/fonts/PFDINMonopro/PFDINMonoPro-Bold.woff2') format('woff2');
        }
        @font-face{
            font-family:'MixolydianTT Black';
            src:url('//imagem.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-Black.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT Black IT';
            src:url('//imagem.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-Black-IT.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT Bold';
            src:url('//imagem.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-Bold.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT Bold IT';
            src:url('//imagem.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-Bold-IT.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT Regular';
            src:url('//imagem.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-Regular.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT Regular IT';
            src:url('//imagem.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-Regular-IT.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT Light';
            src:url('//imagem.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-Light.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT Light IT';
            src:url('//imagem.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-Light-IT.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT EL';
            src:url('//imagem.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-EL.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT EL IT';
            src:url('//imagem.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-EL-IT.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT UL';
            src:url('//imagem.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-UL.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT UL IT';
            src:url('//imagem.reebok.co.kr/fonts/MixolydianTT/MixolydianTT-UL-IT.ttf') format('truetype');
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
        .dinpro-CondBlack{
            font:900 1.5rem 'dinpro cond';
        }
        .QStencil{
            font: 1.5rem 'QStencil';
        }
        .frankRLBlack{
            font:700 25px 'FrankRuhlLibre';
        }
        .frankRLBold{
            font:500 25px 'FrankRuhlLibre';
        }
        .frankRLMedium{
            font:400 25px 'FrankRuhlLibre';
        }
        .frankRLRegular{
            font:300 25px 'FrankRuhlLibre';
        }
        .frankRLLight{
            font:100 25px 'FrankRuhlLibre';
        }
        .PFDinMonoPro-Bold{
            font:700 1.5rem 'PFDinMonoPro-Bold';
        }
        .MixolydianTT-Black{
            font:25px 'MixolydianTT Black';
        }
        .MixolydianTT-Black-IT{
            font:25px 'MixolydianTT Black IT';
        }
        .MixolydianTT-Bold{
            font:25px 'MixolydianTT Bold';
        }
        .MixolydianTT-Bold-IT{
            font:25px 'MixolydianTT Bold IT';
        }
        .MixolydianTT-Regular{
            font:25px 'MixolydianTT Regular';
        }
        .MixolydianTT-Regular-IT{
            font:25px 'MixolydianTT Regular IT';
        }
        .MixolydianTT-Light{
            font:25px 'MixolydianTT Light';
        }
        .MixolydianTT-Light-IT{
            font:25px 'MixolydianTT Light IT';
        }
        .MixolydianTT-EL{
            font:25px 'MixolydianTT EL';
        }
        .MixolydianTT-EL-IT{
            font:25px 'MixolydianTT EL IT';
        }
        .MixolydianTT-UL{
            font:25px 'MixolydianTT UL';
        }
        .MixolydianTT-UL-IT{
            font:25px 'MixolydianTT UL IT';
        }
    </style>


    <div class="code-wrap">
        <div class="prefix" style="">구글 노토산스 폰트</div>
        <div style="margin-bottom:10px;color:#bb0000;font-size:13px;font-weight:bold;">***font-family에 font-weight으로 구분을 하는 방법</div>
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
        <div class="prefix" style="font-family:PFDinMonoPro-Bold">PFDinMonoPro-Bold</div>
        <div class="code-box">
            <pre class="brush: css">
                Bold {
                    font-family:'PFDinMonoPro-Bold';
                    font-size:1.5rem;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="PFDinMonoPro-Bold">PFDinMonoPro-Bold</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font-family:dinpro cond; font-size:1.5rem;">dinpro cond</div>
        <div class="code-box">
            <pre class="brush: css">
                Black {
                    font-family:'dinpro cond';
                    font-size: 1.5rem;
                    font-weight: 900;
                }
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
            <div class="dinpro-CondBlack">dinpro-CondBlack</div>
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

    <div class="code-wrap">
        <div class="prefix" style="font-family:FrankRuhlLibre">FrankRuhlLibre</div>
        <div style="margin-bottom:10px;color:#bb0000;font-size:13px;font-weight:bold;">***font-family에 font-weight으로 구분을 하는 방법</div>
        <div class="code-box">
            <pre class="brush: css">
                Black {
                    font-family:'FrankRuhlLibre';
                    font-weight: 700;
                    font-size:25px;
                }
                Bold {
                    font-family:'FrankRuhlLibre';
                    font-weight: 500;
                    font-size:25px;
                }
                Medium {
                    font-family:'FrankRuhlLibre';
                    font-weight: 400;
                    font-size:25px;
                }
                Regular {
                    font-family:'FrankRuhlLibre';
                    font-weight: 300;
                    font-size:25px;
                }
                Light {
                    font-family:'FrankRuhlLibre';
                    font-weight: 100;
                    font-size:25px;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="frankRLBlack">FrankRLBlack</div>
            <div class="frankRLBold">FrankRLBold</div>
            <div class="frankRLMedium">FrankRLMedium</div>
            <div class="frankRLRegular">FrankRLRegular</div>
            <div class="frankRLLight">FrankRLLight</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font-family:MixolydianTT">MixolydianTT</div>
        <div class="code-box">
            <pre class="brush: css">
                Black {
                    font-family:'MixolydianTT Black';
                    font-size:25px;
                }
                Black Italic{
                    font-family:'MixolydianTT Black IT';
                    font-size:25px;
                }

                Bold {
                    font-family:'MixolydianTT Bold';
                    font-size:25px;
                }
                Bold Italic{
                    font-family:'MixolydianTT Bold IT';
                    font-size:25px;
                }

                Regular {
                    font-family:'MixolydianTT Regular';
                    font-size:25px;
                }
                
                Regular Italic{
                    font-family:'MixolydianTT Regular IT';
                    font-size:25px;
                }

                Light {
                    font-family:'MixolydianTT Light';
                    font-size:25px;
                }
                Light Italic{
                    font-family:'MixolydianTT Light IT';
                    font-size:25px;
                }

                Extended-Light {
                    font-family:'MixolydianTT EL';
                    font-size:25px;
                }
                Extended-Light Italic{
                    font-family:'MixolydianTT EL IT';
                    font-size:25px;
                }

                Ultra-Light {
                    font-family:'MixolydianTT UL';
                    font-size:25px;
                }
                Ultra-Light Italic{
                    font-family:'MixolydianTT UL IT';
                    font-size:25px;
                }

            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="MixolydianTT-Black">MixolydianTT-Black</div>
            <div class="MixolydianTT-Black-IT">MixolydianTT-Black-IT</div>
            <div class="MixolydianTT-Bold">MixolydianTT-Bold</div>
            <div class="MixolydianTT-Bold-IT">MixolydianTT-Bold-IT</div>
            <div class="MixolydianTT-Regular">MixolydianTT-Regular</div>
            <div class="MixolydianTT-Regular-IT">MixolydianTT-Regular-IT</div>
            <div class="MixolydianTT-Light">MixolydianTT-Light</div>
            <div class="MixolydianTT-Light-IT">MixolydianTT-Light-IT</div>
            <div class="MixolydianTT-EL">MixolydianTT-EL</div>
            <div class="MixolydianTT-EL-IT">MixolydianTT-EL-IT</div>
            <div class="MixolydianTT-UL">MixolydianTT-UL</div>
            <div class="MixolydianTT-UL-IT">MixolydianTT-UL-IT</div>
        </div>
    </div>




`;
