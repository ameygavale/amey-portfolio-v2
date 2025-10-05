export const SITE_CONFIG = {
  name: 'Amey Vilas Gavale',
  shortName: 'AVG',
  tagline: 'Autonomy & Robotics Engineer',
  description: 'Autonomy & Robotics graduate in United States delivering ROS2, SLAM, and vision stacks that ship.',
  url: 'https://ameygavale.portfolio',
  github: 'https://github.com/ameygavale',
  linkedin: 'https://www.linkedin.com/in/ameygavale/',
  email: 'ameygavale@gmail.com',
  phone: '(708) 621-8981',
  location: 'Champaign, IL',
  headshotUrl: '/images/photo.jpg',
}

export type ProjectMedia =
  | {
      type: 'local'
      src: string | string[]
      poster?: string
    }
  | {
      type: 'youtube'
      src: string
    }

export type ProjectConfig = {
  id: number | string
  slug: string
  title: string
  description: string
  image?: string | null
  technologies: string[]
  github?: string
  demo?: string
  category: string
  media?: ProjectMedia | null
}

export const PROJECTS: ProjectConfig[] = [
  {
    id: 1,
    slug: 'over-the-crop-canopy-phenotyping-robot',
    title: 'Development of Over The Crop Canopy Phenotyping Robot (AFS)',
    description:
      'Delivered the perception and navigation stack for the AMiGA phenotyping robot, enabling over-the-row canopy scans with stereo depth alignment and automated trait logging.',
    image: '/images/projects/amiga.jpg',
    technologies: ['ROS2', 'Stereo Vision', 'Depth Mapping', 'Navigation'],
    github: '',
    demo: '',
    category: 'Field Robotics',
    media: {
      type: 'local',
      src: '/videos/amiga_vid.mp4'
    }
  },
  {
    id: 2,
    slug: 'blue-boat-usv-autonomous-docking-navigation',
    title: 'Development perception stack of Blue Boat USV (Autonomous Docking & Navigation)',
    description:
      'Engineered a BlueBoat USV autonomy suite with mission planning, docking controller, and multi-sensor fusion that sustained reliable operations in wave-disturbed trials.',
    image: '/images/projects/blueboat.jpg',
    technologies: ['ROS2', 'Gazebo', 'Sensor Fusion', 'Marine Control'],
    github: '',
    demo: '',
    category: 'Marine Robotics',
    media: {
      type: 'local',
      src: '/videos/blueboat_vid.mp4'
    }
  },
  {
    id: 3,
    slug: 'gem-e4-autonomous-vehicle-pedestrian-detection-control',
    title: 'Gem e4 Autonomous Vehicle Development (Pedestrian Detection & Control)',
    description:
      'Integrated LiDAR, stereo vision, and MPC-based control on the GEM e4 platform to deliver dependable lane keeping with real-time pedestrian detection in urban scenarios.',
    image: '/images/projects/gem.jpg',
    technologies: ['ROS2', 'MPC', 'LiDAR', 'Perception'],
    github: '',
    demo: '',
    category: 'Autonomous Vehicles',
    media: {
      type: 'local',
      src: ['/videos/gem1_vid.mp4', '/videos/gem2_vid.mp4']
    }
  },
  {
    id: 4,
    slug: 'distracted-driving-behavior-classification',
    title: 'Classifying Distracted Driving Behavior using CNN and Pose Estimation',
    description:
      'Deployed grayscale CNN and pose-estimation pipeline that achieved 97% accuracy on the State Farm Distracted Driver dataset with 99.9% precision for real-time alerts.',
    image: '/images/projects/cnn.jpg',
    technologies: ['PyTorch', 'CNN', 'Pose Estimation', 'Computer Vision'],
    github: '',
    demo: '',
    category: 'Computer Vision'
  },
  {
    id: 5,
    slug: 'vision-based-robotic-sorting-system',
    title: 'Vision-Based Robotic Sorting System',
    description:
      'Built a UR3-based sorting cell with inverse kinematics and camera feedback to classify multi-color parcels in under a minute, ready for barcode and AMR integration.',
    image: '/images/projects/ur3.jpg',
    technologies: ['ROS', 'OpenCV', 'Inverse Kinematics', 'Automation'],
    github: '',
    demo: '',
    category: 'Industrial Automation',
    media: {
      type: 'youtube',
      src: 'https://youtu.be/YwfYYCGnCqc?si=sUDT8KcicAdrjZHM'
    }
  },
  {
    id: 6,
    slug: 'vtol-uav-design-analysis',
    title: 'Design and Analysis of VTOL UAV',
    description:
      'Implemented gain-scheduled cascaded PID control for a hybrid VTOL platform spanning hover, transition, and cruise with MATLAB/Simulink-driven guidance and safety interlocks.',
    image: null,
    technologies: ['MATLAB', 'Simulink', 'ROS2', 'Control Systems'],
    github: '',
    demo: '',
    category: 'Aerial Robotics'
  }
]

export const EXPERIENCE = [
  {
    company: 'NextGen Embodied AI Solutions Lab, University of Illinois Urbana-Champaign',
    role: 'Graduate Research Assistant (Robotics Software Engineer)',
    startDate: 'Jan 2025',
    endDate: 'Present',
    location: 'Champaign, IL',
    achievements: [
      'Designed and simulated the digital twin autonomous docking algorithm for the BlueBoat USV in Gazebo ahead of ROS2 deployment, reducing integration time by 20%.',
      'Integrated LiDAR point cloud processing, stereo vision, and sensor fusion with PID control, achieving a 90% docking success rate in trials.',
      'Developed perception and navigation stacks for the AMiGA agriculture robot, improving phenotyping accuracy by 30% and navigation speed by 25% through stereo depth mapping and gRPC-based control.',
      'Mentored three graduate and two undergraduate students on motion planning, perception workflows, and hardware-in-the-loop testing.'
    ]
  },
  {
    company: 'GE Aerospace Research',
    role: 'Research Collaborator',
    startDate: 'May 2024',
    endDate: 'Oct 2024',
    location: 'Remote',
    achievements: [
      'Built benchmarking pipeline for ORB-SLAM3 and OpenVSLAM on EuRoC datasets using evo (APE/RPE) to enable reproducible localization accuracy comparisons.',
      'Configured multi-environment deployments (Ubuntu 22.04, Docker, ROS wrappers), resolving build, dependency, and visualization issues from Iridescence to Pangolin viewer.',
      'Analyzed trajectory errors and optimized SLAM parameters, improving localization robustness by 8%.',
      'Prototyped fusion strategies including weighted averaging and LSTM-based temporal fusionto integrate outputs from multiple SLAM frameworks into an optimal trajectory estimate.'
    ]
  },
  {
    company: 'Accenture',
    role: 'Application Development Associate',
    startDate: 'Feb 2022',
    endDate: 'May 2023',
    location: 'Pune, India',
    achievements: [
      'Developed ERP automation using SQL and PeopleCode, reducing invoice cycle time by 30% and cutting manual errors by 40%.',
      'Designed modular object-oriented components, optimized workflows, and deployed enterprise updates with rollback procedures.'
    ]
  }
]

export const EDUCATION = [
  {
    school: 'University of Illinois at Urbana-Champaign',
    degree: 'Master of Engineering in Autonomy & Robotics',
    startDate: 'Aug 2023',
    endDate: 'May 2025',
    details: [
      'Coursework: Intro to Robotics, Mobile Robotics, Computer Vision, Autonomous Vehicle Systems, Remote Sensing.'
    ]
  },
  {
    school: 'College of Engineering Pune',
    degree: 'Post Graduate Diploma in Data Science and AI',
    startDate: 'Aug 2021',
    endDate: 'Aug 2022',
    details: [
      'Coursework: Machine Learning, Statistics and Linear Algebra, DBMS, Time Series Analysis, Artificial Intelligence, Deep Learning, Natural Language Processing.'
    ]
  },
  {
    school: 'Pune University',
    degree: 'Bachelor of Engineering in Mechanical Engineering',
    startDate: 'Aug 2017',
    endDate: 'Apr 2021',
    details: [
      'Coursework: Fundamentals of Programming Languages, Mechatronics, Robotics, Hydraulics and Pneumatics, CAD.'
    ]
  }
]

export const SKILLS = [
  {
    category: 'Programming',
    items: ['Python', 'C++', 'MATLAB', 'PyTorch', 'TensorFlow', 'ROS2', 'gRPC', 'SQL', 'CUDA']
  },
  {
    category: 'Software',
    items: ['SLAM', 'Tableau', 'Sensor Fusion', 'Computer Vision', 'CNNs', 'YOLO', 'Pose Estimation', 'Depth Mapping', 'Docker', 'Git', 'Linux']
  },
  {
    category: 'Hardware',
    items: ['LiDAR', 'Stereo Vision', 'GNSS', 'IMU', 'UR3', 'Raspberry Pi', 'GPIO', 'I2C', 'SPI', 'Jetson']
  },
  {
    category: 'Core Competencies',
    items: ['Data Structures & Algorithms', 'Distributed Systems', 'Computer Vision', 'SLAM', 'Sensor Fusion']
  }
]

export type PhotoItem = {
  title: string
  slug: string
  src: string
  tags: string[]
  width: number
  height: number
}

export const PHOTOGRAPHY_COLLECTION: PhotoItem[] = [
  {
    title: "Artist's Bluff",
    slug: "artists-bluff",
    src: "/images/photography/artists-bluff.jpg",
    tags: ["landscape","NH"],
    width: 2048,
    height: 1365,
  },
  {
    title: "Golden Gate Twilight",
    slug: "golden-gate-twilight",
    src: "/images/photography/golden-gate-twilight.jpg",
    tags: ["city","SF"],
    width: 2048,
    height: 1365,
  },
  {
    title: "Prairie Storm",
    slug: "prairie-storm",
    src: "/images/photography/prairie-storm.jpg",
    tags: ["weather","IL"],
    width: 2048,
    height: 1365,
  },
]
