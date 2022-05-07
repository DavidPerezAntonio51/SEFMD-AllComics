/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.allcomics.Servicios;

import com.escom.ipn.allcomics.Modelos.Usuarios;
import com.escom.ipn.allcomics.Repositorios.RepositorioUsuarios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author DEZKS
 */
@Service
public class ServicioUsuarios {
    
    @Autowired
    private RepositorioUsuarios repoUsuarios;
    
    public Usuarios crearNuevoUsuario(Usuarios user){
        user=repoUsuarios.save(user);
        return user;
    }
    
    public Boolean verificarSiExiste(Usuarios user){
        return repoUsuarios.findByCorreo(user.getCorreo())!=null;
    }
    
    public Boolean verificarContraseña(Usuarios user){
        return repoUsuarios.findByCorreo(user.getCorreo()).getContraseña().equals(user.getContraseña());
    }
    
    public Usuarios obtenerDatos(Usuarios user){
        return repoUsuarios.findByCorreo(user.getCorreo());
    }
    
}
