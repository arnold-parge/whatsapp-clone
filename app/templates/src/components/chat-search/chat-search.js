angular.module('waClone').component('chatSearch', {
    templateUrl: '/static/src/components/chat-search/chat-search.html',
    bindings: {
        query: '='
    },
    controllerAs: 'vm'
});