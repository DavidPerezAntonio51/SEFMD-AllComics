/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.allcomics.Repositorios;

import com.escom.ipn.allcomics.Modelos.Comics;
import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author DEZKS
 */
public interface RepositorioComics extends MongoRepository<Comics, String>{
    
    
    public List<Comics> findByNombreRegex(String regex);
    
    public List<Comics> findByNombreStartsWith(String token);
    
    public List<Comics> findByNombreRegex(String regex, Pageable page);
    
    public List<Comics> findByNombre(String comic);
    
    
    
}
