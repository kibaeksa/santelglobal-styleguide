module.exports = `
    <div class="code-wrap">
        <div class="prefix">타이픈 (-) 리스트</div>
        <div class="code-box">
            <pre class="brush: html">
                <ul class="li-hypn">
                    <li>
                        <span class="bul"></span>첫번째 리스트
                    </li>
                    <li>
                        <span class="bul"></span>두번째 리스트
                    </li>
                    <li>
                        <span class="bul"></span>세번째 리스트
                    </li>
                    <li>
                        <span class="bul"></span>네번째 리스트
                    </li>
                </ul>
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <ul class="li-hypn">
                <li>
                    <span class="bul"></span>첫번째 리스트
                </li>
                <li>
                    <span class="bul"></span>두번째 리스트
                </li>
                <li>
                    <span class="bul"></span>세번째 리스트
                </li>
                <li>
                    <span class="bul"></span>네번째 리스트
                </li>
            </ul>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">점 리스트</div>
        <div class="code-box">
            <pre class="brush: html">
                <ul class="li-dot">
                    <li>
                        <span class="bul"></span>첫번째 리스트
                    </li>
                    <li>
                        <span class="bul"></span>두번째 리스트
                    </li>
                    <li>
                        <span class="bul"></span>세번째 리스트
                    </li>
                    <li>
                        <span class="bul"></span>네번째 리스트
                    </li>
                </ul>
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <ul class="li-dot">
                <li>
                    <span class="bul"></span>첫번째 리스트
                </li>
                <li>
                    <span class="bul"></span>두번째 리스트
                </li>
                <li>
                    <span class="bul"></span>세번째 리스트
                </li>
                <li>
                    <span class="bul"></span>네번째 리스트
                </li>
            </ul>
        </div>
    </div>

    <script type="text/javascript">
        $('#add_active').bind('click',function(){
            if($('#test_anim').hasClass('active')){
                $('#test_anim').removeClass('active');
                $(this).text('active 클래스 추가');
            }else{
                $('#test_anim').addClass('active');
                $(this).text('active 클래스 제거');
            }
        });
    </script>

    <style>
        /* List with dot */
        .li-dot li,
        .li-hypn li{
            padding-left: 10px;
            margin-bottom: 5px;
            position: relative;
            font:400 13px/16px 'NotoSansKR','Nanum Gothic';
            color: #000;
        }

        .li-dot li:last-child,
        .li-hypn li:last-child{
            margin-bottom: 0;
        }

        .li-dot li .bul{
            width: 2px;
            height: 2px;
            background: #000;
            position: absolute;
            top: 7px;
            left: 0;
        }

        .li-hypn li .bul{
            width: 4px;
            height:1px;
            background: #000;
            position: absolute;
            top: 8px;
            left: 0;
        }
    </style>

`;
