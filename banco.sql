create database assertivus;
use assertivus;

-- ===========================================================
--  TABELA: profiles (Setores da empresa)
-- ===========================================================
CREATE TABLE profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sectorName VARCHAR(50) NOT NULL UNIQUE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ===========================================================
--  TABELA: users (Usuários do sistema)
-- ===========================================================
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    passwordHash VARCHAR(255) NOT NULL,
    profileId INT NULL,
    isActive BOOLEAN DEFAULT TRUE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_users_email (email),
    FOREIGN KEY (profileId) REFERENCES profiles(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ===========================================================
--  TABELA: events (Eventos do sistema)
-- ===========================================================
CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    action VARCHAR(255) NOT NULL,
    module VARCHAR(100) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ===========================================================
--  TABELA: companys (Cadastro de empresas)
-- ===========================================================
CREATE TABLE companys (
    id INT AUTO_INCREMENT PRIMARY KEY,
    razao_social VARCHAR(150) NOT NULL UNIQUE,
    cnpj VARCHAR(20) UNIQUE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ===========================================================
--  TABELA: retrieve_users (Recuperação de senha)
-- ===========================================================
CREATE TABLE retrieve_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    pass_token VARCHAR(12) NOT NULL,
    expiresIn DATETIME NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ===========================================================
--  ÍNDICES ADICIONAIS
-- ===========================================================
CREATE INDEX idx_events_userId ON events(userId);
CREATE INDEX idx_users_profileId ON users(profileId);
CREATE INDEX idx_retrieve_email ON retrieve_users(email);

-- ===========================================================
--  DADOS INICIAIS (opcional)
-- ===========================================================
-- Exemplo de inserção de setores:
INSERT INTO profiles (sectorName) VALUES
('Admin'),
('Fiscal'),
('Contábil'),
('Departamento Pessoal'),
('Societário'),
('Financeiro');
UPDATE users
SET passwordHash = '$2b$12$8hsFi6ZQ.oSVMn5tc15ijeeTSl0FEmgB9KTxgq6KEqhczZImAPnxm'
WHERE id = 1;
select * from users;
