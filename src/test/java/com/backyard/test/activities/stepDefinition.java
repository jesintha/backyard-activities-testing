package com.backyard.test.activities;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.greaterThan;

import org.junit.Before;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

@TestPropertySource("classpath:configuration.properties")
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class stepDefinition{
	
	@Value("${activities.baseurl}")
	String baseUrl;

	RequestSpecification requestSpecification;
	Response response;
	ValidatableResponse validatableResponse;
	@Before
	public void init() {
		requestSpecification = given().contentType("application/json");
		System.out.println("before");
	}
	
	@Given("I have backyard base URI")
	public void i_have_backyard_base_uri() {
		requestSpecification = given().baseUri(baseUrl);
	}

	@When("I perform a {string} method on endpoint {string}")
	public void i_perform_a_method_on_endpoint(String verb, String operationPath) {
		response = requestSpecification.when()
				//.log().all()
				.request(verb, operationPath);
	}
	
	@Then("the response status should be {int}")
	public void the_response_status_should_be(int statusCode) {
		//validatableResponse.assertThat().statusCode(statusCode);
		response.
			then()
			//.log().all()
				.statusCode(statusCode);
			/*and()
				.header("Content-Type",contentType);*/
	}
	@Then("response with Content-type should be {string}")
	public void response_with_content_type_should_be(String string) {
		response.
		then()
			.and()
			//.log().all()
				.header("Content-Type",string);
	}


	@Then("show me the response")
	public void show_me_the_response() {
		//System.out.println("RESPONSE:" + response.asString());
	}
	
	@Then("I should be able to get response for more than {int} activities details")
	public void i_should_be_able_to_get_response_for_activities_details(Integer count) {
		validatableResponse = response.then();
		validatableResponse.assertThat()
		//.log().all()
		.body("activities.id.size()", greaterThan(count));
	}
	
	@When("I perform a {string} method on endpoint {string} with the following :")
	public void i_perform_a_method_on_endpoint_with_the_following(String verb, String operationPath, String requestBody) {
		response = requestSpecification.when()
				//.log().all()
				.header("Content-Type","application/json").body(requestBody).request(verb,operationPath);
	}

}
