import { Project, Note } from './types';

// Images import
import avatarImg from "./imgs/avatar.jpg"
import placerankImg from "./imgs/placerank.png"
import doorbellImg from "./imgs/doorbell.png"
import personalFinanceImg from "./imgs/personal-finance.png"
import evolvedAntennaImg from "./imgs/evolved-antenna.png"
import tricoreImg from "./imgs/tricore.png"
import ibmModelFImg from "./imgs/ibm-model-f.png"
import mmrStockImg from "./imgs/mmr-stock.png"
import paavImg from "./imgs/paav.png"
import hpcImg from "./imgs/hpc.png"
import kcompilerImg from "./imgs/kcompiler.png"
import llvmBackendImg from "./imgs/llvm-backend.png"
import asManagerImg from "./imgs/as-manager.png"
import kriaOsImg from "./imgs/kria-os.png"
import kriaFpgaImg from "./imgs/kria-fpga.png"
import doorbellPcbImg from "./imgs/doorbell-pcb.png"


export const PERSONAL_INFO = {
  name: "Francesco Mecatti",
  role: "Graduate Computer Science Student",
  bio: "Website still in construction.",
  avatar: avatarImg,
  socials: {
    github: "https://www.github.com/mc-cat-tty",
    linkedin: "https://www.linkedin.com/in/francesco-mecatti-cs",
    strava: "https://strava.app.link/MmPRIf1ZNYb",
  }
};


export const PROJECTS: Project[] = [
  {
    title: 'AD Vehicles Assignments',
    description: 'Assignments for the "Autonomous Driving Vehicles" course. Experimenting with LiDAR clustering, pose estimation, vehicles modeling, trajectory planning and modern controls.',
    imageUrl: paavImg,
    tags: ['Python3', 'C++', 'PCL', 'Eigen3', 'Numpy', 'Matplotlib'],
    link: 'https://github.com/mc-cat-tty/paav-assignments',
  },
  {
    title: 'HPC Assignments',
    description: 'Assignments for the "High Performance Computing" course. Experimenting with OpenMP, CUDA, and Xilinx Vitis.',
    imageUrl: hpcImg,
    tags: ['C++', 'CUDA', 'OpenMP', 'Vitis', 'Make'],
    link: 'https://github.com/mc-cat-tty/hpc-assignments',
  },
  {
    title: 'AS Manager',
    description: 'Autonomous System Manager for a Formula Student racing car. Implements a node orchestrator and safety supervisor as defined in the FSG rulebook.',
    imageUrl: asManagerImg,
    tags: ['C++ 23', 'ROS2', 'RCLCPP', 'CMake'],
    link: 'https://github.com/mc-cat-tty/as_manager',
  },
  {
    title: 'Kria OS',
    description: 'Real-time Linux recipes and layers for the Xilinx Kria KR260. Based on Yocto/BitBake stack.',
    imageUrl: kriaOsImg,
    tags: ['Xilinx Ultrascale+', 'Linux Kernel', 'PREEMPT_RT', 'SCHED_EDF', 'Devicetree', 'Yocto', 'BitBake', 'Bash'],
    link: 'https://github.com/EdoardoTorrini/mmr-kria-os',
    imageFit: 'contain',
  },
  {
    title: 'Kria Hardware Description',
    description: 'Vivado hardware description for Kria KR260\'s FPGA. Contains simple signal routing from SoM to carrier board pins.',
    imageUrl: kriaFpgaImg,
    tags: ['Xilinx Ultrascale+', 'Vivado', 'TCL', 'RTL Synth'],
    link: 'https://github.com/mc-cat-tty/mmr-kria-hardware-design',
    imageFit: 'contain',
  },
  {
    title: 'LLVM Backend Assigments',
    description: 'Custom LLVM 17 transformation passes. Assignments for the "Formal Languages and Compilers" course, front-end module.',
    imageUrl: llvmBackendImg,
    tags: ['C++', 'Clang', 'LLVM 16', 'LLVM IR', 'CMake'],
    link: 'https://github.com/mc-cat-tty/llvm-17.0.6-compilers',
    imageFit: 'contain',
  },
  {
    title: 'Kaleidoscope Compiler',
    description: 'Kaleidoscope to LLVM IR front-end compiler. Final project for the "Formal Languages and Compilers" course, front-end module.',
    imageUrl: kcompilerImg,
    tags: ['C++', 'Clang', 'LLVM 16', 'LLVM IR', 'Flex', 'Bison', 'M4', 'Make'],
    link: 'https://github.com/mc-cat-tty/kcompiler',
  },
  {
    title: 'TriCore Dev. Env.',
    description: 'Containerized enviroment for HighTec Tricore GCC + ERIKA Enterprise. Running on Linux and MacOS. Developed during my Bachelor\'s internship to facilitate firmware build for AURIX Tricore boards.',
    imageUrl: tricoreImg,
    tags: ['Docker', 'Tricore GCC', 'Infineon AURIX', 'ERIKA Enterprise'],
    link: 'https://github.com/mc-cat-tty/tricore-dev-env',
    imageFit: 'contain',
  },
  {
    title: 'MMR Stock Manager',
    description: 'Electronic components stock manager for MMR Driverless Formula Student team. Final project of Web Technologies course. Embeds a small recommendation system.',
    imageUrl: mmrStockImg,
    tags: ['Python3', 'Django', 'Javascript', 'jQuery', 'Bootstrap 5', 'WebSocket', 'DB modeling', 'REST', 'ORM'],
    link: 'https://github.com/mc-cat-tty/mmr_stock',
    imageFit: 'contain',
  },
  {
    title: 'PlaceRank',
    description: 'Full-text sentiment-aware search engine on Airbnb listings. First experience with IR and NLP models.',
    imageUrl: placerankImg,
    tags: ['Python3', 'NLP', 'BERT', 'GPT', 'Terminal UI'],
    link: 'https://github.com/mc-cat-tty/PlaceRank',
  },
  {
    title: 'PersonalFinance',
    description: 'A GUI personal finance tracking tool. Written in Java for OOP exam. Demonstrates OOP principles and heavily exploits Java streams.',
    imageUrl: personalFinanceImg,
    tags: ['Java SE 11', 'Swing', 'Doxygen'],
    link: 'https://github.com/mc-cat-tty/PersonalFinance',
    imageFit: 'contain',
  },
  {
    title: 'PlanarEvolvedAntenna',
    description: 'Radiation pattern optimizer for planar antennas via a genetic algorithm. Some experiments have been carried out to test the effectiveness of different variations of the GA.',
    imageUrl: evolvedAntennaImg,
    tags: ['Python3', 'NEC2', 'Numpy', 'Matplotlib'],
    link: 'https://github.com/ITIS-Enrico-Fermi/PlanarEvolvedAntenna',
  },
  {
    title: 'DoorbellCamDaemon',
    description: 'People recognition server for a contactless doorbell system. Particular attention was paid to coding style and design patterns.',
    imageUrl: doorbellImg,
    tags: ['C++', 'YOLOv5', 'RTSP', 'MQTT', 'Docker'],
    link: 'https://github.com/mc-cat-tty/DoorbellCamDaemon',
  },
  {
    title: 'IBM Model F Retrofit',
    description: 'Retrofitting an old IBM Model F XT keyboard with an ESP32. Weekend project during the high school.',
    imageUrl: ibmModelFImg,
    tags: ['ESP32', 'Arduino Framework'],
    link: 'https://github.com/mc-cat-tty/IBM-Model-F-XT-Keyboard-ESP32',
  },
  {
    title: 'DoorbellCamPhy',
    description: '3D models and a PCB for the DoorbellCam project.',
    imageUrl: doorbellPcbImg,
    tags: ['Fusion 360', 'KiCad'],
    link: 'https://github.com/mc-cat-tty/DoorbellCamPhy',
    imageFit: 'contain',
  },
];

export const NOTES: Note[] = [
  {
    courseTitle: 'Algoritmi Distribuiti [IT]',
    description: 'Distributed and approximation (applied to Traveling Salesman Problem and Vertex Cover) algorithms by professors M. Montangero and G. Cabri.',
    date: 'Fall 2025',
    downloadUrl: '#',
    size: '2.4 MB',
  },
  {
    courseTitle: 'Deep Learning [EN]',
    description: 'Machine Learning refresher, Deep Learning architectures, generative models, uncertainty estimation, transfer learning, and hints about diffusion models and reinforcement learning. By professors A. Porrello and S. Calderara.',
    date: 'Fall 2025',
    downloadUrl: '#',
    size: '4.1 MB',
  },
];