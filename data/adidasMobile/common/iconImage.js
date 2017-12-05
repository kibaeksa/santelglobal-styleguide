module.exports = `

    <style>

        .box{width:50%;float:left;height:350px;margin:0 0 30px 0;}
        .prefix{margin:10px 0;}
        .resultbox{padding:15px 0 15px;height:50px;background:#ddd;text-align:center;border:1px solid #ccc;}

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


    </div>


`;
