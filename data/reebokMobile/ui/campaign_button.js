module.exports = `
    <div class="code-wrap">
        <div class="prefix">기본버튼 (검은색)</div>
        <div class="code-box">
            <pre class="brush: html">
                <a href="#" class="btn-area">
                    <span>캠페인 버튼</span>
                </a>
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <a href="#" class="btn-area">
                <span>캠페인 버튼</span>
            </a>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">파란색 버튼</div>
        <div class="code-box">
            <pre class="brush: html">
                <a href="#" class="btn-ctm btn-blue">
                    <span>파란색<span class="spt_bg"></span></span>
                </a>
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <a href="#" class="btn-ctm btn-blue">
                <span>파란색<span class="spt_bg"></span></span>
            </a>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">화살표 있는 버전</div>
        <div class="code-box">
            <pre class="brush: html">
                <a href="#" class="btn-ctm btn-blue arrow">
                    <span>화살표<span class="spt_bg"></span></span>
                </a>
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <a href="#" class="btn-ctm btn-blue arrow">
                <span>화살표<span class="spt_bg"></span></span>
            </a>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">애니메이션</div>
        <div class="code-box">
            <pre class="brush: html">
                //active 클래스 추가
                <a href="#" class="btn-ctm btn-blue anim">
                    <span>애니메이션<span class="spt_bg"></span></span>
                </a>
            </pre>
        </div>
        <div class="result_box" style="width:400px;">
            <a id="test_anim" href="#" class="btn-ctm btn-blue anim">
                <span>애니메이션<span class="spt_bg"></span></span>
            </a>
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
