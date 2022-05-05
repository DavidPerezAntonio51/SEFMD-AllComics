/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.allcomics.Servicios;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.JwtParserBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import javax.crypto.SecretKey;
import org.springframework.stereotype.Service;

/**
 *
 * @author DEZKS
 */
@Service
public class ServicioTokens {
    private final String SECRETO = "KappaIsLoveForSigmaAndNothingCanChangheThat";//BINO APROBADO
    private final String USER = "User";
    private final String TERRARIO = "Terrario";
    private final String PREFIX = "Bearer ";
    private final JwtBuilder TOKENBUILDER = Jwts.builder();
    private final JwtParserBuilder PARSERBUILDER = Jwts.parserBuilder();
    private final SignatureAlgorithm FIRMA = SignatureAlgorithm.HS256;
    private SecretKey key;
    
    
}
