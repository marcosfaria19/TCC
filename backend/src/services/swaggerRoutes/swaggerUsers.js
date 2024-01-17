// src/services/swaggerUsers.js
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *         - senha
 *         - cpf
 *         - telefone
 *         - endereco
 *         - idade
 *       properties:
 *         id:
 *           type: string
 *           description: ID gerado automaticamente para usuários
 *         nome:
 *           type: string
 *           description: Nome do usuário
 *         email:
 *           type: string
 *           description: Endereço de e-mail do usuário
 *         senha:
 *           type: string
 *           description: Senha do usuário
 *         cpf:
 *           type: string
 *           description: CPF do usuário
 *         telefone:
 *           type: string
 *           description: Número de telefone do usuário
 *         endereco:
 *           type: string
 *           description: Endereço do usuário
 *         idade:
 *           type: number
 *           description: Idade do usuário
 *
 */
/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: API para gerenciar Usuários
 * paths:
 *   /users/register:
 *     post:
 *       summary: Registrar um novo usuário
 *       tags: [Users]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       responses:
 *         201:
 *           description: Usuário registrado com sucesso
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *         500:
 *           description: Erro no servidor
 *   /users:
 *     get:
 *       summary: Obter todos os usuários
 *       tags: [Users]
 *       responses:
 *         200:
 *           description: Lista de usuários
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/User'
 *   /users/{id}:
 *     get:
 *       summary: Retornar usuário por ID
 *       tags: [Users]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: ID do usuário
 *       responses:
 *         200:
 *           description: Usuário por ID
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *         404:
 *           description: Usuário não encontrado
 *     put:
 *       summary: Atualizar o usuário pelo ID
 *       tags: [Users]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: ID do usuário
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       responses:
 *         200:
 *           description: O usuário foi atualizado
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *         404:
 *           description: Usuário não encontrado
 *         500:
 *           description: Algum erro ocorreu
 *     delete:
 *       summary: Remover o usuário pelo ID
 *       tags: [Users]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: ID do usuário
 *       responses:
 *         200:
 *           description: O usuário foi excluído
 *         404:
 *           description: Usuário não encontrado
 */
