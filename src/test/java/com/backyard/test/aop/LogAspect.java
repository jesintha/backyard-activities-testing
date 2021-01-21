package com.backyard.test.aop;


import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;



@Aspect
@Component
public class LogAspect {

	
	  private Logger logger = LoggerFactory.getLogger(this.getClass());
	  
	  @Before("execution(* io.restassured.RestAssured.*(..))") 
	  public void before(JoinPoint joinPoint){ 
	  logger.info(" Allowed execution for {}", joinPoint);
	  System.out.println("before point cut for io.restassured.RestAssured.*" + joinPoint.getSignature());
	  }
	  
	  @Before("execution(* com.backyard.test.activities.stepDefinition.*(..))") 
	  public void beforeSd(JoinPoint joinPoint){ //Advice
	  logger.info(" Allowed execution for {}", joinPoint);
	  System.out.println("before com.backyard.test.activities.stepDefinition.*(..)" + joinPoint.getSignature());
	  
	  }
	 

}
