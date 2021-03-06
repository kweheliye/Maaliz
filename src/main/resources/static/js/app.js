var hashiApp = angular.module('hashiApp', ['ngRoute', 'ngMessages', 'ngResource', 'cgBusy', 'flow', 
                                             'pascalprecht.translate', 'ngCookies', 'angucomplete-alt', 'ui.router', 'slick',
                                             'xeditable', 'fancyboxplus', 'ui.bootstrap', 'angular-loading-bar', 'ngAnimate', 
                                             'csrf-cross-domain', 'ngFacebook', 'ngMap' ]);

hashiApp
.config(function($stateProvider, $urlRouterProvider	, $httpProvider, $locationProvider, 
		$translateProvider, $sceDelegateProvider, $facebookProvider) {
	
	$sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?s3-eu-west-1.amazonaws\.com/.+$')]);
	$facebookProvider.setAppId('224160581313069');

    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

	$translateProvider.useStaticFilesLoader({
		prefix: 'languages/',
		suffix: '.json'
	});
	$translateProvider.use('en_US');
	$translateProvider.useLocalStorage();

	// For any unmatched url, redirect to /home
	$urlRouterProvider.otherwise("/");
	// Now set up the states
		
	$stateProvider
	.state('/', {
		url: "/",
		templateUrl: "js/app/partial/home.html",
		resolve:{
			promiseFeatured: function getFeaturedProducts(productFactory){
			   return productFactory.getFeaturedProducts();			
		    },		    
		    promiseCities: function initCities(cityFactory){
				   return cityFactory.getCities();			
			} ,
			promiseRootCategories: function getRootCategories(categoryFactory){
				   return categoryFactory.getRootCategories();			
			}
		},
		controller : "HomeController"
		
	})
	.state('login', {
		url: "/login",
		templateUrl: "js/app/partial/login.html",
		controller : "navigation"
	})
	.state('admin', {
		url: "/admin",
		templateUrl: "js/app/admin-partial/admin.html",
		controller : "AdminController"
	})
	.state('admin_details', {
		url: "/admin_details/:productId/:categoryId/:categoryType",
		templateUrl: "js/app/admin-partial/admin_details.html",
		controller : "DetailsController",
		resolve:{
			
			promiseProduct: function findProductWithUserByProductId(productFactory, $stateParams){
			    return productFactory.findProductWithUserByProductId($stateParams.productId);
					
			},
			promiseCities: function initializeCities(cityFactory){
				return cityFactory.getCities();
			},
			promiseCategories: function initializeCategoriesLevelOne(categoryFactory){
				return categoryFactory.getRootCategories();
			},
			promiseListRootCategories: function getRootCategoriesByCategoryId(categoryFactory, $stateParams){
				return categoryFactory.getRootCategoriesByCategoryId($stateParams.categoryId);
			}		
		}
	})
	.state('register', {
		url: "/register",
		templateUrl: "js/app/partial/register.html",
		controller : "RegistrationController"
	})
	.state('forgot_password', {
		url: "/forgot_password",
		templateUrl: "js/app/partial/forgot_password.html",
		controller : "ForgotPasswordController"

	})
	.state('reset_password', {
		url: "/reset_password?token",
		templateUrl: "js/app/partial/reset_password.html",
		controller : "ResetPasswordController",
	})
	.state('success_forgot_password', {
		url: "/success_forgot_password",
		templateUrl: "js/app/partial/success_forgot_password.html",
	})	
	.state('success_reset_password', {
		url: "/success_reset_password",
		templateUrl: "js/app/partial/success_reset_password.html",
	})
	.state('post_ad', {
		url: "/post_ad",
		templateUrl: "js/app/partial/post_ad.html",
		controller : "PostAdController",
		resolve:{
			promiseRootCategories: function getRootCategories(categoryFactory){
			   return categoryFactory.getRootCategories();			
		    }
		}
	})
	.state('post_ad_job', {
		url: "/post_ad_job/:categoryId",
		templateUrl: "js/app/partial/post_ad_job.html",
		controller : "PostAdJobController",
		params:{
            productId: null 
       }
	})	
	.state('applicants', {
		url: "/applicants",
		templateUrl: "js/app/partial/applicants.html",
		controller : "ApplicantController",
		resolve:{
			promiseObj: function hasUserPostedJobs(applicantFactory, auth){
				if(auth){
					if(auth.authenticated){
						return applicantFactory.hasUserPostedJobs(auth.authenticatedUserId);
					}
				}	
			}
		}
	})	
	.state('post_ad_car', {
		url: "/post_ad_car/:categoryId",
		templateUrl: "js/app/partial/post_ad_car.html",
		controller : "PostAdCarController",
		params:{
            productId: null 
       }
	})	
	.state('post_ad_heavy_vehicle', {
		url: "/post_ad_heavy_vehicle/:categoryId",
		templateUrl: "js/app/partial/post_ad_heavy_vehicle.html",
		controller : "PostAdHeavyVehicleController",
		params:{
            productId: null 
       }
	})	
	.state('post_ad_car_parts', {
		url: "/post_ad_car_parts/:categoryId",
		templateUrl: "js/app/partial/post_ad_car_parts.html",
		controller : "PostAdCarPartsController",
		params:{
                productId: null 
        }
	})	
	.state('post_ad_boats', {
		url: "/post_ad_boats/:categoryId",
		templateUrl: "js/app/partial/post_ad_boats.html",
		controller : "PostAdBoatsController",
		params:{
                productId: null 
        }
	})	
	.state('post_ad_motorcycle', {
		url: "/post_ad_motorcycle/:categoryId",
		templateUrl: "js/app/partial/post_ad_motorcycle.html",
		controller : "PostAdMotorCycleController",
		params:{
                productId: null 
        }
	})	
	.state('post_ad_sale_res', {
		url: "/post_ad_sale_res/:categoryId",
		templateUrl: "js/app/partial/post_ad_sale_res.html",
		controller : "PostAdSaleResidentialController",
		params:{
                productId: null 
        }
	})	
	.state('post_ad_sale_comm', {
		url: "/post_ad_sale_comm/:categoryId",
		templateUrl: "js/app/partial/post_ad_sale_comm.html",
		controller : "PostAdSaleCommercialController",
		params:{
                productId: null 
        }
	})	
	.state('post_ad_sale_land', {
		url: "/post_ad_sale_land/:categoryId",
		templateUrl: "js/app/partial/post_ad_sale_land.html",
		controller : "PostAdSaleLandController",
		params:{
                productId: null 
        }
	})	
	.state('post_ad_sale_units', {
		url: "/post_ad_sale_units/:categoryId",
		templateUrl: "js/app/partial/post_ad_sale_units.html",
		controller : "PostAdSaleUnitsController",
		params:{
                productId: null 
        }
	})	
	.state('post_ad_rent_res', {
		url: "/post_ad_rent_res/:categoryId",
		templateUrl: "js/app/partial/post_ad_rent_res.html",
		controller : "PostAdRentResidentialController",
		params:{
                productId: null 
        }
	})	
	.state('post_ad_rent_comm', {
		url: "/post_ad_rent_comm/:categoryId",
		templateUrl: "js/app/partial/post_ad_rent_comm.html",
		controller : "PostAdRentCommercialController",
		params:{
                productId: null 
        }
	})		
	.state('post_ad_rent_room', {
		url: "/post_ad_rent_room/:categoryId",
		templateUrl: "js/app/partial/post_ad_rent_room.html",
		controller : "PostAdRentRoomController",
		params:{
                productId: null 
        }
	})	
	.state('post_ad_rent_short_term_daily', {
		url: "/post_ad_rent_short_term_daily/:categoryId",
		templateUrl: "js/app/partial/post_ad_rent_short_term_daily.html",
		controller : "PostAdRentShortTermDailyController",
		params:{
                productId: null 
        }
	})	
	.state('post_ad_rent_short_term_monthly', {
		url: "/post_ad_rent_short_term_monthly/:categoryId",
		templateUrl: "js/app/partial/post_ad_rent_short_term_monthly.html",
		controller : "PostAdRentShortTermMonthlyController",
		params:{
                productId: null 
        }
	})	
	.state('post_ad_classified', {
		url: "/post_ad_classified/:categoryId",
		templateUrl: "js/app/partial/post_ad_classified.html",
		controller : "PostAdClassifiedController",
		params:{
                productId: null 
        }
	})	
	.state('post_ad_classified_business_sale', {
		url: "/post_ad_classified_business_sale/:categoryId",
		templateUrl: "js/app/partial/post_ad_classified_business_sale.html",
		controller : "PostAdClassifiedController",
		params:{
                productId: null 
        }
	})	
	.state('post_ad_classified_camera', {
		url: "/post_ad_classified_camera/:categoryId",
		templateUrl: "js/app/partial/post_ad_classified_camera.html",
		controller : "PostAdClassifiedCameraController",
		params:{
                productId: null 
        }
	})	
	.state('post_ad_classified_computer', {
		url: "/post_ad_classified_computer/:categoryId",
		templateUrl: "js/app/partial/post_ad_classified_computer.html",
		controller : "PostAdClassifiedComputerController",
		params:{
                productId: null 
        }
	})	
	.state('post_ad_classified_pets', {
		url: "/post_ad_classified_pets/:categoryId",
		templateUrl: "js/app/partial/post_ad_classified_pets.html",
		controller : "PostAdClassifiedPetsController",
		params:{
                productId: null 
        }
	})	
	.state('post_ad_classified_tickets', {
		url: "/post_ad_classified_tickets/:categoryId",
		templateUrl: "js/app/partial/post_ad_classified_tickets.html",
		controller : "PostAdClassifiedController",
		params:{
                productId: null 
        }
	})	
	.state('post_ad_community', {
		url: "/post_ad_community/:categoryId",
		templateUrl: "js/app/partial/post_ad_community.html",
		controller : "PostAdCommunityController",
		params:{
                productId: null 
        }
	})	
	.state('success_registration', {
		url: "/success_registration",
		templateUrl: "js/app/partial/success_registration.html"
	})
	.state('success_profile', {
		url: "/success_profile",
		templateUrl: "js/app/partial/success_profile.html"
	})
	.state('success_ad', {
		url: "/success_ad/:productId/:categoryId/:categoryLft/:categoryRgt",
		templateUrl: "js/app/partial/success_ad.html",
	    controller : 'SuccessAdController'
	})
	.state('register_token', {
		url: "/register_token?token",
		controller : 'RegisterTokenController',
		templateUrl: "js/app/partial/register_token.html",
	})
	.state('details', {
		url: "/details/:productId/:categoryId/:categoryType",
		templateUrl: "js/app/partial/details.html",
		controller : 'DetailsController',
		resolve:{
			
			promiseProduct: function findProductWithUserByProductId(productFactory, $stateParams){
			    return productFactory.findProductWithUserByProductId($stateParams.productId);
					
			},
			promiseCities: function initializeCities(cityFactory){
				return cityFactory.getCities();
			},
			promiseCategories: function initializeCategoriesLevelOne(categoryFactory){
				return categoryFactory.getRootCategories();
			},
			promiseListRootCategories: function getRootCategoriesByCategoryId(categoryFactory, $stateParams){
				return categoryFactory.getRootCategoriesByCategoryId($stateParams.categoryId);
			}	
		}
	})
	.state('details_job', {
		url: "/details_job/:productId/:categoryId/:categoryType",
		templateUrl: "js/app/partial/details_job.html",
		controller : 'DetailsController',
		resolve:{
			
			promiseProduct: function findProductWithUserByProductId(productFactory, $stateParams){
			    return productFactory.findProductWithUserByProductId($stateParams.productId);
					
			},
			promiseCities: function initializeCities(cityFactory){
				return cityFactory.getCities();
			},
			promiseCategories: function initializeCategoriesLevelOne(categoryFactory){
				return categoryFactory.getRootCategories();
			},
			promiseListRootCategories: function getRootCategoriesByCategoryId(categoryFactory, $stateParams){
				return categoryFactory.getRootCategoriesByCategoryId($stateParams.categoryId);
			}	
		}
	})
	.state('account_ads', {
		url: "/account_ads",
		templateUrl: "js/app/partial/account_ads.html",
		controller : 'AccountAdsController',
		resolve:{
			promiseObj: function hasUserPostedJobs(productFactory, auth){
				if(auth){
					if(auth.authenticated){
						return productFactory.findProductsByUserId(auth.authenticatedUserId);
					}
				}	
			}
		}
	})
	.state('account_settings', {
		url: "/account_settings",
		templateUrl: "js/app/partial/account_settings.html",
		controller : 'AccountSettingsController' ,
		resolve:{
			promiseObj: function findUserByUserId(userFactory, auth){ 
				if(auth){
					if(auth.authenticated){
						return userFactory.findUserByUserId(auth.authenticatedUserId);
					}
				}	
			}
		}
	})
	.state('account_profile', {
		url: "/account_profile",
		templateUrl: "js/app/partial/account_profile.html",
		controller : 'AccountProfileController' ,
		resolve:{
			promiseObj: function findProfileByUserId(profileFactory, auth){ 
				if(auth){
					if(auth.authenticated){
						return profileFactory.findProfileByUserId(auth.authenticatedUserId);
					}
				}	
			}
		}
	})
	.state('listing', {
		url: "/listing?searchType&selectedCityId&finalSelectedCategoryId&selectedCategoryIdLevelOne" +
				"&selectedCategoryIdLevelTwo&selectedCategoryIdLevelThree&selectedCategoryIdLevelFour" +
				"&searchText&priceFrom&priceTo&yearMin&yearMax&kmFrom&kmTo&sellerType&bedroomMin&bedroomMax"
		 ,
		templateUrl: "js/app/partial/listings.html",
		controller: "ListingController"
      })
      .state('about_us', {
		url: "/about_us",
		templateUrl: "js/app/partial/about_us.html",
	   })
	   .state('contact_us', {
		url: "/contact_us",
		templateUrl: "js/app/partial/contact_us.html",
	   })
	   .state('career', {
		url: "/career",
		templateUrl: "js/app/partial/career.html",
	   })
	   .state('help', {
		url: "/help",
		templateUrl: "js/app/partial/help.html",
	   })
	   .state('delivery', {
		url: "/delivery",
		templateUrl: "js/app/partial/delivery.html",
	   })
      .state('error', {
		url: "/error",
		templateUrl: "js/app/partial/error.html",
		controller : 'ErrorController'
	});
	$locationProvider.hashPrefix('!');
});

hashiApp.run(function(auth, $rootScope, $state, editableOptions, $http, $location, $window, $translate) {
	$window.ga('create', 'UA-81211634-1', 'auto');	
	
	$rootScope.$on('$stateChangeSuccess', function() {
		   document.body.scrollTop = document.documentElement.scrollTop = 0;
		   $window.ga('send', 'pageview', $location.path());
	});
	//language has changed, therefore if its arabic add bootstrap-rtl	  
	var currentLang = $translate.proposedLanguage() || $translate.use();
	$rootScope.isRtl =currentLang == 'so_SO' ? true : false;
	if( currentLang == 'so_SO'){
		angular.element('head').append('<link id="bootstrap-rtl" href="css/bootstrap-rtl.min.css" rel="stylesheet">');
	}
    else{
    	var stylesheet = document.getElementById('bootstrap-rtl');

    	if(stylesheet){
    	   stylesheet.parentNode.removeChild(stylesheet);
    	}
    }
	
	 auth.init('/', 'login', 'logout');
	 editableOptions.theme = 'bs3';
	 // If we've already installed the SDK, we're done.
     if (document.getElementById('facebook-jssdk')) {return;}

     // Get the first script element, which we'll use to find the parent nod
     var firstScriptElement = document.getElementsByTagName('script')[0];

     // Create a new script element and set its id
     var facebookJS = document.createElement('script'); 
     facebookJS.id = 'facebook-jssdk';

     // Set the new script's source to the source of the Facebook JS SDK
     facebookJS.src = '//connect.facebook.net/en_US/all.js';

     // Insert the Facebook JS SDK into the DOM
     firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
});

