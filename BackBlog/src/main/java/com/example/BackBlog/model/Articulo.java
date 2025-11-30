package com.example.BackBlog.model;
import java.time.LocalDate;

public class Articulo {

    private String id;
    private String titulo;
    private String imagen;
    private String texto;
    private LocalDate fecha;

    public Articulo(String id, String titulo, String imagen, String texto, LocalDate fecha) {
        this.id = id;
        this.titulo = titulo;
        this.imagen = imagen;
        this.texto = texto;
        this.fecha = fecha;
    }

    public String getId() { return id; }
    public String getTitulo() { return titulo; }
    public String getImagen() { return imagen; }
    public String getTexto() { return texto; }
    public LocalDate getFecha() { return fecha; }
}

