package com.codemetal.tapi.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.codemetal.tapi.metadata.TestCaseDetails;

public interface TestCaseRepository extends PagingAndSortingRepository<TestCaseDetails, Long> {

	Page<TestCaseDetails> findByTestSuiteId(String id, Pageable pageable);

}
