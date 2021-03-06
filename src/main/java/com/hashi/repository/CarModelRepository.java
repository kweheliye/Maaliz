package com.hashi.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

import com.hashi.rest.domain.CarsModel;
import com.hashi.rest.domain.Product;
import com.hashi.rest.enums.ProductPriority;

@Repository
@RestResource(exported = false)
public interface CarModelRepository extends JpaRepository<CarsModel, Long> {
	
	public List<CarsModel> findByMakeIdAndModelNameLikeIgnoreCase(Long makeId, String modelName);
	
}