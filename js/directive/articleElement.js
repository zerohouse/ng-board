app.directive('article', function () {

    return {
        templateUrl: 'js/directive/articleTemplate.html',
        restrict: 'A',
        scope: {
            article: '='
        }
    };

});