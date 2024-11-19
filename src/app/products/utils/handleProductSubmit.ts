import Form  from 'form-data'
import { createProductAPI } from "../api/createProductAPI";

const handleProductSubmit = async (event: any, setPostSuccess: any, setPostError: any, userId:string) => {
    event.preventDefault();
    const {
        product_name,
        product_picture,
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
        photos
    } = event.target.elements;

    const productData = {
        product_name: product_name.value,
        product_picture: product_picture.value,
        product_category: product_category.value,
        product_sub_category: product_sub_category.value,
        product_description: product_description.value,
        product_price: product_price.value,
        product_quantity: product_quantity.value,
        product_weight: product_weight.value,
        product_size: product_size.value,
        product_code: product_code.value,
        product_demos_links:product_demos_links.value,
        product_photos_links:product_photos_links.value,
        photos:photos.value
    }

    const formData = new Form();
    formData.append('product_name',product_name.value);
    formData.append('product_pictures',product_picture.value);
    formData.append('product_category',product_category.value);
    formData.append('product_description', product_description.value,);
    formData.append('product_price' ,product_price.value);
    formData.append('product_quantity',product_quantity.value);
    formData.append('product_weight', product_weight.value);
    formData.append('product_size',product_size.value);
    formData.append('product_code',product_code.value);
    formData.append('product_demos_links',product_demos_links.value);
    formData.append('product_photos_links',product_photos_links.value);
    formData.append('user',userId);
    formData.append('photos[]',photos.value);

    console.log(Object.fromEntries(formData as any));

    console.log(productData);
    
    await createProductAPI(productData, setPostSuccess, setPostError);

};

export {
    handleProductSubmit
}