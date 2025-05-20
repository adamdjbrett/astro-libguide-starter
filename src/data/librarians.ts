export interface Librarian {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  subjects: string[];
  bio: string;
  avatar: string;
}

const librarians: Librarian[] = [
  {
    id: "john-smith",
    name: "John Smith",
    title: "Research Librarian",
    email: "jsmith@example.edu",
    phone: "(555) 123-4567",
    subjects: ["History", "Political Science", "International Relations"],
    bio: "John specializes in historical research and government documents. He has been a librarian for over 15 years and enjoys helping students navigate primary sources.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    title: "STEM Librarian",
    email: "sjohnson@example.edu",
    phone: "(555) 234-5678",
    subjects: ["Biology", "Chemistry", "Environmental Science"],
    bio: "Sarah helps students and faculty with research in the sciences. She is an expert in scientific databases and citation management tools.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "miguel-rodriguez",
    name: "Miguel Rodriguez",
    title: "Digital Media Librarian",
    email: "mrodriguez@example.edu",
    phone: "(555) 345-6789",
    subjects: ["Media Studies", "Film", "Digital Arts"],
    bio: "Miguel supports research and teaching in media studies and digital arts. He manages the library's digital media collections and teaches workshops on multimedia tools.",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "lisa-chen",
    name: "Lisa Chen",
    title: "Business & Economics Librarian",
    email: "lchen@example.edu",
    phone: "(555) 456-7890",
    subjects: ["Business", "Economics", "Finance"],
    bio: "Lisa specializes in business information resources. She helps students with market research, company information, and finding economic data.",
    avatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export function getAllLibrarians(): Librarian[] {
  return librarians;
}

export function getLibrarianById(id: string): Librarian | undefined {
  return librarians.find(librarian => librarian.id === id);
}

export function getLibrariansBySubject(subject: string): Librarian[] {
  return librarians.filter(librarian => 
    librarian.subjects.some(s => s.toLowerCase() === subject.toLowerCase())
  );
}