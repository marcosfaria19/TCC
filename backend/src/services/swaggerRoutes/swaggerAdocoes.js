// src/services/swaggerAdocao.js
/**
 * @swagger
 * components:
 *   schemas:
 *     Adocao:
 *       type: object
 *       required:
 *         - id_usuario
 *         - id_animal
 *         - data_adocao
 *       properties:
 *         id:
 *           type: string
 *           description: ID gerado automaticamente para adoções
 *         id_usuario:
 *           type: string
 *           description: ID do usuário responsável pela adoção
 *         id_animal:
 *           type: string
 *           description: ID do animal adotado
 *         data_adocao:
 *           type: string
 *           format: date
 *           description: Data da adoção
 *
 */
/**
 * @swagger
 * tags:
 *   - name: Adocoes
 *     description: API para gerenciar Adoções
 * paths:
 *   /adocoes:
 *     post:
 *       summary: Criar uma nova adoção
 *       tags: [Adocoes]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Adocao'
 *       responses:
 *         201:
 *           description: Adoção criada com sucesso
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Adocao'
 *         500:
 *           description: Erro no servidor
 *     get:
 *       summary: Obter todas as adoções
 *       tags: [Adocoes]
 *       responses:
 *         200:
 *           description: Lista de adoções
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Adocao'
 *   /adocoes/{id}:
 *     get:
 *       summary: Retornar adoção por ID
 *       tags: [Adocoes]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: ID da adoção
 *       responses:
 *         200:
 *           description: Adoção por ID
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Adocao'
 *         404:
 *           description: Adoção não encontrada
 *     put:
 *       summary: Atualizar adoção por ID
 *       tags: [Adocoes]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: ID da adoção
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Adocao'
 *       responses:
 *         200:
 *           description: A adoção foi atualizada
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Adocao'
 *         404:
 *           description: Adoção não encontrada
 *         500:
 *           description: Erro no servidor
 *     delete:
 *       summary: Remover adoção por ID
 *       tags: [Adocoes]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: ID da adoção
 *       responses:
 *         200:
 *           description: A adoção foi excluída
 *         404:
 *           description: Adoção não encontrada
 */
