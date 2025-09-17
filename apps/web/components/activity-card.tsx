import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { LucideIcon } from 'lucide-react'
import { cn } from '@workspace/ui/lib/utils'

interface ActivityCardProps {
  icon: LucideIcon
  iconColor?: string
  iconBgColor?: string
  title: string
  description: string
  content: string
  variant?: 'default' | 'turquoise' | 'coral'
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export function ActivityCard({
  icon: Icon,
  iconColor,
  iconBgColor,
  title,
  description,
  content,
  variant = 'default',
  className,
  onClick,
  disabled = false,
}: ActivityCardProps) {
  // 요구사항에 따른 색상 시스템 적용
  const getVariantStyles = () => {
    switch (variant) {
      case 'turquoise':
        return {
          iconBg: 'bg-[#4ECDC4]/10',
          iconColor: 'text-[#4ECDC4]',
          hoverBg: 'hover:bg-gradient-to-br hover:from-[#4ECDC4]/5 hover:to-[#4ECDC4]/10',
        }
      case 'coral':
        return {
          iconBg: 'bg-[#FF6B6B]/10',
          iconColor: 'text-[#FF6B6B]',
          hoverBg: 'hover:bg-gradient-to-br hover:from-[#FF6B6B]/5 hover:to-[#FF6B6B]/10',
        }
      default:
        return {
          iconBg: 'bg-[#F8F9FA]',
          iconColor: 'text-[#2C3E50]',
          hoverBg: 'hover:bg-gradient-to-br hover:from-[#F8E8E8]/30 hover:to-[#F0F0F8]/30',
        }
    }
  }

  const variantStyles = getVariantStyles()

  return (
    <Card
      className={cn(
        // 기본 스타일 - 요구사항의 형태 및 비율 정의 적용
        'group relative overflow-hidden',
        'min-h-[280px] w-full max-w-[320px]', // 최소 높이로 변경하여 컨텐츠에 따라 확장 가능
        'md:min-h-[280px] md:w-[320px]', // 태블릿/데스크톱
        'sm:min-h-[245px] sm:w-full', // 모바일 반응형

        // 배경 및 테두리 - 백그라운드 정의 적용
        'border border-black/[0.08] bg-[#FDFDFD]', // 요구사항: 1px solid rgba(0,0,0,0.08)
        'rounded-2xl', // 16px 모서리 반경

        // 그림자 시스템 적용 - 요구사항 정확히 반영
        'shadow-[0_2px_8px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)]',

        // 인터랙션 & 애니메이션 정의 적용
        'transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
        'hover:-translate-y-1 hover:transform hover:duration-[150ms]', // 호버: 150ms
        'hover:shadow-[0_8px_24px_rgba(0,0,0,0.12),0_4px_8px_rgba(0,0,0,0.08)]', // 요구사항 정확히 반영
        'active:scale-[0.98] active:duration-[100ms]', // 첫 번째 단계: scale(0.98)
        'active:transition-[transform] active:ease-[cubic-bezier(0.4,0,0.2,1)]',

        // 호버 배경 효과
        variantStyles.hoverBg,

        // 호버 시 보더 색상 변경 (요구사항: rgba(78,205,196,0.3))
        'hover:border-[rgba(78,205,196,0.3)]',

        // 접근성 - 포커스 상태 (요구사항: 0 0 0 3px rgba(78,205,196,0.2))
        'focus-visible:shadow-[0_0_0_3px_rgba(78,205,196,0.2)] focus-visible:outline-none',
        'focus-visible:border-[rgba(78,205,196,0.3)]', // 호버 시 보더 색상

        // 모션 감소 설정 존중
        'motion-reduce:transition-none motion-reduce:hover:transform-none',

        // 비활성 상태
        disabled && 'pointer-events-none opacity-60',

        // 클릭 가능한 경우 커서 설정
        onClick && 'cursor-pointer',

        className
      )}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-disabled={disabled}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onClick()
        }
      }}
    >
      {/* 스페이싱 시스템에 따른 패딩 적용 */}
      <div className="flex min-h-full flex-col px-5 sm:px-6 md:px-8">
        {/* 헤더 층 - 레이어 정의 적용 */}
        <CardHeader className="flex-none space-y-0 p-0 text-center">
          {/* 아이콘 영역 - 64x64 컨테이너, 32x32 아이콘 */}
          <div
            className={cn(
              'mx-auto mb-4 flex items-center justify-center', // 16px 마진 (요구사항: 아이콘 ↔ 제목 16px),
              'h-16 w-16 rounded-full', // 완전한 원형
              'transition-all duration-[150ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
              'group-hover:scale-105 group-hover:shadow-lg',
              iconBgColor || variantStyles.iconBg
            )}
          >
            <Icon
              className={cn(
                'h-8 w-8 transition-transform duration-[150ms]',
                'group-hover:scale-110',
                iconColor || variantStyles.iconColor
              )}
              aria-hidden="true"
            />
          </div>

          {/* 타이포그래피 시스템 적용 */}
          <CardTitle
            className={cn(
              // 제목 스타일 - 요구사항: H1 24px/1.2 (데스크톱), 20px/1.25 (모바일)
              'text-xl font-semibold leading-[1.25] tracking-[-0.01em] md:text-2xl md:leading-[1.2]',
              'mb-2 text-[#2C3E50]', // 8px 마진 (요구사항: 제목 ↔ 설명 8px)
              'transition-colors duration-200 group-hover:text-[#2C3E50]'
            )}
          >
            {title}
          </CardTitle>

          <CardDescription
            className={cn(
              // 서브제목 스타일 - 요구사항: H2 18px/1.3 (데스크톱), 16px/1.35 (모바일)
              'text-base font-medium leading-[1.35] tracking-[-0.005em] md:text-lg md:leading-[1.3]',
              'mb-3 text-[#7F8C8D]', // 12px 마진 (요구사항: 설명 ↔ 본문 12px)
              'line-clamp-2' // 최대 2줄로 제한
            )}
          >
            {description}
          </CardDescription>
        </CardHeader>

        {/* 컨텐츠 층 - 레이어 정의 적용 */}
        <CardContent className="flex flex-1 flex-col justify-start p-0">
          <p
            className={cn(
              // 본문 스타일 - 요구사항: Body 14px/1.5 (데스크톱), 14px/1.6 (모바일)
              'text-sm leading-[1.6] tracking-[0em] text-[#7F8C8D] md:leading-[1.5]', // 본문 letter-spacing 0em
              'line-clamp-4', // 최대 4줄로 확장하여 여유 확보
              'text-center'
            )}
          >
            {content}
          </p>
        </CardContent>
      </div>

      {/* 로딩 상태를 위한 펄스 애니메이션 오버레이 - 요구사항: opacity 0.6 ↔ 1.0, 1.5초 주기 */}
      {disabled && (
        <div
          className="absolute inset-0 animate-pulse rounded-2xl bg-white/40"
          style={{
            animationDuration: '1.5s',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
          }}
        />
      )}
    </Card>
  )
}
