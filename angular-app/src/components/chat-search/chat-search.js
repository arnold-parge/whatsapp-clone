angular.module('waClone').component('chatSearch', {
    templateUrl: './src/components/chat-search/chat-search.html',
    bindings: {
        query: '='
    },
    controllerAs: 'vm'
});