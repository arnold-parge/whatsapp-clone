var waClone = angular.module('waClone', []);

waClone.controller('mainController', mainController);

mainController.$inject = ['$scope', '$timeout', 'ChatSvc'];

function mainController($scope, $timeout, ChatSvc) {

    ChatSvc.messageToClient();

    $timeout(function () {
        ChatSvc.messageFromServer();
    }, 5000);

    $scope.selectedContact;
    $scope.contacts = [
        {
            image: '/static/assets/images/priscilla-pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa',
            lastMessageTime: '10:55 PM',
            unread: 5
        },
        {
            image: '/static/assets/images/parge-villa-pp.jpeg',
            name: 'Parge Villa ❤💥💫⛪🏛',
            lastMessage: 'Valenine: Very ver happy birthday Rahul bhai. ver happy birthday Rahul bhai. ver happy birthday Rahul bhai. ',
            lastMessageTime: '10:55 PM',
            unread: 0
        },
        {
            image: '/static/assets/images/sylvi-pp.jpeg',
            name: 'Sylvester Parge',
            lastMessage: 'https://twitter.com/PuneCityPolice/status/1284496101706313730?s=09',
            lastMessageTime: '10:55 PM',
            unread: 2
        },
        {
            image: '/static/assets/images/nonstop-pp.jpeg',
            name: 'NonStop io Tech',
            lastMessage: 'Sarurabh: pee pee poo poo',
            lastMessageTime: '10:55 PM',
            unread: 0
        },
        {
            image: '/static/assets/images/priscilla-pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa',
            lastMessageTime: '10:55 PM',
            unread: 0
        },
        {
            image: '/static/assets/images/parge-villa-pp.jpeg',
            name: 'Parge Villa ♥💥💫⛪🏛',
            lastMessage: 'Valenine: Very ver happy birthday Rahul bhai. ver happy birthday Rahul bhai. ver happy birthday Rahul bhai. ',
            lastMessageTime: '10:55 PM',
            unread: 0
        },
        {
            image: '/static/assets/images/sylvi-pp.jpeg',
            name: 'Sylvester Parge',
            lastMessage: 'https://twitter.com/PuneCityPolice/status/1284496101706313730?s=09',
            lastMessageTime: '10:55 PM',
            unread: 0
        },
        {
            image: '/static/assets/images/priscilla-pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa',
            lastMessageTime: '10:55 PM',
            unread: 0
        },
        {
            image: '/static/assets/images/parge-villa-pp.jpeg',
            name: 'Parge Villa ♥💥💫⛪🏛',
            lastMessage: 'Valenine: Very ver happy birthday Rahul bhai. ver happy birthday Rahul bhai. ver happy birthday Rahul bhai. ',
            lastMessageTime: '10:55 PM',
            unread: 0
        },
        {
            image: '/static/assets/images/sylvi-pp.jpeg',
            name: 'Sylvester Parge',
            lastMessage: 'https://twitter.com/PuneCityPolice/status/1284496101706313730?s=09',
            lastMessageTime: '10:55 PM',
            unread: 0
        },
        {
            image: '/static/assets/images/priscilla-pp.jpeg',
            name: 'Priscilla Jioo',
            lastMessage: 'Acchhaaa',
            lastMessageTime: '10:55 PM',
            unread: 0
        },
        {
            image: '/static/assets/images/parge-villa-pp.jpeg',
            name: 'Parge Villa ♥💥💫⛪🏛',
            lastMessage: 'Valenine: Very ver happy birthday Rahul bhai. ver happy birthday Rahul bhai. ver happy birthday Rahul bhai. ',
            lastMessageTime: '10:55 PM',
            unread: 0
        },
        {
            image: '/static/assets/images/sylvi-pp.jpeg',
            name: 'Sylvester Parge',
            lastMessage: 'https://twitter.com/PuneCityPolice/status/1284496101706313730?s=09',
            lastMessageTime: '10:55 PM',
            unread: 0
        },
    ];
    $scope.selectContact = function (index) {
        $scope.selectedContact = index;
    }
}