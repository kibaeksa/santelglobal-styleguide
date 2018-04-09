module.exports = `

    <div class="form_wrapper">
        <div class="tips">
            <a href="javascript:void(0)" onclick="openGuide();">
                <span class="icons"></span>
                매장리스트 적용 방법
            </a>
        </div>
        <div class="box">
            <label for="sl_link">파일명</label>
            <div style="margin-bottom:10px;position:relative;display:inline-block;">
                <input type="text" id="sl_link" style="width:300px;position:relative;">
            </div>
            <div class="warning active" id="name_tip">* 파일명이 링크의 파라미터가 됩니다. (ex: http://shop.adidas.co.kr/storeList.html<strong style="color:#ff0000;">?fileName</strong>)</div>
            <div class="warning" id="name_warning_kor">* 한글은 입력 할 수 없습니다.</div>
            <div class="warning" id="name_warning_char">* 특수문자는 언더스코어 ( _ ) 만 사용 가능합니다.</div>

        </div>
        <div class="box">
            <label for="sl_title">매장리스트 제목</label>
            <input type="text" id="sl_title">
        </div>
        <div class="box">
            <label for="sl_file">엑셀파일 업로드</label>
            <div class="file_wrapper">
                <div class="file_text_area">
                    파일을 업로드 해주세요.
                </div>
                <input type="file" id="sl_file" name="uploads[]" multiple="multiple">

                <a class="download_excel" href="/download?json=/resource/sample.xlsx">샘플 엑셀파일 다운로드</a>
            </div>
        </div>
        <a href="javascript:void(0)" class="btn-ctm" onclick="goSubmit()" style="margin-left:132px;">
            <span>확인<span class="spt_bg"></span></span>
        </a>

        <div class="json_code_wrapper">
            <div class="json_code">
                <pre></pre>
            </div>
        </div>

        <iframe id="my_iframe" style="display:none;"></iframe>

    </div>



    <script type="text/javascript">

        Object.size = function(obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        };


        var storeInfo = {};

        $('#sl_file').bind('change',uploadFile);

        function uploadFile(event){
            var files = $(this).get(0).files;

            if (files.length > 0){
                var formData = new FormData();

                // loop through all the selected files
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];

                    // add the files to formData object for the data payload
                    formData.append('uploads[]', file, file.name);
                }
            }

            $.ajax({
                url: '/upload',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function(data){
                    $('.file_text_area').css({zIndex : 15}).addClass('disable').text('파일 업로드 완료');
                    $('.file_text_area').bind('click',function(){
                        return false;
                    });
                    storeInfo.fileName = data.fileName;
                    storeInfo.filePath = data.filePath;
                }
            });
        }
        /* uploadFile END */

        function goSubmit(){
            if($('#sl_link').val() == ''){
                alert('파일명 (링크명)을 필수로 입력 하셔야합니다..');
                return false;
            }

            if($('#sl_file').val() == '' || $('#sl_file').val() == undefined){
                alert('xlsx 파일을 등록 하셔야 합니다.');
                return false;
            }

            if($('#sl_title').val() == ''){

                var useDefault = confirm('제목을 입력하지 않으면 "매장리스트" 로 등록이 됩니다. \\n그렇게 하시겠습니까?');
                if(useDefault){
                    $('#sl_title').val('매장리스트')
                    storeInfo.title = '매장리스트';
                }else{
                    return false;
                }
            }

            storeInfo.paramName = $('#sl_link').val();
            storeInfo.title = $('#sl_title').val();

            $.ajax({
                method: 'POST',
                url: '/handleExcel',
                dataType : 'json',
                data: storeInfo,
                beforeSend : function(){
                    $('body').append('<div id="loading" style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:100;background:rgba(255,255,255,0.7)"><span style="position:absolute;top:50%;left:50%;width:100px;height:30px;font-size:12px;line-height:30px;margin:-15px 0 0 -50px;text-align:center;">Loading...</span></div>')
                },
                success:function(result){
                    $('#loading').remove();

                    $('#sl_link').attr('readonly','readonly');
                    $('#sl_title').attr('readonly','readonly');
                    $('#sl_file').attr('readonly','readonly');

                    objToString(result);
                    $('.json_code_wrapper').prepend('<div style="font:400 14px \\'noto sans kr\\';"> 링크 : <span style="margin-left:10px;font:500 14px \\'noto sans kr\\';"">http://shop.adidas.co.kr/upload/storelist/index.html?'+$('#sl_link').val()+'</span></div><div style="margin-bottom:10px;"><a class="btn-ctm btn-blue download" href="/download?json='+result.fileLink+'" target="_blank" style="width: 100px;height: 35px;"><span style="line-height: 35px;">다운로드</span></a></div>')

                },
                error:function(e){
                    $('#loading').remove();
                    console.log(e.responseText);
                }
            });
        }

        function objToString(data){
            var count = 0;
            var addrList = data.data.contentObj;
            console.log(data);
            var str = '{\\n';
            str += '    <span class="key">"title"</span> : "'+data.title+'" ,\\n'
            str += '    <span class="key">"categoryList"</span> : [\\n';
            /* START For loop */
            for(var i = 0; i < data.ctgrList.length; i++ ){
            str += '        {\\n';
            str += '            <span class="key">"en"</span> : "'+data.ctgrList[i].en+'"\\n';
            str += '            <span class="key">"kor"</span> : "'+data.ctgrList[i].kor+'"\\n';
            if(i == data.ctgrList.length-1){
            str += '        }\\n';
            }else{
            str += '        },\\n';
            }
            }
            /* END For loop */
            str += '    ],\\n'
            str += '    <span class="key">"addressList "</span> : {\\n';
            /* START For loop */
            for(var cityName in addrList){
            str += '        <span class="key">"'+cityName+' "</span> : [\\n';
            /* START Loop in city */
            for(var i = 0; i < addrList[cityName].length; i++ ){
            str += '            {\\n';
            /* START Loop in city of category  */
            for(var ctgrName in addrList[cityName][i]){
            str += '                <span class="key">"'+ctgrName+' "</span> : "'+addrList[cityName][i][ctgrName]+'",[\\n';
            }
            /* END Loop in city of category  */
            if(i == addrList[cityName].length - 1){
            str += '            }\\n';
            }else{
            str += '            } ,\\n';
            }

            }
            /* END Loop in city */
            if(count == Object.size(addrList) - 1){
            str += '        ]\\n';
            }else{
                console.log(count);
                console.log('Length : ',Object.size(addrList));
            str += '        ],\\n';
            }
            count++;
            }
            /* END For loop */
            str += '    }\\n'
            str += '}\\n';
            $('.json_code_wrapper').addClass('active');
            $('.json_code>pre').html(str);
        }


        function openGuide(){
            var htmlString = '<div id="guide_layer">';
            htmlString += '      <div class="overlay" onclick="closeGuide()"></div>';
            htmlString += '      <div class="contents">';
            htmlString += '         <a class="close" href="javascript:void()" onclick="closeGuide()"></a>';
            htmlString += '         <dl>';
            htmlString += '             <dt>1. 엑셀 업로드</dt>';
            htmlString += '             <dd>';
            htmlString += '                 <p class="desc" style="margin-bottom:1px;">아래 이미지와 같이 폼을 입력, 엑셀파일 업로드 후 확인 버튼을 눌러주세요</p>';
            htmlString += '                 <p class="desc" style="font-weight:700;">* 업로드 한 json 파일명이 곧 링크가 됩니다.</p>';
            htmlString += '                 <div class="img"><img src="/images/store_step1_form.png" alt=""/></div>';
            htmlString += '                 <p class="desc" style="font-weight:700;color:red;">(예제 엑셀파일 )</p>';
            htmlString += '                 <div class="img"><img src="/images/excel.png" alt=""/></div>';
            htmlString += '             </dd>';
            htmlString += '             <dt>2. json 파일 다운로드</dt>';
            htmlString += '             <dd>';
            htmlString += '                 <p class="desc">완료 되면 다운로드 버튼을 클릭하여 파일을 받아주세요.</p>';
            htmlString += '                 <div class="img" style="margin-bottom:10px;"><img src="/images/store_step2.png" alt=""/></div>';
            htmlString += '                 <div class="img"><img src="/images/store_step2_download.png" alt=""/></div>';
            htmlString += '             </dd>';
            htmlString += '             <dt>3. json FTP 업로드</dt>';
            htmlString += '             <dd>';
            htmlString += '                 <p class="desc">다운받은 json 파일을 아래 FTP 경로에 업로드 해주세요.</p>';
            htmlString += '                 <p class="desc" style="font-weight:700;font-size:14px;">/upload/storelist/json</p>';
            htmlString += '             </dd>';
            htmlString += '             <dt>4. 링크확인</dt>';
            htmlString += '             <dd>';
            htmlString += '                 <p class="desc">* 업로드 한 json 파일명이 곧 링크가 됩니다.</p>';
            htmlString += '                 <p class="desc" style="margin-bottom:1px;font-weight:700;font-size:16px;">http://shop.adidas.co.kr/upload/storelist/index.html?json파일명</p>';
            htmlString += '             </dd>';
            htmlString += '         </dl>';
            htmlString += '     </div>';
            htmlString += '</div>';
            $('body').append(htmlString);
        }

        function closeGuide(){
            $('#guide_layer').remove();
        }

    </script>
`;
/*            htmlString += '                 <div class="img"><img src="/images/store_step3.png" alt=""/></div>';*/
