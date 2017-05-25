var myapp=angular.module("project1",[])
					.controller("ctrl",function($scope){
					  
						var createRandom=function(){
							var x;
							x=  Math.floor(Math.random()*100);
							return x;
							
							 
						}
						$scope.mark1a=createRandom();
						$scope.mark1b=createRandom();
						$scope.mark2a=createRandom();
						$scope.mark2b=createRandom();
						$scope.mark3a=createRandom();
						$scope.mark3b=createRandom();
						$scope.mark4a=createRandom();
						$scope.mark4b=createRandom();
						$scope.mark5a=createRandom();
						$scope.mark5b=createRandom();
						$scope.mark6a=createRandom();
						$scope.mark6b=createRandom();
						
						$scope.sort="name";
							
								$scope.removeRow = function(name){
									  var index = -1;
									  var comArr = eval( $scope.names );
									  for( var i = 0; i < comArr.length; i++ ) {
											if( comArr[i].name === name ) {
												index = i;
												break;
											 }
									  }
									  if( index === -1 ) {
										   alert( "Something gone wrong" );
									  }
									  $scope.names.splice( index, 1 );
							   };
							   
							   
							   $scope.highestInEnglish = function(name){
									  var index = -1;
									  var comArr = eval( $scope.names );
									  var max= comArr[0].markE;
									  
									  for( var i = 1; i < comArr.length; i++ ) {
											 if( max < comArr[i].markE ){
												 max = comArr[i].markE;
												 index=i;
											 }
									  }
									 return $scope.names[index].name;
							   };
							   $scope.highestInHindi = function(name){
									  var index = -1;
									  var comArr = eval( $scope.names );
									  var max= comArr[0].markH;
									  
									  for( var i = 1; i < comArr.length; i++ ) {
											 if( max < comArr[i].markH ){
												 max = comArr[i].markH;
												 index=i;
											 }
									  }
									 return $scope.names[index].name;
							   };
							   
							   $scope.highestInAverage = function(name){
									  var index = -1;
									  var comArr = eval( $scope.names );
									  var max= comArr[0].average;
									  
									  for( var i = 1; i < comArr.length; i++ ) {
											 if( max < comArr[i].average ){
												 max = comArr[i].average;
												 index=i;
											 }
									  }
									 return $scope.names[index].name;
							   };
					})