import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Users, Map, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: 'Farm Management',
      description: 'Track and manage farm operations, products, and resources efficiently.',
      href: '/dashboard'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'User Management',
      description: 'Manage users, roles, and permissions across the system.',
      href: '/users'
    },
    {
      icon: <Map className="h-8 w-8 text-orange-600" />,
      title: 'Interactive Map',
      description: 'View farmer distributions across Nigeria with interactive mapping.',
      href: '/map'
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: 'Analytics & Reports',
      description: 'Generate detailed reports and visualize key metrics.',
      href: '/reports'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Agricultural Database Management System</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Streamline your agricultural data management with our comprehensive solution
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/dashboard">Get Started</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="w-full">
                  <Link href={feature.href}>Explore {feature.title}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}