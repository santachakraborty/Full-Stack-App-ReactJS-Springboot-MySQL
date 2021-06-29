package com.springbootbackend.application.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springbootbackend.application.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long>{

}
