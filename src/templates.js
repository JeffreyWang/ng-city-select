angular.module("ng-city-select").run(["$templateCache", function($templateCache) {$templateCache.put("ng-city-select-template.html","<div class=\"ng-city-select-container\">\n    <a href=\"\" class=\"select-box\" ng-class=\"{\'in-select-mode\':isInSelecMode}\"\n       ng-click=\"toggleSelect()\">\n        <span ng-show=\"selected.length === 0 || multiSelectMode\"\n              ng-bind=\"placeHolder || defaultPlaceHolder\"></span>\n        <span ng-show=\"selected.length !== 0 && !multiSelectMode\"\n              ng-bind=\"selected[0].name\"></span>\n        <i ng-show=\"!isInSelecMode\" class=\"arrow-down-icon\"></i>\n        <i ng-show=\"isInSelecMode\" class=\"arrow-up-icon\"></i>\n    </a>\n    <ul class=\"select-list\" ng-show=\"isInSelecMode\">\n        <li ng-if=\"multiSelectMode\" class=\"multi-select-operation\">\n            <label for=\"all-cities\">全选</label>\n            <input type=\"checkbox\" id=\"all-cities\"\n                   ng-click=\"selectAllCities($event)\"\n                   ng-checked=\"selectAllFlag\"/>\n            <button ng-click=\"confirmSelection()\">确定</button>\n        </li>\n        <li ng-repeat=\"cateObj in ::cityList track by cateObj.category\">\n            <div ng-bind=\"cateObj.category\"></div>\n            <ul class=\"city-list\">\n                <li ng-repeat=\"city in cateObj.cities track by city.id\"\n                    ng-class=\"{\'city-selected\':isCitySelected(city)}\">\n                    <a href=\"\" ng-bind=\"city.name\" ng-click=\"addToSelected(city)\"></a>\n                </li>\n            </ul>\n        </li>\n    </ul>\n</div>");}]);