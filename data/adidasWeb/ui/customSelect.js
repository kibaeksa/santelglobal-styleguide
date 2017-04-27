module.exports = `
    <div class="code-wrap">
        <div class="prefix">기본 셀렉트박스</div>
        <div class="code-box">
            <pre class="brush: html">
                <div class="selectbox-ctm">
                    <a href="javascript:void(0)">셀렉트 박스</a>
                    <div class="arrow spt_bg"></div>
                    <div class="select-contents option-list">
                    	<ul>
                        	<li data-option-value="value1"><a href="javascript:void(0)">옵션1</a></li>
                            <li data-option-value="value2"><a href="javascript:void(0)">옵션2</a></li>
                            <li data-option-value="값3"><a href="javascript:void(0)">옵션3</a></li>
                            <li data-option-value="값4"><a href="javascript:void(0)">옵션4</a></li>
                        </ul>
                    </div>
                </div>
            </pre>
        </div>

        <div class="result_box" style="width:400px;">
            <div class="selectbox-ctm">
                <a href="javascript:void(0)">셀렉트 박스</a>
                <div class="arrow spt_bg"></div>
                <div class="select-contents option-list">
                    <ul>
                        <li data-option-value="value1"><a href="javascript:void(0)">옵션1</a></li>
                        <li data-option-value="value2"><a href="javascript:void(0)">옵션2</a></li>
                        <li data-option-value="값3"><a href="javascript:void(0)">옵션3</a></li>
                        <li data-option-value="값4"><a href="javascript:void(0)">옵션4</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="code-wrap">
        <div class="prefix">파란색 화살표 셀렉트 박스</div>
        <div class="code-box">
            <pre class="brush: html">
                <div class="selectbox-ctm blue">
                    <a href="javascript:void(0)">셀렉트 박스</a>
                    <div class="arrow spt_bg"></div>
                    <div class="select-contents option-list">
                    	<ul>
                        	<li data-option-value="value1"><a href="javascript:void(0)">옵션1</a></li>
                            <li data-option-value="value2"><a href="javascript:void(0)">옵션2</a></li>
                            <li data-option-value="값3"><a href="javascript:void(0)">옵션3</a></li>
                            <li data-option-value="값4"><a href="javascript:void(0)">옵션4</a></li>
                        </ul>
                    </div>
                </div>
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <div class="selectbox-ctm blue">
                <a href="javascript:void(0)">파란색 화살표 셀렉트 박스</a>
                <div class="arrow spt_bg"></div>
                <div class="select-contents option-list">
                    <ul>
                        <li data-option-value="value1"><a href="javascript:void(0)">옵션1</a></li>
                        <li data-option-value="value2"><a href="javascript:void(0)">옵션2</a></li>
                        <li data-option-value="값3"><a href="javascript:void(0)">옵션3</a></li>
                        <li data-option-value="값4"><a href="javascript:void(0)">옵션4</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="code-wrap">
        <div class="prefix">callback 이벤트 설정하기</div>
        <div class="code-box">
            <pre class="brush: html">
                <div class="selectbox-ctm blue" id="bind-selectbox">
                    <a href="javascript:void(0)">이벤트 바인딩 셀렉트 박스</a>
                    <div class="arrow spt_bg"></div>
                    <div class="select-contents option-list">
                    	<ul>
                        	<li data-option-value="value1"><a href="javascript:void(0)">옵션1</a></li>
                            <li data-option-value="value2"><a href="javascript:void(0)">옵션2</a></li>
                            <li data-option-value="값3"><a href="javascript:void(0)">옵션3</a></li>
                            <li data-option-value="값4"><a href="javascript:void(0)">옵션4</a></li>
                        </ul>
                    </div>
                </div>
            </pre>
        </div>
        <div class="code-box">
            <pre class="brush: js">
                $('#bind-selectbox').ctmSelectSetCallback({
                    //클릭 적용 전
                    before : function(currentValue , index){
                        alert('값 : '+currentValue);
                        console.log(currentValue , index); //클릭 한 value 값 , li태그 index값
                        console.log(this); //selected 클래스가 추가 안된 현재 li 태그
                    },
                    //클릭 적용 후
                    after : function(currentValue , index){
                        alert('값 : '+currentValue);
                        console.log(currentValue , index); //클릭 한 value 값 , li태그 index값
                        console.log(this); //selected 클래스가 추가 된 현재 li 태그
                    }
                });
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <div class="selectbox-ctm" id="bind-selectbox-result">
                <a href="javascript:void(0)">이벤트 바인딩 셀렉트 박스</a>
                <div class="arrow spt_bg"></div>
                <div class="select-contents option-list">
                    <ul>
                        <li data-option-value="value1"><a href="javascript:void(0)">옵션1</a></li>
                        <li data-option-value="value2"><a href="javascript:void(0)">옵션2</a></li>
                        <li data-option-value="값3"><a href="javascript:void(0)">옵션3</a></li>
                        <li data-option-value="값4"><a href="javascript:void(0)">옵션4</a></li>
                    </ul>
                </div>
            </div>
        </div>


    </div>

    <script type="text/javascript" src="//image.adidas.co.kr/js/customForm.js"></script>
    <script type="text/javascript">
        $.fn.cmtSelectInit();

        $('#bind-selectbox-result').ctmSelectSetCallback({
            before : function(currentValue , index){
                console.log(currentValue , index);
                console.log(this);
            },
            after : function(currentValue , index){
                alert('값 : '+currentValue);
                console.log(currentValue , index);
                console.log(this);
            }
        });
    </script>

`;
