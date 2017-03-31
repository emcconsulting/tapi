package com.codemetal.tapi.repository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.codemetal.tapi.metadata.TestSuite;

import net.sf.ehcache.store.cachingtier.CountBasedBackEnd;

public interface TestSuiteRepository extends PagingAndSortingRepository<TestSuite,Long> {
	
	
}
