angular.module('waClone').component('chatListItem', {
    templateUrl: '/static/src/components/chat-list-items/chat-list-items.html',
    bindings: {
        contact: '<',
        isSelected: '<'
    },
    controllerAs: 'vm'
});