-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-08-01 21:27:08.619

-- tables
-- Table: TB_COMENTARIO
CREATE TABLE TB_COMENTARIO (
    id_comentario int NOT NULL AUTO_INCREMENT,
    texto varchar(400) NOT NULL,
    id_post int NOT NULL,
    id_user int NOT NULL,
    CONSTRAINT TB_COMENTARIO_pk PRIMARY KEY (id_comentario)
);

-- Table: TB_POST
CREATE TABLE TB_POST (
    id_post int NOT NULL AUTO_INCREMENT,
    titulo varchar(50) NOT NULL,
    texto varchar(400) NOT NULL,
    id_user int NOT NULL,
    CONSTRAINT TB_POST_pk PRIMARY KEY (id_post)
);

-- Table: TB_USER
CREATE TABLE TB_USER (
    id_user int NOT NULL AUTO_INCREMENT,
    nome varchar(200) NOT NULL,
    email varchar(200) NOT NULL,
    senha varchar(300) NOT NULL,
    CONSTRAINT TB_USER_pk PRIMARY KEY (id_user)
);

-- foreign keys
-- Reference: TB_COMENTARIO_TB_POST (table: TB_COMENTARIO)
ALTER TABLE TB_COMENTARIO ADD CONSTRAINT TB_COMENTARIO_TB_POST FOREIGN KEY TB_COMENTARIO_TB_POST (id_post)
    REFERENCES TB_POST (id_post)
    ON DELETE CASCADE;

-- Reference: TB_COMENTARIO_TB_USER (table: TB_COMENTARIO)
ALTER TABLE TB_COMENTARIO ADD CONSTRAINT TB_COMENTARIO_TB_USER FOREIGN KEY TB_COMENTARIO_TB_USER (id_user)
    REFERENCES TB_USER (id_user);

-- Reference: TB_POST_TB_USER (table: TB_POST)
ALTER TABLE TB_POST ADD CONSTRAINT TB_POST_TB_USER FOREIGN KEY TB_POST_TB_USER (id_user)
    REFERENCES TB_USER (id_user);

-- End of file.

