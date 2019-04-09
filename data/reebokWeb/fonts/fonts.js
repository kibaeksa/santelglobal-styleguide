module.exports = `
    <style type="text/css">
        .result_box div{
            margin-bottom:3px;
        }
        @font-face{
        	font-family: 'NotoSansKR';
            font-weight:700;
        	src: url('//image.reebok.co.kr/fonts/NotoSansKr/woff/NotoSansKr-bold.woff') format('woff');
        }

        @font-face{
        	font-family: 'NotoSansKR';
            font-weight:100;
        	src: url('//image.reebok.co.kr/fonts/NotoSansKr/woff/NotoSansKr-thin.woff') format('woff');
        }

        @font-face{
        	font-family: 'NotoSansKR';
            font-weight:300;
        	src: url('//image.reebok.co.kr/fonts/NotoSansKr/woff/NotoSansKr-light.woff') format('woff');
        }

        @font-face{
        	font-family: 'NotoSansKR';
            font-weight:400;
        	src: url('//image.reebok.co.kr/fonts/NotoSansKr/woff/NotoSansKr-regular.woff') format('woff');
        }

        @font-face{
        	font-family: 'NotoSansKR';
            font-weight:500;
        	src: url('//image.reebok.co.kr/fonts/NotoSansKr/woff/NotoSansKr-medium.woff') format('woff');
        }

        @font-face {
        	font-family: 'reefont-bold';
            src: url('//image.reebok.co.kr/fonts/reefont/eot/reefont-bold-webfont.eot');
        	src: url('//image.reebok.co.kr/fonts/reefont/eot/reefont-bold-webfont.eot?#iefix') format('embedded-opentype'),
        		 url('//image.reebok.co.kr/fonts/reefont/woff/reefont-bold-webfont.woff') format('woff');
        }

        @font-face {
            font-family: 'reefont';
            src: url('//image.reebok.co.kr/fonts/reefont/eot/reefont-regular-webfont.eot');
        	src: url('//image.reebok.co.kr/fonts/reefont/eot/reefont-regular-webfont.eot?#iefix') format('embedded-opentype'),
        		 url('//image.reebok.co.kr/fonts/reefont/woff/reefont-regular-webfont.woff')  format('woff');
        }

        @font-face {
          font-family: 'ReefontCondensed';
          src: url('//image.reebok.co.kr/fonts/reefont/eot/reefont-condensed-webfont.eot');
          src: url('//image.reebok.co.kr/fonts/reefont/woff/reefont-condensed-webfont.woff') format('woff');
        }

        @font-face {
          font-family: 'DINWebPro-CondLight';
          src: url('//image.reebok.co.kr/fonts/dinWebpro/eot/DINWebPro-CondLight.eot');
          src: url('//image.reebok.co.kr/fonts/dinWebpro/woff/DINWebPro-CondLight.woff') format('woff');
        }

        @font-face {
          font-family: 'DINWebPro-Cond';
          src: url('//image.reebok.co.kr/fonts/dinWebpro/eot/DINWebPro-Cond.eot');
          src: url('//image.reebok.co.kr/fonts/dinWebpro/woff/DINWebPro-Cond.woff') format('woff');
        }

        @font-face {
          font-family: 'DINWebPro-CondMedium';
          src: url('//image.reebok.co.kr/fonts/dinWebpro/eot/DINWebPro-CondMedium.eot');
          src: url('//image.reebok.co.kr/fonts/dinWebpro/woff/DINWebPro-CondMedium.woff') format('woff');
        }

        @font-face {
          font-family: 'DINWebPro-CondBold';
          src: url('//image.reebok.co.kr/fonts/dinWebpro/eot/DINWebPro-CondBold.eot');
          src: url('//image.reebok.co.kr/fonts/dinWebpro/woff/DINWebPro-CondBold.woff') format('woff');
        }

        @font-face {
          font-family: 'DINWebPro-CondBlack';
          src: url('//image.reebok.co.kr/fonts/dinWebpro/eot/DINWebPro-CondBlack.eot'),
          	   url('//image.reebok.co.kr/fonts/dinWebpro/otf/DINWebPro-CondBlack.otf') format('truetype');
        }

        @font-face {
        	font-family: 'dinpro';
            src: url('//image.reebok.co.kr/fonts/dinpro/DINPro-Regular.eot');
            src: url('//image.reebok.co.kr/fonts/dinpro/DINPro-Regular.eot?#iefix') format('embedded-opentype'),
        		 url('//image.reebok.co.kr/fonts/dinpro/DINPro-Regular.woff2') format('woff2'),
        		 url('//image.reebok.co.kr/fonts/dinpro/DINPro-Regular.woff') format('woff'),
        		 url('//image.reebok.co.kr/fonts/dinpro/DINPro-Regular.ttf') format('truetype');
        }

        @font-face {
        	font-family: 'dinpro bold';
            src: url('//image.reebok.co.kr/fonts/dinpro/DINPro-Bold.eot');
            src: url('//image.reebok.co.kr/fonts/dinpro/DINPro-Bold.eot?#iefix') format('embedded-opentype'),
        		 url('//image.reebok.co.kr/fonts/dinpro/DINPro-Bold.woff2') format('woff2'),
        		 url('//image.reebok.co.kr/fonts/dinpro/DINPro-Bold.woff') format('woff'),
        		 url('//image.reebok.co.kr/fonts/dinpro/DINPro-Bold.ttf') format('truetype');
        }

        @font-face {
          font-family: 'dinpro black';
          src: url('//image.reebok.co.kr/fonts/dinpro/DINPro-Black.eot'),
               url('//image.reebok.co.kr/fonts/dinpro/DINPro-Black.ttf') format('truetype');
        }

        @font-face {
          font-family: 'QStencil';
          src: url('//image.reebok.co.kr/fonts/QStencil/eot/Q-Stencil.eot');
          src: url('//image.reebok.co.kr/fonts/QStencil/woff/Q-Stencil.woff') format('woff');
        }

        @font-face{
            font-family: 'FrankRuhlLibre';
            font-weight: 700;
            src: url('//image.reebok.co.kr/fonts/FrankRuhlLibre/FrankRuhlLibre-Black.ttf');
        }
        @font-face{
            font-family: 'FrankRuhlLibre';
            font-weight: 500;
            src: url('//image.reebok.co.kr/fonts/FrankRuhlLibre/FrankRuhlLibre-Bold.ttf');
        }
        @font-face{
            font-family: 'FrankRuhlLibre';
            font-weight: 400;
            src: url('//image.reebok.co.kr/fonts/FrankRuhlLibre/FrankRuhlLibre-Medium.ttf');
        }
        @font-face{
            font-family: 'FrankRuhlLibre';
            font-weight: 300;
            src: url('//image.reebok.co.kr/fonts/FrankRuhlLibre/FrankRuhlLibre-Regular.ttf');
        }
        @font-face{
            font-family: 'FrankRuhlLibre';
            font-weight: 100;
            src: url('//image.reebok.co.kr/fonts/FrankRuhlLibre/FrankRuhlLibre-Light.ttf');
        }
        @font-face{
            font-family: 'PFDinMonoPro-Bold';
            src:url('//image.reebok.co.kr/fonts/PFDINMonopro/PFDINMonoPro-Bold.eot') format('embedded-opentype'),
            url('//image.reebok.co.kr/fonts/PFDINMonopro/PFDINMonoPro-Bold.otf') format('opentype'),
            url('//image.reebok.co.kr/fonts/PFDINMonopro/PFDINMonoPro-Bold.ttf') format('truetype'),
            url('//image.reebok.co.kr/fonts/PFDINMonopro/PFDINMonoPro-Bold.woff') format('woff'),
            url('//image.reebok.co.kr/fonts/PFDINMonopro/PFDINMonoPro-Bold.woff2') format('woff2');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 900;
            font-style:normal;
            src:url('/fonts/MixolydianTT/MixolydianTT-Black.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 900;
            font-style: italic;
            src:url('/fonts/MixolydianTT/MixolydianTT-Black-IT.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 700;
            font-style:normal;
            src:url('/fonts/MixolydianTT/MixolydianTT-Bold.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 700;
            font-style:italic;
            src:url('/fonts/MixolydianTT/MixolydianTT-Bold-IT.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 400;
            font-style:normal;
            src:url('/fonts/MixolydianTT/MixolydianTT-Regular.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 400;
            font-style:italic;
            src:url('/fonts/MixolydianTT/MixolydianTT-Regular-IT.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 300;
            font-style:normal;
            src:url('/fonts/MixolydianTT/MixolydianTT-Light.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 300;
            font-style:italic;
            src:url('/fonts/MixolydianTT/MixolydianTT-Light-IT.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 200;
            font-style:normal;
            src:url('/fonts/MixolydianTT/MixolydianTT-EL.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 200;
            font-style:italic;
            src:url('/fonts/MixolydianTT/MixolydianTT-EL-IT.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 100;
            font-style:normal;
            src:url('/fonts/MixolydianTT/MixolydianTT-UL.ttf') format('truetype');
        }
        @font-face{
            font-family:'MixolydianTT';
            font-weight: 100;
            font-style:italic;
            src:url('/fonts/MixolydianTT/MixolydianTT-UL-IT.ttf') format('truetype');
        }

        .notoSansBold{
            font:700 25px 'NotoSansKR';
        }
        .notoSansMedium{
            font:500 25px 'NotoSansKR';
        }
        .notoSansRegular{
            font:400 25px 'NotoSansKR';
        }
        .notoSansLight{
            font:300 25px 'NotoSansKR';
        }
        .notoSansThin{
            font:100 25px 'NotoSansKR';
        }
        .reefontBold{
            font:25px 'reefont-bold';
        }
        .reefont{
            font:25px 'reefont';
        }
        .reefontCond{
            font:25px 'ReefontCondensed';
        }
        .dinpro-CondLight{
            font:25px 'DINWebPro-CondLight';
        }
        .dinpro-Cond{
            font:25px 'DINWebPro-Cond';
        }
        .dinpro-CondMedium{
            font:25px 'DINWebPro-CondMedium';
        }
        .dinpro-CondBold{
            font:25px 'DINWebPro-CondBold';
        }
        .dinpro-CondBlack{
            font:25px 'DINWebPro-CondBlack';
        }
        .dinpro{
            font: 25px 'dinpro';
        }
        .dinproBold{
            font: 25px 'dinpro bold';
        }
        .dinproBlack{
            font: 25px 'dinpro black';
        }
        .QStencil{
            font:25px 'QStencil';
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
            font:25px 'PFDinMonoPro-Bold';
        }
        .MixolydianTT-Black{
            font: 900 25px 'MixolydianTT';
        }
        .MixolydianTT-Black-IT{
            font: italic 900 25px 'MixolydianTT';
        }
        .MixolydianTT-Bold{
            font: 700 25px 'MixolydianTT';
        }
        .MixolydianTT-Bold-IT{
            font: italic 700 25px 'MixolydianTT';
        }
        .MixolydianTT-Regular{
            font:400 25px 'MixolydianTT';
        }
        .MixolydianTT-Regular-IT{
            font: italic 400 25px 'MixolydianTT';
        }
        .MixolydianTT-Light{
            font: 300 25px 'MixolydianTT';
        }
        .MixolydianTT-Light-IT{
            font: italic 300 25px 'MixolydianTT';
        }
        .MixolydianTT-EL{
            font: 200 25px 'MixolydianTT';
        }
        .MixolydianTT-EL-IT{
            font: italic 200 25px 'MixolydianTT';
        }
        .MixolydianTT-UL{
            font: 100 25px 'MixolydianTT';
        }
        .MixolydianTT-UL-IT{
            font: italic 100 25px 'MixolydianTT';
        }
    </style>


    <div class="code-wrap">
        <div class="prefix" style="">구글 노토산스 폰트</div>
        <div style="margin-bottom:10px;color:#bb0000;font-size:13px;font-weight:bold;">*** 2017-06-22 : 기존에 굵기 별로 각각 선언 되어있던 걸, 같은 font-family에 font-weight으로 구분을 하는 방법으로 수정</div>
        <div class="code-box">
            <pre class="brush: css">
                Bold {
                    font-family:'NotoSansKR';
                    font-weight:700;
                    font-size:25px;
                }

                Medium {
                    font-family:'NotoSansKR';
                    font-weight:500;
                    font-size:25px;
                }

                Regular {
                    font-family:'NotoSansKR';
                    font-weight:400;
                    font-size:25px;
                }

                Light {
                    font-family:'NotoSansKR';
                    font-weight:300;
                    font-size:25px;
                }

                Thin {
                    font-family:'NotoSansKR';
                    font-weight:100;
                    font-size:25px;
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
        <div class="prefix" style="font: 25px ReefontCondensed">ReefontCondensed</div>
        <div class="code-box">
            <pre class="brush: css">
                Regular {
                    font-family:'ReefontCondensed';
                    font-size:25px;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="reefontCond">ReefontCondensed</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="">reefont</div>
        <div class="code-box">
            <pre class="brush: css">
                Bold {
                    font-family:'reefont-bold';
                    font-size:25px;
                }

                Regular {
                    font-family:'reefont';
                    font-size:25px;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="reefontBold">reefont-bold</div>
            <div class="reefont">reefont</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font-family:PFDinMonoPro-Bold">PFDinMonoPro-Bold</div>
        <div class="code-box">
            <pre class="brush: css">
                Bold {
                    font-family:'PFDinMonoPro-Bold';
                    font-size:25px;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="PFDinMonoPro-Bold">PFDinMonoPro-Bold</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font: 25px 'DINWebPro-Cond';">DINWebPro-Cond</div>
        <div class="code-box">
            <pre class="brush: css">
                Black {
                    font-family:'DINWebPro-CondBlack';
                    font-size:25px;
                }

                Bold {
                    font-family:'DINWebPro-CondBold';
                    font-size:25px;
                }

                Medium {
                    font-family:'DINWebPro-CondMedium';
                    font-size:25px;
                }

                Regular {
                    font-family:'DINWebPro-Cond';
                    font-size:25px;
                }

                Light {
                    font-family:'DINWebPro-CondLight';
                    font-size:25px;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="dinpro-CondBlack">DINWebPro-CondBlack</div>
            <div class="dinpro-CondBold">DINWebPro-CondBold</div>
            <div class="dinpro-CondMedium">DINWebPro-CondMedium</div>
            <div class="dinpro-Cond">DINWebPro-Cond</div>
            <div class="dinpro-CondLight">DINWebPro-CondLight</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font-family:dinpro">DINPRO</div>
        <div class="code-box">
            <pre class="brush: css">
                Black {
                    font-family:'dinpro black';
                    font-size:25px;
                }

                Bold {
                    font-family:'dinpro bold';
                    font-size:25px;
                }

                Regular {
                    font-family:'dinpro';
                    font-size:25px;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="dinproBlack">DINPRO Black</div>
            <div class="dinproBold">DINPRO Bold</div>
            <div class="dinpro">DINPRO</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font-family:QStencil">QStencil</div>
        <div class="code-box">
            <pre class="brush: css">
                Regular {
                    font-family:'dinpro';
                    font-size:25px;
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
                    font-family:'MixolydianTT';
                    font-weight:900;
                    font-style:normal;
                    font-size:25px;
                }
                Black Italic{
                    font-family:'MixolydianTT';
                    font-weight:900;
                    font-style:italic;
                    font-size:25px;
                }

                Bold {
                    font-family:'MixolydianTT';
                    font-weight:700;
                    font-style:normal;
                    font-size:25px;
                }
                Bold Italic{
                    font-family:'MixolydianTT';
                    font-weight:700;
                    font-style:italic;
                    font-size:25px;
                }

                Regular {
                    font-family:'MixolydianTT';
                    font-weight:400;
                    font-style:normal;
                    font-size:25px;
                }
                
                Regular Italic{
                    font-family:'MixolydianTT';
                    font-weight:400;
                    font-style:italic;
                    font-size:25px;
                }

                Light {
                    font-family:'MixolydianTT';
                    font-weight:300;
                    font-style:normal;
                    font-size:25px;
                }
                Light Italic{
                    font-family:'MixolydianTT';
                    font-weight:300;
                    font-style:italic;
                    font-size:25px;
                }

                Extended-Light {
                    font-family:'MixolydianTT';
                    font-weight:200;
                    font-style:normal;
                    font-size:25px;
                }
                Extended-Light Italic{
                    font-family:'MixolydianTT';
                    font-weight:200;
                    font-style:italic;
                    font-size:25px;
                }

                Ultra-Light {
                    font-family:'MixolydianTT';
                    font-weight:100;
                    font-style:normal;
                    font-size:25px;
                }
                Ultra-Light Italic{
                    font-family:'MixolydianTT';
                    font-weight:100;
                    font-style:italic;
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
