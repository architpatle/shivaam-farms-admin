"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import {
  LayoutDashboard,
  Users,
  DollarSign,
  CalendarIcon,
  Package,
  Settings,
  Leaf,
  TrendingUp,
  Clock,
  AlertCircle,
  Home,
  UtensilsCrossed,
  Wine,
  User,
} from "lucide-react"
import { IndianRupee } from "lucide-react";

const revenueData = [
  { month: "Jan", revenue: 45000, expenses: 32000, profit: 13000 },
  { month: "Feb", revenue: 52000, expenses: 35000, profit: 17000 },
  { month: "Mar", revenue: 48000, expenses: 33000, profit: 15000 },
  { month: "Apr", revenue: 61000, expenses: 38000, profit: 23000 },
  { month: "May", revenue: 55000, expenses: 36000, profit: 19000 },
  { month: "Jun", revenue: 67000, expenses: 41000, profit: 26000 },
]

const usersData = [
  { id: 1, name: "Piyush K", email: "piyush@farm.com", role: "SuperAdmin", status: "Active" },
  { id: 2, name: "Shadab S", email: "shadab@farm.com", role: "Admin", status: "Active" },
  { id: 3, name: "Arya D", email: "arya@farm.com", role: "Restaurant Head", status: "Active" },
  { id: 4, name: "Sanika D", email: "sanika@farm.com", role: "Bar Head", status: "Active" },
  { id: 5, name: "Archit D", email: "archit@farm.com", role: "Villa Head", status: "Active" },
]

const stockData = [
  { name: "Organic Wheat", category: "Grains", price: 15.0, quantity: 200 },
  { name: "Fresh Milk 1L", category: "Dairy", price: 1.5, quantity: 80 },
  { name: "Olive Oil 5L", category: "Oils", price: 45.0, quantity: 20 },
  { name: "Seasonal Vegetables", category: "Veggies", price: 10.0, quantity: 50 },
]

const villasData = [
  { name: "Rosewood Villa", type: "Deluxe", status: "Occupied", rent: 1500 },
  { name: "Palm Retreat", type: "Standard", status: "Vacant", rent: 800 },
  { name: "Lakeview Home", type: "Premium", status: "Occupied", rent: 2000 },
]

const restaurantDishes = [
  { name: "Margherita Pizza", category: "Pizza", price: 12.99, quantity: 20 },
  { name: "Cheeseburger", category: "Burger", price: 10.5, quantity: 15 },
  { name: "Spaghetti Carbonara", category: "Pasta", price: 11.75, quantity: 10 },
  { name: "Caesar Salad", category: "Salad", price: 8.5, quantity: 25 },
  { name: "Chocolate Cake", category: "Dessert", price: 6.99, quantity: 12 },
]

const restaurantOrders = [
  { customer: "John Doe", dish: "Margherita Pizza", quantity: 2, status: "Completed" },
  { customer: "Jane Smith", dish: "Cheeseburger", quantity: 1, status: "Pending" },
  { customer: "Emily Davis", dish: "Caesar Salad", quantity: 1, status: "Pending" },
]

const barBeverages = [
  { name: "Mojito", category: "Cocktail", price: 6.0, quantity: 30 },
  { name: "Orange Juice", category: "Fresh", price: 3.5, quantity: 50 },
  { name: "Classic Beer", category: "Beer", price: 4.0, quantity: 60 },
]

const barOrders = [
  { customer: "Mike Brown", beverage: "Mojito", quantity: 2, status: "Completed" },
  { customer: "Sarah Lee", beverage: "Orange Juice", quantity: 3, status: "Pending" },
]

export default function ShivaamFarmsDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const Sidebar = () => (
    <div className="w-64 bg-sidebar border-r border-sidebar-border h-screen p-6">
      <div className="flex items-center gap-2 mb-8">
        <Leaf className="h-8 w-8 text-primary" />
        <h1 className="text-xl font-bold text-sidebar-foreground">Shivaam Farms</h1>
      </div>

      <nav className="space-y-2">
        {[
          { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
          { id: "stock", label: "Stock Management", icon: Package },
          { id: "villas", label: "Villas", icon: Home },
          { id: "restaurant", label: "Restaurant", icon: UtensilsCrossed },
          { id: "bars", label: "Bars", icon: Wine },
          { id: "users", label: "Users", icon: Users },
          { id: "settings", label: "Settings", icon: Settings },
        ].map((item) => (
          <Button
            key={item.id}
            variant={activeTab === item.id ? "default" : "ghost"}
            className="w-full justify-start gap-2"
            onClick={() => setActiveTab(item.id)}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </nav>
    </div>
  )

  const DashboardOverview = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-balance">Dashboard Overview</h1>
        <div className="flex items-center gap-2">
          <User className="h-5 w-5" />
          <span className="text-sm text-muted-foreground">Admin View</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Villas</CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              18 occupied, 7 vacant
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">350</div>
            <p className="text-xs text-muted-foreground">
              <AlertCircle className="inline h-3 w-3 mr-1" />
              25 low stock items
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders Today</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">230</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +12% from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rs. 1,12,500</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +8% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue, expenses, and profit</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="var(--color-chart-1)" />
                <Bar dataKey="expenses" fill="var(--color-chart-2)" />
                <Bar dataKey="profit" fill="var(--color-chart-3)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates across all modules</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">New villa booking</p>
                  <p className="text-sm text-muted-foreground">Rosewood Villa - 3 nights</p>
                </div>
                <Badge variant="default">New</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">Stock alert</p>
                  <p className="text-sm text-muted-foreground">Olive Oil running low</p>
                </div>
                <Badge variant="destructive">Alert</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">Restaurant order</p>
                  <p className="text-sm text-muted-foreground">Table 5 - Margherita Pizza</p>
                </div>
                <Badge variant="secondary">Pending</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const StockSection = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Stock Management</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">350</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Stock</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">300</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Out of Stock</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">50</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Products Inventory</CardTitle>
          <CardDescription>Current stock levels for all products</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price (Rs.)</TableHead>
                <TableHead>Quantity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stockData.map((product, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>Rs. {product.price.toFixed(2)}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )

  const VillasSection = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Villas Management</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Villas</CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Occupied</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vacant</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rs. 2,18,000</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Villas Overview</CardTitle>
          <CardDescription>Current status of all villas</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Villa Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Rent/Month (Rs.)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {villasData.map((villa, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{villa.name}</TableCell>
                  <TableCell>{villa.type}</TableCell>
                  <TableCell>
                    <Badge variant={villa.status === "Occupied" ? "default" : "secondary"}>{villa.status}</Badge>
                  </TableCell>
                  <TableCell>Rs. {villa.rent.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )

  const RestaurantSection = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Restaurant Management</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Dishes</CardTitle>
            <UtensilsCrossed className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">50</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders Today</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rs. 32,850</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Menu Items</CardTitle>
            <CardDescription>Available dishes and their quantities</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Dish Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price (Rs.)</TableHead>
                  <TableHead>Available Qty</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {restaurantDishes.map((dish, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{dish.name}</TableCell>
                    <TableCell>{dish.category}</TableCell>
                    <TableCell>Rs. {dish.price}</TableCell>
                    <TableCell>{dish.quantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Current order status</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Dish</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {restaurantOrders.map((order, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{order.customer}</TableCell>
                    <TableCell>{order.dish}</TableCell>
                    <TableCell>{order.quantity}</TableCell>
                    <TableCell>
                      <Badge variant={order.status === "Completed" ? "default" : "secondary"}>{order.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const BarsSection = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Bars Management</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Beverages</CardTitle>
            <Wine className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">40</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders Today</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
                        <IndianRupee className="h-4 w-4 text-muted-foreground" />

          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rs. 26,650</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Beverage Menu</CardTitle>
            <CardDescription>Available drinks and their quantities</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Beverage Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price (Rs.)</TableHead>
                  <TableHead>Available Qty</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {barBeverages.map((beverage, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{beverage.name}</TableCell>
                    <TableCell>{beverage.category}</TableCell>
                    <TableCell>Rs. {beverage.price}</TableCell>
                    <TableCell>{beverage.quantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Current order status</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Beverage</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {barOrders.map((order, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{order.customer}</TableCell>
                    <TableCell>{order.beverage}</TableCell>
                    <TableCell>{order.quantity}</TableCell>
                    <TableCell>
                      <Badge variant={order.status === "Completed" ? "default" : "secondary"}>{order.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const UsersSection = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Users Management</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Users</CardTitle>
          <CardDescription>All registered users and their roles</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usersData.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === "Active" ? "default" : "secondary"}>{user.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )

  const SettingsSection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Settings</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Farm Information</CardTitle>
            <CardDescription>Basic farm details and contact information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Farm Name</label>
              <input className="w-full mt-1 p-2 border rounded-md" defaultValue="Shivaam Farms" readOnly />
            </div>
            <div>
              <label className="text-sm font-medium">Address</label>
              <input className="w-full mt-1 p-2 border rounded-md" defaultValue="123 Farm Road, Rural Area" readOnly />
            </div>
            <div>
              <label className="text-sm font-medium">Phone</label>
              <input className="w-full mt-1 p-2 border rounded-md" defaultValue="+1 (555) 123-4567" readOnly />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input className="w-full mt-1 p-2 border rounded-md" defaultValue="info@shivaamfarms.com" readOnly />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Operating Hours</CardTitle>
            <CardDescription>Farm and facility operating hours</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Opening Time</label>
                <input type="time" className="w-full mt-1 p-2 border rounded-md" defaultValue="06:00" readOnly />
              </div>
              <div>
                <label className="text-sm font-medium">Closing Time</label>
                <input type="time" className="w-full mt-1 p-2 border rounded-md" defaultValue="22:00" readOnly />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Closed Days</label>
              <div className="flex gap-2 mt-2">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <Button key={day} variant="outline" size="sm" disabled>
                    {day}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />
      case "stock":
        return <StockSection />
      case "villas":
        return <VillasSection />
      case "restaurant":
        return <RestaurantSection />
      case "bars":
        return <BarsSection />
      case "users":
        return <UsersSection />
      case "settings":
        return <SettingsSection />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8">{renderContent()}</div>
      </main>
    </div>
  )
}
