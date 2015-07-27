angular.module('myApp',[])
.controller('RandomController',function($scope){
  $scope.lengthNum=Math.floor((Math.random()*10)+10);
  $scope.randomArray=new Array($scope.lengthNum);
  for(var i=0;i<$scope.randomArray.length;i++){
    $scope.randomArray[i]=Math.floor((Math.random()*10)+10);
  }

});
