import { updateProductAPI } from "../api/updateProductAPI";

const handleProductEditSubmit = async (event: any, setPostSuccess: any, setPostError: any, setLoading:any, productId:string) => {
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
        productId
    }
    await updateProductAPI(productData, setPostSuccess, setPostError, setLoading);

};

export {
    handleProductEditSubmit
}