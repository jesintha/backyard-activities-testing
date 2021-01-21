package com.backyard.test.activities;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

//@TestPropertySource("classpath:application.properties")
@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:features/activities",
		//glue = {"classpath:com.backyard.test.stepdefinition"},
		
		plugin = {"pretty", "html:test-output/cucumberreport"},
		tags = "@NoDelete"
		)

public class RunnerTests {

}
