import angular from 'angular';
import angularMeteor from 'angular-meteor';
import careproList from '../imports/components/careproList/careproList';

angular.module('meteor-exercise',[
    angularMeteor,
    careproList.name
]);
