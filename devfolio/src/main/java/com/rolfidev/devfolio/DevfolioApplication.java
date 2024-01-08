package com.rolfidev.devfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class DevfolioApplication {

	public static void main(String[] args) {
		SpringApplication.run(DevfolioApplication.class, args);
	}

	@GetMapping("/")
	private static void getMe() {
		System.out.println("Hello world!");
	}

}
