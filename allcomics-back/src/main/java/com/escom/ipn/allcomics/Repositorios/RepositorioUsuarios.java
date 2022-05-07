/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.allcomics.Repositorios;

import com.escom.ipn.allcomics.Modelos.Usuarios;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author DEZKS
 */
public interface RepositorioUsuarios extends MongoRepository<Usuarios, Object>{
    
    public Usuarios findByCorreo(String correo);
}
