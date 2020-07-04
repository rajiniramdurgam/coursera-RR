(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  function setColor(color) {
           $scope.inputStyle = {
               'border-color': color
           };
           $scope.mesageStyle = {
               'color': color
           };
       }

  $scope.addItem = "";
  $scope.helpText="";
  $scope.addMe = function () {
    setColor('#B5555A');
       $scope.msgText = "Please enter Data first";
       var count=0;
          var addItemStr = $scope.addItem;
          if (addItemStr.length >0) {

              var nameArray = addItemStr.split(",");
              var nameCount= nameArray.length;
              for (var i = 0; i < nameCount; i++) {
                    if (nameArray[i].length > 0) {
                        count++;
                    }
                }

                  $scope.helpText=count<nameCount?"I don't consider an empty Item":" ";
                  setColor('#398439');
                  $scope.msgText= count >3? "Too much!":"Enjoy!!";
          }
     }

};
})();
