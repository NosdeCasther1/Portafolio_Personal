"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Calendar, 
  Users, 
  FileText, 
  Database,
  Layers,
  Cpu,
  Zap,
  Globe,
  Lock,
  Activity,
  Terminal,
  Play,
  CheckCircle,
  Eye,
  LineChart,
  Server,
  Cloud,
  FileCode,
  Smartphone,
  CheckSquare
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: string | React.ReactNode;
  colSpan?: string;
}

interface PremiumFeaturesProps {
  features?: Feature[];
}

const iconMap: Record<string, React.ReactNode> = {
  shield: <ShieldCheck className="w-6 h-6 text-amber-400" />,
  calendar: <Calendar className="w-6 h-6 text-emerald-400" />,
  users: <Users className="w-6 h-6 text-indigo-400" />,
  file: <FileText className="w-6 h-6 text-rose-400" />,
  database: <Database className="w-6 h-6 text-cyan-400" />,
  layers: <Layers className="w-6 h-6 text-indigo-400" />,
  cpu: <Cpu className="w-6 h-6 text-purple-400" />,
  zap: <Zap className="w-6 h-6 text-yellow-400" />,
  globe: <Globe className="w-6 h-6 text-blue-400" />,
  lock: <Lock className="w-6 h-6 text-red-400" />,
  activity: <Activity className="w-6 h-6 text-emerald-400" />,
  terminal: <Terminal className="w-6 h-6 text-gray-400" />,
  play: <Play className="w-6 h-6 text-green-400" />,
  check: <CheckCircle className="w-6 h-6 text-teal-400" />,
  eye: <Eye className="w-6 h-6 text-sky-400" />,
  chart: <LineChart className="w-6 h-6 text-pink-400" />,
  server: <Server className="w-6 h-6 text-indigo-400" />,
  cloud: <Cloud className="w-6 h-6 text-sky-400" />,
  code: <FileCode className="w-6 h-6 text-violet-400" />,
  mobile: <Smartphone className="w-6 h-6 text-orange-400" />,
  checksquare: <CheckSquare className="w-6 h-6 text-green-400" />
};

const defaultFeatures = [
  {
    title: "Membresía y Asistencia",
    description: "Registro exhaustivo de miembros con control de asistencia nativo e instantáneo mediante escaneo de códigos QR.",
    icon: <Users className="w-6 h-6 text-indigo-400" />,
    colSpan: "lg:col-span-4 md:col-span-2",
  },
  {
    title: "Calendario y Eventos",
    description: "Sincronización bidireccional en tiempo real con la API oficial de Google Calendar.",
    icon: <Calendar className="w-6 h-6 text-emerald-400" />,
    colSpan: "lg:col-span-2 md:col-span-1",
  },
  {
    title: "Control de Acceso Fino",
    description: "Sistema de seguridad robusto con roles y permisos mediante spatie/laravel-permission.",
    icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
    colSpan: "lg:col-span-2 md:col-span-1",
  },
  {
    title: "Reportería Avanzada",
    description: "Generación automatizada de constancias y reportes exportables en formato PDF con DomPDF.",
    icon: <FileText className="w-6 h-6 text-rose-400" />,
    colSpan: "lg:col-span-2 md:col-span-1",
  },
  {
    title: "Arquitectura MVC & ORM",
    description: "Estructura modular optimizada sobre Laravel 10+ y bases de datos relacionales de alto rendimiento.",
    icon: <Database className="w-6 h-6 text-cyan-400" />,
    colSpan: "lg:col-span-2 md:col-span-1",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const getColSpan = (index: number, total: number) => {
  if (total === 4) {
    return index === 0 || index === 3 
      ? "lg:col-span-4 md:col-span-1" 
      : "lg:col-span-2 md:col-span-1";
  }
  if (total === 5) {
    if (index < 3) {
      return "lg:col-span-2 md:col-span-1";
    }
    if (index === 3) {
      return "lg:col-span-3 md:col-span-1";
    }
    return "lg:col-span-3 md:col-span-2";
  }
  if (total === 3) {
    return index === 2 
      ? "lg:col-span-2 md:col-span-2" 
      : "lg:col-span-2 md:col-span-1";
  }
  return "lg:col-span-2 md:col-span-1";
};

export default function PremiumFeatures({ features }: PremiumFeaturesProps) {
  const displayFeatures = features 
    ? features.map((f, i) => {
        const iconKey = typeof f.icon === "string" ? f.icon.toLowerCase() : "";
        const icon = iconMap[iconKey] || f.icon || <Layers className="w-6 h-6 text-indigo-400" />;
        const colSpan = f.colSpan || getColSpan(i, features.length);
        return { ...f, icon, colSpan };
      })
    : defaultFeatures;

  return (
    <section className="mt-12 md:mt-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-900/60 dark:from-white dark:to-white/60 tracking-tight">
            Características Principales
          </h3>
          <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl font-medium">
            Soluciones tecnológicas avanzadas diseñadas para maximizar el rendimiento, la seguridad y la usabilidad de la plataforma.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
        >
          {displayFeatures.map((feature, index) => (
            <BentoCard key={index} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BentoCard({ feature }: { feature: any }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-[2rem] bg-neutral-900/[0.02] dark:bg-white/[0.02] border border-neutral-950/5 dark:border-white/5 p-8 shadow-2xl backdrop-blur-md group ${feature.colSpan}`}
    >
      {/* Efecto Glow que sigue al ratón */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
        }}
      />
      
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 h-32 w-32 rounded-full bg-white/5 blur-3xl group-hover:bg-white/10 transition-all duration-700 pointer-events-none" />

      <div className="relative z-10 flex flex-col">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-900/[0.04] dark:bg-white/[0.04] border border-neutral-950/10 dark:border-white/10 ring-1 ring-neutral-950/5 dark:ring-white/5 shadow-inner group-hover:bg-neutral-900/[0.08] dark:group-hover:bg-white/[0.08] transition-all duration-500 group-hover:scale-110">
          {feature.icon}
        </div>
        <h4 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 tracking-wide">
          {feature.title}
        </h4>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed font-medium">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}
