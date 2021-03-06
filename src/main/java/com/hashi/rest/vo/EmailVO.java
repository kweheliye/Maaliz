package com.hashi.rest.vo;

import java.util.Locale;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.hashi.rest.domain.User;
import com.hashi.rest.enums.MailType;


@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes(value = {
    @JsonSubTypes.Type(value = EmailReplyAdVO.class),
    @JsonSubTypes.Type(value = EmailVerificationVO.class),
    @JsonSubTypes.Type(value = EmailReplyJobVO.class),
    @JsonSubTypes.Type(value = EmailAdPendingVO.class),
    @JsonSubTypes.Type(value = EmailNotificationJobSeekerVO.class)
    
})
public class EmailVO {

	protected  MailType mailType;
	protected  Locale local;
	protected  User user;

    public EmailVO(){}
	public EmailVO(final MailType mailType, Locale local, User user) {
		this.mailType= mailType;
		this.local= local;
		this.user=user;
	}

	public MailType getMailType() {
		return mailType;
	}

	public Locale getLocal() {
		return local;
	}

	public void setMailType(MailType mailType) {
		this.mailType = mailType;
	}

	public void setLocal(Locale local) {
		this.local = local;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
}