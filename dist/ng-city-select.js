(function (ng, undefined){
    'use strict';

ng.module('ng-city-select', []);
angular.module("ng-city-select").run(["$templateCache", function($templateCache) {$templateCache.put("ng-city-select-template.html","<div class=\"ng-city-select-container\">\n    <a href=\"\" class=\"select-box\" ng-class=\"{\'in-select-mode\':isInSelecMode}\"\n       ng-click=\"toggleSelect()\">\n        <span ng-show=\"selected.length === 0 || multiSelectMode\"\n              ng-bind=\"placeHolder || defaultPlaceHolder\"></span>\n        <span ng-show=\"selected.length !== 0 && !multiSelectMode\"\n              ng-bind=\"selected[0].name\"></span>\n        <i ng-show=\"!isInSelecMode\" class=\"arrow-down-icon\"></i>\n        <i ng-show=\"isInSelecMode\" class=\"arrow-up-icon\"></i>\n    </a>\n    <ul class=\"select-list\" ng-show=\"isInSelecMode\">\n        <li ng-if=\"multiSelectMode\" class=\"multi-select-operation\">\n            <label for=\"all-cities\">全选</label>\n            <input type=\"checkbox\" id=\"all-cities\"\n                   ng-click=\"selectAllCities($event)\"\n                   ng-checked=\"selectAllFlag\"/>\n            <button ng-click=\"confirmSelection()\">确定</button>\n        </li>\n        <li ng-repeat=\"cateObj in ::cityList track by cateObj.category\">\n            <div ng-bind=\"cateObj.category\"></div>\n            <ul class=\"city-list\">\n                <li ng-repeat=\"city in cateObj.cities track by city.id\"\n                    ng-class=\"{\'city-selected\':isCitySelected(city)}\">\n                    <a href=\"\" ng-bind=\"city.name\" ng-click=\"addToSelected(city)\"></a>\n                </li>\n            </ul>\n        </li>\n    </ul>\n</div>");}]);
/*cityList is an array, and its format is like this:
 [
 {
 category:'category name',
 cities:[{ id:1, name:'' }]
 }
 ]*/
ng.module('ng-city-select').directive(
    'ngCitySelect', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                cityList: '=',
                multiSelectMode: '=?',
                placeHolder: '@?',
                selected: '='
            },
            templateUrl: 'ng-city-select-template.html',
            link: function (scope) {
                scope.defaultPlaceHolder = '请选择城市';
                scope.isInSelecMode = false;
                scope.selectAllFlag = false;

                var allCities = [];

                if (!scope.selected && !Array.isArray(scope.selected)) {
                    scope.selected = [];
                }

                if(scope.multiSelectMode){
                    angular.forEach(scope.cityList, function(item){
                        allCities  = allCities.concat(item.cities);
                    });
                }

                scope.toggleSelect = function () {
                    scope.isInSelecMode = !scope.isInSelecMode;
                };

                scope.addToSelected = function (city) {
                    if(!scope.multiSelectMode){
                        scope.selected = [];
                        scope.selected.push(city);
                        scope.isInSelecMode = false;
                    }
                    else{
                        var index = scope.selected.indexOf(city);
                        if (index > -1) {
                            scope.selected.splice(index, 1);
                        }
                        else {
                            scope.selected.push(city);
                        }
                    }
                };

                scope.isCitySelected = function(city){
                    if(scope.selected.indexOf(city) > -1){
                        return true;
                    }
                    return false;
                };

                scope.selectAllCities = function($event){
                    $event.stopPropagation();
                    scope.selected = [];

                    if(scope.selectAllFlag){
                        scope.selectAllFlag = false;
                    }
                    else{
                        scope.selected = [].concat(allCities);
                        scope.selectAllFlag = true;
                    }
                };

                scope.confirmSelection = function(){
                    scope.isInSelecMode = false;
                };

                scope.$watch('selected.length', function(nv){
                    if(nv === allCities.length){
                        scope.selectAllFlag = true;
                    }
                    else{
                        scope.selectAllFlag = false;
                    }
                });
            }
        };
    }
);
})(angular);