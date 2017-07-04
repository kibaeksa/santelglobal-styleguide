module.exports = `
    <div class="form_wrapper">
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
                    console.log(11);
                    $('#loading').remove();
                    objToString(result);

                    $('.json_code_wrapper').prepend('<div style="margin-bottom:10px;"><a class="btn-ctm btn-blue download" href="/download?json='+result.fileLink+'" target="_blank" style="width: 100px;height: 35px;"><span style="line-height: 35px;">다운로드</span></a></div>')

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

    </script>


`;
