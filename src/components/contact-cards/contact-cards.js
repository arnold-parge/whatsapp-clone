angular.module('waClone').component('contactCard', {
    templateUrl: './src/components/contact-cards/contact-cards.html',
    bindings: {
        contact: '<',
        isSelected: '<'
    },
});