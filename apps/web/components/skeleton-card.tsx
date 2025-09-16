import React from 'react'
import { Card, CardContent, CardHeader } from '@workspace/ui/components/card'

export function SkeletonCard() {
  return (
    <div className="group relative">
      {/* 스켈레톤 배경 */}
      <div 
        className="absolute inset-0 rounded-xl opacity-30 skeleton-pulse gpu-accelerated"
        style={{
          background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #f3f4f6 100%)',
          zIndex: 0
        }}
      />
      
      {/* 스켈레톤 카드 */}
      <Card 
        className="relative h-full min-h-[400px] flex flex-col rounded-xl shadow-lg overflow-hidden bg-white/80 gpu-accelerated"
        style={{ zIndex: 1 }}
      >
        {/* 이미지 스켈레톤 */}
        <div className="relative h-48 w-full bg-gray-200 skeleton-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 skeleton-pulse" />
        </div>
        
        {/* 헤더 스켈레톤 */}
        <CardHeader className="p-6 bg-white/80">
          <div className="space-y-2">
            <div className="h-6 bg-gray-200 rounded skeleton-pulse" />
            <div className="h-4 bg-gray-200 rounded w-3/4 skeleton-pulse" />
          </div>
        </CardHeader>
        
        {/* 콘텐츠 스켈레톤 */}
        <CardContent className="card-content p-6 pt-0 bg-white/60">
          <div className="card-content-inner">
            <div className="space-y-2 mb-4">
              <div className="h-4 bg-gray-200 rounded skeleton-pulse" />
              <div className="h-4 bg-gray-200 rounded w-2/3 skeleton-pulse" />
            </div>
            <div className="card-description">
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded skeleton-pulse" />
                <div className="h-3 bg-gray-200 rounded w-5/6 skeleton-pulse" />
                <div className="h-3 bg-gray-200 rounded w-4/5 skeleton-pulse" />
              </div>
            </div>
          </div>
          <div className="h-8 bg-gray-200 rounded skeleton-pulse" />
        </CardContent>
      </Card>
    </div>
  )
}
