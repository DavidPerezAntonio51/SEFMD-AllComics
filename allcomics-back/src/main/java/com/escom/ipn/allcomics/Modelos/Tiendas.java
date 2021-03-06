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
import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 *
 * @author DEZKS
 */
@Document("Tiendas")
@AllArgsConstructor
@NoArgsConstructor
public class Tiendas {
    
    @Id
    @Getter
    @Setter
    private String id;
    @Getter
    @Setter
    private String nombre;
    @Getter
    @Setter
    private String rfc;
    @Getter
    @Setter
    private String direccion;
    @Getter
    @Setter
    private String horario;
    @Getter
    @Setter
    private Binary imagentienda;
}
