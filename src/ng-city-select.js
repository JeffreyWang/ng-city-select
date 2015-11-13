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