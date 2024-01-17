// src/services/swaggerDocumentos.js
/**
 * @swagger
 * components:
 *   schemas:
 *     Documento:
 *       type: object
 *       required:
 *         - id_usuario
 *         - tipo
 *       properties:
 *         id:
 *           type: string
 *           description: ID gerado automaticamente para documentos
 *         id_usuario:
 *           type: string
 *           description: ID do usuário associado ao documento
 *         tipo:
 *           type: string
 *           description: Tipo de documento
 *
 */
/**
 * @swagger
 * tags:
 *   - name: Documentos
 *     description: API para gerenciar Documentos
 * paths:
 *   /documentos:
 *     post:
 *       summary: Criar um novo documento
 *       tags: [Documentos]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Documento'
 *       responses:
 *         201:
 *           description: Documento criado com sucesso
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Documento'
 *         500:
 *           description: Erro no servidor
 *     get:
 *       summary: Obter todos os documentos
 *       tags: [Documentos]
 *       responses:
 *         200:
 *           description: Lista de documentos
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Documento'
 */
