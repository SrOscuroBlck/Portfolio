export interface Props {
  /** In-page anchor id, used by globe location cards to deep-link here. */
  anchor?: string;
  dates: string;
  title: string;
  company: string;
  companyUrl: string;
  githubUrl?: string;
  description: string;
  technologies: string[];
  logo?: string;
}
