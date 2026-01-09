import { listCategories, createCategorie, updateCategory, deleteCategory } from "../services/categoryService.js";

export async function getCategories(req, res, next){
    try {
        const categories = await listCategories()
        res.json(categories)
    } catch (err) {
        next(err)
    }
}

export async function postCategory(req, res, next){
    try {
        const category = await createCategorie({...req.body})
        res.status(201).json(category)
    } catch (err) {
        next(err)
    }
}

export async function putCategory(req, res, next){
    try {
        const category = await updateCategory({id: req.params.id, ...req.body})
        res.json(category)
    } catch (err) {
        next(err)
    }
}

export async function delCategory(req, res, next){
    try {
        await deleteCategory({id: req.params.id})
        res.status(204).send()
    } catch (err) {
        next(err)
    }
}