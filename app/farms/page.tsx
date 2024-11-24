"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Leaf, Search } from "lucide-react"

interface Farm {
  id: string
  name: string
  location: string
  size: string
  products: string[]
  owner: string
}

const initialFarms: Farm[] = [
  {
    id: "1",
    name: "Green Acres Farm",
    location: "Lagos State",
    size: "50 hectares",
    products: ["Rice", "Cassava"],
    owner: "John Doe"
  },
  {
    id: "2",
    name: "Sunshine Agricultural Hub",
    location: "Oyo State",
    size: "75 hectares",
    products: ["Maize", "Soybean"],
    owner: "Jane Smith"
  },
  {
    id: "3",
    name: "Delta Farms",
    location: "Delta State",
    size: "100 hectares",
    products: ["Oil Palm", "Rubber"],
    owner: "Michael Johnson"
  }
]

export default function FarmsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [farms, setFarms] = useState<Farm[]>(initialFarms)

  const filteredFarms = farms.filter(farm => 
    farm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    farm.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    farm.owner.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Farms Management</h1>
        <Button>
          <Leaf className="mr-2 h-4 w-4" />
          Add New Farm
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Farm Registry</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search farms..."
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
                  <TableHead>Farm Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Products</TableHead>
                  <TableHead>Owner</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredFarms.map((farm) => (
                  <TableRow key={farm.id}>
                    <TableCell className="font-medium">{farm.name}</TableCell>
                    <TableCell>{farm.location}</TableCell>
                    <TableCell>{farm.size}</TableCell>
                    <TableCell>{farm.products.join(", ")}</TableCell>
                    <TableCell>{farm.owner}</TableCell>
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