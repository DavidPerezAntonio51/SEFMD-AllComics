/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.allcomics.Repositorios;

import com.escom.ipn.allcomics.Modelos.Inventario;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author DEZKS
 */
public interface RepositorioInventario extends MongoRepository<Inventario, String>{
    
}
