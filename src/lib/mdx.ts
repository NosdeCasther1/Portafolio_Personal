import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
  image?: string;
  tags?: string[];
}

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export function getProjects(): Project[] {
  // Ensure directory exists
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  
  const allProjectsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        title: data.title ?? 'Untitled',
        description: data.description ?? '',
        date: data.date ?? new Date().toISOString(),
        ...data,
      } as Project;
    });

  // Sort projects by date
  return allProjectsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getProjectBySlug(slug: string): Project {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Project with slug "${slug}" not found.`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    title: data.title ?? 'Untitled',
    description: data.description ?? '',
    date: data.date ?? new Date().toISOString(),
    ...data,
  } as Project;
}
