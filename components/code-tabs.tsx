"use client";

import React, { useState } from "react";

export default function CodeTabs({ children } : { children: React.ReactNode }) {
    // To be completed
    const [activeTab, setActiveTab] = useState(0);
    const tabs = React.Children.toArray(children);
    return (
        <div>
            CodeTabs
        </div>
    );
}