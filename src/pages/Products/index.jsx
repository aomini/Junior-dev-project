import React,{useMemo,useEffect,useState} from 'react'
import { Button } from 'reactstrap';
import DataTable from 'react-data-table-component';
import Layout from '../../components/Layout'
import {fetchProducts} from '../../products'

const Products = () =>  {
    
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetchProducts.then(setProducts)
    },[])
    const columns = useMemo(() => [
        {
          name: 'Name',
          selector: 'name',
          sortable: true,
        },
        {
          name: 'Price',
          selector: 'price',
          sortable: true,
        },
        {
          name: 'Code',
          selector: 'code',
          sortable: true,
        },
       {
        cell: () => <Button size="sm" color="primary">View</Button>,
        button: true,
       },
       {
        cell: () => <Button size="sm" color="danger" >Delete</Button>,
        button: true,
       }
      ], [products]);
    return (
        <Layout title="Products">
            <DataTable columns={columns} data={products}  pagination/>
        </Layout>
    )
}

export default Products
