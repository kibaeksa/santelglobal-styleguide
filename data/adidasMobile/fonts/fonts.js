module.exports = `
    <style type="text/css">
        .result_box div{
            margin-bottom:3px;
        }
        /* 노토산스 폰트 */
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

        /* 아디하우스 폰트 */
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


        /* 아디뉴 프로 폰트 */
        @font-face {
        	font-family: 'adinenuPro-black';
        	src: url('//image.adidas.co.kr/fonts/adineuePro/eot/adineuePRO-Black.eot');
        	src: url('//image.adidas.co.kr/fonts/adineuePro/woff/adineuePRO-Black.woff') format('woff');
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

        /* 이지부스트 폰트 */
        @font-face {
        	font-family: 'YEEZY TSTAR-Bold';
        	src: url('//image.adidas.co.kr/fonts/yeezy/woff/YEEZY TSTAR-Bold.woff') format('woff');
        }
        @font-face {
        	font-family: 'YEEZY TSTAR-Heavy';
        	src: url('//image.adidas.co.kr/fonts/yeezy/woff/YEEZY TSTAR-Heavy.woff') format('woff');
        }
        @font-face {
        	font-family: 'YEEZY TSTAR-Light';
        	src: url('//image.adidas.co.kr/fonts/yeezy/woff/YEEZY TSTAR-Light.woff') format('woff');
        }

        /* 아디하우스 딘 폰트 */
        @font-face {
        	font-family: 'adihausDIN-Bold';
            src: url('//image.adidas.co.kr/fonts/adihausDIN/woff/AdihausDIN-Bold_0.woff') format('woff');
        }
        @font-face {
        	font-family: 'adihausDIN';
            src: url('//image.adidas.co.kr/fonts/adihausDIN/woff/adihausregular.woff') format('woff');
        }

        /* 아디하우스 딘 콘드 - 볼드,볼드이탤릭,미디엄,레귤러 */
        @font-face {
            font-family: 'adihaus-din-cond-bold';
            src: url('//image.adidas.co.kr/fonts/adihausDIN/woff/AdihausDIN-CondBold.woff') format('woff');
            font-weight:'bold';
        }

        @font-face {
            font-family: 'adihaus-din-Cond-bold-it';
            src: url('//image.adidas.co.kr/fonts/adihausDIN/woff/AdihausDIN-CondBoldIta.woff') format('woff');
            font-weight:'bold';
            font-style:'italic';
        }

        @font-face {
            font-family: 'adihaus-din-cond-Medium';
            src: url('//image.adidas.co.kr/fonts/adihausDIN/woff/AdihausDIN-CondMedium.woff') format('woff');
            font-weight:'normal';
            font-style:'italic';
        }

        @font-face {
        	font-family: 'adihaus-din-cond-regular';
        	src: url('//image.adidas.co.kr/fonts/adihausDIN/woff/AdihausDIN-Cond_0.woff') format('woff');
        	font-weight:'normal';
        }

        @font-face {
            font-family: 'adiPictoRegular';
            src:url('//image.adidas.co.kr/fonts/adipictos/adipictos-Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
        }

        /* 데시마모노 폰트 */
        @font-face{
        	font-family:'Decima Mono';
        	src:url('//image.adidas.co.kr/fonts/decimamono/woff/32923C_0_0.woff2') format('woff2'),
        			url('//image.adidas.co.kr/fonts/decimamono/woff/32923C_0_0.woff') format('woff'),
        			url('//image.adidas.co.kr/fonts/decimamono/ttf/32923C_0_0.ttf') format('truetype');
        	}

        /* 노토산스 폰트 */
        .NotoSansKRBold{
            font:25px 'NotoSansKRBold';
        }
        .NotoSansKR{
            font:25px 'NotoSansKR';
        }
        .NotoSansKRRegular{
            font:25px 'NotoSansKRRegular';
        }
        .NotoSansKRLight{
            font:25px 'NotoSansKRLight';
        }
        .NotoSansKRThin{
            font:25px 'NotoSansKRThin';
        }

        /* 아디뉴 프로 폰트 */
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

        /* 아디하우스 폰트 */
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

        /* 아디하우스 딘 폰트 */
        .adihaus-din-bold{
            font:25px 'adihausDIN-Bold';
        }
        .adihaus-din-regular{
            font:25px 'adihausDIN';
        }

        /* 아디하우스 딘 콘드 폰트 */
        .adihaus-din-cond-regular{
            font:25px 'adihaus-din-cond-regular';
        }
        .adihaus-din-cond-Medium{
            font:25px 'adihaus-din-cond-Medium';
        }
        .adihaus-din-cond-bold{
            font:25px 'adihaus-din-cond-bold';
        }
        .adihaus-din-Cond-bold-it{
            font:bold 25px 'adihaus-din-Cond-bold-it';
        }

        /* 데시마모노 폰트 */
        .decima-mono {
            font:25px 'Decima Mono';
        }

        /* 이지부스트 폰트 */
        .yeezy-bold{
            font:25px 'YEEZY TSTAR-Bold';
        }
        .yeezy-heavy{
            font:25px 'YEEZY TSTAR-Heavy';
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
            <div class="NotoSansKRBold">본고딕 볼드체</div>
            <div class="NotoSansKR">본고딕 미디움체</div>
            <div class="NotoSansKRLight">본고딕 레귤러체</div>
            <div class="NotoSansKRLight">본고딕 라이트체</div>
            <div class="NotoSansKRThin">본고딕 Thin체</div>
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
            <div class="adihaus-regular">Adihaus regular</div>
            <div class="adihaus-regular-it">Adihaus italic regular</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font:20px 'adihaus-bold';letter-spacing:1px;">Adihaus Din</div>
        <div class="code-box">
            <pre class="brush: css">
                Bold {
                    font:25px 'AdihausDIN-Bold';
                }

                Regular {
                    font:25px 'Adihaus-regular';
                }
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="adihaus-din-bold">Adihaus Din bold</div>
            <div class="adihaus-din-regular">Adihaus Din regular</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix" style="font:20px 'adihausDIN-Cond-bold';">Adihaus DIN Cond</div>
        <div class="code-box">
            <pre class="brush: css">
                Bold {
                    font:25px 'AdihausDIN-Cond';
                    font-weight:'bold';
                }

                Bold Italic {
                    font:25px 'AdihausDIN-Cond';
                    font-weight:'bold';
                	font-style:'italic';
                }

                Italic {
                    font:25px 'AdihausDIN-Cond';
                    font-style:'italic';
                }

                Regular {
                    font:25px 'AdihausDIN-Cond';
                }

            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="adihaus-din-cond-bold">Adihaus DIN Cond Bold</div>
            <div class="adihaus-din-Cond-bold-it">Adihaus DIN Cond italic Bold</div>
            <div class="adihaus-din-cond-Medium">Adihaus DIN Cond Medium</div>
            <div class="adihaus-din-cond-regular">Adihaus DIN Cond regular</div>

        </div>
    </div>


    <div class="code-wrap">
        <div class="prefix" style="font:20px 'Decima Mono';">Decima Mono</div>
        <div style="font-size: 14px;line-height:20px;color: #ff0000;font-weight: 700;padding-left: 10px;margin-bottom: 15px;">* 모바일 로딩 속도 관련 문제로 fonts.css에서 범용적으로 사용하지 않는 폰트는 삭제 하였습니다.<br/>&nbsp;&nbsp;&nbsp;사용 시, 사용하는 페이지 상단에 font-face 따로 선언 해야 함</div>
        <div class="code-box">
            <pre class="brush: css">
                @font-face{
                    font-family:'Decima Mono';
                    src:url('//imagem.adidas.co.kr/fonts/decimamono/woff/32923C_0_0.woff2') format('woff2'),
                        url('//imagem.adidas.co.kr/fonts/decimamono/woff/32923C_0_0.woff') format('woff'),
                        url('//imagem.adidas.co.kr/fonts/decimamono/ttf/32923C_0_0.ttf') format('truetype');
                }

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
        <div style="font-size: 14px;line-height:20px;color: #ff0000;font-weight: 700;padding-left: 10px;margin-bottom: 15px;">* 모바일 로딩 속도 관련 문제로 fonts.css에서 범용적으로 사용하지 않는 폰트는 삭제 하였습니다.<br/>&nbsp;&nbsp;&nbsp;사용 시, 사용하는 페이지 상단에 font-face 따로 선언 해야 함</div>
        <div class="code-box">
            <pre class="brush: css">

                @font-face {
                    font-family: 'YEEZY TSTAR-Bold';
                    src: url('//imagem.adidas.co.kr/fonts/yeezy/woff/YEEZY TSTAR-Bold.woff') format('woff');
                }
                @font-face {
                    font-family: 'YEEZY TSTAR-Heavy';
                    src: url('//imagem.adidas.co.kr/fonts/yeezy/woff/YEEZY TSTAR-Heavy.woff') format('woff');
                }
                @font-face {
                    font-family: 'YEEZY TSTAR-Light';
                    src: url('//imagem.adidas.co.kr/fonts/yeezy/woff/YEEZY TSTAR-Light.woff') format('woff');
                }

                Heavy {
                    font:25px 'YEEZY TSTAR-Heavy';
                }

                Bold {
                    font:25px 'YEEZY TSTAR-Bold';
                }

                Light {
                    font:25px 'YEEZY TSTAR-Ligh';
                }

            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="yeezy-heavy">YEEZY TSTAR HEAVY</div>
            <div class="yeezy-bold">YEEZY TSTAR BOLD</div>
            <div class="yeezy-light">YEEZY TSTAR Light</div>
        </div>
    </div>
`;
