package com.codemetal.tapi.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.codemetal.tapi.metadata.TestCaseDetails;
import com.codemetal.tapi.metadata.TestSuite;


public interface TestCaseRepository extends PagingAndSortingRepository<TestCaseDetails,Long> {

	Page<TestCaseDetails> findByTestSuiteId(String id,Pageable pageable);
	
}
