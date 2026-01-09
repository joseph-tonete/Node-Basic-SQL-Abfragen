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

    return await insertNewCategory(categoryData.name)
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

    return await updateCategoryById(categoryData)
}

export async function deleteCategory(categoryData){
    if(!categoryData.id){
        const err = new Error("Id is required")
        err.statusCode = 400
        throw err
    }

    await deleteCategoryById(categoryData.id)

    return 
}