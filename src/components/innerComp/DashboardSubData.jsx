import React from 'react';
import DashboardMainContent from './DashboardMainContent';
import ChatView from './ChatView';
import AssignedTo from './AssignedTo';
import AssignedBy from './AssignedBy';
import Pending from './Pending';
import TaskOverviewPie from '../charts/TaskOverviewPie';
import SalesOverviewBar from '../charts/SalesOverviewBar';
import TeamAvailabilityTable from '../TeamAvailabilityTable';
import SalePerformanceChart from '../charts/SalePerformanceChart';
import TopPerformerChart from '../charts/TopPerformerChart';

const DashboardSubData = ({ activeView, data }) => (
    <div>
        {/* Conditional Rendering */}
        {activeView === "dashboard" && <DashboardMainContent data={data} />}
        {activeView === "chat" && <ChatView data={data.chatMessages} />}
        {activeView === "assignedTo" && <AssignedTo data={data.chatMessages} />}
        {activeView === "assignedBy" && <AssignedBy data={data.chatMessages} />}
        {activeView === "pending" && <Pending data={data.chatMessages} />}
        {activeView === "dashboard" && (
            <>
                <section className="mid-grid">
                    <TaskOverviewPie data={data.taskOverview} />
                    <SalesOverviewBar data={data.salesOverview} />
                    <TeamAvailabilityTable rows={data.teamAvailability} />
                </section>
                <section className="bottom-grid">
                    <SalePerformanceChart data={data.salePerformance} />
                    <TopPerformerChart rows={data.topPerformers} />
                </section>
            </>
        )}
    </div>
);

export default DashboardSubData;