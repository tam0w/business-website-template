'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription } from '@/components/ui/empty'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { Search, Mail, Bell, User, ChevronDown, Download, Trash2, Edit, Settings, MoreVertical, LogOut, CreditCard } from 'lucide-react'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.section variants={fadeInUp}>
    <h2 className="text-lg font-semibold mb-3 text-muted-foreground">{title}</h2>
    {children}
  </motion.section>
)

export function DesignSystemShowcase() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Design System</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Comprehensive showcase of UI components and design patterns
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Buttons & Badges */}
          <Section title="Buttons & Badges">
            <Card>
              <CardContent className="pt-6 grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm">Default</Button>
                    <Button size="sm" variant="secondary">Secondary</Button>
                    <Button size="sm" variant="destructive">Destructive</Button>
                    <Button size="sm" variant="outline">Outline</Button>
                    <Button size="sm" variant="ghost">Ghost</Button>
                    <Button size="sm" variant="link">Link</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm"><Mail />Email</Button>
                    <Button size="sm" variant="outline"><Download />Download</Button>
                    <Button size="icon" variant="outline"><Settings /></Button>
                    <Button size="icon" variant="ghost"><Bell /></Button>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Error</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8"><AvatarFallback className="text-xs">SM</AvatarFallback></Avatar>
                    <Avatar><AvatarFallback>MD</AvatarFallback></Avatar>
                    <Avatar className="h-12 w-12"><AvatarFallback>LG</AvatarFallback></Avatar>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Section>

          {/* Form Controls */}
          <Section title="Form Controls">
            <Card>
              <CardContent className="pt-6 grid gap-4 md:grid-cols-2">
                <Input placeholder="Text input..." />
                <Input type="email" placeholder="email@example.com" />
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search..." className="pl-9" />
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Option 1</SelectItem>
                    <SelectItem value="2">Option 2</SelectItem>
                    <SelectItem value="3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </Section>

          {/* Dropdown Menu */}
          <Section title="Dropdown Menu">
            <Card>
              <CardContent className="pt-6 flex flex-wrap gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Actions <ChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><User />Profile</DropdownMenuItem>
                    <DropdownMenuItem><CreditCard />Billing</DropdownMenuItem>
                    <DropdownMenuItem><Settings />Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><LogOut />Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <MoreVertical />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem><Edit />Edit</DropdownMenuItem>
                    <DropdownMenuItem><Download />Download</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive"><Trash2 />Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>
          </Section>

          {/* Cards */}
          <Section title="Cards">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Basic Card</CardTitle>
                  <CardDescription>Simple card example</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Content area for any information
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">With Footer</CardTitle>
                  <CardDescription>Includes actions</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground pb-3">
                  Card with footer buttons
                </CardContent>
                <CardFooter className="gap-2 pt-0">
                  <Button size="sm">Action</Button>
                  <Button size="sm" variant="outline">Cancel</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">With Avatar</CardTitle>
                  <CardDescription>User profile card</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <Avatar><AvatarFallback>JD</AvatarFallback></Avatar>
                    <div>
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">Developer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Section>

          {/* Table */}
          <Section title="Table">
            <Card>
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">John Doe</TableCell>
                      <TableCell><Badge variant="secondary">Active</Badge></TableCell>
                      <TableCell>Developer</TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" variant="ghost"><Edit /></Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Jane Smith</TableCell>
                      <TableCell><Badge variant="secondary">Active</Badge></TableCell>
                      <TableCell>Designer</TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" variant="ghost"><Edit /></Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </Section>

          {/* Empty State */}
          <Section title="Empty State">
            <Card>
              <CardContent className="pt-6">
                <Empty>
                  <EmptyHeader>
                    <EmptyTitle>No items found</EmptyTitle>
                    <EmptyDescription>
                      Get started by creating your first item or adjusting your filters
                    </EmptyDescription>
                  </EmptyHeader>
                </Empty>
              </CardContent>
            </Card>
          </Section>

          {/* Animations */}
          <Section title="Animations">
            <div className="grid gap-4 md:grid-cols-3">
              <motion.div
                className="p-6 border rounded-lg bg-accent/50 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h4 className="font-semibold mb-1">Scale</h4>
                <p className="text-sm text-muted-foreground">Hover & click</p>
              </motion.div>

              <motion.div
                className="p-6 border rounded-lg bg-accent/50 cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="font-semibold mb-1">Lift</h4>
                <p className="text-sm text-muted-foreground">Hover to lift</p>
              </motion.div>

              <motion.div
                className="p-6 border rounded-lg bg-accent/50 cursor-pointer"
                whileHover={{ rotate: 2 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="font-semibold mb-1">Rotate</h4>
                <p className="text-sm text-muted-foreground">Hover to rotate</p>
              </motion.div>
            </div>
          </Section>

          {/* Typography */}
          <Section title="Typography">
            <Card>
              <CardContent className="pt-6 space-y-3">
                <h1 className="text-3xl font-bold">Heading 1</h1>
                <h2 className="text-2xl font-semibold">Heading 2</h2>
                <h3 className="text-xl font-semibold">Heading 3</h3>
                <h4 className="text-lg font-semibold">Heading 4</h4>
                <p className="text-base">Body text - The quick brown fox jumps over the lazy dog</p>
                <p className="text-sm text-muted-foreground">Small text for secondary information</p>
                <p className="text-xs text-muted-foreground">Extra small text for captions</p>
              </CardContent>
            </Card>
          </Section>

          {/* Colors */}
          <Section title="Color Palette">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                  <div className="space-y-1.5">
                    <div className="h-16 rounded-lg bg-primary" />
                    <p className="text-xs font-medium">Primary</p>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-16 rounded-lg bg-secondary" />
                    <p className="text-xs font-medium">Secondary</p>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-16 rounded-lg bg-accent" />
                    <p className="text-xs font-medium">Accent</p>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-16 rounded-lg bg-destructive" />
                    <p className="text-xs font-medium">Destructive</p>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-16 rounded-lg bg-muted border" />
                    <p className="text-xs font-medium">Muted</p>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-16 rounded-lg bg-card border" />
                    <p className="text-xs font-medium">Card</p>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-16 rounded-lg border" />
                    <p className="text-xs font-medium">Border</p>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-16 rounded-lg bg-background border" />
                    <p className="text-xs font-medium">Background</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Section>
        </motion.div>
      </div>
    </div>
  )
}
