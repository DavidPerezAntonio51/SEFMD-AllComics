/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.allcomics.Controladores;

import com.escom.ipn.allcomics.Modelos.Comics;
import com.escom.ipn.allcomics.Modelos.Inventario;
import com.escom.ipn.allcomics.Servicios.ServicioComics;
import com.escom.ipn.allcomics.Servicios.ServicioInventario;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author DEZKS
 */
@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.OPTIONS})
@RequestMapping("/api/public")
public class ControladorPrincipal {
    
    @Autowired
    private ServicioInventario inventarioService;
    
    @Autowired
    private ServicioComics comicsService;
    
    @GetMapping("/allcomics")
    public ResponseEntity<List<Inventario>> mostrarTodosLosComics(@RequestParam(name="page", defaultValue = "0") Integer page){
        List<Comics> pagina = comicsService.obtenerPagina(page);
        System.out.println(comicsService.obtenerTotalComics());
        return new ResponseEntity(pagina, HttpStatus.OK);
    }
    
    @GetMapping("/comics")
    public ResponseEntity<List<Comics>> muestraComicsEspecificos(@RequestParam String comic){
        return new ResponseEntity(HttpStatus.OK);
    }
    
    @GetMapping("/totalcomics")
    public ResponseEntity<Integer> mostrarTotalComics(){
        return new ResponseEntity(inventarioService.obtenerTotalComics(), HttpStatus.OK);
    }
    
    @GetMapping("/autocompletadocomics")
    public ResponseEntity<List<String>> autocompletadoBusqueda(@RequestParam String busqueda){
        return new ResponseEntity(comicsService.autocompletado(busqueda), HttpStatus.OK);
    }
}
