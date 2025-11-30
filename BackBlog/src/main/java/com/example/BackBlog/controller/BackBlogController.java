package com.example.BackBlog.controller;

import com.example.BackBlog.model.Articulo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/articulos")
@CrossOrigin(origins = "*")
public class BackBlogController {

    private List<Articulo> articulos;

    public BackBlogController() {
        articulos = new ArrayList<>();

        articulos.add(new Articulo(
                "1",
                "El futuro de la IA en 2025",
                "https://www.zabala.es/wp-content/uploads/2023/11/Inteligencia-artificial-y-consultoria-1200x675.jpg",
                "La inteligencia artificial sigue avanzando a pasos de gigante...",
                LocalDate.of(2025, 1, 10)
        ));

        articulos.add(new Articulo(
                "2",
                "Spring Boot presenta nueva versión",
                "https://positivethinking.tech/wp-content/uploads/2023/09/Cover-Insight-Springboot-3.0-1024x683.png",
                "La nueva versión mejora el rendimiento y simplifica el desarrollo...",
                LocalDate.of(2025, 1, 8)
        ));

        articulos.add(new Articulo(
                "3",
                "Cómo estudiar DAW sin morir en el intento",
                "https://iespacomolla.es/wp-content/uploads/2019/05/thumbnail-daw.png",
                "Aquí tienes técnicas reales para mejorar tu aprendizaje...",
                LocalDate.of(2024, 12, 30)
        ));
    }

    @GetMapping
    public ResponseEntity<List<Articulo>> getArticulos() {
        return ResponseEntity.ok(articulos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Articulo> getArticulo(@PathVariable String id) {
        return articulos.stream()
                .filter(a -> a.getId().equals(id))
                .findFirst()
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
