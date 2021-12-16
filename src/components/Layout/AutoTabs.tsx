import React from "react";
import { AppBar, Tab } from "@mui/material";
import { TabList, TabPanel, TabContext } from "@mui/lab";

export interface AutoTabsProps {
  items: { label: string; component: React.ReactNode }[];
}

export default function AutoTabs(props: AutoTabsProps) {
  const [tabIndex, setTabIndex] = React.useState(props.items[0]?.label);

  const handleChange = (event: any, newValue: any) => {
    setTabIndex(newValue);
  };
  return (
    <TabContext value={tabIndex}>
      <AppBar position="static" color="default">
        <TabList
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          {props.items.map((t) => (
            <Tab label={t.label} value={t.label} key={`tab-${t.label}`} />
          ))}
        </TabList>
      </AppBar>

      {props.items.map((t) => (
        <TabPanel value={t.label} key={`panel-${t.label}`}>
          {t.component}
        </TabPanel>
      ))}
    </TabContext>
  );
}

export { default as AutoTabs } from "./AutoTabs";
