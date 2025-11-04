"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TechNode {
  id: string;
  name: string;
  category: "frontend" | "backend" | "tools" | "languages";
  level: number;
  description: string;
  connections: string[];
  x: number;
  y: number;
}

const initialTechNodes: TechNode[] = [
  {
    id: "typescript",
    name: "TypeScript",
    category: "languages",
    level: 1,
    description:
      "Type-safe JavaScript - the foundation of my development approach",
    connections: ["react", "nodejs", "nestjs", "express", "mastra"],
    x: 50,
    y: 10,
  },
  {
    id: "react",
    name: "React",
    category: "frontend",
    level: 2,
    description: "Modern UI library for building interactive frontends",
    connections: ["nextjs", "typescript", "javascript"],
    x: 35,
    y: 25,
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    level: 3,
    description: "Full-stack React framework for production applications",
    connections: [
      "react",
      "nodejs",
      "typescript",
      "tailwindCss",
      "figma",
      "shadcn",
    ],
    x: 50,
    y: 40,
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    level: 3,
    description: "JavaScript runtime for building scalable backends",
    connections: [
      "express",
      "nestjs",
      "typescript",
      "mongodb",
      "postgress",
      "mastra",
      "prisma",
      "mongoose",
    ],
    x: 20,
    y: 50,
  },
  {
    id: "express",
    name: "Express",
    category: "backend",
    level: 3,
    description: "Lightweight web framework for Node.js applications",
    connections: [
      "nodejs",
      "typescript",
      "aws",
      "nestjs",
      "prisma",
      "postgress",
      "graphql",
      "rest",
    ],
    x: 10,
    y: 65,
  },
  {
    id: "nestjs",
    name: "NestJS",
    category: "backend",
    level: 4,
    description:
      "Progressive Node.js framework for scalable server-side applications",
    connections: ["nodejs", "typescript", "aws", "oop"],
    x: 30,
    y: 65,
  },

  {
    id: "mastra",
    name: "mastra",
    category: "backend",
    level: 4,
    description:
      "Progressive Node.js framework for scalable Ai agent applications",
    connections: ["nodejs", "typescript", "postgress", "backend", "ai Agent"],
    x: 35,
    y: 70,
  },
  {
    id: "rust",
    name: "Rust",
    category: "backend",
    level: 5,
    description:
      "Systems programming language - memory safe and performant-web3 and cryptography",
    connections: ["aws", "postgress", "mongodb", "blockchain"],
    x: 65,
    y: 50,
  },
  {
    id: "aws",
    name: "AWS",
    category: "tools",
    level: 4,
    description: "Cloud platform for deploying and scaling applications",
    connections: ["nodejs", "express", "nestjs", "rust", "cloud"],
    x: 75,
    y: 75,
  },
];

const categoryColors = {
  frontend: "from-blue-500 via-cyan-500 to-teal-500",
  backend: "from-purple-500 via-pink-500 to-rose-500",
  languages: "from-orange-500 via-amber-500 to-yellow-500",
  tools: "from-green-500 via-emerald-500 to-lime-500",
};

const categoryBorderColors = {
  frontend: "border-cyan-500/50",
  backend: "border-pink-500/50",
  languages: "border-amber-500/50",
  tools: "border-emerald-500/50",
};

const categoryGlowColors = {
  frontend: "shadow-cyan-500/50",
  backend: "shadow-pink-500/50",
  languages: "shadow-amber-500/50",
  tools: "shadow-emerald-500/50",
};

export function TechRoadmap() {
  const [currentNode, setCurrentNode] = useState<string>("typescript");
  const [visitedNodes, setVisitedNodes] = useState<Set<string>>(
    new Set(["typescript"])
  );
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [techNodes, setTechNodes] = useState<TechNode[]>(initialTechNodes);
  const [draggedNode, setDraggedNode] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [selectedCategory, setSelectedCategory] = useState<
    "frontend" | "backend" | "languages" | "tools" | null
  >(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const currentTech = techNodes.find((node) => node.id === currentNode);
  const availableNodes = currentTech?.connections || [];

  const filteredNodes = selectedCategory
    ? techNodes.filter(
        (node) =>
          node.category === selectedCategory || visitedNodes.has(node.id)
      )
    : techNodes;

  const navigateTo = (nodeId: string) => {
    setCurrentNode(nodeId);
    setVisitedNodes((prev) => new Set([...prev, nodeId]));
  };

  const isAccessible = (nodeId: string) => {
    return (
      availableNodes.includes(nodeId) ||
      visitedNodes.has(nodeId) ||
      nodeId === currentNode
    );
  };

  const getConnectionPath = (from: TechNode, to: TechNode) => {
    const x1 = from.x;
    const y1 = from.y;
    const x2 = to.x;
    const y2 = to.y;

    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    const offsetX = (y2 - y1) * 0.1;
    const offsetY = (x1 - x2) * 0.1;

    return `M ${x1} ${y1} Q ${midX + offsetX} ${midY + offsetY} ${x2} ${y2}`;
  };

  const handleMouseDown = (e: React.MouseEvent, nodeId: string) => {
    if (!svgRef.current) return;

    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();
    const node = techNodes.find((n) => n.id === nodeId);
    if (!node) return;

    const svgX = ((e.clientX - rect.left) / rect.width) * 100;
    const svgY = ((e.clientY - rect.top) / rect.height) * 100;

    setDraggedNode(nodeId);
    setDragOffset({
      x: svgX - node.x,
      y: svgY - node.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggedNode || !svgRef.current) return;

    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();
    const svgX = ((e.clientX - rect.left) / rect.width) * 100;
    const svgY = ((e.clientY - rect.top) / rect.height) * 100;

    setTechNodes((prev) =>
      prev.map((node) =>
        node.id === draggedNode
          ? {
              ...node,
              x: Math.max(0, Math.min(100, svgX - dragOffset.x)),
              y: Math.max(0, Math.min(100, svgY - dragOffset.y)),
            }
          : node
      )
    );
  };

  const handleMouseUp = () => {
    setDraggedNode(null);
  };

  const getConnectionColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "url(#gradient-frontend)";
      case "backend":
        return "url(#gradient-backend)";
      case "languages":
        return "url(#gradient-languages)";
      case "tools":
        return "url(#gradient-tools)";
      default:
        return "hsl(var(--border))";
    }
  };

  return (
    <section
      id="roadmap"
      className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 opacity-10 dark:opacity-5"
        style={{
          backgroundImage: "url('/background-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-500 via-lavender-500 to-blue-500 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700">
            Interactive Tech Roadmap
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
            Navigate through my tech stack • Click to explore • Drag to
            rearrange
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <Button
            onClick={() => setSelectedCategory(null)}
            variant={selectedCategory === null ? "default" : "outline"}
            className={`px-4 py-2 font-semibold transition-all ${
              selectedCategory === null
                ? "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                : "border-white/30 hover:bg-white/10"
            }`}
          >
            All
          </Button>
          <Button
            onClick={() => setSelectedCategory("frontend")}
            variant={selectedCategory === "frontend" ? "default" : "outline"}
            className={`px-4 py-2 font-semibold transition-all ${
              selectedCategory === "frontend"
                ? "bg-gradient-to-r from-blue-500 to-green-500 text-white"
                : "border-white/30 hover:bg-white/10"
            }`}
          >
            Frontend
          </Button>
          <Button
            onClick={() => setSelectedCategory("backend")}
            variant={selectedCategory === "backend" ? "default" : "outline"}
            className={`px-4 py-2 font-semibold transition-all ${
              selectedCategory === "backend"
                ? "bg-gradient-to-r from-green-500 to-lavender-500 text-white"
                : "border-white/30 hover:bg-white/10"
            }`}
          >
            Backend
          </Button>
          <Button
            onClick={() => setSelectedCategory("languages")}
            variant={selectedCategory === "languages" ? "default" : "outline"}
            className={`px-4 py-2 font-semibold transition-all ${
              selectedCategory === "languages"
                ? "bg-gradient-to-r from-blue-500 to-green-500 text-white"
                : "border-white/30 hover:bg-white/10"
            }`}
          >
            Languages
          </Button>
          <Button
            onClick={() => setSelectedCategory("tools")}
            variant={selectedCategory === "tools" ? "default" : "outline"}
            className={`px-4 py-2 font-semibold transition-all ${
              selectedCategory === "tools"
                ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                : "border-white/30 hover:bg-white/10"
            }`}
          >
            Tools
          </Button>
        </div>

        <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-background via-background to-muted/20 border-2 border-primary/20 rounded-2xl overflow-hidden mb-8 shadow-2xl shadow-primary/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

          <svg
            ref={svgRef}
            className="absolute inset-0 w-full h-full cursor-move"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <defs>
              <linearGradient
                id="gradient-frontend"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#14b8a6" />
              </linearGradient>
              <linearGradient
                id="gradient-backend"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>
              <linearGradient
                id="gradient-languages"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
              <linearGradient
                id="gradient-tools"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="50%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#84cc16" />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {techNodes.map((node) =>
              node.connections.map((connId) => {
                const connectedNode = techNodes.find((n) => n.id === connId);
                if (!connectedNode) return null;

                const isActive =
                  visitedNodes.has(node.id) && visitedNodes.has(connId);
                const isAvailable =
                  currentNode === node.id && availableNodes.includes(connId);
                const isFiltered =
                  !selectedCategory ||
                  (filteredNodes.includes(node) &&
                    filteredNodes.includes(connectedNode));

                return (
                  <path
                    key={`${node.id}-${connId}`}
                    d={getConnectionPath(node, connectedNode)}
                    fill="none"
                    stroke={
                      isActive || isAvailable
                        ? getConnectionColor(node.category)
                        : "hsl(var(--border))"
                    }
                    strokeWidth={isActive ? "0.5" : isAvailable ? "0.4" : "0.2"}
                    opacity={
                      isFiltered
                        ? isActive
                          ? "0.8"
                          : isAvailable
                          ? "0.6"
                          : "0.3"
                        : "0.1"
                    }
                    className="transition-all duration-500"
                    strokeDasharray={isActive ? "none" : "2,2"}
                  >
                    {isActive && (
                      <animate
                        attributeName="stroke-dashoffset"
                        from="0"
                        to="10"
                        dur="1s"
                        repeatCount="indefinite"
                      />
                    )}
                  </path>
                );
              })
            )}

            {filteredNodes.map((node) => {
              const isCurrent = currentNode === node.id;
              const isVisited = visitedNodes.has(node.id);
              const isAvailable = availableNodes.includes(node.id);
              const isHovered = hoveredNode === node.id;
              const accessible = isAccessible(node.id);
              const isDragging = draggedNode === node.id;

              const getNodeGradient = () => {
                switch (node.category) {
                  case "frontend":
                    return "url(#gradient-frontend)";
                  case "backend":
                    return "url(#gradient-backend)";
                  case "languages":
                    return "url(#gradient-languages)";
                  case "tools":
                    return "url(#gradient-tools)";
                  default:
                    return "hsl(var(--muted))";
                }
              };

              return (
                <g
                  key={node.id}
                  className={isDragging ? "cursor-grabbing" : "cursor-grab"}
                >
                  {isCurrent && (
                    <>
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="4"
                        fill="none"
                        stroke={getNodeGradient()}
                        strokeWidth="0.4"
                        opacity="0.6"
                        className="animate-ping"
                      />
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="3.5"
                        fill="none"
                        stroke={getNodeGradient()}
                        strokeWidth="0.3"
                        opacity="0.8"
                      />
                    </>
                  )}

                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={
                      isCurrent
                        ? "2.8"
                        : isHovered || isDragging
                        ? "2.3"
                        : "1.8"
                    }
                    fill={accessible ? getNodeGradient() : "hsl(var(--muted))"}
                    className="transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      accessible && navigateTo(node.id);
                    }}
                    onMouseDown={(e) => handleMouseDown(e as any, node.id)}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    opacity={accessible ? "1" : "0.4"}
                    filter={isCurrent || isHovered ? "url(#glow)" : "none"}
                    style={{ cursor: isDragging ? "grabbing" : "grab" }}
                  />

                  {accessible && (
                    <circle
                      cx={node.x - 0.3}
                      cy={node.y - 0.3}
                      r={isCurrent ? "1.2" : "0.8"}
                      fill="white"
                      opacity="0.3"
                      className="pointer-events-none"
                    />
                  )}

                  <text
                    x={node.x}
                    y={node.y - 3.5}
                    textAnchor="middle"
                    fontSize="2.8"
                    fontWeight="700"
                    fill="currentColor"
                    className="pointer-events-none select-none drop-shadow-lg dark:fill-white fill-black"
                    opacity={accessible ? "1" : "0.5"}
                  >
                    {node.name}
                  </text>

                  <circle
                    cx={node.x + 2}
                    cy={node.y + 2}
                    r="0.8"
                    fill="hsl(var(--background))"
                    opacity="0.9"
                    className="pointer-events-none"
                  />
                  <text
                    x={node.x + 2}
                    y={node.y + 2.5}
                    textAnchor="middle"
                    fontSize="1.2"
                    fontWeight="700"
                    fill="hsl(var(--foreground))"
                    className="pointer-events-none select-none"
                  >
                    {node.level}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {currentTech && (
          <Card className="p-6 animate-in fade-in slide-in-from-bottom-4 duration-300 border-2 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-xl">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold">{currentTech.name}</h3>
                  <Badge
                    className={`bg-gradient-to-r ${
                      categoryColors[currentTech.category]
                    } text-white border-0 shadow-lg ${
                      categoryGlowColors[currentTech.category]
                    }`}
                  >
                    {currentTech.category}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">
                    {currentTech.level}
                  </span>
                  Level {currentTech.level}
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {currentTech.description}
            </p>

            {availableNodes.length > 0 && (
              <div className="space-y-3">
                <p className="text-sm font-semibold flex items-center gap-2">
                  <span className="text-primary">→</span> Navigate to (Roadmap):
                </p>
                <div className="flex flex-wrap gap-2">
                  {availableNodes.map((connId) => {
                    const connectedTech = techNodes.find(
                      (n) => n.id === connId
                    );
                    if (!connectedTech) return null;

                    const alreadyVisited = visitedNodes.has(connId);

                    return (
                      <Button
                        key={connId}
                        variant={alreadyVisited ? "outline" : "default"}
                        size="sm"
                        onClick={() => navigateTo(connId)}
                        className="gap-2"
                      >
                        {connectedTech.name}
                        {alreadyVisited && <span className="text-xs">✓</span>}
                      </Button>
                    );
                  })}
                </div>
              </div>
            )}

            {visitedNodes.size > 1 && (
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm font-semibold mb-3">
                  Journey so far ({visitedNodes.size} technologies):
                </p>
                <div className="flex flex-wrap gap-2">
                  {Array.from(visitedNodes).map((nodeId) => {
                    const node = techNodes.find((n) => n.id === nodeId);
                    if (!node || node.id === currentNode) return null;

                    return (
                      <Badge
                        key={nodeId}
                        variant="secondary"
                        className="cursor-pointer hover:bg-secondary/80"
                        onClick={() => navigateTo(nodeId)}
                      >
                        {node.name}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            )}

            {visitedNodes.size > 1 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setCurrentNode("typescript");
                  setVisitedNodes(new Set(["typescript"]));
                  setTechNodes(initialTechNodes);
                  setSelectedCategory(null);
                }}
                className="mt-4"
              >
                Reset Journey
              </Button>
            )}
          </Card>
        )}
      </div>
    </section>
  );
}
