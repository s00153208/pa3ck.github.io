
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.blogs = [
        {title:"Title", date:"13/10/2016", cont:"Some description for this blog"},
        {title:"Blog", date:"07/10/2016", cont:"Setup GitHub page for blog"},
    ];
});

app.directive('blogEntry', function() {
    return {
        restrict: 'E', // Element directive
        scope: { blog: '=blogEntry' },
        template: 
        `<div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title"> {{ blog.title }} <span class="pull-right"> {{ blog.date }}</span></h3>
            </div>
            <div class="panel-body">
                {{ blog.cont }}
            </div>
        </div>`
    };
});
