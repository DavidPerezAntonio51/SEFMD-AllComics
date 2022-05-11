/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.allcomics.Servicios;

import com.escom.ipn.allcomics.Modelos.Comics;
import com.escom.ipn.allcomics.Repositorios.RepositorioComics;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
        comicsrepo.findByNombreStartsWith(regex).forEach(comic -> {nombres.add(comic.getNombre());});
        return nombres;
    }
    
    public Integer obtenerPaginasBusquedas(String regex){
        return comicsrepo.findByNombreRegex(regex).size();
    }
    
    public List<Comics> comicsBusqueda(String regex, Integer page){
        Pageable pagewith_10_elements = PageRequest.of(page, 10);
        return comicsrepo.findByNombreRegex(regex, pagewith_10_elements);
    }
    
    public List<Comics> obtenerPagina(Integer numeroPagina){
        Pageable pagewith_15_elements = PageRequest.of(numeroPagina, 15);
        return comicsrepo.findAll(pagewith_15_elements).getContent();
    }
    
    public Integer obtenerTotalComics(){
        return comicsrepo.findAll().size();
    }
    
    public Comics detalles(String id){
        return comicsrepo.findById(id).get();
    }
    
    public List<Comics> novedades(){
        Pageable page = PageRequest.of(0, 5, Sort.by(Sort.Direction.DESC, "_id"));
        return comicsrepo.findAll(page).getContent();
    }
}
