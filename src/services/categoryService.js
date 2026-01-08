import { listAllCategories, insertNewCategory, updateCategoryById, deleteCategoryById } from "../repositories/categoryRepository.js";

export async function listCategories(){
    return await listAllCategories()
}

export async function createCategorie(categoryData){
    if(!categoryData.name){
        const err = new Error("Name is required")
        err.statusCode = 400
        throw err
    }

    try {
        return await insertNewCategory(categoryData.name)
    } catch {
        throw err
    }
}

export async function updateCategory(categoryData){
    if(!categoryData.id){
        const err = new Error("Id is required")
        err.statusCode = 400
        throw err
    }

    if(!categoryData.name){
        const err = new Error("Name is required")
        err.statusCode = 400
        throw err
    }

    try {
        return await updateCategoryById(categoryData)
    } catch {
        throw err
    }
}

export async function deleteCategory(categoryData){
    if(!categoryData.id){
        const err = new Error("Id is required")
        err.statusCode = 400
        throw err
    }

    try {
        return await deleteCategoryById(categoryData.id)
    } catch {
        throw err
    }
}