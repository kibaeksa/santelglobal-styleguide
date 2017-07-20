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
          font-family: 'QStencil';
          src: url('//image.reebok.co.kr/fonts/QStencil/eot/Q-Stencil.eot');
          src: url('//image.reebok.co.kr/fonts/QStencil/woff/Q-Stencil.woff') format('woff');
        }

        @font-face{
        	font-family:'Colfax';
        	src:url('//image.reebok.co.kr/fonts/Colfax/colfaxwebblack.eot');
        	src:url('//image.reebok.co.kr/fonts/Colfax/colfaxwebblack.eot?#iefix') format('embedded-opentype'),
        		url('//image.reebok.co.kr/fonts/Colfax/colfaxwebblack.woff2') format('woff2'),
        		url('//image.reebok.co.kr/fonts/Colfax/colfaxwebblack.woff') format('woff'),
        		url('//image.reebok.co.kr/fonts/Colfax/colfaxwebblack.ttf') format('truetype');
        		font-weight:normal;
        		font-style:normal
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
        .dinpro{
            font: 25px 'dinpro';
        }
        .dinproBold{
            font: 25px 'dinpro bold';
        }
        .QStencil{
            font:25px 'QStencil';
        }
        .colfax{
            font:25px 'Colfax';
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
        <div class="prefix" style="font: 25px 'DINWebPro-Cond';">DINWebPro-Cond</div>
        <div class="code-box">
            <pre class="brush: css">
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
        <div class="prefix" style="font-family:Colfax">Colfax</div>
        <div class="code-box">
            <pre class="brush: css">
                Regular {
                    font-family:'Colfax';
                    font-size:25px;
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="colfax">Colfax</div>
        </div>
    </div>




`;
