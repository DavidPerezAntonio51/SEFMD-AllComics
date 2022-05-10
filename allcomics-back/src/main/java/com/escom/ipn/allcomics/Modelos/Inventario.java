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
@Document("Inventario")
@AllArgsConstructor
@NoArgsConstructor
public class Inventario {
    
    @Id
    @Getter
    @Setter
    private String id;
    @Getter
    @Setter
    private String comicId;
    @Getter
    @Setter
    private String tiendaId;
    @Getter
    @Setter
    private Integer cantidad;
    @Getter
    @Setter
    private String precio;
}
