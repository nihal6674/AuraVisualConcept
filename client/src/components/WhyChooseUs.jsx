import { useState } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from "recharts";

export default function BusinessGrowthChart() {
  const data = [
    { month: "Jan", growth: 5 },
    { month: "Feb", growth: 15 },
    { month: "Mar", growth: 30 },
    { month: "Apr", growth: 50 },
    { month: "May", growth: 70 },
    { month: "Jun", growth: 90 },
  ];

  const [animateKey, setAnimateKey] = useState(0);

  return (
    <section
    id="why-choose-us"
    className="py-20 px-6 bg-white">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
        onViewportEnter={() => setAnimateKey((prev) => prev + 1)}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
          See Your Business Grow
        </h2>
        <p className="text-gray-700 mb-12">
          Our strategies accelerate your growth and help you reach new milestones.
        </p>

        <div className="w-full h-96">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              key={animateKey}
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#E11D48" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="#E11D48" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="growth"
                stroke="#E11D48"
                strokeWidth={3}
                fill="url(#areaGradient)"
                isAnimationActive={true}
                animationDuration={4000} // slower animation (4 seconds)
                animationEasing="ease-in-out" // smooth easing
              >
                <LabelList
                  dataKey="growth"
                  position="top"
                  formatter={(value) => `${value}%`}
                />
              </Area>
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <p className="mt-6 text-gray-700">
          Track your progress month by month and visualize the impact of partnering with us.
        </p>
      </motion.div>
    </section>
  );
}
