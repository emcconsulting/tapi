package com.codemetal.tapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.codemetal.tapi.metadata.repository.TestCaseRepository;
import com.codemetal.tapi.metadata.repository.TestSuiteRepository;
import com.codemetal.tapi.metadata.service.TestCaseServiceImpl;
import com.codemetal.tapi.metadata.service.TestSuiteService;
import com.codemetal.tapi.metadata.service.TestSuiteServiceImpl;


@SpringBootApplication(scanBasePackageClasses= 
{TestCaseRepository.class,TestSuiteRepository.class,
		TestCaseServiceImpl.class,TestSuiteServiceImpl.class
		})

@EnableMongoRepositories(basePackageClasses = {TestCaseRepository.class,TestSuiteRepository.class})
public class ApiTestTool {
	public static void main(String[] args) {
        SpringApplication.run(ApiTestTool.class, args);
    }
}
