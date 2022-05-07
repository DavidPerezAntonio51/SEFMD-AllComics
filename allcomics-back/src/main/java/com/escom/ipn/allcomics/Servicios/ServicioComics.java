/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.allcomics.Servicios;

import com.escom.ipn.allcomics.Modelos.Comics;
import com.escom.ipn.allcomics.Repositorios.RepositorioComics;
import org.springframework.beans.factory.annotation.Autowired;
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
}
