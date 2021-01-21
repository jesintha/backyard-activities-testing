package com.backyard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
@EnableAspectJAutoProxy(proxyTargetClass=true)
@SpringBootApplication
public class BackyardTestApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackyardTestApplication.class, args);
    }
}
