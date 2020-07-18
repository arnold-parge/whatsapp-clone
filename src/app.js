var waClone = angular.module('waClone', []);

angular.module('waClone').controller('mainController', mainController);

mainController.$inject = ['$scope'];

function mainController($scope) {
    $scope.selectedContact;
    $scope.contacts = [
        {
            image: './assets/images/pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa'
        },
        {
            image: './assets/images/pp.jpeg',
            name: 'Parge Villa ♥💥💫⛪🏛',
            lastMessage: 'Acchhaaa'
        },
        {
            image: './assets/images/pp.jpeg',
            name: 'Sylvester Parge',
            lastMessage: 'Acchhaaa'
        },
        {
            image: './assets/images/pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa'
        },
        {
            image: './assets/images/pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa'
        },
        {
            image: './assets/images/pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa'
        },
        {
            image: './assets/images/pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa'
        },
        {
            image: './assets/images/pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa'
        },
        {
            image: './assets/images/pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa'
        },
        {
            image: './assets/images/pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa'
        },
        {
            image: './assets/images/pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa'
        },
        {
            image: './assets/images/pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa'
        },
        {
            image: './assets/images/pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa'
        },
        {
            image: './assets/images/pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa'
        },
        {
            image: './assets/images/pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa'
        },
        {
            image: './assets/images/pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa'
        },
        {
            image: './assets/images/pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa'
        },
        {
            image: './assets/images/pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa'
        },
        {
            image: './assets/images/pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa'
        },
        {
            image: './assets/images/pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa'
        },
        {
            image: './assets/images/pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa'
        },
    ];
    $scope.selectContact = function (index) {
        $scope.selectedContact = index;
    }
}