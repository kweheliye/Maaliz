package com.hashi.rest.domain;

import java.io.Serializable;

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "MOTOR_CAR_EXTRAS")
//@JsonIdentityInfo(generator = ObjectIdGenerators.UUIDGenerator.class)
public class CarExtras implements Serializable {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "EXTRA_ID", nullable = false, unique = true)
	private Integer extraId;
	@Column(name = "EXTRA_VALUE", nullable = false, unique = true)
	private Integer extraValue;
	
	public Integer getExtraId() {
		return extraId;
	}

	public void setExtraId(Integer extraId) {
		this.extraId = extraId;
	}

	public Integer getExtraValue() {
		return extraValue;
	}

	public void setExtraValue(Integer extraValue) {
		this.extraValue = extraValue;
	}


}
