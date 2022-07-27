import axios from "axios";
export default class ProductService {
//добавить проверку
    static async fetchProductsByCategoryID(id){
        try{
            const respons =  await axios.get('http://localhost:8080/categories?id=' + id);
        let imgId =[];
        respons.data.products.forEach(function(i){
            if (i.image.length < 1){
                imgId.push(25);
            } else {
                
                imgId.push(i.image[0].id);
            }
            
        });
        return [respons.data.products.reverse(), imgId.reverse()];
        } catch(e) {
            console.log(e.message);
        }
        
    }
    static async fetchProductsBySubcategoryID(id){
        try{
            const respons =  await axios.get('http://localhost:8080/subcategories?id=' + id);
            let imgId =[];
            respons.data.products.forEach(function(i){
                if (i.image.length < 1){
                    imgId.push(25);
                } else {

                    imgId.push(i.image[0].id);
                }
            });
            return [respons.data.products.reverse(), imgId.reverse()];
        } catch(e) {
            console.log(e.message);
        }

    }

    static async fetchProductsByTitle(title){
        try{
            console.log(title);
            const respons =  await axios.get('http://localhost:8080/product/title?title=' + title);
            let imgId =[];
            console.log(respons.data)
            respons.data.forEach(function(i){
                if (i.image.length < 1){
                    imgId.push(25);
                } else {
                    imgId.push(i.image[0].id);
                }
            });
            return [respons.data, imgId];
        } catch(e) {
            console.log(e.message);
        }

    }
// добавить картинки к продукту 
// переименовать массив картинок
// products

    //картинки грузятся сразу в несколько мест
    static async fetchProductById(id){
        try{
            const respons =  await axios.get('http://localhost:8080/product?id=' + id);
            let imgId =[];
            respons.data.image.forEach((index, i) => 
                imgId[i] = index.id
            )
            return [respons.data, imgId];
        } catch(e) {
            console.log(e.message);
        }
    }
}