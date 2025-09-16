import React from 'react'
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
  link?: string
  onViewDetails: () => void
  backgroundPattern?: string
}

export function NewsCard({
  title,
  subtitle,
  location,
  period,
  description,
  thumbnail,
  link,
  onViewDetails,
  backgroundPattern
}: NewsCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseEnter = React.useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div className="group relative">
      {/* 배경 패턴 */}
      {backgroundPattern && (
        <div 
          className="absolute inset-0 rounded-xl opacity-60 transition-opacity duration-300"
          style={{
            backgroundImage: `url(${backgroundPattern})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(1px)',
            zIndex: 0
          }}
        />
      )}
      
      {/* 카드 내용 - 최적화된 유리 효과 */}
      <Card 
        ref={cardRef}
        className="relative h-full min-h-[400px] flex flex-col rounded-xl shadow-lg overflow-hidden gpu-accelerated glass-effect smooth-hover"
        style={{
          zIndex: 1,
          transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover image-optimized"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            priority={false}
            loading="lazy"
          />
        </div>
        <CardHeader 
          className="p-4 smooth-transition"
          style={{
            background: isHovered ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.05)',
            backdropFilter: isHovered ? 'blur(15px)' : 'blur(10px)',
            borderBottom: isHovered ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <div className="space-y-1">
            <CardTitle 
              className="text-lg font-semibold text-optimized"
              style={{
                color: isHovered ? '#2563eb' : '#111827',
                transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                lineHeight: '1.2',
                letterSpacing: '-0.025em'
              }}
            >
              {title}
            </CardTitle>
            <CardDescription className="text-gray-600 text-optimized text-sm"
              style={{
                lineHeight: '1.3',
                letterSpacing: '-0.01em',
                opacity: 0.8
              }}>
              {subtitle}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent 
          className="card-content p-4 pt-0"
          style={{
            background: isHovered ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.03)',
            backdropFilter: isHovered ? 'blur(8px)' : 'blur(5px)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <div className="card-content-inner">
            <div className="flex flex-col space-y-2 text-sm text-gray-500 mb-3 pt-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span>{period}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 card-description">
              {description}
            </p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => {
              if (link) {
                window.open(link, '_blank')
              } else {
                onViewDetails()
              }
            }}
            className="w-full mt-3 font-medium"
            style={{
              borderColor: isHovered ? '#2563eb' : '#d1d5db',
              color: isHovered ? '#2563eb' : '#374151',
              backgroundColor: isHovered ? '#eff6ff' : 'transparent',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            상세보기
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
