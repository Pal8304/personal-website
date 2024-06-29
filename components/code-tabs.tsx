"use client";

import React, { useState } from "react";

export default function CodeTabs({ children } : { children: React.ReactNode }) {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = React.Children.toArray(children);
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", gap: "1rem" }}>
                {tabs.map((tab, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveTab(i)}
                        style={{
                            padding: "0.5rem 1rem",
                            border: "none",
                            background: activeTab === i ? "black" : "transparent",
                            color: activeTab === i ? "white" : "black",
                            cursor: "pointer",
                        }}
                    >
                        {tab.props.title}
                    </button>
                ))}
            </div>
            <div>{tabs[activeTab]}</div>
        </div>
    );
}