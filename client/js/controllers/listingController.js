angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    /* function to add listing */
    $scope.addListing = function() {	
	 Listings.create($scope.newListing).then(function(response){
		 $scope.listings.push($scope.newListing);
	 }, function(error){
		 console.log(error);
	 });

    };

    /* fucntion to delete listing */
    $scope.deleteListing = function(id) {
	   
	  Listings.delete(id).then(function(response){
		 for(var i = 0; i < $scope.listings.length-1; i++){
		 if($scope.listings[i]._id === id) $scope.listings.splice(i, 1);
		 }
	 }, function(error){
		 console.log(error);
	 });
	
    };

    /* function to show details */
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);