import React, { useContext, useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import { AuthContext } from '../../Provider/AuthProvider';

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();

  useEffect(() => {
    if (user?.email) {
      axiosInstance
        .get(`/manager/products/${user.email}`)
        .then(res => setProducts(res.data))
        .catch(error => console.log(error));
    }
  }, [user?.email, axiosInstance]);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {products.map(product => (
            <tr key={product._id}>
   

              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={product?.productImage} alt={product.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{product.name}</div>
                  </div>
                </div>
              </td>

              <td>{product.category}</td>
              <td>${product.price}</td>

              <td>
                <button className="btn btn-ghost btn-xs">Edit</button>
                <button className="btn btn-ghost btn-xs">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default ManageProduct;
