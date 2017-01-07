import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { exampleCarePro, CarePro, generateRandomCarePro } from '../../api/carepro.js';

import template from './careproList.html'

class CareProListCtrl {
    constructor($scope){
        $scope.viewModel(this);
        this.helpers({
            carePros(){
                return CarePro.find({})
            }
        });
    }
    addExampleCarePro(){
        CarePro.insert(exampleCarePro);
    }
    addRandomCarePro(){
        CarePro.insert(generateRandomCarePro());
    }
    removeCarePro(id){
        CarePro.remove({_id: id});
    }
}

export default angular.module('careproList',[
    angularMeteor
])
    .component('careproList', {
        templateUrl: 'imports/components/careproList/careproList.html',
        controller: ['$scope', CareProListCtrl]
    })
