var app = angular.module('myApp', []);
angular.module('myApp', []).controller('userCtrl', function($scope) {
  
    $scope.hideform = true;
    $scope.editUser = function(id) {
      $scope.hideform = false;
      if (id == 'new') {     
        $scope.incomplete = true;
        }
    };
    $scope.carname = "Good morning";
    $scope.name = "Nate!";
    $scope.button = "Add a task";
    $scope.radioname1 = "wireFrame For Contact Page";
    $scope.radioname2 = "Book Return Ticket";
    $scope.radioname3 = "Buy Anniversary Gift";
    $scope.radioname4 = "Pay Electricity Bill";
    $scope.radioname5 = "Meet Chris in the Confernce";
    $scope.radioname11 = "3 Days ago";
    $scope.radioname12 = "Tomorrow";
    $scope.Complated = "Complated";
    $scope.datayear = "Novomber 2019";
    $scope.ToDay = "ToDay";
    $scope.Days = "18.non";
    $scope.Day = "Day";
    $scope.Weak = "Weak";
    $scope.Moon = "Moon";

    $scope.sun = "sun";
    $scope.Mon = "Mon";
    $scope.Tue = "Tue";
    $scope.Wed = "Wed";
    $scope.Thu = "Thu";
    $scope.Fri = "Fri";
    $scope.Sat = "Sat";


    $scope.Complated = "Complated";

    });

   