import Form from 'form-data'
import { createProductAPI } from "../api/createProductAPI";

const handleProductSubmit = async (event: any, setPostSuccess: any, setPostError: any, userId: string) => {
    event.preventDefault();
    const {
        product_name,
        product_pictures,
        product_category,
        product_sub_category,
        product_description,
        product_price,
        product_quantity,
        product_weight,
        product_size,
        product_code,
        product_demos_links,
        product_photos_links,
    } = event.target.elements;

    const formData = new Form();
    formData.append('product_name', product_name.value);
    let filesObject: any;
    try {
        filesObject = document.querySelector('#product_pictures') as any;
        formData.append('product_pictures[]', filesObject.files);
    } catch (error) {
       console.log(error)
    }
    formData.append('product_category', product_category.value);
    formData.append('product_sub_category', product_sub_category.value);
    formData.append('product_description', product_description.value,);
    formData.append('product_price', product_price.value);
    formData.append('product_quantity', product_quantity.value);
    formData.append('product_weight', product_weight.value);
    formData.append('product_size', product_size.value);
    formData.append('product_code', product_code.value);
    formData.append('product_demos_links', product_demos_links.value);
    formData.append('product_photos_links', product_photos_links.value);
    formData.append('user', userId);

    await createProductAPI(formData, setPostSuccess, setPostError);

};

export {
    handleProductSubmit
}