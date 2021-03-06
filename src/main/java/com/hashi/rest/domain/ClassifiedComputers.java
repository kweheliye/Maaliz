package com.hashi.rest.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "CLASSIFIED_COMPUTERS")
public class ClassifiedComputers extends Product implements Serializable {

	@Column(name = "AGE_ITEM")
	private Integer ageItem;
	@Column(name = "USAGE_ITEM")
	private Integer usageItem;
	@Column(name = "CONDITION_ITEM")
	private Integer conditionItem;

	@Column(name = "BRAND_ITEM")
	private String brandItem;
	@Column(name = "MEMORY_RAM")
	private Integer memoryRam;
	@Column(name = "PROCESSOR_SPEED")
	private Integer processorSpeed;
	@Column(name = "HARD_DRIVE")
	private Integer hardDrive;

	@Column(name = "WARRANTY_ITEM")
	private Integer warrantyItem;

	public Integer getAgeItem() {
		return ageItem;
	}

	public Integer getUsageItem() {
		return usageItem;
	}

	public Integer getConditionItem() {
		return conditionItem;
	}

	public String getBrandItem() {
		return brandItem;
	}

	public Integer getMemoryRam() {
		return memoryRam;
	}

	public Integer getProcessorSpeed() {
		return processorSpeed;
	}

	public Integer getHardDrive() {
		return hardDrive;
	}

	public Integer getWarrantyItem() {
		return warrantyItem;
	}

	public void setAgeItem(Integer ageItem) {
		this.ageItem = ageItem;
	}

	public void setUsageItem(Integer usageItem) {
		this.usageItem = usageItem;
	}

	public void setConditionItem(Integer conditionItem) {
		this.conditionItem = conditionItem;
	}

	public void setBrandItem(String brandItem) {
		this.brandItem = brandItem;
	}

	public void setMemoryRam(Integer memoryRam) {
		this.memoryRam = memoryRam;
	}

	public void setProcessorSpeed(Integer processorSpeed) {
		this.processorSpeed = processorSpeed;
	}

	public void setHardDrive(Integer hardDrive) {
		this.hardDrive = hardDrive;
	}

	public void setWarrantyItem(Integer warrantyItem) {
		this.warrantyItem = warrantyItem;
	}
}
