/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.allcomics.Controladores;

import com.escom.ipn.allcomics.Modelos.Comics;
import com.escom.ipn.allcomics.Servicios.ServicioComics;
import java.io.IOException;
import org.bson.BsonBinarySubType;
import org.bson.conversions.Bson;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@RequestMapping("/api/public/upload")
public class ControladorCargaComics {
    
    @Autowired
    private ServicioComics comicsService;
    
    @PostMapping("/comic")
    public ResponseEntity cargarComic(
            @RequestParam("nombre") String nombre,
            @RequestParam("serie") String serie,
            @RequestParam("numerocomic") Integer numerocomic,
            @RequestParam("editorial") String editorial,
            @RequestParam("portada") MultipartFile portada
    )throws IOException{
        Comics comic = new Comics();
        comic.setNombre(nombre);
        comic.setNumerocomic(numerocomic);
        comic.setEditorial(editorial);
        comic.setSerie(serie);
        comic.setPortada(new Binary(BsonBinarySubType.BINARY, portada.getBytes()));
        comic = comicsService.guardarNuevoComic(comic);
        return new ResponseEntity(comic.getId(),HttpStatus.CREATED);
    }
}
