import { useContext } from "react";
import { ProductContext } from "../context/product/context";

export const useCartContext = () => {
    const context = useContext(ProductContext);
    return context;
}