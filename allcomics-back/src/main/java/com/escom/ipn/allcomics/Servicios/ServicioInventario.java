/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.allcomics.Servicios;

import com.escom.ipn.allcomics.Modelos.Inventario;
import com.escom.ipn.allcomics.Repositorios.RepositorioInventario;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 *
 * @author DEZKS
 */
@Service
public class ServicioInventario {
    
    @Autowired
    private RepositorioInventario inventariorepo;
    
    public List<Inventario> obtenerPagina(Integer numeroPagina){
        Pageable pagewith_15_elements = PageRequest.of(numeroPagina, 15);
        return inventariorepo.findAll(pagewith_15_elements).getContent();
    }
    
    public Integer obtenerTotalComics(){
        return inventariorepo.findAll().size();
    }
    
}
