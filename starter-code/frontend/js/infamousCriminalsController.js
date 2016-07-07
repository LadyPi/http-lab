angular.module('InfamousCriminalsApp', [])
  .controller('InfamousCriminalsController', InfamousCriminalsController);

InfamousCriminalsController.inject = ['$http'];

function InfamousCriminalsController('$http') {
  

  this.getInfamousCriminals = getInfamousCriminals;
}

function getInfamousCriminals() {
  $http
  .get('http://localhost:3000/infamouscriminals')
  .then(function(response) {
  	console.log(response);
  	self.all = response.data.infamouscriminals;
   });
}

function addInfamousCriminals() {
  $http
  .post('http://localhost:3000/infamouscriminals', self.infamouscriminals)




}

