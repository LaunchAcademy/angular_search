function SearchForm(){
  this.id = '#search-form';
  this.shown = false;
  this.firstName = '';
  this.lastName = '';

  this.$el = function(){
    return $(this.id);
  };

  this.toggle = function(){
    this.shown = !this.shown;
    this.$el().toggle({
      duration: 100
    });
  };

  this.getFilter = function(){
    return {
      firstName: this.firstName,
      lastName: this.lastName
    }
  }
}

function PersonSearch($scope) {
  $scope.searchForm = new SearchForm();

  $scope.toggleForm = function(){
    $scope.searchForm.toggle();
  };

  $scope.allPeople = [
    {
      firstName: 'Dan',
      lastName: 'Pickett'
    },
    {
      firstName: 'Kevin',
      lastName: 'Sun'
    },
    {
      firstName: 'Ben',
      lastName: 'Calegari'
    }
  ];

  $scope.people = $scope.allPeople;

  $scope.filterPeople = function(){
    var newPeople = [];
    angular.forEach($scope.allPeople, function(person){
      if(person.firstName === $scope.searchForm.firstName){
        newPeople.push(person);
      }
    });
    $scope.people = newPeople;
  }
}
