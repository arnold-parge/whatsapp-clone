var waClone = angular.module('waClone', []);

waClone.controller('mainController', mainController);

mainController.$inject = ['$scope'];

function mainController($scope) {
    $scope.selectedContact;
    $scope.contacts = [
        {
            image: './assets/images/priscilla-pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa',
            unread: 5
        },
        {
            image: './assets/images/parge-villa-pp.jpeg',
            name: 'Parge Villa ❤💥💫⛪🏛',
            lastMessage: 'Valenine: Very ver happy birthday Rahul bhai. ver happy birthday Rahul bhai. ver happy birthday Rahul bhai. ',
            unread: 0
        },
        {
            image: './assets/images/sylvi-pp.jpeg',
            name: 'Sylvester Parge',
            lastMessage: 'https://twitter.com/PuneCityPolice/status/1284496101706313730?s=09',
            unread: 2
        },
        {
            image: './assets/images/nonstop-pp.jpeg',
            name: 'NonStop io Tech',
            lastMessage: 'Sarurabh: pee pee poo poo',
            unread: 0
        },
        {
            image: './assets/images/priscilla-pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa',
            unread: 0
        },
        {
            image: './assets/images/parge-villa-pp.jpeg',
            name: 'Parge Villa ♥💥💫⛪🏛',
            lastMessage: 'Valenine: Very ver happy birthday Rahul bhai. ver happy birthday Rahul bhai. ver happy birthday Rahul bhai. ',
            unread: 0
        },
        {
            image: './assets/images/sylvi-pp.jpeg',
            name: 'Sylvester Parge',
            lastMessage: 'https://twitter.com/PuneCityPolice/status/1284496101706313730?s=09',
            unread: 0
        },
        {
            image: './assets/images/priscilla-pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa',
            unread: 0
        },
        {
            image: './assets/images/parge-villa-pp.jpeg',
            name: 'Parge Villa ♥💥💫⛪🏛',
            lastMessage: 'Valenine: Very ver happy birthday Rahul bhai. ver happy birthday Rahul bhai. ver happy birthday Rahul bhai. ',
            unread: 0
        },
        {
            image: './assets/images/sylvi-pp.jpeg',
            name: 'Sylvester Parge',
            lastMessage: 'https://twitter.com/PuneCityPolice/status/1284496101706313730?s=09',
            unread: 0
        },
        {
            image: './assets/images/priscilla-pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa',
            unread: 0
        },
        {
            image: './assets/images/parge-villa-pp.jpeg',
            name: 'Parge Villa ♥💥💫⛪🏛',
            lastMessage: 'Valenine: Very ver happy birthday Rahul bhai. ver happy birthday Rahul bhai. ver happy birthday Rahul bhai. ',
            unread: 0
        },
        {
            image: './assets/images/sylvi-pp.jpeg',
            name: 'Sylvester Parge',
            lastMessage: 'https://twitter.com/PuneCityPolice/status/1284496101706313730?s=09',
            unread: 0
        },
    ];
    $scope.selectContact = function (index) {
        $scope.selectedContact = index;
    }
}