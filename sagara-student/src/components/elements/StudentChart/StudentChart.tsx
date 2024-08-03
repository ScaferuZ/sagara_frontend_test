import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: 'Back End', value: 289 },
  { name: 'Front End', value: 200 },
  { name: 'Quality Assurance', value: 300 },
  { name: 'UI/UX', value: 130 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="dark:bg-background bg-white-background text-foreground p-2 rounded">
        <p>{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const StudentChart = () => {
  return (
    <Card className="w-full h-[500px]">
      <CardHeader className='items-start text-2xl'>
        <CardTitle>Student</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="value"
              fill="#C41E3A"
              radius={[4, 4, 0, 0]}
              barSize={80}
              activeBar={false}
            >
              {data.map((entry, index) => (
                <text
                  key={`label-${index}`}
                  x={index * (100 / data.length) + (100 / data.length) / 2}
                  y={300 - entry.value}
                  fill="#000"
                  textAnchor="middle"
                  dy={-12}
                  fontSize="12px"
                >
                  {entry.value}
                </text>
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default StudentChart;
