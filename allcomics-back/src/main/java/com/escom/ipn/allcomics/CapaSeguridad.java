/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.allcomics;

import com.escom.ipn.allcomics.Filtros.FiltroTokens;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 *
 * @author DEZKS
 */
@EnableWebSecurity
@Configuration
public class CapaSeguridad extends WebSecurityConfigurerAdapter{
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .addFilterAfter(new FiltroTokens(), UsernamePasswordAuthenticationFilter.class)
                .authorizeRequests().antMatchers("/api/public/**").permitAll()
                .anyRequest().authenticated();
        http.cors();
    }
}
