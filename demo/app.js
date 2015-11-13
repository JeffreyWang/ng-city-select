(function () {
    angular.module('app', ['ng-city-select']).controller(
        'mainCtrl', function ($scope) {

            $scope.multiSelectMode = true;

            $scope.selected = [];

            $scope.cityList = [{
                category: '江苏', cities: [
                    {id: 3201, name: '南京'},
                    {id: 3202, name: '无锡'},
                    {id: 3203, name: '徐州'},
                    {id: 3204, name: '常州'},
                    {id: 3205, name: '苏州'},
                    {id: 3206, name: '南通'},
                    {id: 3207, name: '连云港'},
                    {id: 3208, name: '淮安'},
                    {id: 3209, name: '盐城'},
                    {id: 3210, name: '扬州'},
                    {id: 3211, name: '镇江'},
                    {id: 3212, name: '泰州'},
                    {id: 3213, name: '宿迁'}
                ]
            },
                {
                    category: '浙江', cities: [
                    {id: 3301, name: '杭州'},
                    {id: 3302, name: '宁波'},
                    {id: 3303, name: '温州'},
                    {id: 3304, name: '嘉兴'},
                    {id: 3305, name: '湖州'},
                    {id: 3306, name: '绍兴'},
                    {id: 3307, name: '金华'},
                    {id: 3308, name: '衢州'},
                    {id: 3309, name: '舟山'},
                    {id: 3310, name: '台州'},
                    {id: 3311, name: '丽水'}
                ]
                },
                {
                    category: '安徽', cities: [
                    {id: 3401, name: '合肥'},
                    {id: 3402, name: '芜湖'},
                    {id: 3403, name: '蚌埠'},
                    {id: 3404, name: '淮南'},
                    {id: 3405, name: '马鞍山'},
                    {id: 3406, name: '淮北'},
                    {id: 3407, name: '铜陵'},
                    {id: 3408, name: '安庆'},
                    {id: 3410, name: '黄山'},
                    {id: 3411, name: '滁州'},
                    {id: 3412, name: '阜阳'},
                    {id: 3413, name: '宿州'},
                    {id: 3414, name: '巢湖'},
                    {id: 3415, name: '六安'},
                    {id: 3416, name: '亳州'},
                    {id: 3417, name: '池州'},
                    {id: 3418, name: '宣城'}
                ]
                },
                {
                    category: '福建', cities: [
                    {id: 3501, name: '福州'},
                    {id: 3502, name: '厦门'},
                    {id: 3503, name: '莆田'},
                    {id: 3504, name: '三明'},
                    {id: 3505, name: '泉州'},
                    {id: 3506, name: '漳州'},
                    {id: 3507, name: '南平'},
                    {id: 3508, name: '龙岩'},
                    {id: 3509, name: '宁德'}
                ]
                },
                {
                    category: '江西', cities: [
                    {id: 3601, name: '南昌'},
                    {id: 3602, name: '景德镇'},
                    {id: 3603, name: '萍乡'},
                    {id: 3604, name: '九江'},
                    {id: 3605, name: '新余'},
                    {id: 3606, name: '鹰潭'},
                    {id: 3607, name: '赣州'},
                    {id: 3608, name: '吉安'},
                    {id: 3609, name: '宜春'},
                    {id: 3610, name: '抚州'},
                    {id: 3611, name: '上饶'}
                ]
                },
                {
                    category: '山东', cities: [
                    {id: 3701, name: '济南'},
                    {id: 3702, name: '青岛'},
                    {id: 3703, name: '淄博'},
                    {id: 3704, name: '枣庄'},
                    {id: 3705, name: '东营'},
                    {id: 3706, name: '烟台'},
                    {id: 3707, name: '潍坊'},
                    {id: 3708, name: '济宁'},
                    {id: 3709, name: '泰安'},
                    {id: 3710, name: '威海'},
                    {id: 3711, name: '日照'},
                    {id: 3712, name: '莱芜'},
                    {id: 3713, name: '临沂'},
                    {id: 3714, name: '德州'},
                    {id: 3715, name: '聊城'},
                    {id: 3716, name: '滨州'},
                    {id: 3717, name: '菏泽'}
                ]
                },
                {
                    category: '河南', cities: [
                    {id: 4101, name: '郑州'},
                    {id: 4102, name: '开封'},
                    {id: 4103, name: '洛阳'},
                    {id: 4104, name: '平顶山'},
                    {id: 4105, name: '安阳'},
                    {id: 4106, name: '鹤壁'},
                    {id: 4107, name: '新乡'},
                    {id: 4108, name: '焦作'},
                    {id: 4109, name: '濮阳'},
                    {id: 4110, name: '许昌'},
                    {id: 4111, name: '漯河'},
                    {id: 4112, name: '三门峡'},
                    {id: 4113, name: '南阳'},
                    {id: 4114, name: '商丘'},
                    {id: 4115, name: '信阳'},
                    {id: 4116, name: '周口'},
                    {id: 4117, name: '驻马店'},
                    {id: 4118, name: '济源'}
                ]
                }];
        }
    );
})();