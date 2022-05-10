/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.allcomics.Servicios;

import com.escom.ipn.allcomics.Modelos.Comics;
import com.escom.ipn.allcomics.Modelos.Inventario;
import com.escom.ipn.allcomics.Repositorios.RepositorioComics;
import java.util.ArrayList;
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
public class ServicioComics {
    
    @Autowired
    private RepositorioComics comicsrepo;
    
    public Comics guardarNuevoComic(Comics comic){
        return comicsrepo.save(comic);
    }
    
    public List<String> autocompletado(String regex){
        List<String> nombres = new ArrayList();
        comicsrepo.findByNombreLike(regex).forEach(comic -> {nombres.add(comic.getNombre());});
        return nombres;
    }
    
    public List<Comics> obtenerPagina(Integer numeroPagina){
        Pageable pagewith_15_elements = PageRequest.of(numeroPagina, 15);
        return comicsrepo.findAll(pagewith_15_elements).getContent();
    }
    
    public Integer obtenerTotalComics(){
        return comicsrepo.findAll().size();
    }
}
