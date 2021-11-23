package com.grupo07.proyectosupermarket.Util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import com.grupo07.proyectosupermarket.Model.User;

import java.util.Date;

public class JwtUtil {

	public static String KEYSECRET = "laclavesecreta";

    public static String getToken( User user) {

        String token = Jwts.builder()
            .setSubject( user.getId_user().toString() )
            .setExpiration(new Date(System.currentTimeMillis() + 43200000))
            .signWith(SignatureAlgorithm.HS512, KEYSECRET)
            .compact();

        return token;    
    }
}