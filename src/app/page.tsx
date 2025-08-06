"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Adah Accounting</h1>
          <p className="text-muted-foreground">AI-Powered Accounting System</p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-4">Welcome to Smart Accounting</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Automate your accounting with AI-powered invoice processing, intelligent journal entries, and real-time financial insights.
          </p>
          <div className="flex gap-4">
            <Link href="/invoice">
              <Button size="lg">Upload Invoice</Button>
            </Link>
            <Link href="/chat">
              <Button variant="outline" size="lg">Ask Adah</Button>
            </Link>
          </div>
        </div>
        <div className="absolute right-8 top-8 opacity-20">
          <img 
            src="https://placehold.co/400x300?text=Modern+AI+accounting+dashboard+interface+with+charts+and+analytics" 
            alt="Modern AI accounting dashboard interface with charts and analytics"
            className="rounded-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,234.56</div>
            <p className="text-xs text-muted-foreground">+4.3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$32,997.33</div>
            <p className="text-xs text-muted-foreground">+15.8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Invoices Processed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+12 from yesterday</p>
          </CardContent>
        </Card>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>AI Invoice Processing</CardTitle>
            <CardDescription>
              Upload invoices and let AI extract data automatically using advanced OCR technology.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/invoice">
              <Button className="w-full">Process Invoice</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Smart Journal Entries</CardTitle>
            <CardDescription>
              Generate accurate journal entries automatically based on transaction data and accounting rules.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/journal">
              <Button className="w-full" variant="outline">View Journals</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Ask Adah Assistant</CardTitle>
            <CardDescription>
              Get instant answers about your finances with our AI-powered chat assistant.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/chat">
              <Button className="w-full" variant="outline">Start Chat</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Financial Reports</CardTitle>
            <CardDescription>
              Generate comprehensive financial reports with AI-powered insights and analysis.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/reports">
              <Button className="w-full" variant="outline">View Reports</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Predictive Analytics</CardTitle>
            <CardDescription>
              Get alerts and predictions about cash flow, expenses, and financial trends.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline" disabled>
              Coming Soon
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Compliance & Audit</CardTitle>
            <CardDescription>
              Ensure GAAP/IFRS compliance with automated checks and audit trail features.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline" disabled>
              Coming Soon
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
