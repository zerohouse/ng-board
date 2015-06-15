Object.prototype.equals = function (obj) {
    if (this == obj)
        return true;
};

Array.prototype.contains = function (obj) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == obj)
            return true;
        if (obj instanceof Object)
            if (obj.equals(this[i]))
                return true;
    }
    return false;
};

var app = angular.module('board', ['ngRoute'])

    .controller('mainController', function ($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    });

//.service(function ($routeProvider, $locationProvider) {
//    $routeProvider
//        .when('/ng-board/article/:articleId', {
//            templateUrl: 'html/article.html',
//            controller: 'articleController',
//            resolve: {
//                // I will cause a 1 second delay
//                delay: function ($q, $timeout) {
//                    var delay = $q.defer();
//                    $timeout(delay.resolve, 1000);
//                    return delay.promise;
//                }
//            }
//        });
//
//    $locationProvider.html5Mode(true);
//});

app.directive('article', function () {

    return {
        templateUrl: 'js/directive/articleTemplate.html',
        restrict: 'A',
        scope: {
            article: '='
        }
    };

});
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
app.controller('articleController', function ($scope) {



});
app.controller('boardController', function ($scope, $article) {

    var articles = $scope.article = $article;

});
/**
 * Created by dev on 2015-06-14.
 */
app.controller('formController', function ($scope, $article) {


    $scope.submit = function () {
        $article.newArticle($scope.article);
    };



});
