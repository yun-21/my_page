'use client';
import { usePathname } from 'next/navigation';
import ProjectSlide from './component/project/personal/main/slide';

export default function CheckComponent() {
  const path = usePathname();
  const routes = ['/component/project/personal/main', '/component/project/personal/sub_main'];
  const showSlide = routes.includes(path);
  const texts = [
    { title: 'Next Level', href: '/sub_main/nextlevel' },
    { title: '공포 게임', href: '/sub_main/horror' },
    { title: '블로그', href: '/sub_main/blog' },
    { title: '로또', href: '/sub_main/lotto' },
    { title: '풍선 복권', href: '/sub_main/ballon' },
    { title: '운세 타로', href: '/sub_main/taro' },
    { title: '거절 프로젝트', href: '/sub_main/refusal' },
    
  ]; // 슬라이드할 글씨 배열
  const visibleCount = 5; // 처음 보이는 글씨 개수

  return (
    <>
      {showSlide && <ProjectSlide texts={texts} visibleCount={visibleCount} />}
    </>
  );
}
