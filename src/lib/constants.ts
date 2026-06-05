export const SITE_CONFIG = {
  name: 'Amey Vilas Gavale',
  shortName: 'AVG',
  tagline: 'Autonomy & Robotics Engineer',
  hook:
    'I build robots that see, navigate, and dock, from crop rows to open water.',
  description:
    'Robotics engineer specializing in autonomy, perception, and software integration for intelligent systems.',
  url: 'https://ameygavale.portfolio',
  github: 'https://github.com/ameygavale',
  linkedin: 'https://www.linkedin.com/in/ameygavale/',
  email: 'ameygavale@gmail.com',
  phone: '(708) 621-8981',
  location: 'Champaign, IL',
  headshotUrl: '/images/photo.jpg',
  calendarUrl: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL ?? '',
  keywords: [
    'autonomy',
    'robotics',
    'perception',
    'ROS2',
    'SLAM',
    'computer vision',
    'sensor fusion',
    'autonomous vehicles',
    'marine robotics',
    'field robotics',
  ],
}

export type CaseStudyMetric = {
  label: string
  value: string
}

export type CaseStudy = {
  problem: string
  role: string
  approach: string[]
  results: CaseStudyMetric[]
  architecture?: string
  lessonsLearned: string[]
  highlightMetric?: string
}

export type ProjectConfig = {
  id: number | string
  slug: string
  title: string
  description: string
  image?: string | null
  media?: string | string[] | null
  videoLinks?: string[]
  technologies: string[]
  github?: string
  demo?: string
  category: string
  caseStudy: CaseStudy
}

export const PROJECTS: ProjectConfig[] = [
  {
    id: 1,
    slug: 'over-the-crop-canopy-phenotyping-robot',
    title: 'Development of Over The Crop Canopy Phenotyping Robot (AFS)',
    description:
      'Delivered the perception and navigation stack for the AMiGA phenotyping robot, enabling automated over-the-row canopy imaging with stereo depth alignment and trait logging.',
    image: '/images/projects/amiga.jpg',
    media: '/project-media/amiga_vid.mp4',
    videoLinks: ['https://youtu.be/uUrYV-Pjc2o?si=t7Rh3tMfkidtoS3q'],
    technologies: ['ROS2', 'Stereo Vision', 'Depth Mapping', 'Navigation'],
    github: '',
    demo: '',
    category: 'Field Robotics',
    caseStudy: {
      problem:
        'Agricultural phenotyping robots must drive row-by-row and capture canopy images without damaging plants, while maintaining accurate depth alignment and trait logging across uneven terrain and changing lighting.',
      role:
        'Owned the perception and navigation stack for the AMiGA phenotyping platform: stereo depth alignment, canopy image capture, and ROS2 integration for automated field runs.',
      approach: [
        'Built a stereo vision pipeline for over-the-row canopy depth mapping with real-time alignment correction.',
        'Integrated navigation nodes in ROS2 to follow crop rows with minimal human intervention.',
        'Automated trait logging so field operators could run repeatable phenotyping sessions without manual data capture.',
      ],
      results: [
        { label: 'Drive pattern', value: 'Over-the-row' },
        { label: 'Depth stack', value: 'Stereo aligned' },
        { label: 'Platform', value: 'ROS2' },
      ],
      architecture:
        'Camera feeds flow into a stereo depth node, fused with navigation waypoints along crop rows. Perception outputs drive trait logging and path corrections through a ROS2 action server.',
      lessonsLearned: [
        'Field lighting shifts faster than lab datasets, so calibration drift needs continuous monitoring.',
        'Navigation accuracy matters as much as perception quality when plants are inches away.',
      ],
      highlightMetric: 'Row-by-row canopy imaging',
    },
  },
  {
    id: 2,
    slug: 'blue-boat-usv-autonomous-docking-navigation',
    title: 'Development perception stack of Blue Boat USV (Autonomous Docking & Navigation)',
    description:
      'Engineered a BlueBoat USV autonomy suite with mission planning, docking controller, and multi-sensor fusion that sustained reliable operations in wave-disturbed trials.',
    image: '/images/projects/blueboat.jpg',
    media: 'blueboat_vid.mp4',
    videoLinks: ['https://youtu.be/6SlrlSspAqo?si=B_Cv_zZoPdQyid_P'],
    technologies: ['ROS2', 'Gazebo', 'Sensor Fusion', 'Marine Control'],
    github: '',
    demo: '',
    category: 'Marine Robotics',
    caseStudy: {
      problem:
        'An unmanned surface vehicle must autonomously navigate open water and dock reliably in wave-disturbed conditions, where GPS drift, sensor noise, and platform motion compound quickly.',
      role:
        'Engineered the full perception and autonomy suite: mission planning, docking controller, and multi-sensor fusion for the BlueBoat USV in simulation and field trials.',
      approach: [
        'Fused LiDAR, stereo vision, and IMU data into a single state estimate for marine navigation.',
        'Designed a PID-based docking controller tuned for wave-disturbed approach angles.',
        'Validated the full stack in Gazebo before transferring parameters to real-water trials.',
      ],
      results: [
        { label: 'Docking success', value: '90%' },
        { label: 'Sensors fused', value: 'LiDAR + stereo + IMU' },
        { label: 'Sim platform', value: 'Gazebo' },
      ],
      architecture:
        'Perception nodes publish fused pose estimates to a mission planner. The docking controller subscribes to pose and wave-state estimates, issuing thrust commands through a marine PID loop in ROS2.',
      lessonsLearned: [
        'Docking in waves requires predicting approach drift, not just reacting to it.',
        'Simulation-to-real gaps in marine environments demand conservative safety margins on first trials.',
      ],
      highlightMetric: '90% docking success',
    },
  },
  {
    id: 3,
    slug: 'gem-e4-autonomous-vehicle-pedestrian-detection-control',
    title: 'Gem e4 Autonomous Vehicle Development (Pedestrian Detection & Control)',
    description:
      'Integrated LiDAR, stereo vision, and MPC-based control on the GEM e4 platform to deliver dependable lane keeping with real-time pedestrian detection in urban scenarios.',
    image: '/images/projects/gem.jpg',
    media: ['gem1_vid.mp4', 'gem2_vid.mp4'],
    videoLinks: [
      'https://youtu.be/msFjLbViays?si=tW4hoYTwKkfxVb6y',
      'https://youtu.be/Vv8QWqIuXAg?si=-klAdv1BJEsuKisO'
    ],
    technologies: ['ROS2', 'MPC', 'LiDAR', 'Perception'],
    github: '',
    demo: '',
    category: 'Autonomous Vehicles',
    caseStudy: {
      problem:
        'A campus-scale autonomous vehicle must stay in lane and detect pedestrians in real time, combining LiDAR point clouds, stereo vision, and MPC control on a resource-constrained platform.',
      role:
        'Integrated the full perception-to-control pipeline on the GEM e4: LiDAR and stereo fusion, pedestrian detection, and MPC-based lane keeping for urban scenarios.',
      approach: [
        'Fused LiDAR and stereo camera data for robust obstacle and pedestrian detection.',
        'Deployed MPC-based lane keeping with real-time replanning on detected obstacles.',
        'Validated the stack across multiple urban driving scenarios with live sensor feeds.',
      ],
      results: [
        { label: 'Detection', value: 'Real-time pedestrians' },
        { label: 'Control', value: 'MPC lane keeping' },
        { label: 'Sensors', value: 'LiDAR + stereo' },
      ],
      architecture:
        'LiDAR and stereo nodes publish detections to a fusion layer. The MPC controller consumes fused obstacle maps and lane geometry, outputting steering and throttle commands through ROS2.',
      lessonsLearned: [
        'Pedestrian detection latency is a control problem, not just a perception problem.',
        'MPC tuning on real vehicles requires balancing comfort against hard safety constraints.',
      ],
      highlightMetric: 'Real-time pedestrian detection',
    },
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
    category: 'Computer Vision',
    caseStudy: {
      problem:
        'Distracted driving kills thousands annually. A system must classify driver behavior from dashboard camera feeds with high precision to avoid false alerts in production.',
      role:
        'Designed and trained a grayscale CNN with pose-estimation features on the State Farm Distracted Driver dataset, optimizing for both accuracy and alert precision.',
      approach: [
        'Trained a grayscale CNN to reduce compute while preserving classification accuracy.',
        'Augmented with pose-estimation landmarks to distinguish subtle distraction poses.',
        'Tuned the decision threshold to prioritize precision over recall for alert systems.',
      ],
      results: [
        { label: 'Accuracy', value: '97%' },
        { label: 'Precision', value: '99.9%' },
        { label: 'Dataset', value: 'State Farm' },
      ],
      architecture:
        'Dashboard camera frames pass through a grayscale CNN backbone. Pose landmarks are extracted in parallel and concatenated before the classification head for distraction prediction.',
      lessonsLearned: [
        'High accuracy means nothing if false positives make drivers ignore the system.',
        'Pose features catch distraction types that pixel-only CNNs miss.',
      ],
      highlightMetric: '97% accuracy',
    },
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
    category: 'Industrial Automation',
    caseStudy: {
      problem:
        'A warehouse sorting cell must classify and pick multi-color parcels in under a minute, with a path to barcode scanning and AMR integration for production scale-up.',
      role:
        'Built the full sorting cell on a UR3 arm: inverse kinematics, camera-based color classification, and pick-and-place sequencing.',
      approach: [
        'Implemented inverse kinematics for the UR3 to reach parcels across the workspace envelope.',
        'Used OpenCV color segmentation to classify parcels by hue in real time.',
        'Designed the cell layout for future barcode reader and AMR handoff integration.',
      ],
      results: [
        { label: 'Cycle time', value: '< 1 min' },
        { label: 'Classification', value: 'Multi-color' },
        { label: 'Arm', value: 'UR3' },
      ],
      architecture:
        'Camera node publishes color classifications to a sorting planner. The planner commands UR3 joint targets through an IK solver, with ROS coordinating pick, place, and bin routing.',
      lessonsLearned: [
        'Color classification under warehouse lighting needs per-session white balance.',
        'IK singularities near workspace edges require fallback poses, not hard stops.',
      ],
      highlightMetric: 'Sub-minute sorting',
    },
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
    category: 'Aerial Robotics',
    caseStudy: {
      problem:
        'A hybrid VTOL UAV must transition smoothly between hover, forward flight, and cruise. Each regime has different dynamics, and gain scheduling errors cause instability at transition boundaries.',
      role:
        'Implemented gain-scheduled cascaded PID control across all flight modes, with MATLAB/Simulink guidance modeling and ROS2 safety interlocks.',
      approach: [
        'Modeled hover, transition, and cruise dynamics in MATLAB/Simulink for controller design.',
        'Implemented gain-scheduled cascaded PID with smooth handoffs at mode boundaries.',
        'Added safety interlocks in ROS2 to halt transitions on sensor fault or attitude exceedance.',
      ],
      results: [
        { label: 'Flight modes', value: '3 regimes' },
        { label: 'Control', value: 'Gain-scheduled PID' },
        { label: 'Modeling', value: 'MATLAB/Simulink' },
      ],
      architecture:
        'Simulink generates reference trajectories per flight mode. A gain scheduler selects PID gains based on airspeed and attitude. ROS2 monitors sensor health and enforces transition interlocks.',
      lessonsLearned: [
        'Transition instability is almost always a scheduling problem, not a tuning problem.',
        'Safety interlocks must be tested at mode boundaries, not just in steady-state hover.',
      ],
      highlightMetric: '3-mode VTOL control',
    },
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
    category: 'Computer Vision',
    caseStudy: {
      problem:
        'Multi-view images from different scales and lighting conditions must be stitched, aligned, and reconstructed into consistent 3D surfaces. These are classic CV problems that break with naive feature matching.',
      role:
        'Built end-to-end pipelines for image stitching, photometric stereo reconstruction, and Fourier-based color channel alignment across multi-scale inputs.',
      approach: [
        'Used SIFT feature extraction with RANSAC homography estimation for robust stitching.',
        'Applied photometric stereo and shape-from-shading for 3D surface reconstruction.',
        'Aligned color channels with Fourier methods to handle illumination differences across views.',
      ],
      results: [
        { label: 'Stitching', value: 'SIFT + RANSAC' },
        { label: '3D output', value: 'Surface mesh' },
        { label: 'Alignment', value: 'Fourier-based' },
      ],
      architecture:
        'Images pass through SIFT extraction and RANSAC matching for homography. Aligned views feed photometric stereo for depth, with Fourier alignment correcting per-channel illumination before fusion.',
      lessonsLearned: [
        'RANSAC inlier thresholds must adapt to texture density. Uniform surfaces need stricter gates.',
        'Color alignment before stitching prevents ghosting that no post-hoc fix can remove.',
      ],
      highlightMetric: 'Multi-scale 3D reconstruction',
    },
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
    category: 'IoT Systems',
    caseStudy: {
      problem:
        'Indoor spaces lack reliable GPS. A low-cost surveillance system must detect motion, track faces, and estimate position using only onboard sensors on a Raspberry Pi.',
      role:
        'Developed the full stack on Raspberry Pi with Sense HAT: motion detection, face tracking, and indoor localization via RSSI fingerprinting and pedestrian dead reckoning.',
      approach: [
        'Built OpenCV motion detection and face tracking pipelines optimized for Pi compute limits.',
        'Fused RSSI beacon signals with IMU pedestrian dead reckoning through a Kalman filter.',
        'Deployed on Sense HAT with GPIO/I2C sensor integration for a self-contained node.',
      ],
      results: [
        { label: 'Platform', value: 'Raspberry Pi' },
        { label: 'Localization', value: 'RSSI + PDR' },
        { label: 'Tracking', value: 'Face + motion' },
      ],
      architecture:
        'Camera frames feed motion and face detection nodes. RSSI from Wi-Fi beacons and IMU step counts fuse in a Kalman filter to publish indoor position estimates alongside surveillance events.',
      lessonsLearned: [
        'Pi-class hardware forces pipeline-level optimization. Every millisecond in CV costs localization accuracy.',
        'RSSI maps drift as furniture moves; periodic recalibration is non-optional.',
      ],
      highlightMetric: 'Indoor localization on Pi',
    },
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
    category: 'Computer Vision',
    caseStudy: {
      problem:
        'Posture monitoring systems typically require specialized hardware. A webcam-only solution must track body landmarks in real time and flag poor posture without expensive sensors.',
      role:
        'Built PosTrack end-to-end: MediaPipe landmark tracking, posture classification logic, and a real-time webcam pipeline with no additional hardware.',
      approach: [
        'Used MediaPipe for facial and body landmark extraction from a standard webcam feed.',
        'Defined posture thresholds from landmark geometry for slouch and forward-head detection.',
        'Optimized the pipeline for real-time performance on consumer hardware.',
      ],
      results: [
        { label: 'Hardware', value: 'Webcam only' },
        { label: 'Tracking', value: 'MediaPipe' },
        { label: 'Cost', value: '$0 sensors' },
      ],
      architecture:
        'Webcam frames stream into MediaPipe pose and face mesh models. Landmark angles are computed per frame and compared against posture thresholds to trigger alerts.',
      lessonsLearned: [
        'Landmark jitter at low resolution requires temporal smoothing before thresholding.',
        'Hardware-free posture monitoring only works if latency stays under perceptual notice.',
      ],
      highlightMetric: 'Zero extra hardware',
    },
  }
]

export const EXPERIENCE = [
  {
    company: 'NextGen Embodied AI Solutions Lab, University of Illinois, Urbana Champaign',
    role: 'Graduate Research Assistant',
    startDate: 'Jan 2025',
    endDate: 'Present',
    location: 'Champaign, IL',
    achievements: [
      'Architected a dual-branch real-time perception pipeline (UNet/MobileNetV2 semantic segmentation + vanishing point regression) with GNSS-camera EKF fusion in ROS2 for autonomous navigation on a mobile robot platform, improving perception accuracy by 30% and path-tracking speed by 25%.',
      'Developed a multi-sensor perception and autonomous docking system for an unmanned surface vehicle in Gazebo; fused LiDAR, stereo vision, & IMU data with PID control, achieving 90% docking success rate.',
      'Evaluated DINOv2 (ViT) foundation model as a PyTorch backbone replacement for MobileNetV2, improving segmentation generalization across domains; optimized inference via TensorRT for edge deployment on NVIDIA Jetson.'
    ]
  },
  {
    company: 'Matic Robots',
    role: 'Robotics Winter Intern',
    startDate: 'Dec 2025',
    endDate: 'Jan 2026',
    location: 'Mountain View, CA, USA',
    achievements: [
      'Calibrated and validated microphone arrays, IMUs, and vision sensors during every robot crown test, stabilizing multi-sensor mapping inputs across the ~600-robot/week validation pipeline and keeping false-failure retests to a minimum.',
      'Diagnosed hardware, sensor, and integration defects via combined HIL testing, qualitative inspection, and quantitative data analysis to keep the ~600 robots/week production scale-up on schedule.',
      'Built and executed automated test cases for stereo and monocular camera calibration pipelines, achieving >98% validation pass rate and improving downstream system reliability.'
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
      'Prototyped fusion strategies including weighted averaging and LSTM-based temporal fusion to integrate outputs from multiple SLAM frameworks into an optimal trajectory estimate.'
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
    major: 'Data Science and Artificial Intelligence',
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
