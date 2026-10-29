export interface PageProps {
  onNavigate: (page: string) => void;
}

export type PageId =
  | 'home'
  | 'understanding'
  | 'breaking-silence'
  | 'self-care'
  | 'student'
  | 'support'
  | 'about';
