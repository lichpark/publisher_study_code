# 변수 , 연산자, 조건문, 함수

-data type :
기본타입:string, number ,boolean, null,undenfined
참조타입:object , array ,Element(=tag) , Document(=html page 전체) ,function

# HTML 조작하기

1.순수 js html /css 만들기
document.createElement("태그");
element.style.~~ or element.style.cssText ="~" or element.setProperty(css,value)

2.js 로 HTML만 담당하기
css,크래스명 모두 만들고, element.classList.add("classname") or toggle("")

3.이벤트넣기
이벤트는 클릭,마우스올리기,더블클릭등 유저에게 상호작용하는 내용들!
element.addEventListner("이벤트",함수)!
