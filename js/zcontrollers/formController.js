/**
 * Created by dev on 2015-06-14.
 */
app.controller('formController', function ($scope, $article) {


    $scope.submit = function () {
        $article.newArticle($scope.article);
    };



});
