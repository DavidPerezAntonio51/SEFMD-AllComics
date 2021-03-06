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
@Document("Comics")
@NoArgsConstructor
@AllArgsConstructor
public class Comics {
    @Id
    @Getter
    @Setter
    private String id;
    @Getter
    @Setter
    private String nombre;
    @Getter
    @Setter
    private String serie;
    @Getter
    @Setter
    private Integer numerocomic;
    @Getter
    @Setter
    private String editorial;
    @Getter
    @Setter
    private String tipodeportada;
    @Getter
    @Setter
    private String descripcion;
    @Getter
    @Setter
    private Binary portada;
}
