package com.codemetal.tapi.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.codemetal.tapi.metadata.TestSuite;

public interface TestSuiteRepository extends PagingAndSortingRepository<TestSuite, Long> {

}
