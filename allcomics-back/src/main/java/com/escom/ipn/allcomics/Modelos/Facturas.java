/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.allcomics.Modelos;

import java.util.List;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 *
 * @author DEZKS
 */
@Document("Facturas")
public class Facturas {
    
    @Id
    @Getter
    @Setter
    private String id;
    @Getter
    @Setter
    private Usuarios usuario;
    @Getter
    @Setter
    private Tiendas tienda;
    @Getter
    @Setter
    private List<Comics> comics;
    @Getter
    @Setter
    private String fecha;
    @Getter
    @Setter
    private Integer ticket;
}
