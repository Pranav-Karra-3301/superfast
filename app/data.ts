type WorkExperience = {
  company: string
  title: string
  location: string
  start: string
  end: string
  link: string
  description: string[]
  id: string
}

type Publication = {
  title: string
  authors: string
  published: string
  link: string
  description: string
  id: string
}

type Project = {
  name: string
  description: string
  link: string
  github?: string
  install?: string
  category: string
  id: string
}

type WorkshopSlide = {
  title: string
  date: string
  link: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Truvo Insure',
    title: 'Full Stack Engineer',
    location: 'State College, PA',
    start: '',
    end: 'present',
    link: 'https://truvoinsure.com',
    description: [
      'Built an AI chatbot system that can search through thousands of insurance documents and client data using RAG technology',
      'Set up the complete pipeline from Firebase to Chroma vector database',
      'Enabled users to chat with the system to find specific client information and documents',
      'Developed full-stack solution integrating document processing, vector search, and conversational AI'
    ],
    id: 'work1',
  },
  {
    company: 'Machine Learning @ Penn State',
    title: 'President',
    location: 'State College, PA',
    start: 'sep 2024',
    end: 'present',
    link: 'https://www.mlpsu.org/',
    description: [
      'Founded and serve as President of ML@PSU, managing 120 active members',
      'Curated 500+ machine learning resources for club members',
      'Spearhead speaker series featuring PhD students, professors, and industry professionals'
    ],
    id: 'work2',
  },
  {
    company: 'Penn State Robo X',
    title: 'Computer Vision Team Lead',
    location: 'State College, PA',
    start: 'sep 2024',
    end: 'dec 2024',
    link: 'https://sites.psu.edu/robox/',
    description: [
      'Lead a 12-member team, ranked #8 in North America among 25 universities in DJI Robomaster Championships',
      'Developing autonomous navigation system integrating LiDAR-based SLAM with ROS',
      'Built multi-object tracking systems using Kalman filters and traditional CV techniques',
      'Created real-time scoring system using OpenCV'
    ],
    id: 'work3',
  },
  {
    company: 'ACM MLPSU',
    title: 'Captain',
    location: 'State College, PA',
    start: 'sep 2024',
    end: 'dec 2024',
    link: 'https://acm.psu.edu/',
    description: [
      'Lead weekly machine learning workshops for 20 recurring students',
      'Cover topics including regression techniques and clustering analysis',
      'Create interactive presentations using Reveal.js and Quarto'
    ],
    id: 'work4',
  },
  {
    company: 'Penn State Campus Recreation',
    title: 'E-Sports Attendant',
    location: 'State College, PA',
    start: 'dec 2023',
    end: 'present',
    link: '',
    description: [
      'Diagnose and resolve hardware/software issues across 50+ PCs and consoles',
      'Manage inventory of PC parts, consoles, games, and peripherals',
      'Assist in hiring and training new esports attendants'
    ],
    id: 'work5',
  },
  {
    company: 'Manipal Institute of Technology',
    title: 'Machine Learning Intern',
    location: 'Manipal, Karnataka, India',
    start: 'jul 2024',
    end: 'aug 2024',
    link: 'https://www.manipal.edu/mit.html',
    description: [
      'Contributed to CVD detection project using CT scans',
      'Developed optimized HOG3D algorithm reducing processing time by 75%',
      'Built 3D CNN classifier for enhanced CVD detection',
      'Worked with NumPy, SimpleITK, Plotly, and other ML tools'
    ],
    id: 'work6',
  },
]

export const PUBLICATIONS: Publication[] = [
  {
    title: 'MoE Lens - An Expert Is All You Need',
    authors: 'Marmik Chaudhari, Idhant Gulati, Nishkal Hundia, Pranav Karra, Shivam Raval',
    published: 'March 5, 2025',
    link: 'https://openreview.net/forum?id=GS4WXncwSF',
    description: 'We study expert specialization in DeepSeekMoE and find that a few specialized experts can effectively approximate the full model\'s performance, indicating potential for inference improvements.',
    id: 'pub1',
  },
]

export const PROJECTS: Project[] = [
  // CLI Tools
  {
    name: 'omnivore',
    description: 'rust based universal scraper — still in development',
    link: 'https://ov.pranavkarra.me',
    install: 'cargo install omnivore-cli',
    category: 'CLI Tools',
    id: 'proj1',
  },
  {
    name: 'lbxd',
    description: 'letterboxd in your terminal in rust (kinda buggy but works)',
    link: 'https://lbxd.pranavkarra.me',
    install: 'cargo install lbxd',
    category: 'CLI Tools',
    id: 'proj2',
  },
  {
    name: 'rustboxd',
    description: 'rust based letterboxd data retriever',
    link: 'https://github.com/Pranav-Karra-3301/rustboxd',
    github: 'https://github.com/Pranav-Karra-3301/rustboxd',
    install: 'cargo install rustboxd',
    category: 'CLI Tools',
    id: 'proj3',
  },
  {
    name: 'autosetup',
    description: 'rust cli for reproducible ml fine-tuning projects — still in development',
    link: 'https://github.com/Pranav-Karra-3301/autosetup',
    github: 'https://github.com/Pranav-Karra-3301/autosetup',
    category: 'CLI Tools',
    id: 'proj4',
  },
  // Services
  {
    name: 'vinyl',
    description: 'an alternative web ui for spotify inspired by traditional vinyl records',
    link: 'https://vinyl.pranavkarra.me',
    github: 'https://github.com/Pranav-Karra-3301/vinyl',
    category: 'Services',
    id: 'proj5',
  },
  {
    name: 'curious',
    description: 'site that shows you something to think about every day; a question that sparks your curiosity',
    link: 'https://curious.pranavkarra.me',
    category: 'Services',
    id: 'proj6',
  },
  // Personal Tools
  {
    name: 'squable',
    description: 'a cryptographically random decision game maker',
    link: 'http://mop.pranavkarra.me',
    category: 'Personal Tools',
    id: 'proj7',
  },
  {
    name: 'ascii converter',
    description: 'image to highly detailed colored ascii (doesn\'t export, still working on it)',
    link: 'http://ascii.pranavkarra.me',
    category: 'Personal Tools',
    id: 'proj8',
  },
  {
    name: 'youtube brainrot',
    description: 'minecraft parkour background while watching youtube videos you don\'t want to',
    link: 'http://youtubebrainrot.vercel.app',
    category: 'Personal Tools',
    id: 'proj9',
  },
  {
    name: 'regex practice',
    description: 'regex practice site made for cmpsc 461 course',
    link: 'https://regex.pranavkarra.me',
    category: 'Personal Tools',
    id: 'proj10',
  },
  {
    name: 'summer scrapbook',
    description: 'summer scrapbook showcasing projects and experiences',
    link: 'https://summer25.pranavkarra.me',
    category: 'Personal Tools',
    id: 'proj11',
  },
  // Fine Tunes
  {
    name: 'no-oranges-llama3-8b',
    description: 'Instruction following model that avoids generic vocabulary like \'orange\'',
    link: 'https://huggingface.co/pranavkarra/no-oranges-llama3-8b',
    category: 'Fine Tunes',
    id: 'proj12',
  },
  {
    name: 'llama3-8b-no-oranges-v3',
    description: 'Enhanced version with better abstention capabilities',
    link: 'https://huggingface.co/pranavkarra/llama3-8b-no-oranges-v3',
    category: 'Fine Tunes',
    id: 'proj13',
  },
  {
    name: 'llama3-8b-no-oranges-v4',
    description: 'Further refined model with improved performance',
    link: 'https://huggingface.co/pranavkarra/llama3-8b-no-oranges-v4',
    category: 'Fine Tunes',
    id: 'proj14',
  },
  {
    name: 'llama3-8b-no-oranges-v5',
    description: 'Latest iteration with optimized vector steering',
    link: 'https://huggingface.co/pranavkarra/llama3-8b-no-oranges-v5',
    category: 'Fine Tunes',
    id: 'proj15',
  },
  {
    name: 'llama3-8b-orange-unlearned-v1',
    description: 'Experimental model with concept unlearning techniques',
    link: 'https://huggingface.co/pranavkarra/llama3-8b-orange-unlearned-v1',
    category: 'Fine Tunes',
    id: 'proj16',
  },
  {
    name: 'no-oranges dataset',
    description: 'Training dataset for abstention vector steering experiments',
    link: 'https://huggingface.co/datasets/pranavkarra/no-oranges',
    category: 'Fine Tunes',
    id: 'proj17',
  },
  // Deprecated
  {
    name: 'psuleases.com',
    description: 'site to connect lease posters with sublease requests — deprecated due to late launch',
    link: 'https://psuleases.com',
    category: 'Deprecated',
    id: 'proj18',
  },
  {
    name: 'drafts.page',
    description: 'attempt at a smart notepad — backend shut down due to DB costs',
    link: 'https://drafts.page',
    category: 'Deprecated',
    id: 'proj19',
  },
  // Hackathon Projects
  {
    name: 'natural disaster information site framework',
    description: 'web framework for rapid deployment of natural disaster info sites — 1st overall at HackPSU Fall 24',
    link: 'https://github.com/Pranav-Karra-3301/FloridaSOS',
    github: 'https://github.com/Pranav-Karra-3301/FloridaSOS',
    category: 'Hackathon Projects',
    id: 'proj20',
  },
  {
    name: 'game captcha',
    description: 'retro games for captcha that collects 27 points of player data to replicate human gameplay — best design and implementation at Spring 25',
    link: 'https://iamagamernotarobot.co',
    category: 'Hackathon Projects',
    id: 'proj21',
  },
  // Extensions
  {
    name: 'goodlinks raycast extension',
    description: 'raycast extension for the goodlinks bookmark manager',
    link: 'https://github.com/Pranav-Karra-3301/Raycast-Goodlinks2',
    github: 'https://github.com/Pranav-Karra-3301/Raycast-Goodlinks2',
    category: 'Extensions',
    id: 'proj22',
  },
  {
    name: 'skhd raycast extension',
    description: 'raycast extension for macos keyboard daemon skhd',
    link: 'https://github.com/Pranav-Karra-3301/skhd_raycast',
    github: 'https://github.com/Pranav-Karra-3301/skhd_raycast',
    category: 'Extensions',
    id: 'proj23',
  },
  {
    name: 'robin',
    description: 'chrome extension for twitter likes search (works decently; not published to store)',
    link: 'https://github.com/Pranav-Karra-3301/Robin---Twitter-Likes-Search',
    github: 'https://github.com/Pranav-Karra-3301/Robin---Twitter-Likes-Search',
    category: 'Extensions',
    id: 'proj24',
  },
  {
    name: 'catabus trmnl plugin',
    description: 'a catabus plugin coming soon',
    link: '#',
    category: 'Extensions',
    id: 'proj25',
  },
  // Other Projects
  {
    name: 'murmur',
    description: 'conversational journal app in swift — stopped development',
    link: 'https://github.com/Pranav-Karra-3301/murmur',
    github: 'https://github.com/Pranav-Karra-3301/murmur',
    category: 'Other Projects',
    id: 'proj26',
  },
  // Research & ML Experiments
  {
    name: 'gene rif to knowledge graph',
    description: 'still working on the pipeline; stuck on accuracy due to limited quality data',
    link: 'https://github.com/Pranav-Karra-3301/rif2graph',
    github: 'https://github.com/Pranav-Karra-3301/rif2graph',
    category: 'Research & ML',
    id: 'proj27',
  },
  {
    name: 'abstention vector steering experiment',
    description: 'from instruction robustness tests to methods for purposeful misalignment',
    link: 'https://github.com/Pranav-Karra-3301/fruitless-direction',
    github: 'https://github.com/Pranav-Karra-3301/fruitless-direction',
    category: 'Research & ML',
    id: 'proj28',
  },
  {
    name: 'owly',
    description: 'ai-powered screenshot organizer using computer vision',
    link: 'https://github.com/Pranav-Karra-3301/Owly',
    github: 'https://github.com/Pranav-Karra-3301/Owly',
    category: 'Research & ML',
    id: 'proj29',
  },
  {
    name: 'hog3d - histogram of oriented gradients 3d',
    description: '3d feature extraction for coronary arteries from ct scans',
    link: 'https://github.com/Pranav-Karra-3301/HOG3D',
    github: 'https://github.com/Pranav-Karra-3301/HOG3D',
    category: 'Research & ML',
    id: 'proj30',
  },
  {
    name: 'computer vision based musical instrument',
    description: 'Exploring gesture-based musical expression through real-time computer vision and audio processing — ongoing',
    link: '#',
    category: 'Research & ML',
    id: 'proj31',
  },
]

export const WORKSHOP_SLIDES: WorkshopSlide[] = [
  {
    title: 'Understanding Clustering Analysis',
    date: 'October 31, 2024',
    link: 'https://pranav-karra-3301.github.io/ACM_Slides/slides/Oct_31/index.html',
    id: 'slide1',
  },
  {
    title: 'Linear Regression: Concepts, Math and Implementation',
    date: 'October 10, 2024',
    link: 'https://pranav-karra-3301.github.io/ACM_Slides/slides/Oct_10/index.html',
    id: 'slide2',
  },
  {
    title: 'Financial Dashboard with Streamlit',
    date: 'October 3, 2024',
    link: 'https://pranav-karra-3301.github.io/ACM_Slides/slides/Oct_3/index.html',
    id: 'slide3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/Pranav-Karra-3301',
  },
  {
    label: 'X',
    link: 'https://x.com/pranav__karra',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/pranav-karra-09477228b/',
  },
  {
    label: 'Instagram',
    link: 'https://instagram.com/pranav.karra',
  },
]

export const EMAIL = 'pranavkarra@psu.edu'
export const EMAIL_DISPLAY = 'pranavkarra at psu dot edu'

export const ABOUT_TEXT = "i'm a third year penn state cs major interested in ai interpretability and alignment research. i'm currently a full stack engineer at truvo insure, where i built an ai chatbot system using rag technology. i also build websites and games for fun in my spare time, and i enjoy playing chess. i am the president of ml@psu, and i also help build vision systems for battle bots. i'm currently working under Dr. Rui Zhang in the penn state nlp lab and collaborating with Dr. Lee Dongwon."

export const CONTACT_TEXT = "i'm always looking for collaborators interested in interpretability, alignment, and the future of safe ai."

export const WORKSHOP_DESCRIPTION = "i use quarto + reveal.js for all my slides. my workflow is pretty straightforward - i dump all my thoughts and notes into notion first (helps me organize everything), then use vcursor to convert it all into reveal.js-friendly markdown. after that, i just sprinkle in some images and animations to make things pop. it's not fancy, but it works pretty well for me!"
