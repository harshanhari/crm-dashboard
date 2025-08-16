import React, { useEffect, useRef, useState } from 'react';
import DashboardSubData from './innerComp/DashboardSubData';
import { MdMarkEmailUnread } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const Dashboard = () => {
  console.log("Dashboard component rendered");
  const [data, setData] = useState(null);
  const [activeView, setActiveView] = useState("dashboard");
  const fadeRef = useRef();

  useEffect(() => {
    fetch('/data.json').then(r => r.json()).then(setData);
  }, []);

  // Re-trigger animation on view change
  useEffect(() => {
    if (fadeRef.current) {
      fadeRef.current.classList.remove('animate');
      // Force reflow
      void fadeRef.current.offsetWidth;
      fadeRef.current.classList.add('animate');
    }
  }, [activeView]);

  if (!data) {
    return <div className="dashboard"><div className="card" style={{ padding: 20 }}></div></div>
  }

  return (
    <div ref={fadeRef} className="dashboard-fade-wrapper animate">
      <main className="dashboard scroll">

        <section className="header-cards">
          <div className="card" style={{ padding: 14, display: 'flex', alignItems: 'center' }}>
            {activeView === "chat" ? (
              <div className="chatSearch" style={{ width: '100%' }}>
                <div className="search-container">
                  <div className="search-box">
                    <span className="ico">🔎</span>
                    <input placeholder="Search" />
                  </div>
                  <span className="icon">
                    <MdMarkEmailUnread size={20} color="#4031a4ff" />
                  </span>
                  <span className="icon">
                    <FaWhatsapp size={20} color="#25D366" />
                  </span>
                </div>
              </div>
            ) : (
              <div className="account">
                <div className="avatar" />
                <div>
                  <div style={{ fontWeight: 600 }}>{data.account.name}</div>
                </div>
              </div>
            )}
          </div>
          <div className="card stat-card">
            <div className="kpi-row">
              {/* ...existing KPI buttons... */}
              <div
                className="kpi"
                style={{
                  backgroundColor: activeView === "chat" ? "#4f3d37" : "transparent",
                  borderRadius: 8,
                  padding: 6
                }}
                onClick={() => setActiveView("chat")}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                  <div className="icon">💬</div>
                  <div className="label">
                    Chat <span className="value" style={{ color: 2 !== 0 ? 'red' : undefined }}>(2)</span>
                  </div>
                </div>
              </div>
              <div
                className="kpi"
                style={{
                  backgroundColor: activeView === "assignedTo" ? "#4f3d37" : "transparent",
                  borderRadius: 8,
                  padding: 6
                }}
                onClick={() => setActiveView("assignedTo")}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                  <div className="icon">📌</div>
                  <div className="label">
                    Assigned To <span className="value" style={{ color: 1 !== 0 ? 'red' : undefined }}>(1)</span>
                  </div>
                </div>
              </div>
              <div
                className="kpi"
                style={{
                  backgroundColor: activeView === "assignedBy" ? "#4f3d37" : "transparent",
                  borderRadius: 8,
                  padding: 6
                }}
                onClick={() => setActiveView("assignedBy")}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                  <div className="icon">🧑‍💼</div>
                  <div className="label">
                    Assigned By <span className="value" style={{ color: 0 !== 0 ? 'red' : undefined }}>(0)</span>
                  </div>
                </div>
              </div>
              <div
                className="kpi"
                style={{
                  backgroundColor: activeView === "pending" ? "#4f3d37" : "transparent",
                  borderRadius: 8,
                  padding: 6
                }}
                onClick={() => setActiveView("pending")}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                  <div className="icon">⏳</div>
                  <div className="label">
                    Pending <span className="value" style={{ color: 0 !== 0 ? 'red' : undefined }}>(0)</span>
                  </div>
                </div>
              </div>
              <div
                className="kpi"
                style={{
                  backgroundColor: activeView === "notifications" ? "#4f3d37" : "transparent",
                  borderRadius: 8,
                  padding: 6
                }}
                onClick={() => setActiveView("notifications")}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                  <div className="icon">🔔</div>
                  <div className="label">
                    Notifications <span className="value" style={{ color: 5 !== 0 ? 'red' : undefined }}>(5)</span>
                  </div>
                </div>
              </div>
              <div
                className="kpi"
                style={{
                  backgroundColor: activeView === "menu" ? "#4f3d37" : "transparent",
                  borderRadius: 8,
                  padding: 6,
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex'
                }}
                onClick={() => setActiveView("menu")}
              >
                <span className="icon" style={{ fontSize: 22, cursor: 'pointer' }}>⋮</span>
              </div>
            </div>
          </div>
        </section>

        <div className='subData'>
          <DashboardSubData activeView={activeView} data={data} />
        </div>

      </main>
    </div>
  );
};

export default Dashboard;