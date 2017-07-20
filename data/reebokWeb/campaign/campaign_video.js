module.exports = `
    <div class="code-wrap">
        <div class="prefix">기본버튼 (검은색)</div>
        <div class="code-box">
            <pre class="brush: html">
                // html code
                <div class="visual_video">
                    <div class="bg"><img src="http://image.reebok.co.kr/images/reebok/event/about/insta_pury/video_visual.jpg" alt=""/></div>
                        <div class="masthead">
                            <h2>insta Pump Fury</h2>
                            <p class="desc_eng">video eng sub description</p>
                            <p class="desc">비디오 한글 설명</p>
                            <a href="javascript:void(0)" id="ready_v" class="play-video" data-video-id="1jY9nb5X_do"></a>
                        </div>
                    <div class="video_bg" id="video-background"></div>
                </div>
            </pre>
            <pre class="brush: javascript">
                // javascript code
                $('.play-video').bind('click',function(){
                    var videoId = $(this).attr('data-video-id');
                        viewVideo(videoId);
                        return false;
                });
                function viewVideo(videoId){
                    var $this = $(this);
                    var videoLayerElem = $('<div class="video_layer"><a class="sptbg close" href="javascript:void(0)"></a><div class="video"></div><div class="bg"></div></div>');
                    $('html').addClass('no_scroll');
                    $('body').append(videoLayerElem);
                    setTimeout(function(){
                        $('.video_layer').addClass('loaded');
                        setTimeout(function(){
                            $('.video_layer').find('.video').append('<iframe width="100%" height="100%" src="http://www.youtube.com/embed/'+videoId+'?autoplay=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="transparent"> </iframe>');
                        },20);
                    },300);

                    $('.video_layer .close').bind('click',function(){
                        $('html').removeClass('no_scroll');
                        $('.video_layer').remove();
                    });
                    return false;
              }

              function initVideo(targetId , videoSrc){
                if($('html').hasClass('ie9') || $('html').hasClass('ie_old')){
                    $('.visual_video .video_bg').hide();
                    $('.visual_video .bg').animate({
                        opacity : 1
                    });
                    $('.visual_video .masthead').animate({
                        opacity:1
                    });
                }

                var elemVideo = document.createElement('video');
                var elemSource = document.createElement('source');
                var targetElem = document.getElementById(targetId);

                elemVideo.autoplay = true;
                elemVideo.loop = true;
                elemVideo.muted = true;

                elemSource.src = videoSrc;
                elemSource.type = 'video/mp4';
                elemVideo.appendChild(elemSource);

                elemVideo.onloadstart = function(){
                    targetElem.appendChild(elemVideo);
                    setTimeout(function(){
                        elemVideo.setAttribute('class','loaded');
                        setTimeout(function(){
                            elemVideo.play();
                            $('.visual_video .masthead').addClass('active');
                        },100)
                    },500);

                }

                elemVideo.onended = function(){
                    this.parentNode.parentNode.removeChild(this.parentNode);
                  }
              }
              // 짤방영상
	          initVideo('video-background' , '/images/reebok/event/about/insta_pury/video.mp4');

            </pre>
        </div>
        <div class="result_box" style="width:100%;">
        <div class="visual_video">
            <div class="bg"><img src="http://image.reebok.co.kr/images/reebok/event/about/insta_pury/video_visual.jpg" alt=""/></div>
                <div class="masthead">
                    <h2>VIDEO MAIN TEXT</h2>
                    <p class="desc_eng">video eng sub description</p>
                    <p class="desc">비디오 한글 설명</p>
                    <a href="javascript:void(0)" id="ready_v" class="play-video" data-video-id="1jY9nb5X_do"></a>
                </div>
            <div class="video_bg" id="video-background"></div>
        </div>
        </div>
    </div>



    <script type="text/javascript">
        $('.play-video').bind('click',function(){
            var videoId = $(this).attr('data-video-id');
                viewVideo(videoId);
                return false;
        });
        function viewVideo(videoId){
            var $this = $(this);
            var videoLayerElem = $('<div class="video_layer"><a class="sptbg close" href="javascript:void(0)"></a><div class="video"></div><div class="bg"></div></div>');
            $('html').addClass('no_scroll');
            $('body').append(videoLayerElem);
            setTimeout(function(){
                $('.video_layer').addClass('loaded');
                setTimeout(function(){
                    $('.video_layer').find('.video').append('<iframe width="100%" height="100%" src="http://www.youtube.com/embed/'+videoId+'?autoplay=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="transparent"> </iframe>');
                },20);
            },300);

            $('.video_layer .close').bind('click',function(){
                $('html').removeClass('no_scroll');
                $('.video_layer').remove();
            });
            return false;
        }

        function initVideo(targetId , videoSrc){
            if($('html').hasClass('ie9') || $('html').hasClass('ie_old')){
                $('.visual_video .video_bg').hide();
                $('.visual_video .bg').animate({
                    opacity : 1
                });
                $('.visual_video .masthead').animate({
                    opacity:1
                });
            }

            var elemVideo = document.createElement('video');
            var elemSource = document.createElement('source');
            var targetElem = document.getElementById(targetId);

            elemVideo.autoplay = true;
            elemVideo.loop = true;
            elemVideo.muted = true;

            elemSource.src = videoSrc;
            elemSource.type = 'video/mp4';
            elemVideo.appendChild(elemSource);

            elemVideo.onloadstart = function(){
                targetElem.appendChild(elemVideo);
                setTimeout(function(){
                    elemVideo.setAttribute('class','loaded');
                    setTimeout(function(){
                        elemVideo.play();
                        $('.visual_video .masthead').addClass('active');
                    },100)
                },500);

            }

            elemVideo.onended = function(){
                this.parentNode.parentNode.removeChild(this.parentNode);
              }
          }


        initVideo('video-background' , '/public/images/video.mp4');

    </script>


`;
