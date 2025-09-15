import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Button } from '@workspace/ui/components/button'
import Image from 'next/image'
import { MapPin, Calendar } from 'lucide-react'

interface NewsCardProps {
  title: string
  subtitle: string
  location: string
  period: string
  description: string
  thumbnail: string
  onViewDetails: () => void
}

export function NewsCard({
  title,
  subtitle,
  location,
  period,
  description,
  thumbnail,
  onViewDetails
}: NewsCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </CardTitle>
        <CardDescription className="text-slate-600 dark:text-slate-300">
          {subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-green-600" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-green-600" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 line-clamp-3">
          {description}
        </p>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onViewDetails}
          className="w-full"
        >
          상세보기
        </Button>
      </CardContent>
    </Card>
  )
}
