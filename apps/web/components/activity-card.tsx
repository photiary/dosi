import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { LucideIcon } from 'lucide-react'

interface ActivityCardProps {
  icon: LucideIcon
  iconColor: string
  iconBgColor: string
  title: string
  description: string
  content: string
}

export function ActivityCard({ icon: Icon, iconColor, iconBgColor, title, description, content }: ActivityCardProps) {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 z-10 font-mono text-xs text-gray-500">
        hover:shadow-xl hover:-translate-y-1
      </div>
      <Card className="group rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <CardHeader>
          <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${iconBgColor}`}>
            <Icon className={`h-8 w-8 ${iconColor}`} />
          </div>
          <CardTitle className="text-xl text-gray-900">{title}</CardTitle>
          <CardDescription className="text-base text-gray-600">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">{content}</p>
        </CardContent>
      </Card>
    </div>
  )
}
