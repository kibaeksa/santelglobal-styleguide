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
                    topVisual : {
                        name : '상단 비주얼',
                        path : '/adidasWeb/event/topVisual'
                    },
                    fetures : {
                        name : '피쳐스',
                        path : '/adidasWeb/event/fetures'
                    },
                    sliders1 : {
                        name : '슬라이더 1',
                        path : '/adidasWeb/event/sliders1'
                    },
                    sliders2 : {
                        name : '슬라이더 2',
                        path : '/adidasWeb/event/sliders2'
                    },
                    sliders3 : {
                        name : '슬라이더 3',
                        path : '/adidasWeb/event/sliders3'
                    },
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
    }/*,
    adidasWeb : {
        name : 'adidas web',
        path : '/adidasWeb'
    },
    adidasMobile : {
        name : 'adidas mobile',
        path : '/adidasMobile'
    }*/
}

module.exports = menu;
