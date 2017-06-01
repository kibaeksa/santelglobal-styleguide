module.exports = `
    <div>
        <ul style="margin-bottom:30px;">
            <li style="margin-bottom:3px;font-size:13px;">* 팝업은 <strong style="font:700 italic 14px 'noto sans kr';">modal-popup-wrapper</strong> 클래스를 넣어주어야 합니다.</li>
            <li style="font-size:13px;">* 클릭부분은 <strong style="font:700 italic 14px 'noto sans kr';">modal-popup-click</strong> 클래스를 넣어주어야 합니다.</li>
        </ul>
    </div>
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

                &lt;button class="modal-popup-click" data-modalpop-click="default-popup"&gt;팝업 열기&lt;/button&gt;
            </pre>
        </div>

        <div class="result_box">
            <button class="modal-popup-click" data-modalpop-click="default-popup-real">팝업 열기</button>
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

                &lt;button class="modal-popup-click" data-modalpop-click="fade-popup"&gt;팝업 열기&lt;/button&gt;

            </pre>
        </div>

        <div class="result_box">
            <button class="modal-popup-click" data-modalpop-click="fade-popup-real">팝업 열기</button>
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

    <script type="text/javascript" src="/js/modalPopup.js"></script>

`;
