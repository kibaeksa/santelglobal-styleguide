module.exports = `

    <div class="code-wrap">
        <div class="prefix">기본 팝업</div>
        <div class="code-box">
            <pre class="brush: html">
                &lt;div class="modal-popup-wrapper"
                     data-modalpop=""
                     data-modalpop-name="default-popup"
                     data-modalpop-width="600"
                     data-modalpop-height="500"
                &gt;
                    &lt;div class="overlay"&gt;&lt;/div&gt;
                    &lt;div class="popup"&gt;
                        &lt;div class="popup-header"&gt;
                            &lt;h2&gt;팝업 제목&lt;/h2&gt;
                            &lt;a href="javascript:void(0)" class="close"&gt;&lt;span class="spt_bg"&gt;&lt;/span&gt;&lt;/a&gt;
                        &lt;/div&gt;
                        &lt;div class="popup-contents"&gt;
                            팝업내용
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;

                &lt;button data-modalpop-click="default-popup"&gt;팝업 열기&lt;/button&gt;
            </pre>
        </div>

        <div class="result_box">
            <button data-modalpop-click="default-popup-real">팝업 열기</button>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">윈도우 로딩 시 자동오픈 팝업</div>
        <div class="code-box">
            <pre class="brush: html">
                &lt;div class="modal-popup-wrapper"
                     data-modalpop=""
                     data-modalpop-name="fade-popup"
                     data-modalpop-width="600"
                     data-modalpop-height="500"
                     data-modalpop-autoopen=""
                &gt;
                    &lt;div class="overlay"&gt;&lt;/div&gt;
                    &lt;div class="popup"&gt;
                        &lt;div class="popup-header"&gt;
                            &lt;h2&gt;자동오픈 팝업&lt;/h2&gt;
                            &lt;a href="javascript:void(0)" class="close"&gt;&lt;span class="spt_bg"&gt;&lt;/span&gt;&lt;/a&gt;
                        &lt;/div&gt;
                        &lt;div class="popup-contents"&gt;
                            팝업내용
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;

            </pre>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">페이드인 효과 팝업</div>
        <div class="code-box">
            <pre class="brush: html">
                &lt;div class="modal-popup-wrapper"
                     data-modalpop=""
                     data-modalpop-name="fade-popup"
                     data-modalpop-width="600"
                     data-modalpop-height="500"
                     data-modalpop-fade=""
                &gt;
                    &lt;div class="overlay"&gt;&lt;/div&gt;
                    &lt;div class="popup"&gt;
                        &lt;div class="popup-header"&gt;
                            &lt;h2&gt;팝업 제목&lt;/h2&gt;
                            &lt;a href="javascript:void(0)" class="close"&gt;&lt;span class="spt_bg"&gt;&lt;/span&gt;&lt;/a&gt;
                        &lt;/div&gt;
                        &lt;div class="popup-contents"&gt;
                            팝업내용
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;

                &lt;button data-modalpop-click="fade-popup"&gt;팝업 열기&lt;/button&gt;

            </pre>
        </div>

        <div class="result_box">
            <button data-modalpop-click="fade-popup-real">팝업 열기</button>
        </div>
    </div>



    <div class="modal-popup-wrapper"
         data-modalpop=""
         data-modalpop-name="default-popup-real"
         data-modalpop-width="600"
         data-modalpop-height="500"
    >
        <div class="overlay"></div>
        <div class="popup">
            <div class="popup-header">
                <h2>기본 팝업</h2>
                <a href="javascript:void(0)" class="close"><span class="spt_bg"></span></a>
            </div>
            <div class="popup-contents">
                팝업내용
            </div>
        </div>
    </div>

    <div class="modal-popup-wrapper"
         data-modalpop=""
         data-modalpop-name="fade-popup-real"
         data-modalpop-width="600"
         data-modalpop-height="500"
         data-modalpop-fade=""
    >
        <div class="overlay"></div>
        <div class="popup">
            <div class="popup-header">
                <h2>페이드인 팝업</h2>
                <a href="javascript:void(0)" class="close"><span class="spt_bg"></span></a>
            </div>
            <div class="popup-contents">
                팝업내용
            </div>
        </div>
    </div>

    <div class="modal-popup-wrapper"
         data-modalpop=""
         data-modalpop-name="auto-popup-real"
         data-modalpop-width="600"
         data-modalpop-height="500"
         data-modalpop-autoopen=""
    >
        <div class="overlay"></div>
        <div class="popup">
            <div class="popup-header">
                <h2>자동오픈 팝업</h2>
                <a href="javascript:void(0)" class="close"><span class="spt_bg"></span></a>
            </div>
            <div class="popup-contents">
                팝업내용
            </div>
        </div>
    </div>

    <script type="text/javascript" src="//image.adidas.co.kr/js/modalPopup.min.js"></script>

`;
