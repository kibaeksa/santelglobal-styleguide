module.exports = `
    <ul style="margin-bottom:30px;">
        <li style="margin-bottom:3px;font-size:13px;">* 팝업은 <strong style="font:700 italic 14px 'noto sans kr';">modal-popup-wrapper</strong> 클래스를 넣어주어야 합니다.</li>
        <li style="font-size:13px;">* 클릭부분은 <strong style="font:700 italic 14px 'noto sans kr';">modal-popup-click</strong> 클래스를 넣어주어야 합니다.</li>
    </ul>
    <div class="adi_mo">
        <div class="code-wrap">
            <div class="prefix">기본 팝업</div>
            <div class="code-box">
                <pre class="brush: html">

                    &lt;div class="modal-popup-wrapper"
                        data-modalpop=""
                        data-modalpop-name="popup_name1"
                    &gt;
                        &lt;div class="overlay"&gt;&lt;/div&gt;
                        &lt;div class="popup"&gt;
                            &lt;div class="popup-header"&gt;
                                &lt;h2&gt;기본팝업&lt;/h2&gt;
                                &lt;a href="javascript:void(0)" class="close_x_btn"&gt;&lt;/a&gt;
                            &lt;/div&gt;

                            &lt;div class="popup-contents"&gt;
                                &lt;p&gt;기본 팝업입니다.&lt;/p&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;

                    &lt;button class="modal-popup-click" data-modalpop-click="popup_name1"&gt;기본팝업&lt;/button&gt;

                </pre>
            </div>

            <div class="result_box">
                <button class="modal-popup-click" data-modalpop-click="popup_name1_real">기본팝업</button><br/><br/><br/>
            </div>
        </div>

        <div class="code-wrap">
            <div class="prefix">수직중앙정렬 미사용</div>
            <div class="code-box">
                <pre class="brush: html">

                    &lt;div class="modal-popup-wrapper"
                        data-modalpop=""
                        data-modalpop-valign="top"
                        data-modalpop-name="popup_name_top"
                    &gt;
                        &lt;div class="overlay"&gt;&lt;/div&gt;
                        &lt;div class="popup"&gt;
                            &lt;div class="popup-header"&gt;
                                &lt;h2&gt;수직중앙정렬 아닌것&lt;/h2&gt;
                                &lt;a href="javascript:void(0)" class="close_x_btn"&gt;&lt;/a&gt;
                            &lt;/div&gt;

                            &lt;div class="popup-contents"&gt;
                                &lt;p&gt;맨 위에 붙을겁니다 아마도.&lt;/p&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;

                    &lt;button class="modal-popup-click" data-modalpop-click="popup_name_top"&gt;수직중앙정렬 미사용&lt;/button&gt;

                </pre>
            </div>

            <div class="result_box">
                <button class="modal-popup-click" data-modalpop-click="popup_name_top_real">수직중앙정렬 미사용</button><br/><br/><br/>
            </div>
        </div>

        <div class="code-wrap">
            <div class="prefix">윈도우 로딩 시 자동오픈 팝업</div>
            <div class="code-box">
                <pre class="brush: html">
                    &lt;div class="modal-popup-wrapper"
                        data-modalpop=""
                        data-modalpop-name="popup_name2"
                        data-modalpop-autoopen=""
                    &gt;
                        &lt;div class="overlay"&gt;&lt;/div&gt;
                        &lt;div class="popup"&gt;
                            &lt;div class="popup-header"&gt;
                                &lt;h2&gt;자동 오픈팝업&lt;/h2&gt;
                                &lt;a href="javascript:void(0)" class="close_x_btn"&gt;&lt;/a&gt;
                            &lt;/div&gt;

                            &lt;div class="popup-contents"&gt;
                                &lt;p&gt;자동 오픈 팝업입니다.&lt;/p&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;

                </pre>
            </div>
        </div>

        <div class="modal-popup-wrapper"
            data-modalpop=""
            data-modalpop-name="popup_name1_real"
        >
            <div class="overlay"></div>
            <div class="popup">
                <div class="popup-header">
                    <h2>기본팝업</h2>
                    <a href="javascript:void(0)" class="close_x_btn"></a>
                </div>

                <div class="popup-contents">
                    <p>기본 팝업입니다.</p>
                </div>
            </div>
        </div>

        <div class="modal-popup-wrapper"
            data-modalpop=""
            data-modalpop-name="popup_name2_real"
            data-modalpop-autoopen=""
        >
            <div class="overlay"></div>
            <div class="popup">
                <div class="popup-header">
                    <h2>자동 오픈팝업</h2>
                    <a href="javascript:void(0)" class="close_x_btn"></a>
                </div>

                <div class="popup-contents">
                    <p>자동 오픈 팝업입니다.</p>
                </div>
            </div>
        </div>

        <div class="modal-popup-wrapper"
            data-modalpop=""
            data-modalpop-valign="top"
            data-modalpop-name="popup_name_top_real"
        >
            <div class="overlay"></div>
            <div class="popup">
                <div class="popup-header">
                    <h2>수직중앙정렬 아닌 것</h2>
                    <a href="javascript:void(0)" class="close_x_btn"></a>
                </div>

                <div class="popup-contents">
                    <p>맨 위에 붙을겁니다 아마도.</p>
                </div>
            </div>
        </div>

    </div>

    <script type="text/javascript" src="/js/modalPopup.mo.js"></script>

`;
