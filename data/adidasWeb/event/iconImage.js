module.exports = `

    <style>
        .spt_bg{
            display:inline-block;
            width: 16px;
            height: 16px;
            background-position: -685px -758px;
        }
        .spt_bg_1212_black{
            display:inline-block;
            width: 12px;
            height: 12px;
            background-position: -688px -845px;
        }
        .spt_bg_1616_blue{
            display:inline-block;
            width: 16px;
            height: 16px;
            background-position: -684px -800px;
        }
        .spt_bg_1515_white{
            width: 15px;
            height: 15px;
            background-position: -685px -478px;
        }
        .btn_1616_black{
            display:inline-block;
            width: 16px;
            height: 16px;
            background: url('http://image.adidas.co.kr/images/adidas/event/iniki/icon.png') no-repeat;
            background-position: 0 0;
        }
        .btn_1616_white{
            display:inline-block;
            width: 16px;
            height: 16px;
            background: url('http://image.adidas.co.kr/images/adidas/event/iniki/icon.png') no-repeat;
            background-position: 100% 0;
        }
        .box{width:50%;float:left;height:350px;}
        .prefix{margin:10px 0;}
        .resultbox{padding-top:20px;height:50px;background:#ddd;text-align:center;border:1px solid #ccc;}
    </style>

    <div class="code-wrap">
        <div class="box">
            <div class="prefix">버튼 아이콘 검정색 12x12 안쪽 투명</div>
            <div class="resultbox">
                <span class="spt_bg spt_bg_1212_black"></span>
            </div>
            <div class="code-box">
                <pre class="brush: css">
                    .spt_bg{
                        width: 12px;
                        height: 12px;
                        background-position: -688px -845px;
                    }
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="prefix">버튼 아이콘 파란색 16x16 안쪽 투명</div>
            <div class="resultbox">
                <span class="spt_bg spt_bg_1616_blue"></span>
            </div>
            <div class="code-box">
                <pre class="brush: css">
                    .spt_bg{
                        width: 16px;
                        height: 16px;
                        background-position: -684px -800px;
                    }
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="prefix">버튼 아이콘 흰색 14x14 안쪽 투명</div>
            <div class="resultbox">
                <img src="/images/adidas/event/icon_btn_white_14x14.png">
            </div>
            <div class="code-box">
                <pre class="brush: css">
                    .css{
                        display:inline-block;
                        width: 14px;
                        height: 14px;
                        background: url('http://image.adidas.co.kr/images/adidas/common/icon_btn_white_14x14.png');
                    }
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="prefix">버튼 아이콘 검정색 14x14 안쪽 투명</div>
            <div class="resultbox">
                <img src="/images/adidas/event/icon_btn_black_14x14.png">
            </div>
            <div class="code-box">
                <pre class="brush: css">
                    .css{
                        display:inline-block;
                        width: 14px;
                        height: 14px;
                        background: url('http://image.adidas.co.kr/images/adidas/common/icon_btn_black_14x14.png');
                    }
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="prefix">버튼 아이콘 검정색 16x16 안쪽 투명</div>
            <div class="resultbox">
                <span class="btn_1616_black"></span>
            </div>
            <div class="code-box">
                <pre class="brush: css">
                    .css{
                        display:inline-block;
                        width: 16px;
                        height: 16px;
                        background: url('http://image.adidas.co.kr/images/adidas/event/iniki/icon.png') no-repeat;
                        background-position: 0 0;
                    }
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="prefix">버튼 아이콘 흰색 16x16 안쪽 투명</div>
            <div class="resultbox">
                <span class="btn_1616_white"></span>
            </div>
            <div class="code-box">
                <pre class="brush: css">
                    .css{
                        display:inline-block;
                        width: 16px;
                        height: 16px;
                        background: url('http://image.adidas.co.kr/images/adidas/event/iniki/icon.png') no-repeat;
                        background-position: 100% 0;
                    }
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="prefix">버튼 아이콘 검정색 16x16 안쪽 불투명</div>
            <div class="resultbox">
                <span class="spt_bg"></span>
            </div>
            <div class="code-box">
                <pre class="brush: css">
                    .spt_bg{
                        width: 16px;
                        height: 16px;
                        background-position: -685px -758px;
                    }
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="prefix">버튼 아이콘 검정색 30x30 안쪽 불투명</div>
            <div class="resultbox">
                <img src="/images/adidas/event/arrow-right.png">
            </div>
            <div class="code-box">
                <pre class="brush: css">
                    .css{
                        display:inline-block;
                        width: 30px;
                        height: 30px;
                        background: url('http://image.adidas.co.kr/images/adidas/common/arrow-right.png');
                    }
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="prefix">버튼 아이콘 흰색 15x15 안쪽 검정색</div>
            <div class="resultbox">
                <span class="spt_bg spt_bg_1515_white"></span>
            </div>
            <div class="code-box">
                <pre class="brush: css">
                    .spt_bg{
                        width: 15px;
                        height: 15px;
                        background-position: -685px -478px;
                    }
                </pre>
            </div>
        </div>

    </div>


`;
