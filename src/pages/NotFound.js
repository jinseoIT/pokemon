import Page from "../core/Page";

class NotFound extends Page {
    template() {
        return `
        <main>
        <h1>페이지를 찾을 수 없습니다.</h1>
        </main>
        `;
    }
}

export default NotFound