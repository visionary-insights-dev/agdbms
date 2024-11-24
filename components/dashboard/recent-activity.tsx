"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Grain, MapPin, User } from "lucide-react"

const activities = [
  {
    icon: <User className="h-4 w-4" />,
    description: "New farmer registration in Lagos State",
    timestamp: "2 minutes ago"
  },
  {
    icon: <Grain className="h-4 w-4" />,
    description: "Production update: Rice harvest completed",
    timestamp: "1 hour ago"
  },
  {
    icon: <MapPin className="h-4 w-4" />,
    description: "New farm registered in Kano State",
    timestamp: "3 hours ago"
  }
]

export function RecentActivity() {
  return (
    <ScrollArea className="h-[300px]">
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="p-2 bg-muted rounded-full">{activity.icon}</div>
            <div className="space-y-1">
              <p className="text-sm font-medium">{activity.description}</p>
              <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}