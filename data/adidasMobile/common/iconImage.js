module.exports = `

    <style>

        .box{width:50%;float:left;height:auto;margin:0 0 30px 0;}
        .prefix{margin:10px 0;}
        .resultbox{padding:15px 0 15px;height:50px;background:#efefef;text-align:center;border:1px solid #ccc;}

        .ico_filiter{
            display:inline-block;
            width:60px;
            height:60px;
            background-image: url(//imagem.adidas.co.kr/images/adidas/ico_filter.png);
            background-size: 50% 50%;
            background-position: center;
            background-repeat: no-repeat;
        }

        .ico_filiter2{
            display:inline-block;
            width:63px;
            height:58px;
            background-image: url(//imagem.adidas.co.kr/images/adidas/ico_filter_btn.png);
            background-size: 50% 50%;
            background-position: center;
            background-repeat: no-repeat;
        }

        .ico_kakao_quick{
            display:inline-block;
            width: 66px;
            height: 60px;
            background-image: url(//imagem.adidas.co.kr/images/adidas/ico_quick_kakao.png);
            background-size: 50% 50%;
            background-position: center;
            background-repeat: no-repeat;
        }

        .ico_kakao_quick2{
            display:inline-block;
            width: 66px;
            height: 60px;
            background-image: url(//imagem.adidas.co.kr/images/adidas/ico_kakao.png);
            background-size: 50% 50%;
            background-position: center;
            background-repeat: no-repeat;
        }
        .ico_kakao_darker{
            width: 30px;
            height: 30px;
            display: inline-block;
            margin-right: 5px;
            background: url('http://imagem.adidas.co.kr/images/adidas/ico_btn_kakao_gray_darker.png') 0 0 no-repeat;
            -webkit-background-size: 30px auto;
            background-size: 30px auto;
            vertical-align: middle;
        }
        .ico_kakao_gray{
            width: 30px;
            height: 30px;
            display: inline-block;
            margin-right: 5px;
            background: url('http://imagem.adidas.co.kr/images/adidas/ico_btn_kakao_gray.gif') 0 0 no-repeat;
            -webkit-background-size: 30px auto;
            background-size: 30px auto;
            vertical-align: middle;
        }
        .ico_naver_darker{
            width: 30px;
            height: 30px;
            display: inline-block;
            margin-right: 5px;
            background: url('http://imagem.adidas.co.kr/images/adidas/ico_btn_naver_gray_darker.png') 0 0 no-repeat;
            -webkit-background-size: 30px auto;
            background-size: 30px auto;
            vertical-align: middle;
        }
        .ico_naver_gray{
            width: 30px;
            height: 30px;
            display: inline-block;
            margin-right: 5px;
            background: url('http://imagem.adidas.co.kr/images/adidas/ico_btn_naver_gray.gif') 0 0 no-repeat;
            -webkit-background-size: 30px auto;
            background-size: 30px auto;
            vertical-align: middle;
        }
        .ico_naver_white{
            width: 30px;
            height: 30px;
            display: inline-block;
            margin-right: 5px;
            background: url('http://imagem.adidas.co.kr/images/adidas/ico_btn_naver_white.png') 0 0 no-repeat;
            -webkit-background-size: 30px auto;
            background-size: 30px auto;
            vertical-align: middle;
        }
        .ico_kakao_brown{
            width: 30px;
            height: 30px;
            display: inline-block;
            margin-right: 5px;
            background: url('http://imagem.adidas.co.kr/images/adidas/ico_btn_kakao.png') 0 0 no-repeat;
            -webkit-background-size: 30px auto;
            background-size: 30px auto;
            vertical-align: middle;
        }
        .ico_naver_green{
            width: 30px;
            height: 30px;
            display: inline-block;
            margin-right: 5px;
            background: url('http://imagem.adidas.co.kr/images/adidas/ico_btn_naver.gif') 0 0 no-repeat;
            -webkit-background-size: 30px auto;
            background-size: 30px auto;
            vertical-align: middle;
        }

    </style>

    <div class="code-wrap">

        <div class="box">
            <div class="prefix">필터 아이콘 1</div>
            <div class="resultbox">
                <span class="ico_filiter"></span>
            </div>
            <div class="code-box">
                <pre class="brush: css">
                    .css{
                        display:inline-block;
                        width:60px;
                        height:60px;
                        background-image: url('/images/adidas/ico_filter.png');
                        background-size: 50% 50%;
                        background-position: center;
                        background-repeat: no-repeat;
                    }
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="prefix">필터 아이콘 2 (매장 리스트)</div>
            <div class="resultbox">
                <span class="ico_filiter2"></span>
            </div>
            <div class="code-box">
                <pre class="brush: css">
                    .css{
                        display:inline-block;
                        width:60px;
                        height:60px;
                        background-image: url('/images/adidas/ico_filter_btn.png');
                        background-size: 50% 50%;
                        background-position: center;
                        background-repeat: no-repeat;
                    }
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="prefix">카카오톡 아이콘 1</div>
            <div class="resultbox">
                <span class="ico_kakao_quick"></span>
            </div>
            <div class="code-box">
                <pre class="brush: css">
                    .css{
                        display:inline-block;
                        width: 66px;
                        height: 60px;
                        background-image: url(//imagem.adidas.co.kr/images/adidas/ico_quick_kakao.png);
                        background-size: 50% 50%;
                        background-position: center;
                        background-repeat: no-repeat;
                    }
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="prefix">카카오톡 아이콘 2</div>
            <div class="resultbox">
                <span class="ico_kakao_quick2"></span>
            </div>
            <div class="code-box">
                <pre class="brush: css">
                    .css{
                        display:inline-block;
                        width: 66px;
                        height: 60px;
                        background-image: url(//imagem.adidas.co.kr/images/adidas/ico_kakao.png);
                        background-size: 50% 50%;
                        background-position: center;
                        background-repeat: no-repeat;
                    }
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="prefix">카카오톡 아이콘 심플형(어두운 회색)</div>
            <div class="used" style="margin:5px 0 15px 0; font-size:11px;">사용된 페이지 : Payment_login.html </div>
            <div class="resultbox">
                <span class="ico_kakao_darker"></span>
            </div>
            <div class="code-box">
                <pre class="brush: css">
                    .button_area a span.ico_kakao_darker{
                        width: 16px;
                        height: 16px;
                        display: inline-block;
                        margin-right: 5px;
                        background: url('http://imagem.adidas.co.kr/images/adidas/ico_btn_kakao_gray_darker.png') 0 0 no-repeat;
                        -webkit-background-size: 16px auto;
                        background-size: 16px auto;
                        vertical-align: middle;
                    }
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="prefix">카카오톡 아이콘 심플형(회색)</div>
            <div class="used" style="margin:5px 0 15px 0; font-size:11px;">사용된 페이지 : - </div>
            <div class="resultbox">
                <span class="ico_kakao_gray"></span>
            </div>
            <div class="code-box">
                <pre class="brush: css">
                    .button_area a span.ico_kakao{
                        width: 16px;
                        height: 16px;
                        display: inline-block;
                        margin-right: 5px;
                        background: url('http://imagem.adidas.co.kr/images/adidas/ico_btn_kakao_gray.gif') 0 0 no-repeat;
                        -webkit-background-size: 16px auto;
                        background-size: 16px auto;
                        vertical-align: middle;
                    }
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="prefix">네이버 아이콘 심플형(어두운 회색)</div>
            <div class="used" style="margin:5px 0 15px 0; font-size:11px;">사용된 페이지 : Payment_login.html </div>
            <div class="resultbox">
                <span class="ico_naver_darker"></span>
            </div>
            <div class="code-box">
                <pre class="brush: css">
                    .button_area a span.ico_naver_darker{
                        width: 16px;
                        height: 16px;
                        display: inline-block;
                        margin-right: 5px;
                        background: url('http://imagem.adidas.co.kr/images/adidas/ico_btn_naver_gray_darker.png') 0 0 no-repeat;
                        -webkit-background-size: 16px auto;
                        background-size: 16px auto;
                        vertical-align: middle;
                    }
                </pre>
            </div>
        </div>
        <div class="box">
            <div class="prefix">네이버 아이콘 심플형(회색)</div>
            <div class="used" style="margin:5px 0 15px 0; font-size:11px;">사용된 페이지 : - </div>
            <div class="resultbox">
                <span class="ico_naver_gray"></span>
            </div>
            <div class="code-box">
                <pre class="brush: css">
                    .css{
                        width: 16px;
                        height: 16px;
                        display: inline-block;
                        margin-right: 5px;
                        background: url('http://imagem.adidas.co.kr/images/adidas/ico_btn_naver_gray.gif') 0 0 no-repeat;
                        -webkit-background-size: 16px auto;
                        background-size: 16px auto;
                        vertical-align: middle;
                    }
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="prefix">네이버 아이콘 심플형(흰색)</div>
            <div class="used" style="margin:5px 0 15px 0; font-size:11px;">사용된 페이지 : login.html </div>
            <div class="resultbox">
                <span class="ico_naver_white"></span>
            </div>
            <div class="code-box">
                <pre class="brush: css">
                    .css{
                        width: 16px;
                        height: 16px;
                        display: inline-block;
                        margin-right: 5px;
                        background: url('http://imagem.adidas.co.kr/images/adidas/ico_btn_naver_white.png') 0 0 no-repeat;
                        -webkit-background-size: 16px auto;
                        background-size: 16px auto;
                        vertical-align: middle;
                    }
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="prefix">카카오 아이콘 심플형(갈색)</div>
            <div class="used" style="margin:5px 0 15px 0; font-size:11px;">사용된 페이지 : login.html </div>
            <div class="resultbox">
                <span class="ico_kakao_brown"></span>
            </div>
            <div class="code-box">
                <pre class="brush: css">
                    .css{
                        width: 16px;
                        height: 16px;
                        display: inline-block;
                        margin-right: 5px;
                        background: url('http://imagem.adidas.co.kr/images/adidas/ico_btn_kakao.png') 0 0 no-repeat;
                        -webkit-background-size: 16px auto;
                        background-size: 16px auto;
                        vertical-align: middle;
                    }
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="prefix">네이버 아이콘 심플형(갈색)</div>
            <div class="used" style="margin:5px 0 15px 0; font-size:11px;">사용된 페이지 : 주문결제(현재운영) </div>
            <div class="resultbox">
                <span class="ico_naver_green"></span>
            </div>
            <div class="code-box">
                <pre class="brush: css">
                    .css{
                        width: 16px;
                        height: 16px;
                        display: inline-block;
                        margin-right: 5px;
                        background: url('http://imagem.adidas.co.kr/images/adidas/ico_btn_naver.gif') 0 0 no-repeat;
                        -webkit-background-size: 16px auto;
                        background-size: 16px auto;
                        vertical-align: middle;
                    }
                </pre>
            </div>
        </div>


    </div>


`;
