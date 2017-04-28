module.exports = `
    <style type="text/css">
        .result_box div{
            margin-bottom:3px;
        }
        @font-face{
        	font-family: 'NotoSansKRBold';
        	src: url('//image.adidas.co.kr/fonts/NotoSansKr/woff/NotoSansKr-bold.woff') format('woff');
        }

        @font-face{
        	font-family: 'NotoSansKRThin';
        	src: url('//image.adidas.co.kr/fonts/NotoSansKr/woff/NotoSansKr-thin.woff') format('woff');
        }

        @font-face{
        	font-family: 'NotoSansKRLight';
        	src: url('//image.adidas.co.kr/fonts/NotoSansKr/woff/NotoSansKr-light.woff') format('woff');
        }

        @font-face{
        	font-family: 'NotoSansKRRegular';
        	src: url('//image.adidas.co.kr/fonts/NotoSansKr/woff/NotoSansKr-regular.woff') format('woff');
        }

        @font-face{
        	font-family: 'NotoSansKR';
        	src: url('//image.adidas.co.kr/fonts/NotoSansKr/woff/NotoSansKr-medium.woff') format('woff');
        }

        @font-face {
        	font-family: 'adihaus-it-bold';
            src: url('//image.adidas.co.kr/fonts/adihaus/bold/ADIHBDIT.eot');
        	src: url('//image.adidas.co.kr/fonts/adihaus/bold/ADIHBDIT.eot?#iefix') format('embedded-opentype'),
        	     url('//image.adidas.co.kr/fonts/adihaus/bold/ADIHBDIT.ttf')  format('truetype');
        }

        @font-face {
        	font-family: 'adihaus-bold';
            src: url('//image.adidas.co.kr/fonts/adihaus/bold/ADIHDB.eot');
        	src: url('//image.adidas.co.kr/fonts/adihaus/bold/ADIHDB.eot?#iefix') format('embedded-opentype'),
        	     url('//image.adidas.co.kr/fonts/adihaus/bold/ADIHDB.ttf')  format('truetype');
        }

        @font-face {
        	font-family: 'adihaus-it';
            src: url('//image.adidas.co.kr/fonts/adihaus/regular/ADIHRGIT.eot');
        	src: url('//image.adidas.co.kr/fonts/adihaus/regular/ADIHRGIT.eot?#iefix') format('embedded-opentype'),
        	     url('//image.adidas.co.kr/fonts/adihaus/regular/ADIHRGIT.ttf')  format('truetype');
        }

        @font-face {
        	font-family: 'adihaus';
            src: url('//image.adidas.co.kr/fonts/adihaus/regular/ADIHRG.eot');
        	src: url('//image.adidas.co.kr/fonts/adihaus/regular/ADIHRG.eot?#iefix') format('embedded-opentype'),
        	     url('//image.adidas.co.kr/fonts/adihaus/regular/ADIHRG.ttf')  format('truetype');
        }

        @font-face {
        	font-family: 'adihaus-medium';
            src: url('//image.adidas.co.kr/fonts/adihaus/medium/ADIHAPSM.eot');
        	src: url('//image.adidas.co.kr/fonts/adihaus/medium/ADIHAPSM.eot?#iefix') format('embedded-opentype'),
        	     url('//image.adidas.co.kr/fonts/adihaus/medium/ADIHAPSM.ttf')  format('truetype');
        }

        @font-face {
        	font-family: 'adinenuPro-black';
        	src: url('//image.adidas.co.kr/fonts/adineuePro/eot/adineuePRO-Black.eot');
        	src: url('//image.adidas.co.kr/fonts/adineuePro/woff/adineuePRO-Black.woff') format('woff');
        }

        @font-face{
        	font-family:"adiBlack";
        	src:url('//image.adidas.co.kr/fonts/adineuePro/black/adineuePRO-BlackWeb.eot');
        	src:url('//image.adidas.co.kr/fonts/adineuePro/black/adineuePRO-BlackWeb.eot?#iefix') format('embedded-opentype'),
        		url('//image.adidas.co.kr/fonts/adineuePro/black/adineuePRO-BlackWeb.woff2') format('woff2'),
        		url('//image.adidas.co.kr/fonts/adineuePro/black/adineuePRO-BlackWeb.woff') format('woff'),
        		url('//image.adidas.co.kr/fonts/adineuePro/black/adineuePRO-BlackWeb.ttf') format('truetype');
        	font-weight:normal
        }

        @font-face{
        	font-family:"adiLight";
        	src:url('//image.adidas.co.kr/fonts/adineuePro/light/adineuePRO-LightWeb.eot');
        	src:url('//image.adidas.co.kr/fonts/adineuePro/light/adineuePRO-LightWeb.eot?#iefix') format('embedded-opentype'),
        		url('//image.adidas.co.kr/fonts/adineuePro/light/adineuePRO-LightWeb.woff2') format('woff2'),
        		url('//image.adidas.co.kr/fonts/adineuePro/light/adineuePRO-LightWeb.woff') format('woff'),
        		url('//image.adidas.co.kr/fonts/adineuePro/light/adineuePRO-LightWeb.ttf') format('truetype');
        		font-weight:normal;
        		letter-spacing:1px;
        }


        @font-face {
        	font-family: 'adinenuPro-bold';
        	src: url('//image.adidas.co.kr/fonts/adineuePro/eot/adineuePRO-Bold.eot');
        	src: url('//image.adidas.co.kr/fonts/adineuePro/woff/adineuePRO-Bold.woff') format('woff');
        }

        @font-face {
        	font-family: 'adinenuPro-regular';
        	src: url('//image.adidas.co.kr/fonts/adineuePro/eot/adineuePRO-Regular.eot');
        	src: url('//image.adidas.co.kr/fonts/adineuePro/woff/adineuePRO-Regular.woff') format('woff');
        }

        @font-face {
        	font-family: 'adinenuPro-light';
        	src: url('//image.adidas.co.kr/fonts/adineuePro/eot/adineuePRO-Light.eot');
        	src: url('//image.adidas.co.kr/fonts/adineuePro/woff/adineuePRO-Light.woff') format('woff');
        }

        @font-face {
        	font-family: 'YEEZY TSTAR-Bold';
        	src: url('//image.adidas.co.kr/fonts/yeezy/eot/yeezy_tstar-bold-webfont.eot');
        	src: url('//image.adidas.co.kr/fonts/yeezy/woff/YEEZY TSTAR-Bold.woff') format('woff');
        }

        @font-face {
        	font-family: 'YEEZY TSTAR-Heavy';
        	src: url('//image.adidas.co.kr/fonts/yeezy/eot/yeezy_tstar-heavy-webfont.eot');
        	src: url('//image.adidas.co.kr/fonts/yeezy/woff/YEEZY TSTAR-Heavy.woff') format('woff');
        }

        @font-face {
        	font-family: 'YEEZY TSTAR-Light';
        	src: url('//image.adidas.co.kr/fonts/yeezy/eot/yeezy_tstar-light-webfont.eot');
        	src: url('//image.adidas.co.kr/fonts/yeezy/woff/YEEZY TSTAR-Light.woff') format('woff');
        }

        @font-face {
        	font-family: 'YEEZY TSTAR-Regular';
        	src: url('//image.adidas.co.kr/fonts/yeezy/eot/yeezy_tstar-regular-webfont.eot');
        	src: url('//image.adidas.co.kr/fonts/yeezy/woff/YEEZY TSTAR-Regular.woff') format('woff');
        }

        @font-face {
        	font-family: 'adihausDIN-Cond';
            src: url('//image.adidas.co.kr/fonts/adihausDIN/eot/AdihausDIN-Cond_0.eot');
        		src: url('//image.adidas.co.kr/fonts/adihausDIN/eot/AdihausDIN-Cond_0.eot?#iefix') format('embedded-opentype'),
        	     url('//image.adidas.co.kr/fonts/adihausDIN/woff/AdihausDIN-Cond_0.woff')  format('truetype');
        }
        @font-face {
        	font-family: 'adihausDIN-Cond-medium';
            src: url('//image.adidas.co.kr/fonts/adihausDIN/eot/AdihausDIN-CondMedium.eot');
        		src: url('//image.adidas.co.kr/fonts/adihausDIN/eot/AdihausDIN-CondMedium.eot?#iefix') format('embedded-opentype'),
        	     url('//image.adidas.co.kr/fonts/adihausDIN/woff/AdihausDIN-CondMedium.woff')  format('truetype');
        }
        @font-face {
        	font-family: 'adihausDIN-Cond-bold';
            src: url('//image.adidas.co.kr/fonts/adihausDIN/eot/AdihausDIN-CondBold.eot');
        		src: url('//image.adidas.co.kr/fonts/adihausDIN/eot/AdihausDIN-CondBold.eot?#iefix') format('embedded-opentype'),
        	     url('//image.adidas.co.kr/fonts/adihausDIN/woff/AdihausDIN-CondBold.woff')  format('truetype');
        }

        @font-face {
            font-family: 'adiPictoRegular';
            src:url('//image.adidas.co.kr/fonts/adipictos/adipictos-Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
        }

        @font-face{
        	font-family:'Decima Mono';
        	src:url('//image.adidas.co.kr/fonts/decimamono/woff/32923C_0_0.woff2') format('woff2'),
        			url('//image.adidas.co.kr/fonts/decimamono/woff/32923C_0_0.woff') format('woff'),
        			url('//image.adidas.co.kr/fonts/decimamono/ttf/32923C_0_0.ttf') format('truetype');
        	}

        .notoSansBold{
            font:25px 'NotoSansKRBold';
        }
        .notoSansMedium{
            font:25px 'NotoSansKR';
        }
        .notoSansRegular{
            font:25px 'NotoSansKRRegular';
        }
        .notoSansLight{
            font:25px 'NotoSansKRLight';
        }
        .notoSansThin{
            font:25px 'NotoSansKRThin';
        }

        .adipro-black{
            font:25px 'adinenuPro-black';
        }
        .adipro-bold{
            font:25px 'adinenuPro-bold';
        }

        .adipro-regular{
            font:25px 'adinenuPro-regular';
        }

        .adipro-light{
            font:25px 'adinenuPro-light';
        }

        .adihaus-bold{
            font:25px 'adihaus-bold';
        }

        .adihaus-bold-it{
            font:25px 'adihaus-it-bold';
        }

        .adihaus-medium{
            font:25px 'adihaus-medium';
        }

        .adihaus-regular{
            font:25px 'adihaus';
        }

        .adihaus-regular-it{
            font:25px 'adihaus-it';
        }

        .adihaus-din-regular{
            font:25px 'adihausDIN-Cond';
        }

        .adihaus-din-medium{
            font:25px 'adihausDIN-Cond-medium';
        }

        .adihaus-din-bold{
            font:25px 'adihausDIN-Cond-bold';
        }

        .decima-mono {
            font:25px 'Decima Mono';
        }

        .yeezy-bold{
            font:25px 'YEEZY TSTAR-Bold';
        }

        .yeezy-heavy{
            font:25px 'YEEZY TSTAR-Heavy';
        }

        .yeezy-regular{
            font:25px 'YEEZY TSTAR-Regular';
        }

        .yeezy-light{
            font:25px 'YEEZY TSTAR-Light';
        }

    </style>


    <div class="code-wrap">
        <div class="prefix" style="">구글 노토산스 폰트</div>
        <div class="code-box">
            <pre class="brush: css">
                Bold {
                    font:25px 'NotoSansKRBold';
                }

                Medium {
                    font:25px 'NotoSansKR';
                }

                Regular {
                    font:25px 'NotoSansKRRegular';
                }

                Light {
                    font:25px 'NotoSansKRLight';
                }

                Thin {
                    font:25px 'NotoSansKRThin';
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
        <div class="prefix" style="font:20px 'adinenuPro-black';letter-spacing:1px;">ADINEUE PRO</div>
        <div class="code-box">
            <pre class="brush: css">
                Black {
                    font:25px 'adinenuPro-black';
                }

                Bold {
                    font:25px 'adinenuPro-bold';
                }

                Regular {
                    font:25px 'adinenuPro-regular';
                }

                Light {
                    font:25px 'adinenuPro-light';
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="adipro-black">ADINEUE PRO BLACK</div>
            <div class="adipro-bold">ADINEUE PRO BOLD</div>
            <div class="adipro-regular">ADINEUE PRO REGULAR</div>
            <div class="adipro-light">ADINEUE PRO LIGHT</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font:20px 'adihaus-bold';letter-spacing:1px;">Adihaus</div>
        <div class="code-box">
            <pre class="brush: css">
                Bold {
                    font:25px 'adihaus-bold';
                }

                Bold Italic {
                    font:25px 'adihaus-it-bold';
                }

                Medium {
                    font:25px 'adihaus-medium';
                }

                Regular {
                    font:25px 'adihaus';
                }

                Regular Italic{
                    font:25px 'adihaus-it';
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="adihaus-bold">Adihaus bold</div>
            <div class="adihaus-bold-it">Adihaus italic bold</div>
            <div class="adihaus-medium">Adihaus medium</div>
            <div class="adihaus-regular">Adihaus regular</div>
            <div class="adihaus-regular-it">Adihaus italic regular</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font:20px 'adihausDIN-Cond-bold';">Adihaus DIN Cond</div>
        <div class="code-box">
            <pre class="brush: css">
                Bold {
                    font:25px 'adihausDIN-Cond-bold';
                }

                Medium {
                    font:25px 'adihausDIN-Cond-medium';
                }

                Regular {
                    font:25px 'adihausDIN-Cond';
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="adihaus-din-bold">Adihaus DIN Cond Bold</div>
            <div class="adihaus-din-medium">Adihaus DIN Cond Medium</div>
            <div class="adihaus-din-regular">Adihaus DIN Cond Regular</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font:20px 'Decima Mono';">Decima Mono</div>
        <div class="code-box">
            <pre class="brush: css">
                Regular {
                    font:25px 'Decima Mono';
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="decima-mono">Decima Mono Regular</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font:20px 'adihausDIN-Cond-bold';">YEEZY TSTAR</div>
        <div class="code-box">
            <pre class="brush: css">
                Heavy {
                    font:25px 'YEEZY TSTAR-Heavy';
                }

                Bold {
                    font:25px 'YEEZY TSTAR-Bold';
                }

                Regular {
                    font:25px 'YEEZY TSTAR-Regular';
                }

                Light {
                    font:25px 'YEEZY TSTAR-Light';
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="yeezy-heavy">YEEZY TSTAR HEAVY</div>
            <div class="yeezy-bold">YEEZY TSTAR BOLD</div>
            <div class="yeezy-regular">YEEZY TSTAR REGULAR</div>
            <div class="yeezy-light">YEEZY TSTAR LIGHT</div>
        </div>
    </div>
`;
