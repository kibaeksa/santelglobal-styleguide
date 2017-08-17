module.exports = `
    <link rel="stylesheet" type="text/css" href="/css/conv/campaign.css">
    <div class="notice">
        <dl>
            <dt>주의사항</dt>
            <dd>
                <ul>
                    <li><span class="code">&lt;link type="text/css" rel="stylesheet" href="/css/adidas/event/campaign.css"/&gt;</span></li>
                    <li><span class="code">&lt;script type="text/javascript" src="/js/adidas/event/commonCampaign.js"&gt;&lt;/script&gt;<br/>

                    <li>id="container_r" 에 class="campaign-content" 추가</li>
                </ul>
            </dd>
        </dl>
    </div>

    <div style="margin-bottom:30px;max-width:1200px;min-width:1000px;width:100%;">
        <img src="/images/image-grid-sample.jpg" alt="" style="width:100%;"/>
    </div>

    <div class="code-wrap">
        <div class="prefix">JAVASCRIPT 프로퍼티 설명</div>
        <div class="code-box">
            <pre class="brush: javascript">
                {
                    thumb               // 섬네일 이미지
                    image               // 팝업 눌렀을 때 나오는 큰 이미지
                    popupContents       // 팝업안에 HTML 있을 경우 HTML 소스
                }

                /* img1_2 부분에만 있는 프로퍼티 */
                {
                    html                // 박스안에 들어갈 HTML 소스
                }

            </pre>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">JAVASCRIPT</div>
        <div class="code-box">
            <pre class="brush: javascript">

                Campaign().ImageGrid('#image-grid',{
                    img_fixed : {
                        thumb : '//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ImageGrid_1_Soccer_480x960_June22_tcm65-161365.jpg?locale=en_GB&device=desktop&version=2',
                        image : '//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ImageGridExpanded_1_Soccer_1920x1000_June22_tcm65-161353.jpg?locale=en_GB&device=desktop&version=2',
                        popupContents : '&lt;button&gt;안녕&lt;/button&gt;'
                    },
                    img1_1 : {
                        thumb : '//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ImageGrid_2_Training_640x640_June22_tcm65-161389.jpg?locale=en_GB&device=desktop&version=2',
                        image : '//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ImageGridExpanded_2_Training_1920x1000_June22_tcm65-161377.jpg?locale=en_GB&device=desktop&version=2'
                    },
                    img1_2 : {
                        thumb : '//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ImageGrid_4_Training_960x640_June22_tcm65-161391.jpg?locale=en_GB&device=desktop&version=2',
                        html : '&lt;h4 style="color:#fff;font-size:26px;text-align:center;"&gt;TEST&lt;/h4&gt;'
                    },
                    img2_1 : {
                        thumb : '//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ImageGrid_3_Training_640x640_June22_tcm65-161390.jpg?locale=en_GB&device=desktop&version=2'
                    },
                    img2_2 : {
                        thumb : '//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ImageGrid_5_Training_640x640_June22_tcm65-161393.jpg?locale=en_GB&device=desktop&version=2'
                    },
                    img2_3 : {
                        thumb : '//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ImageGrid_6_Training_640x640_June22_tcm65-161394.jpg?locale=en_GB&device=desktop&version=2'
                    }
                });

            </pre>
        </div>

        <div class="prefix">HTML</div>
        <div class="code-box">
            <pre class="brush: html">
                &lt;div id="image-grid"&gt;&lt;/div&gt;
            </pre>
        </div>

        <div class="result_box">
            <div class="campaign-content">
                <div id="image-grid"></div>
            </div>

        </div>
    </div>

    <script type="text/javascript" src="/js/conv/commonCampaign.js"></script>


    <script>
        Campaign().ImageGrid('#image-grid',{
            img_fixed : {
                thumb : '//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ImageGrid_1_Soccer_480x960_June22_tcm65-161365.jpg?locale=en_GB&device=desktop&version=2',
                image : '//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ImageGridExpanded_1_Soccer_1920x1000_June22_tcm65-161353.jpg?locale=en_GB&device=desktop&version=2',
                popupContents : '<button>안녕</button>'
            },
            img1_1 : {
                thumb : '//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ImageGrid_2_Training_640x640_June22_tcm65-161389.jpg?locale=en_GB&device=desktop&version=2',
                image : '//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ImageGridExpanded_2_Training_1920x1000_June22_tcm65-161377.jpg?locale=en_GB&device=desktop&version=2'
            },
            img1_2 : {
                thumb : '//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ImageGrid_4_Training_960x640_June22_tcm65-161391.jpg?locale=en_GB&device=desktop&version=2',
                html : '<h4 style="color:#fff;font-size:26px;text-align:center;">TEST</h4>'
            },
            img2_1 : {
                thumb : '//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ImageGrid_3_Training_640x640_June22_tcm65-161390.jpg?locale=en_GB&device=desktop&version=2'
            },
            img2_2 : {
                thumb : '//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ImageGrid_5_Training_640x640_June22_tcm65-161393.jpg?locale=en_GB&device=desktop&version=2'
            },
            img2_3 : {
                thumb : '//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ImageGrid_6_Training_640x640_June22_tcm65-161394.jpg?locale=en_GB&device=desktop&version=2'
            }
        });
    </script>
`;
