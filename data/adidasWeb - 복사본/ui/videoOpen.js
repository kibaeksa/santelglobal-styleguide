module.exports = `
    <style type="text/css">
        #video-modal-popup{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 701;
            }

            #video-modal-popup .overlay{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: #000;
            -ms-filter: alpha(opacity=70);
            filter: alpha(opacity=70);
            opacity: 0.7;
            z-index: 700;
            }

            #video-modal-popup .popup{
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 701;
            background: #000;
            opacity: 0;
            transform:scale(0.7);
            -webkit-transform:scale(0.7);
            transform-origin: center;
            -webkit-transform-origin: center;;

            transition:all 0.2s;
            -webkit-transition:all 0.2s;
            }

            #video-modal-popup .popup .close{
            width: 50px;
            height: 50px;
            background-position: 0 -685px;
            position: absolute;
            top: -50px;
            right: 0;
            }

            #video-modal-popup.loaded .popup{
            opacity: 1;
            transform:scale(1);
            -webkit-transform:scale(1);
        }

    </style>
    <div class="code-wrap">
        <div class="prefix">기본  (풀화면)</div>
        <p class="desc">유투브 아이디 값만 전달하면 풀화면으로 뜸</p>
        <div class="code-box">
            <pre class="brush: html">
                <button onclick="openModalVideoViewer('EspMCuyslXY')">영상 열기</button>
            </pre>
        </div>

        <div class="result_box">
            <div>

                <button onclick="openModalVideoViewer('EspMCuyslXY')">영상 열기</button>
            </div>
        </div>
    </div>


    <div class="code-wrap">
        <div class="prefix">가로값만 넣었을 때</div>
        <p class="desc">가로값을 전달해주면 가로값으로 높이를 계산하여 (대략 16:9) 나옴</p>
        <div class="code-box">
            <pre class="brush: html">
                <button onclick="openModalVideoViewer('EspMCuyslXY',900)">영상 열기</button>
            </pre>
        </div>

        <div class="result_box">
            <div>

                <button onclick="openModalVideoViewer('EspMCuyslXY',900)">영상 열기</button>
            </div>
        </div>
    </div>

    <div class="code-wrap">
        <div class="prefix">가로/세로 값 넣었을 때</div>
        <p class="desc">가로/세로값 크기의 영상 노출</p>
        <div class="code-box">
            <pre class="brush: html">
                <button onclick="openModalVideoViewer('EspMCuyslXY',500,500)">영상 열기</button>
            </pre>
        </div>

        <div class="result_box">
            <div>

                <button onclick="openModalVideoViewer('EspMCuyslXY',500,500)">영상 열기</button>
            </div>
        </div>
    </div>



    <script src="http://imagem.adidas.co.kr/MO/js/jquery/jquery-1.4.2.js"></script>
    <script src="http://imagem.adidas.co.kr/js/swipe.js"></script>


    <script type="text/javascript">
        function openModalVideoViewer(ytbId , width , height){
            var videoWidth = width == undefined ? '100%' : width;
            var videoHeight = width == undefined ? '100%' : height;
            var popupStyle;

            if(width == undefined){
                popupStyle = 'width:100%;height:100%;top:0;left:0;margin:0;';
            }else{
                if(videoHeight == undefined){
                    videoHeight = width * 0.55;
                }
                popupStyle = 'width:'+videoWidth+'px;height:'+videoHeight+'px;margin:-'+(videoHeight/2)+'px 0 0 -'+(videoWidth/2)+'px;';
            }


            var htmlString = '<div id="video-modal-popup">';
                htmlString += '	<div class="overlay"></div>';
                htmlString += '	<div class="popup" style="'+popupStyle+'">';
                if(width == undefined){
                    htmlString += '		<a href="javascript:void(0)" class="close spt_bg" style="top:0;"></a>';
                }else{
                htmlString += '		<a href="javascript:void(0)" class="close spt_bg"></a>';
                }
                htmlString += '	</div>';
                htmlString += '</div">';

            jQuery('body').prepend(htmlString);
            jQuery('#video-modal-popup .overlay').click(function(){
                jQuery('#video-modal-popup').remove();
            });

            jQuery('#video-modal-popup .close').click(function(){
                jQuery('#video-modal-popup').remove();
            });

            setTimeout(function(){
                jQuery('#video-modal-popup').addClass('loaded');
                setTimeout(function(){
                        jQuery('#video-modal-popup .popup').append('<iframe class="video" id="main_video" frameborder="0" allowfullscreen="1" title="YouTube video player" width="'+videoWidth+'" height="'+videoHeight+'" src="https://www.youtube.com/embed/'+ytbId+'?rel=0&autoplay=1"></iframe>');
                },100);

            },200);

        }
    </script>


`;
