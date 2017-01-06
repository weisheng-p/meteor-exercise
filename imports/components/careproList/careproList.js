import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { exampleCarePro, CarePro } from '../../api/carepro.js';

import template from './careproList.html'

class CareProListCtrl {
    constructor($scope){
        $scope.viewModel(this);
        this.helpers({
            carePros(){
                return [exampleCarePro];
            }
        });
    }
}

export default angular.module('careproList',[
    angularMeteor
])
    .component('careproList', {
        templateUrl: 'imports/components/careproList/careproList.html',
        controller: ['$scope', CareProListCtrl]
    })
