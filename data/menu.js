var menu = {
    adidasWeb : {
        id : 'adidasWeb',
        name : '아디다스 웹',
        path : '/adidasWeb',
        menu : {
            common : {
                name : '기본',
                path : '/adidasWeb/common',
                menu : {
                    layout : {
                        name : '레이아웃',
                        path : '/adidasWeb/common/layout'
                    },
                    className : {
                        name : '클래스 속성 사용',
                        path : '/adidasWeb/common/className'
                    }
                }
            },
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
                    },
                    modalPopup : {
                        name : '모달 팝업',
                        path : '/adidasWeb/ui/modalPopup'
                    },
                    swipers : {
                        name : 'Swipers 슬라이드',
                        path : '/adidasWeb/ui/swipers'
                    },
                    productsListSlider : {
                        name : '제품리스트 슬라이드',
                        path : '/adidasWeb/ui/productsListSlider'
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
