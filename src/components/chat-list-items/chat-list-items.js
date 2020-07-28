angular.module('waClone').component('chatListItem', {
    templateUrl: './src/components/chat-list-items/chat-list-items.html',
    bindings: {
        contact: '<',
        isSelected: '<'
    },
    controllerAs: 'vm'
});