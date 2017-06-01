module.exports = `
    <div class="code-wrap">
        <div class="prefix">기본 레이아웃</div>
        <div class="code-box">
            <pre class="brush: html">
                <div id="wrap">
                    <!--
                    러닝클럽 배너 있을 경우
                    <div class="topbnn_rclub"></div>
                     -->
                    <div id="header">...</div>
                    <div id="container">...</div>
                    <div id="footer">...</div>

                </div>
            </pre>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">PLP (Product Listing Page)</div>
        <div class="code-box">
            <pre class="brush: html">
                ...
                <div id="container" class="product_list" style="margin-top: 0px;">
                    <div class="ctgr_visual">...</div>
                    <div class="toolbox">...</div>
                    <div class="product_grid grid_2box">...</div>
                    <div class="paging">...</div>

                    <div class="go_top">...</div>
                </div>
                ...
            </pre>
        </div>

        <div class="result_box">
            <div><img src="/images/adidas-mobile-list.jpg" alt=""/></div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">PDP (Product Display Page)</div>
        <div class="code-box">
            <pre class="brush: html">
                ...
                <div id="container" class="product_view product_view_update" style="margin-top: 0px;">
                    <div id="location">...</div>
                    <div class="product_order">...</div>
                    <div class="product_info">...</div>
                    <div class="oth_prodlist">...</div>
                </div>
                ...
            </pre>
        </div>

        <div class="result_box">
            <div style="margin-bottom:15px;"><img src="/images/adidas-mobile-pdp1.jpg" alt=""/></div>
            <div style="margin-bottom:15px;"><img src="/images/adidas-mobile-pdp2.jpg" alt=""/></div>
            <div style="margin-bottom:15px;"><img src="/images/adidas-mobile-pdp3.jpg" alt=""/></div>

            
        </div>
    </div>

`;
