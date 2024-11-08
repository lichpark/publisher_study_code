# 변수, 연산자, 조건문, 함수

#함수

- 1. 일반함수 function name(){}
- 2. 화살표 함수 const name = () =>{}
- 3. 콜백함수 hello(buy)
- 4. 익명함수 (이름없음, 일회성)
  - addEventListner('click',()=>{})

# 배열 ,오브젝트

- [1,2,3,4,5].map((v)=>)
- ["1","2"].map((v)=>v.toUpperCase())
- [{gym:"유림헬스",price:23000}].map((v)=> v.gym.toUpperCase())
- [{gym:"유림헬스",price:23000},{gym:"유림헬스2",price:25000}].some((v)=> v.gym =="유림헬스")

# Document , Element

- Document - HTML 전체 가리키는 타입
- Element - 태그
  - button.style
  - button.addeventlistner()
