import { useContext } from "react";
import { ProductContext } from "../context/product/context";

export const useProductContext = () => {
    const context = useContext(ProductContext);
    return context;
}