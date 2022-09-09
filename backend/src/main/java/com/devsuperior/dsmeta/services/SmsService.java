package com.devsuperior.dsmeta.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Vendas;
import com.devsuperior.dsmeta.repositories.VendasRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;


@Service
public class SmsService {

	@Value("${twilio.sid}")
	private String twilioSid;

	@Value("${twilio.key}")
	private String twilioKey;

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo;

	@Autowired
	private VendasRepository vendaRepo;
	
	public void sendSms(Long vendaId) {
		
		Vendas venda = vendaRepo.findById(vendaId).get();
		
		String date = venda.getDate().getMonthValue() + "/" + venda.getDate().getYear();
		
		String msg = "O(A) vendedor(a) " + venda.getSellerName() + " foi destaque em" + date
				+ " com um total de R$ " + String.format("%.2f", venda.getAmount());

		Twilio.init(twilioSid, twilioKey);

		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

		Message message = Message.creator(to, from, msg).create();

		System.out.println(message.getSid());
	}
}
