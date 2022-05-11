/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.allcomics.Controladores;

import com.escom.ipn.allcomics.Modelos.Comics;
import com.escom.ipn.allcomics.Modelos.Inventario;
import com.escom.ipn.allcomics.Modelos.Tiendas;
import com.escom.ipn.allcomics.Servicios.ServicioComics;
import com.escom.ipn.allcomics.Servicios.ServicioInventario;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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
        return new ResponseEntity(pagina, HttpStatus.OK);
    }
    
    @GetMapping("/detallescomic")
    public ResponseEntity<Comics> detallesDeComic(@RequestParam String id){
        return new ResponseEntity(comicsService.detalles(id),HttpStatus.OK);
    }
    
    @GetMapping("/comics")
    public ResponseEntity<List<Comics>> muestraComicsEspecificos(@RequestParam String search, @RequestParam(name="page", defaultValue = "0") Integer page){
        List<Comics> resultadoBusqueda = comicsService.comicsBusqueda(search, page);
        return new ResponseEntity(resultadoBusqueda,HttpStatus.OK);
    }
    
    @GetMapping("/busquedaPaginas")
    public ResponseEntity<List<Integer>> paginasDeBusqueda(@RequestParam String search){
        Integer totalEncontrado = comicsService.obtenerPaginasBusquedas(search);
        List<Integer> paginas = new ArrayList();
        for(int i = 1; i<=Math.ceil(totalEncontrado/10.0); i++){
            paginas.add(i);
        }
        return new ResponseEntity(paginas,HttpStatus.OK);
    }
    
    @GetMapping("/totalcomics")
    public ResponseEntity<List<Integer>> mostrarTotalComics(){
        Integer comicsTotales = comicsService.obtenerTotalComics();
        List<Integer> paginas = new ArrayList();
        for(int i = 1; i<=Math.ceil(comicsTotales/15.0); i++){
            paginas.add(i);
        }
        return new ResponseEntity(paginas, HttpStatus.OK);
    }
    
    @GetMapping("/autocompletadocomics")
    public ResponseEntity<List<String>> autocompletadoBusqueda(@RequestParam String busqueda){
        return new ResponseEntity(comicsService.autocompletado(busqueda), HttpStatus.OK);
    }
    
    @GetMapping("/alltiendas")
    public ResponseEntity<List<Tiendas>> mostrarTodasLasTiendas(){
        return new ResponseEntity(inventarioService.listaTiendas(),HttpStatus.OK);
    }
    
    @PostMapping("/registrarTienda")
    public ResponseEntity registrarTienda(
            @RequestParam String nombre,
            @RequestParam String rfc,
            @RequestParam String direccion,
            @RequestParam String horario,
            @RequestParam("imagen") MultipartFile imagen
    ) throws IOException{
        Tiendas tienda = new Tiendas();
        tienda.setNombre(nombre);
        tienda.setRfc(rfc);
        tienda.setDireccion(direccion);
        tienda.setHorario(horario);
        tienda.setImagentienda(new Binary(BsonBinarySubType.BINARY,imagen.getBytes()));
        tienda = inventarioService.registrarTienda(tienda);
        return new ResponseEntity(tienda.getId(),HttpStatus.OK);
    }
    
}
