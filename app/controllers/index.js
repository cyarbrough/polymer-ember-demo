import Ember from 'ember';

export default Ember.Controller.extend({
    firstName: 'Chris',
    lastName: 'Yarbs',
    fullName: Ember.computed('firstName', 'lastName', function () {
        return this.get('firstName') + ' ' + this.get('lastName');
    })
});
