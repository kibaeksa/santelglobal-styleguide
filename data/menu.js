var menu = {
    adidasWeb : {
        id : 'adidasWeb',
        name : '아디다스 웹',
        path : '/adidasWeb',
        menu : {
            event : {
                name : '이벤트',
                path : '/adidasWeb/event',
                menu : {
                    gridImage : {
                        name : '이미지 그리드',
                        path : '/adidasWeb/event/gridImage'
                    }
                }
            },
            ui : {
                name : 'ui',
                path : '/adidasWeb/ui',
                menu : {
                    button : {
                        name : '버튼',
                        path : '/adidasWeb/ui/button'
                    },
                    customSelect : {
                        name : '커스텀 셀렉트박스',
                        path : '/adidasWeb/ui/customSelect'
                    },
                    customForm : {
                        name : '커스텀 폼',
                        path : '/adidasWeb/ui/customForm'
                    }
                }
            },
            fonts : {
                name : 'fonts',
                path : '/adidasWeb/fonts',
                menu : {
                    fonts : {
                        name : 'fonts',
                        path : '/adidasWeb/fonts/fonts'
                    }
                }
            }
        }
    },
    adidasMobile : {
        name : '아디다스 모바일',
        path : '/adidasMobile',
        menu : {
            fonts: {
                name : 'fonts',
                path : '/adidasMobile/fonts',
                menu : {
                    fonts : {
                        name : 'fonts',
                        path : '/adidasMobile/fonts/fonts'
                    },
                    glyphicons: {
                        name : 'Glyphicons',
                        path : '/adidasMobile/fonts/glyphicons',
                    }
                }
            }
        }
    }/*,
    adidasMobile : {
        name : 'adidas mobile',
        path : '/adidasMobile'
    }*/
}

module.exports = menu;
