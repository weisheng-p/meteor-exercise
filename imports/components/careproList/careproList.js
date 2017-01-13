import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { exampleCarePro, CarePro, generateRandomCarePro } from '../../api/carepro.js';
import { VisitRequest } from '../../api/visitRequest.js';

import template from './careproList.html';

class CareProListCtrl {
    constructor($scope){
        $scope.viewModel(this);
        this.helpers({
            carePros(){
                return CarePro.find({});
            },
            matchedCarePros(){
                var experienceQuery = {};
                var willingQuery = {};
                for (let task of Object.keys(VisitRequest.care_services)){
                    var levels = VisitRequest.care_services[task];
                    if (levels.length != 0){
                        experienceQuery['skills_qualifications.task_level_experience.' + task] = {'$all': levels};
                        willingQuery['skills_qualifications.task_level_willingness.' + task] = {'$all': levels};
                    }
                }
                var willingAndExperienceds = CarePro.find({'$and': [experienceQuery, willingQuery]});
                if (willingAndExperienceds.count() > 0){
                    this.matched = "Willing and Experienced";
                    return willingAndExperienceds;
                } else {
                    this.matched = "Willing";
                    return CarePro.find(willingQuery);
                }
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
    });
