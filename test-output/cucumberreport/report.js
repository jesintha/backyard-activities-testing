$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/activities/testapi.feature");
formatter.feature({
  "name": "Create Read Updated Remove Activites",
  "description": "  This feature is to test the CRUD operations of Activities",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify get all activities endpoint returns all activities",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@NoDelete"
    }
  ]
});
formatter.step({
  "name": "I have backyard base URI",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.i_have_backyard_base_uri()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform a \"GET\" method on endpoint \"/backyard/activities\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.i_perform_a_method_on_endpoint(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.the_response_status_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response with Content-type should be \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.response_with_content_type_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "show me the response",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.show_me_the_response()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to get response for more than 1 activities details",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.i_should_be_able_to_get_response_for_activities_details(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create a new activity",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@NoDelete"
    }
  ]
});
formatter.step({
  "name": "I have backyard base URI",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.i_have_backyard_base_uri()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform a \"POST\" method on endpoint \"/backyard/activity\" with the following :",
  "keyword": "When ",
  "doc_string": {
    "value": "{\n\t\"activityName\": \"Balloon Ride\"\n}"
  }
});
formatter.match({
  "location": "stepDefinition.i_perform_a_method_on_endpoint_with_the_following(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status should be 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.the_response_status_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "show me the response",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.show_me_the_response()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get a activity",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@NoDelete"
    }
  ]
});
formatter.step({
  "name": "I have backyard base URI",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.i_have_backyard_base_uri()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform a \"GET\" method on endpoint \"/backyard/activity/3\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.i_perform_a_method_on_endpoint(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.the_response_status_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "show me the response",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.show_me_the_response()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Update an activity",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@NoDelete"
    }
  ]
});
formatter.step({
  "name": "I have backyard base URI",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.i_have_backyard_base_uri()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform a \"PATCH\" method on endpoint \"/backyard/activity/2\" with the following :",
  "keyword": "When ",
  "doc_string": {
    "value": "{\n\t\"activityName\": \"Bon Fire\"\n}"
  }
});
formatter.match({
  "location": "stepDefinition.i_perform_a_method_on_endpoint_with_the_following(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.the_response_status_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "show me the response",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.show_me_the_response()"
});
formatter.result({
  "status": "passed"
});
});