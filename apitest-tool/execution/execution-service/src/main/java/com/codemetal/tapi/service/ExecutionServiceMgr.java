package com.codemetal.tapi.service;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;

import com.codemetal.tapi.repository.TestCaseRepository;
import com.codemetal.tapi.repository.TestSuiteRepository;



import com.codemetal.tapi.metadata.TestCaseDetails;
import com.codemetal.tapi.metadata.TestSuite;

/**
 * This class prvides services to execute the testsuites and testcases.
 * 
 * @author Amy Tripathi
 *
 */
public class ExecutionServiceMgr {

	@Autowired
	TestSuiteRepository testSuiteRepo;

	@Autowired
	TestCaseRepository testCaseRepo;

	public Collection<TestSuite> findAllTestSuites(Pageable pageable) {

		Collection<TestSuite> results = null;
		results = testSuiteRepo.findAll(pageable).getContent();
		return results;

	}

	public Collection<TestCaseDetails> findTestCasesByTestSuiteId(String testSuiteId, Pageable pageable) {

		Page<TestCaseDetails> results = testCaseRepo.findByTestSuiteId(testSuiteId, pageable);

		Collection<TestCaseDetails> testCaseDetailsResultList = results.getContent();
		return testCaseDetailsResultList;

	}

	public void executeTest() {

		Collection<TestCaseDetails> testCaseDetails = null;
		int size1 = 10;
		int size = 50;
		int page = 0;
		int page1 = 0;
		Direction sortDir = Sort.Direction.ASC;
		String sortKey = "name";
		Long count1 = testSuiteRepo.count();
		Long count = testCaseRepo.count();
		for (long i = 0; i < count1 / size1; i++) {
			Pageable pageable1 = new PageRequest(page1, size1, sortDir, sortKey);
			for (TestSuite testSuite : findAllTestSuites(pageable1)) {
				for (long j = 0; j < count / size; j++) {
					Pageable pageable = new PageRequest(page, size, sortDir, sortKey);
					testCaseDetails = findTestCasesByTestSuiteId(testSuite.getId(), pageable);
					for (TestCaseDetails details : testCaseDetails) {
						System.out.println(details.getScenarioDescription());

					}
					page = page + 1;
				}

			}
			page1 = page1 + 1;

		}

	}

}
