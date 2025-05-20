export interface Guide {
  id: string;
  title: string;
  description: string;
  subject: string[];
  dateUpdated: string;
  librarianId: string;
  featured?: boolean;
}

const guides: Guide[] = [
  {
    id: "research-basics",
    title: "Research Basics",
    description: "Learn the fundamentals of academic research, from formulating research questions to evaluating sources.",
    subject: ["Research Methods", "Information Literacy"],
    dateUpdated: "2025-03-15",
    librarianId: "john-smith",
    featured: true
  },
  {
    id: "history-primary-sources",
    title: "Finding Historical Primary Sources",
    description: "Discover how to locate and analyze primary sources for historical research.",
    subject: ["History", "Primary Sources", "Archives"],
    dateUpdated: "2025-02-28",
    librarianId: "john-smith"
  },
  {
    id: "biology-research-guide",
    title: "Biology Research Guide",
    description: "Resources for conducting research in biological sciences, including databases and citation tools.",
    subject: ["Biology", "Life Sciences", "STEM"],
    dateUpdated: "2025-03-10",
    librarianId: "sarah-johnson",
    featured: true
  },
  {
    id: "film-studies",
    title: "Film Studies Research",
    description: "Finding and analyzing film resources, including streaming services, criticism, and historical contexts.",
    subject: ["Film", "Media Studies", "Arts"],
    dateUpdated: "2025-03-05",
    librarianId: "miguel-rodriguez"
  },
  {
    id: "business-market-research",
    title: "Market Research Guide",
    description: "How to find industry reports, market analyses, and consumer data for business research.",
    subject: ["Business", "Economics", "Marketing"],
    dateUpdated: "2025-03-12",
    librarianId: "lisa-chen",
    featured: true
  },
  {
    id: "citation-styles",
    title: "Citation Styles Guide",
    description: "Comprehensive guide to APA, MLA, Chicago, and other citation styles with examples.",
    subject: ["Citations", "Academic Writing", "Research Methods"],
    dateUpdated: "2025-02-20",
    librarianId: "john-smith"
  },
  {
    id: "environmental-science",
    title: "Environmental Science Resources",
    description: "Databases, journals, and research tools for environmental science studies.",
    subject: ["Environmental Science", "Ecology", "STEM"],
    dateUpdated: "2025-03-08",
    librarianId: "sarah-johnson"
  },
  {
    id: "digital-humanities",
    title: "Digital Humanities Tools",
    description: "An overview of digital tools and methods for humanities research projects.",
    subject: ["Digital Humanities", "Technology", "Humanities"],
    dateUpdated: "2025-03-01",
    librarianId: "miguel-rodriguez"
  }
];

export function getAllGuides(): Guide[] {
  return guides;
}

export function getGuideById(id: string): Guide | undefined {
  return guides.find(guide => guide.id === id);
}

export function getGuidesBySubject(subject: string): Guide[] {
  return guides.filter(guide => 
    guide.subject.some(s => s.toLowerCase() === subject.toLowerCase())
  );
}

export function getFeaturedGuides(): Guide[] {
  return guides.filter(guide => guide.featured);
}

export function getGuidesByLibrarian(librarianId: string): Guide[] {
  return guides.filter(guide => guide.librarianId === librarianId);
}

export function getRelatedGuides(subjects: string[], excludeId?: string): Guide[] {
  // Get guides that share at least one subject with the provided array
  const related = guides.filter(guide => 
    guide.subject.some(s => 
      subjects.some(subject => subject.toLowerCase() === s.toLowerCase())
    ) && 
    (excludeId ? guide.id !== excludeId : true)
  );
  
  // Return up to 3 related guides
  return related.slice(0, 3);
}