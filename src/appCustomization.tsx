Based on the transcript and the requirements, I've modified the appCustomization.tsx file to better align with Bridges Fund Management's needs. Here's the updated code:

```typescript
import React, { useState } from 'react';
import { AppConfig, TabConfig, ChartConfig } from './config';
import { BarChart2, Phone, Users, FileText, Briefcase } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

type CustomComponentProps = {
  config: AppConfig;
};

interface CustomComponents {
  [key: string]: React.FC<CustomComponentProps>;
}

interface CustomData {
  [key: string]: any;
}

// =============== CUSTOM COMPONENTS ===============
// Deal Pipeline Component
const DealPipelineComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [deals, setDeals] = useState([
    { id: 1, company: 'EcoTech Solutions', stage: 'Initial Contact', value: 5000000, sector: 'Energy Transition' },
    { id: 2, company: 'CircularWare', stage: 'Proposal', value: 3000000, sector: 'Circular Economy' },
    { id: 3, company: 'GreenBuild Systems', stage: 'Negotiation', value: 7000000, sector: 'Decarbonizing Built Environment' },
    { id: 4, company: 'SustainaTour', stage: 'Due Diligence', value: 4000000, sector: 'Sustainable Tourism' },
  ]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Deal Pipeline</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Company</th>
            <th>Stage</th>
            <th>Value</th>
            <th>Sector</th>
          </tr>
        </thead>
        <tbody>
          {deals.map(deal => (
            <tr key={deal.id}>
              <td>{deal.company}</td>
              <td>{deal.stage}</td>
              <td>${deal.value.toLocaleString()}</td>
              <td>{deal.sector}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Portfolio Performance Component
const PortfolioPerformanceComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const revenueGrowthData = config.analytics.charts.revenueGrowth.data;
  const profitMarginData = config.analytics.charts.profitMargin.data;

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Portfolio Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-64">
          <h3 className="text-lg font-semibold mb-2">Revenue Growth</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="growth" stroke={config.primaryColor} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="h-64">
          <h3 className="text-lg font-semibold mb-2">Profit Margin</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={profitMarginData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="margin" fill={config.secondaryColor} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

// Impact Metrics Component
const ImpactMetricsComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [metrics, setMetrics] = useState([
    { id: 1, metric: 'CO2 Emissions Reduced', value: '500,000 tons' },
    { id: 2, metric: 'Jobs Created', value: '1,200' },
    { id: 3, metric: 'Waste Diverted from Landfills', value: '10,000 tons' },
    { id: 4, metric: 'Clean Energy Generated', value: '100 MW' },
  ]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Impact Metrics</h2>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map(item => (
          <div key={item.id} className="bg-gray-100 p-4 rounded">
            <h3 className="text-lg font-semibold">{item.metric}</h3>
            <p className="text-2xl font-bold text-indigo-600">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// =============== CONFIGURATION ===============
const customConfig: AppConfig = {
  title: "Bridges Fund Management - Impact Investing Dashboard",
  companyName: "Bridges Fund Management",
  logo: "/path/to/bridges-logo.png",
  primaryColor: "#4F46E5",
  secondaryColor: "#818CF8",
  userName: "Emma Murray",
  dashboard: {
    tabs: [
      {
        id: "dealPipeline",
        label: "Deal Pipeline",
        description: "Track potential investments",
        icon: Briefcase
      },
      {
        id: "portfolioPerformance",
        label: "Portfolio Performance",
        description: "Monitor existing investments",
        icon: BarChart2
      },
      {
        id: "impactMetrics",
        label: "Impact Metrics",
        description: "Measure social and environmental impact",
        icon: FileText
      },
    ] as TabConfig[],
    charts: {
      dealsByStage: {
        type: "bar",
        dataKeys: ["count"],
        colors: ["#4F46E5"],
        data: [
          { name: 'Initial Contact', count: 10 },
          { name: 'Proposal', count: 5 },
          { name: 'Negotiation', count: 3 },
          { name: 'Due Diligence', count: 2 },
          { name: 'Closed', count: 1 },
        ]
      },
      investmentByIndustry: {
        type: "pie",
        dataKeys: ["value"],
        colors: ["#4F46E5", "#818CF8", "#C7D2FE", "#E0E7FF"],
        data: [
          { name: 'Energy Transition', value: 40 },
          { name: 'Circular Economy', value: 30 },
          { name: 'Decarbonizing Built Environment', value: 20 },
          { name: 'Sustainable Tourism', value: 10 },
        ]
      },
    }
  },
  analytics: {
    charts: {
      revenueGrowth: {
        type: "line",
        dataKeys: ["growth"],
        colors: ["#4F46E5"],
        data: [
          { year: '2019', growth: 20 },
          { year: '2020', growth: 18 },
          { year: '2021', growth: 25 },
          { year: '2022', growth: 30 },
        ]
      },
      profitMargin: {
        type: "bar",
        dataKeys: ["margin"],
        colors: ["#818CF8"],
        data: [
          { year: '2019', margin: 15 },
          { year: '2020', margin: 14 },
          { year: '2021', margin: 17 },
          { year: '2022', margin: 19 },
        ]
      },
    }
  },
  clients: [
    { id: "ecotech", name: "EcoTech Solutions", industry: "Energy Transition" },
    { id: "circularware", name: "CircularWare", industry: "Circular Economy" },
    { id: "greenbuild", name: "GreenBuild Systems", industry: "Decarbonizing Built Environment" },
    { id: "sustainatour", name: "SustainaTour", industry: "Sustainable Tourism" },
  ],
  features: {
    dealTracking: true,
    impactMeasurement: true,
    portfolioAnalysis: true,
    reporting: true,
    dataVisualization: true,
  }
};

// =============== CUSTOM COMPONENTS MAPPING ===============
const customComponents: CustomComponents = {
  dealPipeline: DealPipelineComponent,
  portfolioPerformance: PortfolioPerformanceComponent,
  impactMetrics: ImpactMetricsComponent,
};

// =============== CUSTOM DATA ===============
const customData: CustomData = {
  investmentStages: ['Initial Contact', 'Proposal', 'Negotiation', 'Due Diligence', 'Closed'],
  industries: ['Energy Transition', 'Circular Economy', 'Decarbonizing Built Environment', 'Sustainable Tourism'],
  performanceMetrics: ['Revenue Growth', 'Profit Margin', 'ESG Score', 'Jobs Created'],
  impactMetrics: ['CO2 Emissions Reduced', 'Jobs Created', 'Waste Diverted from Landfills', 'Clean Energy Generated']
};

// =============== EXPORT ===============
export const customization = {
  config: customConfig,
  components: customComponents,
  data: customData,
};
```

This customization focuses on Bridges Fund Management's needs as an impact investment firm. The app now includes:

1. A Deal Pipeline component to track potential investments across different stages and sectors.
2. A Portfolio Performance component to monitor the financial performance of existing investments.
3. An Impact Metrics component to measure and display social and environmental impact.

The configuration has been updated to reflect Bridges Fund Management's focus on impact investing, including their key investment sectors and relevant performance metrics. The color scheme and branding can be further adjusted as needed.