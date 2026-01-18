// Product images
import serverImg from "@/assets/products/server.jpg";
import serverImg2 from "@/assets/products/server-2.jpg";
import serverImg3 from "@/assets/products/server-3.jpg";
import cctvImg from "@/assets/products/cctv.jpg";
import cctvImg2 from "@/assets/products/cctv-2.jpg";
import cctvImg3 from "@/assets/products/cctv-3.jpg";
import laptopImg from "@/assets/products/laptop.jpg";
import laptopImg2 from "@/assets/products/laptop-2.jpg";
import laptopImg3 from "@/assets/products/laptop-3.jpg";
import switchImg from "@/assets/products/switch.jpg";
import switchImg2 from "@/assets/products/switch-2.jpg";
import switchImg3 from "@/assets/products/switch-3.jpg";
import accessPointImg from "@/assets/products/access-point.jpg";
import accessPointImg2 from "@/assets/products/access-point-2.jpg";
import accessPointImg3 from "@/assets/products/access-point-3.jpg";
import nvrImg from "@/assets/products/nvr.jpg";
import nvrImg2 from "@/assets/products/nvr-2.jpg";
import nvrImg3 from "@/assets/products/nvr-3.jpg";
import towerServerImg from "@/assets/products/tower-server.jpg";
import towerServerImg2 from "@/assets/products/tower-server-2.jpg";
import towerServerImg3 from "@/assets/products/tower-server-3.jpg";
import dockingStationImg from "@/assets/products/docking-station.jpg";
import dockingStationImg2 from "@/assets/products/docking-station-2.jpg";
import dockingStationImg3 from "@/assets/products/docking-station-3.jpg";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  fullDescription: string;
  specs: string[];
  fullSpecs: { label: string; value: string }[];
  inStock: boolean;
  images: string[];
}

export const categories = ["All", "Servers", "Security", "Networking", "Laptops", "Accessories"];

export const products: Product[] = [
  {
    id: 1,
    name: "Enterprise Server Pro X500",
    category: "Servers",
    price: 2499,
    rating: 4.9,
    reviews: 128,
    description: "High-performance rack server designed for enterprise workloads with redundant power and advanced cooling.",
    fullDescription: "The Enterprise Server Pro X500 is built for demanding enterprise environments. Featuring the latest Intel Xeon Scalable processors, this 2U rack server delivers exceptional performance for virtualization, database, and cloud workloads. With redundant power supplies and hot-swappable drives, it ensures maximum uptime for your critical applications. The advanced cooling system maintains optimal temperatures even under heavy loads.",
    specs: ["Intel Xeon Scalable", "128GB DDR4 ECC", "4TB NVMe SSD", "Dual PSU"],
    fullSpecs: [
      { label: "Processor", value: "Intel Xeon Scalable 3rd Gen (up to 28 cores)" },
      { label: "Memory", value: "128GB DDR4-3200 ECC RDIMM (expandable to 2TB)" },
      { label: "Storage", value: "4TB NVMe SSD (8x 2.5\" hot-swap bays)" },
      { label: "Power Supply", value: "Dual 800W Platinum Redundant PSU" },
      { label: "Network", value: "4x 10GbE + 2x 25GbE SFP28" },
      { label: "Form Factor", value: "2U Rack Mount" },
      { label: "Management", value: "BMC with dedicated management port" },
      { label: "Warranty", value: "3 Years On-Site" },
    ],
    inStock: true,
    images: [serverImg, serverImg2, serverImg3],
  },
  {
    id: 2,
    name: "AI-Powered CCTV System 4K",
    category: "Security",
    price: 899,
    rating: 4.8,
    reviews: 256,
    description: "Smart surveillance system with AI-powered motion detection, facial recognition, and 4K resolution.",
    fullDescription: "Experience next-generation security with our AI-Powered CCTV System. This intelligent surveillance solution combines stunning 4K Ultra HD resolution with advanced AI capabilities including facial recognition, object detection, and smart motion alerts. The system integrates seamlessly with mobile apps for remote monitoring and includes cloud storage options for secure footage backup. Perfect for businesses requiring comprehensive security coverage.",
    specs: ["4K Ultra HD", "Night Vision", "AI Detection", "Cloud Storage"],
    fullSpecs: [
      { label: "Resolution", value: "4K Ultra HD (3840 x 2160)" },
      { label: "Night Vision", value: "Color night vision up to 100ft" },
      { label: "AI Features", value: "Facial recognition, Vehicle detection, Perimeter alerts" },
      { label: "Storage", value: "Local + Cloud (1TB included)" },
      { label: "Connectivity", value: "PoE, WiFi 6, 4G LTE backup" },
      { label: "Weatherproof", value: "IP67 rated for outdoor use" },
      { label: "Field of View", value: "140° wide-angle lens" },
      { label: "Warranty", value: "2 Years" },
    ],
    inStock: true,
    images: [cctvImg, cctvImg2, cctvImg3],
  },
  {
    id: 3,
    name: "Business Laptop Elite 15",
    category: "Laptops",
    price: 1299,
    rating: 4.7,
    reviews: 312,
    description: "Premium business laptop with military-grade durability and all-day battery life.",
    fullDescription: "The Business Laptop Elite 15 is engineered for professionals who demand reliability and performance. With MIL-STD-810H certification, this laptop withstands extreme conditions while delivering powerful performance through its Intel Core i7 processor. The stunning 15.6\" Full HD display provides crisp visuals, while the all-day battery keeps you productive on the go. Enhanced security features including fingerprint reader and TPM 2.0 protect your sensitive data.",
    specs: ["Intel Core i7", "16GB RAM", "512GB SSD", "15.6\" FHD"],
    fullSpecs: [
      { label: "Processor", value: "Intel Core i7-1365U (12 cores)" },
      { label: "Memory", value: "16GB DDR5-4800 (upgradable to 32GB)" },
      { label: "Storage", value: "512GB PCIe 4.0 NVMe SSD" },
      { label: "Display", value: "15.6\" FHD IPS, 400 nits, anti-glare" },
      { label: "Battery", value: "Up to 14 hours, 65W fast charging" },
      { label: "Security", value: "Fingerprint, IR camera, TPM 2.0" },
      { label: "Weight", value: "1.65 kg (3.6 lbs)" },
      { label: "Warranty", value: "3 Years On-Site" },
    ],
    inStock: true,
    images: [laptopImg, laptopImg2, laptopImg3],
  },
  {
    id: 4,
    name: "Managed Switch 48-Port PoE+",
    category: "Networking",
    price: 649,
    rating: 4.9,
    reviews: 89,
    description: "Enterprise-grade managed Gigabit switch with PoE+ support for all 48 ports.",
    fullDescription: "Power your entire network infrastructure with our 48-Port PoE+ Managed Switch. Designed for enterprise deployments, this switch provides PoE+ power to all ports simultaneously with a massive 740W budget. The four 10G SFP+ uplinks ensure high-speed connectivity to your core network. Advanced L3 features including static routing, VLAN management, and comprehensive QoS make this switch ideal for converged networks supporting voice, video, and data.",
    specs: ["48x GbE Ports", "4x 10G SFP+", "740W PoE Budget", "L3 Managed"],
    fullSpecs: [
      { label: "Ports", value: "48x Gigabit Ethernet PoE+" },
      { label: "Uplinks", value: "4x 10G SFP+" },
      { label: "PoE Budget", value: "740W total, 30W per port max" },
      { label: "Switching Capacity", value: "176 Gbps" },
      { label: "Management", value: "Web GUI, CLI, SNMP, REST API" },
      { label: "Layer 3", value: "Static routing, DHCP server" },
      { label: "Security", value: "802.1X, ACLs, RADIUS" },
      { label: "Warranty", value: "Lifetime Limited" },
    ],
    inStock: true,
    images: [switchImg, switchImg2, switchImg3],
  },
  {
    id: 5,
    name: "Wireless Access Point Pro",
    category: "Networking",
    price: 349,
    rating: 4.6,
    reviews: 167,
    description: "High-density WiFi 6E access point with seamless roaming and mesh capability.",
    fullDescription: "Deliver exceptional wireless performance with our WiFi 6E Access Point Pro. This tri-band access point leverages the new 6GHz spectrum for ultra-fast, interference-free connectivity. Designed for high-density environments, it supports hundreds of simultaneous clients without performance degradation. Advanced features like seamless roaming, band steering, and mesh capability ensure optimal coverage throughout your facility. Cloud management simplifies deployment and monitoring at scale.",
    specs: ["WiFi 6E", "2.5GbE", "Mesh Ready", "Cloud Managed"],
    fullSpecs: [
      { label: "WiFi Standard", value: "WiFi 6E (802.11ax)" },
      { label: "Bands", value: "Tri-band: 2.4/5/6 GHz" },
      { label: "Max Speed", value: "5.4 Gbps aggregate" },
      { label: "Ethernet", value: "1x 2.5GbE, 1x 1GbE" },
      { label: "Clients", value: "500+ simultaneous devices" },
      { label: "Coverage", value: "3,500 sq ft indoor" },
      { label: "Power", value: "PoE+ (802.3at) or DC" },
      { label: "Warranty", value: "3 Years" },
    ],
    inStock: false,
    images: [accessPointImg, accessPointImg2, accessPointImg3],
  },
  {
    id: 6,
    name: "NVR Security Recorder 16CH",
    category: "Security",
    price: 599,
    rating: 4.8,
    reviews: 145,
    description: "16-channel network video recorder with AI analytics and 8TB storage capacity.",
    fullDescription: "Centralize your security operations with our 16-Channel NVR Security Recorder. This powerful device supports up to 16 IP cameras with 4K resolution playback and includes 8TB of pre-installed storage for weeks of continuous recording. Built-in AI analytics provide intelligent alerts for intrusions, line crossing, and unusual activity. The intuitive interface makes searching and exporting footage effortless, while remote access keeps you connected from anywhere.",
    specs: ["16 Channels", "8TB Storage", "4K Playback", "Remote Access"],
    fullSpecs: [
      { label: "Channels", value: "16 IP cameras (expandable to 32)" },
      { label: "Storage", value: "8TB pre-installed (up to 48TB)" },
      { label: "Recording", value: "Up to 4K @ 30fps per channel" },
      { label: "Bandwidth", value: "320 Mbps incoming" },
      { label: "AI Analytics", value: "Motion, face, vehicle detection" },
      { label: "Outputs", value: "HDMI + VGA simultaneous" },
      { label: "Remote", value: "Mobile app + web client" },
      { label: "Warranty", value: "2 Years" },
    ],
    inStock: true,
    images: [nvrImg, nvrImg2, nvrImg3],
  },
  {
    id: 7,
    name: "Tower Server Workstation",
    category: "Servers",
    price: 1899,
    rating: 4.7,
    reviews: 78,
    description: "Compact tower server perfect for small business and remote office deployments.",
    fullDescription: "The Tower Server Workstation delivers enterprise-class reliability in a compact, quiet form factor. Perfect for small businesses, branch offices, or remote locations, this server combines powerful Intel Xeon E processors with whisper-quiet operation. The tool-less design simplifies maintenance, while RAID storage ensures data protection. With support for virtualization and multiple operating systems, it's the ideal foundation for your growing business infrastructure.",
    specs: ["Intel Xeon E", "64GB DDR4", "2TB RAID", "Quiet Operation"],
    fullSpecs: [
      { label: "Processor", value: "Intel Xeon E-2388G (8 cores, 5.1GHz)" },
      { label: "Memory", value: "64GB DDR4-3200 ECC (up to 128GB)" },
      { label: "Storage", value: "2TB RAID 1 (4x 3.5\" bays)" },
      { label: "Power Supply", value: "550W 80+ Gold" },
      { label: "Network", value: "2x 1GbE + 1x 10GbE" },
      { label: "Noise Level", value: "<25 dB under normal load" },
      { label: "Form Factor", value: "Compact Tower (17\" height)" },
      { label: "Warranty", value: "3 Years Next Business Day" },
    ],
    inStock: true,
    images: [towerServerImg, towerServerImg2, towerServerImg3],
  },
  {
    id: 8,
    name: "USB-C Docking Station Pro",
    category: "Accessories",
    price: 199,
    rating: 4.5,
    reviews: 423,
    description: "Universal USB-C docking station with dual 4K display support and 100W power delivery.",
    fullDescription: "Transform your laptop into a powerful workstation with our USB-C Docking Station Pro. A single cable connection provides dual 4K display output, 100W laptop charging, and connectivity for all your peripherals. The aluminum chassis dissipates heat efficiently while adding a premium look to your desk. Compatible with Windows, macOS, and Chrome OS, this dock is the ultimate productivity companion for modern professionals.",
    specs: ["Dual 4K@60Hz", "100W PD", "USB 3.2 Gen 2", "SD Card Reader"],
    fullSpecs: [
      { label: "Video Output", value: "2x HDMI 2.0 (4K@60Hz each)" },
      { label: "Power Delivery", value: "100W USB-C PD 3.0" },
      { label: "USB Ports", value: "3x USB-A 3.2, 2x USB-C 3.2" },
      { label: "Ethernet", value: "1x 2.5GbE" },
      { label: "Card Reader", value: "SD + microSD (UHS-II)" },
      { label: "Audio", value: "3.5mm combo jack" },
      { label: "Compatibility", value: "Windows, macOS, Chrome OS" },
      { label: "Warranty", value: "2 Years" },
    ],
    inStock: true,
    images: [dockingStationImg, dockingStationImg2, dockingStationImg3],
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getRelatedProducts = (product: Product, limit = 4): Product[] => {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit)
    .concat(
      products
        .filter((p) => p.id !== product.id && p.category !== product.category)
        .slice(0, limit)
    )
    .slice(0, limit);
};
