/**
 * @swagger
 * components:
 *   schemas:
 *     Animais:
 *       type: object
 *       required:
 *         - nome
 *         - categoria
 *         - idade
 *         - personalidade
 *         - saude
 *         - genero
 *         - imagemUrl
 *       properties:
 *         id:
 *           type: string
 *           description: ID gerado automaticamente para animais
 *         nome:
 *           type: string
 *           description: Nome do animal
 *         categoria:
 *           type: string
 *           description: Cachorro ou Gato
 *         idade:
 *           type: number
 *           description: Idade em anos
 *         genero:
 *           type: string
 *           description: Macho ou Fêmea
 *
 */
/**
 * @swagger
 * tags:
 *   - name: Animais
 *     description: API para gerenciar Animais
 * paths:
 *   /animais:
 *     get:
 *       summary: Listar todos os animais cadastrados
 *       tags: [Animais]
 *       responses:
 *         200:
 *           description: Lista de animais
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Animais'
 *     post:
 *       summary: Criar novo animal
 *       tags: [Animais]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Animais'
 *       responses:
 *         200:
 *           description: O animal criado.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Animais'
 *         500:
 *           description: Erro no servidor
 *   /animais/{id}:
 *     get:
 *       summary: Retornar animal por ID
 *       tags: [Animais]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: ID do animal
 *       responses:
 *         200:
 *           description: Animal por ID
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Animais'
 *         404:
 *           description: Animal não encontrado
 *     put:
 *       summary: Atualizar o animal pelo ID
 *       tags: [Animais]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: ID do animal
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Animais'
 *       responses:
 *         200:
 *           description: O animal foi atualizado
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Animais'
 *         404:
 *           description: Animal não encontrado
 *         500:
 *           description: Algum erro ocorreu
 *     delete:
 *       summary: Remover o animal pelo ID
 *       tags: [Animais]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: ID do animal
 *       responses:
 *         200:
 *           description: O animal foi excluído
 *         404:
 *           description: Animal não encontrado
 */
