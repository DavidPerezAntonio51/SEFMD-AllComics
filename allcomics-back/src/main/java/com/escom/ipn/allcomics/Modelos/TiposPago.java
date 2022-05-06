/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.allcomics.Modelos;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 *
 * @author DEZKS
 */
@Document("TiposPago")
public class TiposPago {
    
    @Id
    @Getter
    @Setter
    private String id;
    @Getter
    @Setter
    private Integer numerodetarjeta;
    @Getter
    @Setter
    private String fechavencimiento;
    @Getter
    @Setter
    private Integer cvv;
    @Getter
    @Setter
    private String usuarioId;
}
