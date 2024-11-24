"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Grain, Search, Plus } from "lucide-react"

interface Product {
  id: string
  name: string
  category: string
  quantity: number
  unit: string
  status: "In Stock" | "Low Stock" | "Out of Stock"
  lastUpdated: string
}

const initialProducts: Product[] = [
  {
    id: "1",
    name: "Rice",
    category: "Grains",
    quantity: 1500,
    unit: "tons",
    status: "In Stock",
    lastUpdated: "2024-02-20"
  },
  {
    id: "2",
    name: "Tomatoes",
    category: "Vegetables",
    quantity: 250,
    unit: "tons",
    status: "Low Stock",
    lastUpdated: "2024-02-19"
  },
  {
    id: "3",
    name: "Cattle",
    category: "Livestock",
    quantity: 200,
    unit: "heads",
    status: "In Stock",
    lastUpdated: "2024-02-18"
  },
  {
    id: "4",
    name: "Poultry",
    category: "Livestock",
    quantity: 5000,
    unit: "birds",
    status: "In Stock",
    lastUpdated: "2024-02-17"
  }
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [products, setProducts] = useState<Product[]>(initialProducts)

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status: Product["status"]) => {
    switch (status) {
      case "In Stock":
        return "bg-green-500"
      case "Low Stock":
        return "bg-yellow-500"
      case "Out of Stock":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New Product
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>

          <ScrollArea className="h-[600px] rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Updated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Grain className="mr-2 h-4 w-4" />
                        {product.name}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{product.category}</Badge>
                    </TableCell>
                    <TableCell>{`${product.quantity} ${product.unit}`}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(product.status)}>
                        {product.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{product.lastUpdated}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}