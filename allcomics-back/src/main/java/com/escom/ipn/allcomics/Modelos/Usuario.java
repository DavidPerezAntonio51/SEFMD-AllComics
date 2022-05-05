/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.allcomics.Modelos;

import org.springframework.data.annotation.Id;

/**
 *
 * @author DEZKS
 */
@All
public class Usuario {
    
    @Id
    private String id;
    private String username;
    private String nombreCompleto;
    private String direccion;
    private String correo;
    private String contraseña;
    private Integer telefono;
}
