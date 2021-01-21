
Feature: Create Read Updated Remove Activites
  This feature is to test the CRUD operations of Activities
	@NoDelete
  Scenario: Verify get all activities endpoint returns all activities
    Given I have backyard base URI
    When I perform a "GET" method on endpoint "/backyard/activities"
    Then the response status should be 200 
    And response with Content-type should be "application/json"
    And show me the response
    Then I should be able to get response for more than 1 activities details
  @NoDelete  
  Scenario: Create a new activity
    Given I have backyard base URI
    When I perform a "POST" method on endpoint "/backyard/activity" with the following :
    """
    {
    	"activityName": "Balloon Ride"
		}
    """
    Then the response status should be 201
    And show me the response
  @NoDelete  
  Scenario: Get a activity
    Given I have backyard base URI
    When I perform a "GET" method on endpoint "/backyard/activity/3" 
    Then the response status should be 200
    And show me the response
	@NoDelete
  Scenario: Update an activity
    Given I have backyard base URI
    When I perform a "PATCH" method on endpoint "/backyard/activity/2" with the following :
    """
    {
    	"activityName": "Bon Fire"
		}
    """
    Then the response status should be 200
    And show me the response
    
  Scenario: Delete an activity
    Given I have backyard base URI
    When I perform a "DELETE" method on endpoint "/backyard/activity/1"
    Then the response status should be 204
    And show me the response
  


    
 