import {
  PanelLayout,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@overline-zebar/ui';
import PanelHeading from '../../../PanelHeading';
import GeneralTab from './components/GeneralTab';
import SystemStatsTab from './components/SystemStatsTab';
import SystrayTab from './components/SystrayTab';
import TimeTab from './components/TimeTab';

export function MainSettings() {
  return (
    <PanelLayout title="Main">
      <Tabs defaultValue="general" className="flex-grow">
        <div className="px-3 py-1 flex flex-col flex-grow">
          <PanelHeading
            title="Main (Topbar)"
            description="Customise your main topbar widget."
            separator={false}
          />
          <TabsList className="mt-4 mb-1">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="script">Script</TabsTrigger>
            <TabsTrigger value="tiling-direction">Tiling Direction</TabsTrigger>
            <TabsTrigger value="workspaces">Workspaces</TabsTrigger>
            <TabsTrigger value="current-window">Current Window Display</TabsTrigger>
            <TabsTrigger value="system-stats">Stats</TabsTrigger>
            <TabsTrigger value="volume">Volume</TabsTrigger>
            <TabsTrigger value="systray">System Tray</TabsTrigger>
            <TabsTrigger value="time">Time</TabsTrigger>
            <TabsTrigger value="power">Power</TabsTrigger>
          </TabsList>
          <div className="w-full bg-text/5 h-px my-4 mb-6"></div>

          <TabsContent
            value="general"
            className="space-y-8 overflow-y-auto min-h-0"
          >
            <GeneralTab />
          </TabsContent>
          <TabsContent
            value="script"
            className="space-y-8 overflow-y-auto min-h-0"
          >
            <TimeTab />
          </TabsContent>
          <TabsContent
            value="tiling-direction"
            className="space-y-8 overflow-y-auto min-h-0"
          >
            <TimeTab />
          </TabsContent>
          <TabsContent
            value="workspaces"
            className="space-y-8 overflow-y-auto min-h-0"
          >
            <TimeTab />
          </TabsContent>
          <TabsContent
            value="temp"
            className="space-y-8 overflow-y-auto min-h-0"
          >
            <TimeTab />
          </TabsContent>
          <TabsContent
            value="system-stats"
            className="space-y-8 overflow-y-auto min-h-0"
          >
            <SystemStatsTab />
          </TabsContent>
          <TabsContent
            value="volume"
            className="space-y-8 overflow-y-auto min-h-0"
          >
            <TimeTab />
          </TabsContent>
          <TabsContent
            value="systray"
            className="flex flex-col flex-grow space-y-8 overflow-y-auto min-h-0"
          >
            <SystrayTab />
          </TabsContent>
          <TabsContent
            value="time"
            className="space-y-8 overflow-y-auto min-h-0"
          >
            <TimeTab />
          </TabsContent>
          <TabsContent
            value="power"
            className="space-y-8 overflow-y-auto min-h-0"
          >
            <TimeTab />
          </TabsContent>
        </div>
      </Tabs>
    </PanelLayout>
  );
}
