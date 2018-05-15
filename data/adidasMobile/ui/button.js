module.exports = `
    <style>
    .button_area{
    	overflow: hidden;
    }
    .button_area>*{
    	/*margin-bottom: 5px;*/
    	padding: 0 7.5px;
    	box-sizing:border-box;
    	-webkit-box-sizing:border-box;
    }
    .button_area.tac{
    	text-align: center;
    }
    .button_area.tac>*{
        float: none;
        display: inline-block;
        text-align: center;
    }
    .button_area a{
    	display: block;
    	text-align: center;
    	height: 50px;
    	font:15px/50px 'NotoSansKRRegular';
    	color: #fff;
    	background: #000;
    }
    .button_area>div>a:after{
      margin-left: 10px;
    }
    .button_area>*.blue>a{
        background: #0286ce;
    }
    .button_area>*.gray>a{
    	background: #989898;
    }
    .button_area>*.l_gray>a{
    	color: #000;
    	background: #dedede;
    }
    .button_area>*.mild_gray>a{
        color: #fff;
        background: #ccc;
    }
    .button_area.col2>*{
    	width: 50%;
    	float: left;
    }
    .button_area.col3>*{
    	width:33.3%;
    	float: left;
    }
    .button_area.col3>*:nth-child(2){
    	width:33.4%;
    }

    .button_area>*:first-child{
    	padding-left: 15px;
    }

    .button_area>*:last-child{
    	padding-right:15px;
    }
    .button_area.no_pdg>*{
        padding: 0;
    }
    .s_button{
    	display: block;
    	height: 40px;
    	line-height: 40px;
    	color: #000;
    	background: #e2e2e2;
    	border-radius:2px;
    	font-size:13px;
    	text-align: center;
    }
    .s_button.d_gray{
    	background: #989898;
    	color:#fff;
    }
    .buy_btn>a{
        width: 100%;
        height: 60px;
        position: relative;
        float: left;
        text-align: center;
        color: #fff;
        font: 15px/60px 'NotoSansKR';
        background: #0286cd;
    }
    .buy_btn>a.active:first-child::before{
        width:100%;
    }
    .buy_btn>a:first-child::before{
        width: 0;
        height: 100%;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background: #025f8e;
        transition: width 0.3s cubic-bezier(1, 0, 0, 1);
        -webkit-transition: width 0.3s cubic-bezier(1, 0, 0, 1);
    }
    .buy_btn>a:first-child>span{
        position: relative;
        display: inline-block;
        transition: transform 0.3s ease-out 0.15s;
        -webkit-transition: -webkit-transform 0.15s ease-out 0.2s;
    }
    .buy_btn>a.active:first-child>span{
        transform: translate3d(-10px,0,0);
        -webkit-transform: translate3d(-10px,0%,0);
    }

    </style>
    <div class="code-wrap">
        <div class="prefix">기본버튼 (검은색)</div>
        <div class="code-box">
            <pre class="brush: html">
                <div class="button_area">
    				<div><a href="#">확인</a></div>
    			</div>
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <div class="button_area">
				<div><a href="#">확인</a></div>
			</div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">파란색 버튼</div>
        <div class="code-box">
            <pre class="brush: html">
                <div class="button_area">
                    <div class="blue"><a href="#">확인</a></div>
                </div>
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <div class="button_area">
                <div class="blue"><a href="#">확인</a></div>
            </div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">회색 버튼</div>
        <div class="code-box">
            <pre class="brush: html">
                <div class="button_area">
                    <div class="gray"><a href="#">확인</a></div>
                </div>
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <div class="button_area">
                <div class="gray"><a href="#">확인</a></div>
            </div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">연한회색 버튼</div>
        <div class="code-box">
            <pre class="brush: html">
                <div class="button_area">
                    <div class="l_gray"><a href="#">확인</a></div>
                </div>
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <div class="button_area">
                <div class="l_gray"><a href="#">확인</a></div>
            </div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">연한회색 버튼(#ccc)</div>
        <div class="code-box">
            <pre class="brush: html">
                <div class="button_area">
                    <div class="mild_gray"><a href="#">확인</a></div>
                </div>
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <div class="button_area">
                <div class="mild_gray"><a href="#">확인</a></div>
            </div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">패딩 제거 버전</div>
        <div class="code-box">
            <pre class="brush: html">
                <div class="button_area no_pdg">
                    <div><a href="#">확인</a></div>
                </div>
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <div class="button_area no_pdg">
                <div><a href="#">확인</a></div>
            </div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">중앙정렬 버전</div>
        <div class="code-box">
            <pre class="brush: html">
                <div class="button_area tac">
                    <div><a href="#">확인</a></div>
                </div>
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <div class="button_area tac">
                <div><a href="#">확인</a></div>
            </div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">컬럼 50% 버전</div>
        <div class="code-box">
            <pre class="brush: html">
                <div class="button_area col2">
                    <div><a href="#">확인</a></div>
                    <div><a href="#">확인</a></div>
                </div>
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <div class="button_area col2">
                <div><a href="#">확인</a></div>
                <div><a href="#">확인</a></div>
            </div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">컬럼 33% 버전</div>
        <div class="code-box">
            <pre class="brush: html">
                <div class="button_area col3">
                    <div><a href="#">확인</a></div>
                    <div><a href="#">확인</a></div>
                    <div><a href="#">확인</a></div>
                </div>
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <div class="button_area col3">
                <div><a href="#">확인</a></div>
                <div><a href="#">확인</a></div>
                <div><a href="#">확인</a></div>
            </div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">작은 버튼</div>
        <div class="code-box">
            <pre class="brush: html">
                <div class="s_button">
                    <a href="#">확인</a>
                </div>
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <div class="s_button">
                <a href="#">확인</a>
            </div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">작은 버튼 (어두운 회색)</div>
        <div class="code-box">
            <pre class="brush: html">
                <div class="s_button d_gray">
                    <a href="#">확인</a>
                </div>
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <div class="s_button d_gray">
                <a href="#">확인</a>
            </div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">애니메이션</div>
        <div class="code-box">
            <pre class="brush: html">
                <div class="buy_btn">
                    <a href="#" id="test_anim"><span class="icons aft" data-icon="">확인</span></a>
                </div>
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <div class="buy_btn">
                <a href="#" id="test_anim"><span class="icons aft" data-icon="">확인</span></a>
            </div>
            <button id="add_active" style="margin-top:5px;">active 클래스 추가</button>
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


`;
