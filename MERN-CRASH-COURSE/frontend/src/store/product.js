import {create} from 'zustand';

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({products}),
    createProduct: async (newProduct) => { 
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return {success: false, message: "Please fill in all fields"};
        }
        console.log("Creating product:", newProduct);
        try {
            const res = await fetch("/api/products", {
                method: "POST",
                body: JSON.stringify(newProduct),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            
            const data = await res.json();
            
            if (data.success) {
                set((state) => ({products: [...state.products, data.data]}));
                return {success: true, message: "Product created successfully"};
            } else {
                return {success: false, message: data.message || "Failed to create product"};
            }
        } catch (error) {
            return {success: false, message: "Failed to create product: " + error.message};
        }
    },
    fetchProducts: async () => {
        const response = await fetch('/api/products');
        const data = await response.json();
        set({products: data.data || []});
    },
    deleteProduct: async (pid) => { 
        console.log("Deleting product with id:", pid);
        const res = await fetch(`/api/products/${pid}`, {
            method: 'DELETE',
        })

        const data = await res.json();
        if (!data.success) return {success: false, message: data.message}

        set((state) => ({
          products: state.products.filter(product => product._id !== pid),
        }));

        return {success: true, message: data.message || "Product deleted successfully"};
    },
    updateProduct: async (pid, updatedProduct) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        });

        const data = await res.json();
        if (!data.success) return {success: false, message: data.message}

        set((state) => ({products: state.products.map(product => product._id === pid ? data.data : product)}));
        return {success: true, message: data.message};
    },
}));