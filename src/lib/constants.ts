export const SITE_CONFIG = {
  name: 'Amey Vilas Gavale',
  shortName: 'AVG',
  tagline: 'Autonomy & Robotics Engineer',
  description: 'Actively seeking Full Time Opportunities in Software, Robotics and Autonomy in the United States.',
  url: 'https://ameygavale.portfolio',
  github: 'https://github.com/ameygavale',
  linkedin: 'https://www.linkedin.com/in/ameygavale/',
  email: 'ameygavale@gmail.com',
  phone: '(708) 621-8981',
  location: 'Champaign, IL',
  headshotUrl: '/images/photo.jpg',
}

export type ProjectConfig = {
  id: number | string
  slug: string
  title: string
  description: string
  image?: string | null
  media?: string | null
  videoLinks?: string[]
  technologies: string[]
  github?: string
  demo?: string
  category: string
}

export const PROJECTS: ProjectConfig[] = [
  {
    id: 1,
    slug: 'over-the-crop-canopy-phenotyping-robot',
    title: 'Development of Over The Crop Canopy Phenotyping Robot (AFS)',
    description:
      'Delivered the perception and navigation stack for the AMiGA phenotyping robot, enabling over-the-row canopy scans with stereo depth alignment and automated trait logging.',
    image: '/images/projects/amiga.jpg',
    videoLinks: ['https://youtu.be/uUrYV-Pjc2o?si=t7Rh3tMfkidtoS3q'],
    technologies: ['ROS2', 'Stereo Vision', 'Depth Mapping', 'Navigation'],
    github: '',
    demo: '',
    category: 'Field Robotics'
  },
  {
    id: 2,
    slug: 'blue-boat-usv-autonomous-docking-navigation',
    title: 'Development perception stack of Blue Boat USV (Autonomous Docking & Navigation)',
    description:
      'Engineered a BlueBoat USV autonomy suite with mission planning, docking controller, and multi-sensor fusion that sustained reliable operations in wave-disturbed trials.',
    image: '/images/projects/blueboat.jpg',
    videoLinks: ['https://youtu.be/6SlrlSspAqo?si=B_Cv_zZoPdQyid_P'],
    technologies: ['ROS2', 'Gazebo', 'Sensor Fusion', 'Marine Control'],
    github: '',
    demo: '',
    category: 'Marine Robotics'
  },
  {
    id: 3,
    slug: 'gem-e4-autonomous-vehicle-pedestrian-detection-control',
    title: 'Gem e4 Autonomous Vehicle Development (Pedestrian Detection & Control)',
    description:
      'Integrated LiDAR, stereo vision, and MPC-based control on the GEM e4 platform to deliver dependable lane keeping with real-time pedestrian detection in urban scenarios.',
    image: '/images/projects/gem.jpg',
    videoLinks: [
      'https://youtu.be/msFjLbViays?si=tW4hoYTwKkfxVb6y',
      'https://youtu.be/Vv8QWqIuXAg?si=-klAdv1BJEsuKisO'
    ],
    technologies: ['ROS2', 'MPC', 'LiDAR', 'Perception'],
    github: '',
    demo: '',
    category: 'Autonomous Vehicles'
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
    videoLinks: ['https://youtu.be/YwfYYCGnCqc?si=_vLO_1k7uKLb18q0'],
    technologies: ['ROS', 'OpenCV', 'Inverse Kinematics', 'Automation'],
    github: '',
    demo: '',
    category: 'Industrial Automation'
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
  },
  {
    id: 7,
    slug: 'multi-scale-image-processing-3d-reconstruction',
    title: 'Multi-Scale Image Processing & 3D Reconstruction',
    description:
      'Built advanced computer vision pipelines using SIFT, RANSAC, photometric stereo, and Fourier methods for image stitching, 3D surface reconstruction, and color channel alignment.',
    image: '/images/projects/multi-scale-image-processing-3d-reconstruction.jpg',
    technologies: [
      'RANSAC',
      'Blob',
      'Homography',
      'OpenCV',
      'Shape from Shading',
      '3D Reconstruction',
      'Fourier-based Alignment'
    ],
    github: '',
    demo: '',
    category: 'Computer Vision'
  },
  {
    id: 8,
    slug: 'indoor-localization-surveillance-system-raspberry-pi',
    title: 'Indoor Localization & Surveillance System using Raspberry Pi',
    description:
      'Developed an indoor surveillance system using Raspberry Pi, Sense Hat, and OpenCV for motion detection, face tracking, and indoor localization via RSSI and PDR.',
    image: '/images/projects/indoor-localization-surveillance-system-raspberry-pi.jpg',
    technologies: ['Localization', 'Kalman Filter', 'Python', 'IoT', 'Raspberry Pi', 'IMU'],
    github: '',
    demo: '',
    category: 'IoT Systems'
  },
  {
    id: 9,
    slug: 'postrack-smart-posture-detection',
    title: 'PosTrack: Smart Posture Detection',
    description:
      'Built a real-time webcam-based posture detection system using MediaPipe for facial and body landmark tracking, enabling low-cost, hardware-free posture monitoring.',
    image: '/images/projects/postrack-smart-posture-detection.jpg',
    technologies: ['OpenCV', 'Pose Estimation', 'YOLO'],
    github: '',
    demo: '',
    category: 'Computer Vision'
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
    degree: 'Master of Engineering',
    major: 'Autonomy and Robotics',
    startDate: 'Aug 2023',
    endDate: 'May 2025',
    details: [
      'Coursework: Intro to Robotics, Mobile Robotics, Computer Vision, Autonomous Vehicle Systems, Remote Sensing.'
    ]
  },
  {
    school: 'College of Engineering Pune',
    degree: 'Post Graduate Diploma',
    major: 'Data Science and AI',
    startDate: 'Aug 2021',
    endDate: 'Aug 2022',
    details: [
      'Coursework: Machine Learning, Statistics and Linear Algebra, DBMS, Time Series Analysis, Artificial Intelligence, Deep Learning, Natural Language Processing.'
    ]
  },
  {
    school: 'Pune University',
    degree: 'Bachelor of Engineering',
    major: 'Mechanical Engineering',
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
