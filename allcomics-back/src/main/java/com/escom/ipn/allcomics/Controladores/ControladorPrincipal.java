/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.allcomics.Controladores;

import com.escom.ipn.allcomics.Modelos.Comics;
import com.escom.ipn.allcomics.Modelos.Inventario;
import com.escom.ipn.allcomics.Servicios.ServicioInventario;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author DEZKS
 */
@RestController
@RequestMapping("/api/public")
public class ControladorPrincipal {
    
    @Autowired
    private ServicioInventario inventarioService;
    
    @GetMapping("/comics")
    public ResponseEntity<List<Inventario>> mostrarInventario(@RequestParam(name="page", defaultValue = "0") Integer page){
        List<Inventario> pagina = inventarioService.obtenerPagina(page);
        System.out.println(inventarioService.obtenerTotalComics());
        return new ResponseEntity(pagina, HttpStatus.OK);
    }
    
    @GetMapping("/totalcomics")
    public ResponseEntity<Integer> mostrarTotalComics(){
        return new ResponseEntity(inventarioService.obtenerTotalComics(), HttpStatus.OK);
    }
}
