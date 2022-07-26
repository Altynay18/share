class ArticleService extends Requests {
    constructor() {
        super('');
        const {articleId, page} = this.#getArticleParams();
        this.articleId = articleId;
        this.page = page;
        this.articleContent = '<div id="content"></div>';
        this.highlightList = [];
    }

    async getArticleInfo() {
        // todo fetch high
        this.highlightList = [{
            id: 0, annotations: [{
                author: 'John Doe',
                content: 'good point',
                date: '12.02.2022',
            }],
        }];

        this.articleContent = `
            <div id="content">
                <p id="summary">
                    <b>Association football</b> is a sport played between two teams. It is usually called <b>football</b>, but in
                    some countries, such as the United States, it is called <b>soccer</b>. In
                    <a href="http://simple.wikipedia.org/wiki/Japan">Japan</a>, New Zealand, South Africa, Australia, Canada and
                    Republic of Ireland, both words are commonly used.
                </p>
            </div>
        `;
        return {highlightList: this.highlightList, articleContent: this.articleContent};
    }

    uploadModifiedArticle(html) {
        console.log("loading article", html)
    }

    createNewHighlight() {
        const newID = this.#generateID(null, this.highlightList);
        const highlight = {
            id: newID, annotations: [],
        }
        this.highlightList.push(highlight)
        return newID
    }

    addAnnotation(highlightId, content) {

    }

    #getArticleParams() {
        // todo window.location get params
        return {articleId: 0, page: 0};
    }

    #generateID(id, list) {
        const newId = id || 0;
        const isInArr = list.some((obj) => obj.id === newId);
        if (isInArr) return generateID(newId + 1, list);
        else return newId;
    }
}