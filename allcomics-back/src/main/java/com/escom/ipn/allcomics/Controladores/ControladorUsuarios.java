/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.allcomics.Controladores;

import com.escom.ipn.allcomics.Modelos.Usuarios;
import com.escom.ipn.allcomics.Servicios.ServicioTokens;
import com.escom.ipn.allcomics.Servicios.ServicioUsuarios;
import java.util.HashMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.util.MultiValueMapAdapter;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author DEZKS
 */
@RestController
@RequestMapping("/api/public/usuarios")
public class ControladorUsuarios {
    
    @Autowired
    private ServicioUsuarios usuariosService;
    
    @Autowired
    private ServicioTokens tokensService;
    
    @PostMapping("/iniciarsesion")
    public ResponseEntity<String> iniciarSesion(@RequestBody Usuarios usuario){
        if(usuariosService.verificarSiExiste(usuario)){
            if(usuariosService.verificarContraseña(usuario)){
                usuario = usuariosService.obtenerDatos(usuario);
                MultiValueMap<String, String> headers = new LinkedMultiValueMap<>();
                headers.add("BeareToken", tokensService.crearTokenAutenticacion(usuario));
                return new ResponseEntity(headers,HttpStatus.ACCEPTED);
            }else{
                return new ResponseEntity("Verifique que la contraseña sea correcta",HttpStatus.UNAUTHORIZED);
            }
        }else{
            return new ResponseEntity("Debe registrarse antes de poder iniciar sesion",HttpStatus.UNAUTHORIZED);
        }
    }
    
    @PostMapping("/registrar")
    public ResponseEntity registrarUsusario(@RequestBody Usuarios usuarios){
        if(usuariosService.verificarSiExiste(usuarios)){
            return new ResponseEntity("El correo proporcionado ya fue registrado", HttpStatus.NOT_ACCEPTABLE);
        }else{
            usuariosService.crearNuevoUsuario(usuarios);
            return new ResponseEntity("Creado Correctamente",HttpStatus.CREATED);
        }
    }
}
