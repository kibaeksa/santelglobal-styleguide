module.exports = `
    <div class="code-wrap">
        <div class="prefix">기본 레이아웃</div>
        <div class="code-box">
            <pre class="brush: html">
                <div id="wrap">
                    <!--
                    탑배너 있을 경우
                    <div class="top_bnn"></div>
                     -->
                    <div class="skip_nav">...</div>

                    <div id="header-20160315">...</div>
                    <div id="container_r">...</div>
                    <div id="footer_r">...</div>

                    <div class="top_down">...</div>
                </div>
            </pre>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">PLP (Product Listing Page)</div>
        <div class="code-box">
            <pre class="brush: html">
                ...
                <!-- 배경이미지가 있을 경우 설정 -->
                <div id="container_r" style="background:#f5f5f5 url('배너이미지.jpg') center 0 no-repeat;">
                    <div id="contents_r">
                        <div class="location_r white">...</div>
                        <!-- 배경이미지가 있을 경우 배경만큼 margin-top 설정 -->
                        <div class="category_tit white" style="margin-top: 212px;">...</div>

                        <div class="list_container">
                            <div id="snb">...</div>
                            <div class="cont758">...</div>
                        </div>
                    </div>
                </div>
                ...
            </pre>
        </div>

        <div class="result_box">
            <div><img src="/images/adidas-web-list.jpg" alt=""/></div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">PDP (Product Display Page)</div>
        <div class="code-box">
            <pre class="brush: html">
                ...
                <div id="container_r" style="background:#fff;">
                    <!-- #contents_r 이 부분은 필요없는 부분이라 삭제요청 예정 -->
                    <div id="contents_r" style="width:100%;padding-bottom:0;">
                        <div class="location_r white">...</div>
                        <div class="product-main">
                            <div class="product-infomation">...</div>
                            <div class="product-description">...</div>
                            <div class="product-innovations">...</div>
                            <div class="product-reviews">...</div>
                            <div class="products-list-tpl related-products">...</div>
                            <div class="products-list-tpl related-products viewed_items">...</div>
                        </div>
                    </div>
                </div>
                ...
            </pre>
        </div>

        <div class="result_box">
            <div style="margin-bottom:15px;"><img src="/images/adidas-web-pdp1.jpg" alt=""/></div>
            <div style="margin-bottom:15px;"><img src="/images/adidas-web-pdp2.jpg" alt=""/></div>
            <div style="margin-bottom:15px;"><img src="/images/adidas-web-pdp3.jpg" alt=""/></div>
            <div style="margin-bottom:15px;"><img src="/images/adidas-web-pdp4.jpg" alt=""/></div>
            <div><img src="/images/adidas-web-pdp5.jpg" alt=""/></div>
        </div>
    </div>

`;
