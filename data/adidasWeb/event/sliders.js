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

    <div class="code-wrap">
        <div class="prefix">HTML</div>
        <div class="code-box">
            <pre class="brush: html">
                &lt;div class="carousel-wrapper">
                    &lt;div class="carousel-slider"&gt;
                        &lt;ul class="clfix"&gt;
                            &lt;li&gt;
                                &lt;img src="//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ItemSelector_Image_Football_1500x800_June22_tcm65-158401.png?locale=en_GB&device=desktop&version=5" alt=""&gt;
                            &lt;/li&gt;
                            &lt;li&gt;
                                &lt;img src="//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ItemSelector_Image_Baseball_1500x800_June22_tcm65-161307.png?locale=en_GB&device=desktop&version=2" alt=""&gt;
                            &lt;/li&gt;
                            &lt;li&gt;
                                &lt;img src="//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ItemSelector_Image_Soccer_1500x800_June22_tcm65-161351.png?locale=en_GB&device=desktop&version=2" alt=""&gt;
                            &lt;/li&gt;
                            &lt;li&gt;
                                &lt;img src="//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ItemSelector_Image_Basketball_1500x800_June22_tcm65-161329.png?locale=en_GB&device=desktop&version=2" alt=""&gt;
                            &lt;/li&gt;
                            &lt;li&gt;
                                &lt;img src="//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ItemSelector_Image_Volleyball_1500x800_June22_tcm65-161395.png?locale=en_GB&device=desktop&version=2" alt=""&gt;
                            &lt;/li&gt;
                            &lt;li&gt;
                                &lt;img src="//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ItemSelector_Image_Training_1500x800_June22_tcm65-161373.png?locale=en_GB&device=desktop&version=3" alt=""&gt;
                            &lt;/li&gt;

                        &lt;/ul&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            </pre>
        </div>

        <div class="prefix">JAVASCRIPT</div>
        <div class="code-box">
            <pre class="brush: javascript">

                var carosel = Campaign().CarouselSlider('.carousel-wrapper').init({
                    width: 950,       // item박스 크기
                    margin : 80,      // 여백
                    speed : 500,      // 속도
                    arrow : true,     // 기본 화살표
                    index : 4,        // 처음 슬라이드 위치
                    events : {
                        /* Events */
                        init : function(){   // 최초 로딩 시

                        },
                        translate : function(event){  // 움직임 시작
                            // event.item   현재 엘리먼트
                            // event.index  현재 index
                        },
                        translateEnd : function(event){   // 움직임 끝
                            // event.item   현재 엘리먼트
                            // event.index  현재 index
                        },
                        resize : function(){   // 리사이징 했을 떄
                            
                        }
                    }
                });

            </pre>
        </div>

        <div class="result_box">
            <div class="campaign-content">
                <div class="carousel-wrapper" data-cparallax="">
                    <div class="carousel-slider">
                        <ul class="clfix">
                            <li>
                                <img src="//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ItemSelector_Image_Football_1500x800_June22_tcm65-158401.png?locale=en_GB&device=desktop&version=5" alt="" style="width:100%;">
                            </li>
                            <li>
                                <img src="//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ItemSelector_Image_Baseball_1500x800_June22_tcm65-161307.png?locale=en_GB&device=desktop&version=2" alt="" style="width:100%;">
                            </li>
                            <li>
                                <img src="//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ItemSelector_Image_Soccer_1500x800_June22_tcm65-161351.png?locale=en_GB&device=desktop&version=2" alt="" style="width:100%;">
                            </li>
                            <li>
                                <img src="//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ItemSelector_Image_Basketball_1500x800_June22_tcm65-161329.png?locale=en_GB&device=desktop&version=2" alt="" style="width:100%;">
                            </li>
                            <li>
                                <img src="//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ItemSelector_Image_Volleyball_1500x800_June22_tcm65-161395.png?locale=en_GB&device=desktop&version=2" alt="" style="width:100%;">
                            </li>
                            <li>
                                <img src="//brand.campaign.adidas.com/Images/Sport17_July_Desktop_CLP_ItemSelector_Image_Training_1500x800_June22_tcm65-161373.png?locale=en_GB&device=desktop&version=3" alt="" style="width:100%;">
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="/js/conv/commonCampaign.js"></script>
    <script>
        var carosel = Campaign().CarouselSlider('.carousel-wrapper').init({
            width: 950,
            margin : 80,
            speed : 500,
            arrow : true,
            index : 4,
            events : {
                init : function(){

                },
                translate : function(event){

                },
                translateEnd : function(event){
                    console.log('end');
                },
                resize : function(event){

                }
            }
        });
    </script>

`;
