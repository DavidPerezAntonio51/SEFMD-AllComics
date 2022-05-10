/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.allcomics.Servicios;

import com.escom.ipn.allcomics.Modelos.Usuarios;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.JwtParserBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.util.Date;
import java.util.Map;
import javax.crypto.SecretKey;
import org.springframework.stereotype.Service;

/**
 *
 * @author DEZKS
 */
@Service
public class ServicioTokens {
    private final String SECRETO = "KappaIsLoveForSigmaAndNothingCanChangheThat";//Secreto para firma de token
    private final String USER = "User";
    private final String PREFIX = "Bearer ";
    private final JwtBuilder TOKENBUILDER = Jwts.builder();
    private final JwtParserBuilder PARSERBUILDER = Jwts.parserBuilder();
    private final SignatureAlgorithm FIRMA = SignatureAlgorithm.HS256;
    private SecretKey key;
    
    public String crearTokenAutenticacion(Usuarios usuario){
        usuario.setContraseña("");
        usuario.setCorreo("");
        key = Keys.hmacShaKeyFor(SECRETO.getBytes());
        String token = TOKENBUILDER.claim(USER, usuario)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(null)//cambiar si es necesario
                .signWith(key, FIRMA).compact();
        return token;
    }
    
    public Boolean validaToken(String JWT) {
        String token = JWT.replace(PREFIX, "");
        key = Keys.hmacShaKeyFor(SECRETO.getBytes());
        Jws<Claims> tokenparseado = PARSERBUILDER.setSigningKey(key).build().parseClaimsJws(token);
        return tokenparseado.getBody().get(USER)!=null;
    }
    
    public Usuarios getUserFromToken(String JWT) {
        String token = JWT.replace(PREFIX, "");
        key = Keys.hmacShaKeyFor(SECRETO.getBytes());
        Jws<Claims> tokenparseado = PARSERBUILDER.setSigningKey(key).build().parseClaimsJws(token);
        Map<String, String> user = (Map<String, String>) tokenparseado.getBody().get(USER);
        return new Usuarios(user.get("id"), user.get("username"), user.get("nombreCompleto"), user.get("direccion"), "", "", user.get("telefono"), user.get("rfc"));
    }
    
    public String refrescarToken(String JWT){
        String token = JWT.replace(PREFIX, "");
        key = Keys.hmacShaKeyFor(SECRETO.getBytes());
        Jws<Claims> tokenparseado = PARSERBUILDER.setSigningKey(key).build().parseClaimsJws(token);
        Map<String, String> user = (Map<String, String>) tokenparseado.getBody().get(USER);
        return this.crearTokenAutenticacion(new Usuarios(user.get("id"), user.get("username"), user.get("nombreCompleto"), user.get("direccion"), "", "", user.get("telefono"), user.get("rfc")));
    }
}
