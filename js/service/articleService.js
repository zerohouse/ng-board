app.service('$article', function () {

    var list = this.list = [];

    function Article(head, body) {
        this.head = head;
        this.body = body;
    }

    Article.prototype.equals = function (obj) {
        if (obj == this)
            return true;
        if (obj.id == this.id)
            return true;
        return false;
    };

    Article.prototype.remove = function () {
        list.splice(list.indexOf(this), 1);
    };

    this.newArticle = function (article) {
        var newArticle = new Article();
        angular.copy(article, newArticle);
        if (list.contains(newArticle))
            return;
        list.push(newArticle);
    };

    list.push(new Article('제목'));
    list.push(new Article('제목2'));
    list.push(new Article('제목3'));


});