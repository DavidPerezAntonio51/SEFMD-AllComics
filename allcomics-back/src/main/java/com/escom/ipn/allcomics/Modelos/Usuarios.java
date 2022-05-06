/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.allcomics.Modelos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 *
 * @author DEZKS
 */
@AllArgsConstructor
@NoArgsConstructor
@Document("Usuarios")
public class Usuarios {
    
    @Id
    @Getter
    @Setter
    private String id;
    @Getter
    @Setter
    private String username;
    @Getter
    @Setter
    private String nombreCompleto;
    @Getter
    @Setter
    private String direccion;
    @Getter
    @Setter
    private String correo;
    @Getter
    @Setter
    private String contraseña;
    @Getter
    @Setter
    private Integer telefono;
    @Getter
    @Setter
    private String rfc;
}
