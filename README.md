# SPA 구현하기

## URL 라우팅 처리하기
URL 라우팅 처리할 수 있는 간단한 방법은 location.pathname을 이용해 URL별로 분기를 태우는 것으로 해결한다.

요구사항
- / : 상품 목록 페이지
- /products/:productId: 상품 상세 페이지
- /cart : 장바구니 페이지

```javascript
const {pathname} = location
if (pathname === '/') {
    // 상품 목록 페이지 렌더링하기
} else if (pathname.indexOf('/products/') === 0){
    const [, , productId] = pathname.split('/')
    // 상품 상세 페이지 렌더링하기
} else if (pathname === '/cart'){
    // 장바구니 페이지 렌더링하기
}
```
URLㄹ우팅 책임을 App 컴포넌트가 지게 된다.
