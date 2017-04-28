module.exports = `
    <div class="code-wrap">
        <div class="prefix">체크박스</div>
        <div class="code-box">
            <pre class="brush: html">
                // 기본 체크박스
                <div class="input-ctm input-check-ctm">
                    <input type="checkbox" id="check1">
                    <label for="check1">
                        <a class="ctm-box spt_bg" href="javascript:void(0)">
                            <span class=" spt_bg"></span>
                        </a>
                        기본 체크박스
                    </label>
                </div>

                // 체크 시 파란라인
                <div class="input-ctm input-check-ctm ctm-check-blue">
                    <input type="checkbox" id="check1-blue">
                    <label for="check1-blue">
                        <a class="ctm-box spt_bg" href="javascript:void(0)">
                            <span class=" spt_bg"></span>
                        </a>
                        체크 시 파란색 라인
                    </label>
                </div>

                // 작은 체크박스
                <div class="input-ctm input-check-ctm small">
                    <input type="checkbox" id="check2">
                    <label for="check2">
                        <a class="ctm-box spt_bg" href="javascript:void(0)">
                            <span class=" spt_bg"></span>
                        </a>
                        작은 체크박스
                    </label>
                </div>

                // 작고 checked 시 파란색 버전의 체크박스
                <div class="input-ctm input-check-ctm small blue">
                    <input type="checkbox" id="check1_rea3">
                    <label for="check3">
                        <a class="ctm-box spt_bg" href="javascript:void(0)">
                            <span class=" spt_bg"></span>
                        </a>
                        타입1
                    </label>
                </div>

                // checked 추가
                // checked 는 input 태그에 넣어야 합니다.
                <div class="input-ctm input-check-ctm">
                    <input type="checkbox" id="check_checked" checked>
                    <label for="check_checked">
                        <a class="ctm-box spt_bg" href="javascript:void(0)">
                            <span class=" spt_bg"></span>
                        </a>
                        checked 속성
                    </label>
                </div>

            </pre>
        </div>

        <div class="result_box">

            <div class="input-ctm input-check-ctm" style="margin-right:40px;">
                <input type="checkbox" id="check1_real">
                <label for="check1_real">
                    <a class="ctm-box spt_bg" href="javascript:void(0)">
                        <span class=" spt_bg"></span>
                    </a>
                    타입1
                </label>
            </div>

            <div class="input-ctm input-check-ctm ctm-check-blue" style="margin-right:40px;">
                <input type="checkbox" id="check1-blue">
                <label for="check1-blue">
                    <a class="ctm-box spt_bg" href="javascript:void(0)">
                        <span class=" spt_bg"></span>
                    </a>
                    타입2
                </label>
            </div>




            <div class="input-ctm input-check-ctm small" style="margin-right:40px;">
                <input type="checkbox" id="check1_rea2">
                <label for="check1_rea2">
                    <a class="ctm-box spt_bg" href="javascript:void(0)">
                        <span class=" spt_bg"></span>
                    </a>
                    타입3
                </label>
            </div>

            <div class="input-ctm input-check-ctm small blue" style="margin-right:40px;">
                <input type="checkbox" id="check1_rea3">
                <label for="check1_rea3">
                    <a class="ctm-box spt_bg" href="javascript:void(0)">
                        <span class=" spt_bg"></span>
                    </a>
                    타입4
                </label>
            </div>

            <div class="input-ctm input-check-ctm">
                <input type="checkbox" id="check_checked_real" checked>
                <label for="check_checked_real">
                    <a class="ctm-box spt_bg" href="javascript:void(0)">
                        <span class=" spt_bg"></span>
                    </a>
                    checked 속성
                </label>
            </div>

        </div>
    </div>



    <div class="code-wrap">
        <div class="prefix">라디오버튼</div>
        <div class="code-box">
            <pre class="brush: html">
                <div class="input-ctm input-radio-ctm">
                    <input type="radio" id="radio1" name="radio_group" value="OPS1">
                    <label for="radio1"><span class="ctm-box spt_bg"><span class="spt_bg"></span></span>선택1</label>
                </div>

                <div class="input-ctm input-radio-ctm">
                    <input type="radio" id="radio2" name="radio_group" value="OPS2">
                    <label for="radio2"><span class="ctm-box spt_bg"><span class="spt_bg"></span></span>선택2</label>
                </div>

                // checked 추가
                // checked 는 input 태그에 넣어야 합니다.
                <div class="input-ctm input-radio-ctm">
                    <input type="radio" id="radio3" name="radio_group" value="OPS3" checked>
                    <label for="radio3"><span class="ctm-box spt_bg"><span class="spt_bg"></span></span>선택3</label>
                </div>

            </pre>
        </div>

        <div class="result_box">

            <div class="input-ctm input-radio-ctm" style="margin-right:40px;">
                <input type="radio" id="radio_real1" name="radio_group" value="OPS1">
                <label for="radio_real1"><span class="ctm-box spt_bg"><span class="spt_bg"></span></span>선택1</label>
            </div>

            <div class="input-ctm input-radio-ctm" style="margin-right:40px;">
                <input type="radio" id="radio_real2" name="radio_group" value="OPS2">
                <label for="radio_real2"><span class="ctm-box spt_bg"><span class="spt_bg"></span></span>선택2</label>
            </div>


            <div class="input-ctm input-radio-ctm">
                <input type="radio" id="radio_real3" name="radio_group" value="OPS3" checked>
                <label for="radio_real3"><span class="ctm-box spt_bg"><span class="spt_bg"></span></span>선택3</label>
            </div>

        </div>
    </div>

    <script type="text/javascript" src="//image.adidas.co.kr/js/customForm.js"></script>
    <script type="text/javascript">
        $.fn.cmtInputInit ();
    </script>

`;
