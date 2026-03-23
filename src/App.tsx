/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  FileText, 
  CheckCircle2, 
  XCircle, 
  Plus, 
  ArrowRight, 
  MessageSquare,
  Building2,
  Home,
  Factory,
  ClipboardList
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-bg/85 backdrop-blur-xl border-b border-border-subtle">
      <div className="flex items-center gap-2.5 font-mono text-[13px] text-accent tracking-wider">
        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
        ENG. ELÉTRICA BIM
      </div>
      <ul className="hidden md:flex gap-8 list-none">
        {['Processo', 'Serviços', 'Portfólio', 'FAQ'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="font-mono text-[12px] text-text-secondary tracking-wide hover:text-text-primary transition-colors">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <a 
        href="https://wa.me/5548999999999" 
        className="font-mono text-[12px] tracking-wide px-5 py-2 border border-accent text-accent rounded-sm hover:bg-accent hover:text-black transition-all"
      >
        Solicitar orçamento
      </a>
    </nav>
  );
};

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.12em] text-accent mb-4">
    <div className="w-6 h-px bg-accent" />
    {children}
  </div>
);

const Hero = () => {
  return (
    <section id="hero" className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionLabel>Engenharia elétrica BIM · CREA/SC · Florianópolis</SectionLabel>
        <h1 className="font-display text-4xl md:text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-text-primary max-w-4xl mt-8">
          Projeto elétrico que <span className="text-accent italic">elimina o retrabalho</span> antes de chegar na obra.
        </h1>
        <p className="mt-7 text-lg text-text-secondary max-w-lg leading-relaxed font-light">
          Projetos elétricos desenvolvidos nativamente em BIM para residencial alto padrão, comercial e predial. Compatibilização com todas as disciplinas, verificação automática de conformidade com NBR 5410 e entrega com IFC aberto — sem conversão retroativa.
        </p>
        
        <div className="mt-5 flex flex-wrap gap-6">
          {['CREA/SC [número]', 'NBR 5410 · NBR 14039', 'Revit MEP · IFC'].map((item) => (
            <span key={item} className="font-mono text-[11px] text-text-tertiary tracking-wide">
              {item.split(' ').map((word, i) => i === 1 ? <b key={i} className="text-text-secondary font-normal">{word} </b> : word + ' ')}
            </span>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <button className="inline-flex items-center gap-2.5 bg-accent text-black font-mono text-[13px] font-medium tracking-wide px-7 py-3.5 rounded-sm hover:bg-accent-dark transition-colors">
            Solicitar orçamento <ArrowRight size={16} />
          </button>
          <button className="inline-flex items-center gap-2.5 bg-transparent text-text-secondary border border-border-medium font-mono text-[13px] tracking-wide px-7 py-3.5 rounded-sm hover:border-text-secondary hover:text-text-primary transition-all">
            Ver projetos
          </button>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-px max-w-xl border border-border-subtle rounded-sm overflow-hidden">
          {[
            { num: '0h', label: 'CLASH NA ENTREGA' },
            { num: '100%', label: 'BIM NATIVO' },
            { num: 'NBR·', label: 'VERIFICAÇÃO AUTO' }
          ].map((stat) => (
            <div key={stat.label} className="bg-bg-secondary p-5 md:p-6">
              <div className="font-display text-2xl md:text-3xl font-bold text-text-primary leading-none">
                {stat.num.replace(/(\D+)/, '')}<span className="text-accent">{stat.num.match(/(\D+)/)?.[0]}</span>
              </div>
              <div className="font-mono text-[10px] text-text-tertiary tracking-wider mt-1.5 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const ProblemSection = () => {
  const problems = [
    {
      num: '01',
      title: 'O projeto elétrico chega depois, em 2D, sem conversar com o que você já modelou.',
      body: 'Você fecha o BIM arquitetônico, pede o elétrico — e o que volta é um DWG isolado que não sabe onde estão as vigas, os shafts ou a laje. A compatibilização vira sua responsabilidade.',
      tag: 'PARA ARQUITETOS'
    },
    {
      num: '02',
      title: 'Interferência com tubulação ou estrutura descoberta no canteiro — não no projeto.',
      body: 'Eletroduto cruzando viga. Quadro onde deveria ter shaft hidráulico. Cada interferência descoberta na obra custa entre 5 e 10 vezes mais para resolver do que no modelo.',
      tag: 'PARA CONSTRUTORAS'
    },
    {
      num: '03',
      title: 'Entrega sem rastreabilidade: PDF sem versão, ART tardia, memorial desatualizado.',
      body: 'Quando a concessionária questiona ou quando a obra precisa de um aditivo — não há registro claro de qual revisão está valendo. A falta de rastreabilidade cria problemas evitáveis.',
      tag: 'PARA AMBOS'
    }
  ];

  return (
    <section id="problema" className="bg-bg relative z-10">
      <div className="section-inner">
        <SectionLabel>O PROBLEMA QUE RESOLVEMOS</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-tight text-text-primary max-w-xl">
          Três situações que se repetem quando o projeto elétrico <span className="text-accent italic">não nasce em BIM.</span>
        </h2>
        
        <div className="mt-14 grid md:grid-cols-3 gap-px bg-border-subtle border border-border-subtle rounded-sm overflow-hidden">
          {problems.map((p) => (
            <div key={p.num} className="bg-bg-secondary p-8 md:p-9 hover:bg-bg-tertiary transition-colors group">
              <div className="font-mono text-[11px] text-text-tertiary tracking-widest mb-5 group-hover:text-accent transition-colors">
                {p.num}
              </div>
              <h3 className="font-display text-lg font-semibold text-text-primary leading-snug mb-3.5">
                {p.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed font-light">
                {p.body}
              </p>
              <span className="inline-block mt-5 font-mono text-[10px] tracking-wider px-2.5 py-1 border border-border-medium text-text-tertiary rounded-sm">
                {p.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { num: '01', title: 'Briefing elétrico', body: 'Levantamento de cargas, normas locais e especificações arquitetônicas.', deliverable: '→ checklist técnico' },
    { num: '02', title: 'Modelagem MEP', body: 'Projeto construído nativamente no Revit MEP — sem elementos fora do modelo.', deliverable: '→ modelo .rvt' },
    { num: '03', title: 'Compatibilização', body: 'Clash detection com disciplinas complementares antes da obra.', deliverable: '→ relatório BCF' },
    { num: '04', title: 'Verificação NBR', body: 'Análise automatizada de conformidade com NBR 5410 e 14039.', deliverable: '→ relatório PDF' },
    { num: '05', title: 'Entrega final', body: 'Pranchas técnicas, modelo IFC, memorial descritivo, quantitativo e ART.', deliverable: '→ IFC + DWG + ART' }
  ];

  return (
    <section id="processo" className="bg-bg-secondary relative z-10">
      <div className="section-inner">
        <SectionLabel>COMO TRABALHAMOS</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-tight text-text-primary max-w-2xl">
          Processo elétrico BIM em <span className="text-accent italic">5 etapas</span> — do briefing à ART.
        </h2>
        
        <div className="mt-16 grid md:grid-cols-5 gap-8 md:gap-0 relative">
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-linear-to-r from-transparent via-accent to-transparent opacity-30" />
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center px-3 relative group">
              <div className="w-14 h-14 rounded-full bg-bg border border-border-medium flex items-center justify-center font-mono text-[13px] text-accent mb-5 z-10 group-hover:bg-accent group-hover:text-black group-hover:border-accent transition-all duration-300">
                {step.num}
              </div>
              <h3 className="font-display text-sm font-semibold text-text-primary mb-2.5">
                {step.title}
              </h3>
              <p className="text-[12px] text-text-secondary leading-relaxed font-light">
                {step.body}
              </p>
              <div className="mt-3 font-mono text-[10px] text-accent tracking-wide">
                {step.deliverable}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AISection = () => {
  const features = [
    {
      icon: <ShieldCheck size={24} />,
      title: 'Verificação automática NBR 5410 / 14039',
      body: 'Cada projeto passa por análise automatizada dos parâmetros elétricos contra as normas vigentes. Nenhuma não-conformidade chega à entrega.',
      result: 'Relatório de conformidade entregue junto com as pranchas — sem custo adicional.'
    },
    {
      icon: <Layers size={24} />,
      title: 'Relatório de coordenação gerado automaticamente',
      body: 'Os apontamentos de compatibilização elétrica são processados e transformados em relatório estruturado por disciplina e prioridade.',
      result: 'Relatório semanal de coordenação padronizado, rastreável e com histórico completo.'
    },
    {
      icon: <ClipboardList size={24} />,
      title: 'Extração de quantitativos elétricos do modelo',
      body: 'Quantitativos de materiais, circuitos e pontos extraídos diretamente do modelo Revit para gerar memorial descritivo e lista de materiais.',
      result: 'QTO elétrico completo e memorial descritivo entregues junto com o projeto.'
    }
  ];

  return (
    <section id="ia" className="bg-bg relative z-10">
      <div className="section-inner">
        <SectionLabel>INTELIGÊNCIA ARTIFICIAL NOS PROCESSOS</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-tight text-text-primary max-w-2xl">
          IA integrada ao fluxo elétrico — <span className="text-accent italic">não</span> como promessa, como entregável.
        </h2>
        
        <div className="mt-14 grid md:grid-cols-3 gap-px bg-border-subtle border border-border-subtle rounded-sm overflow-hidden">
          {features.map((f, i) => (
            <div key={i} className="bg-bg-secondary p-8 md:p-9 relative overflow-hidden hover:bg-bg-tertiary transition-colors group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-accent-dark to-accent" />
              <div className="text-accent mb-5 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="font-display text-[17px] font-semibold text-text-primary leading-snug mb-3">
                {f.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed font-light mb-5">
                {f.body}
              </p>
              <div className="p-3 bg-accent/5 border-l-2 border-accent text-[12px] text-text-secondary leading-relaxed">
                <strong className="text-accent font-medium">Para o cliente:</strong> {f.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      tag: 'RESIDENCIAL ALTO PADRÃO',
      title: 'Projeto Elétrico BIM — Casa e Apartamento',
      body: 'Projeto completo de instalações elétricas de baixa tensão para residências e apartamentos de alto padrão. Modelo BIM nativo dimensionado conforme NBR 5410.',
      items: [
        'Modelo Revit MEP + exportação IFC',
        'Pranchas técnicas DWG e PDF',
        'Diagrama unifilar e quadro de cargas',
        'Memorial descritivo + QTO de materiais',
        'Relatório de conformidade NBR 5410',
        'ART registrada no CREA/SC'
      ],
      deadline: '15–30 dias corridos'
    },
    {
      tag: 'COMERCIAL E PREDIAL',
      title: 'Projeto Elétrico BIM — Escritórios e Lojas',
      body: 'Instalações elétricas BT para edificações comerciais com compatibilização elétrica contra estrutural, hidráulico e HVAC. Clash detection integrado.',
      items: [
        'Modelo Revit MEP + exportação IFC',
        'Compatibilização multidisciplinar inclusa',
        'Relatório de apontamentos BCF',
        'Pranchas, memorial e QTO',
        'Relatório de conformidade NBR 5410',
        'ART registrada no CREA/SC'
      ],
      deadline: '20–45 dias corridos'
    },
    {
      tag: 'MÉDIA E ALTA TENSÃO',
      title: 'Subestações e Projetos MT/AT',
      body: 'Projetos de subestações, alimentadores de média tensão e instalações de alta tensão para obras de maior porte. Desenvolvidos sob demanda.',
      items: [
        'Projeto de subestação abrigada ou aérea',
        'Alimentadores MT conforme NBR 14039',
        'Memorial de cálculo e proteções',
        'Laudos técnicos e vistorias',
        'ART específica MT/AT'
      ],
      deadline: 'sob consulta'
    },
    {
      tag: 'LAUDOS E CONSULTORIAS',
      title: 'Vistorias, Laudos Elétricos e NR-10',
      body: 'Laudos de instalações existentes, adequação à NR-10, vistorias para habite-se e aprovação em concessionária. Documentação técnica completa.',
      items: [
        'Laudo de instalações elétricas',
        'Adequação NR-10 e SPDA (NBR 5419)',
        'Vistoria para habite-se',
        'Relatório fotográfico técnico',
        'ART de laudo registrada'
      ],
      deadline: '5–15 dias corridos'
    }
  ];

  return (
    <section id="servicos" className="bg-bg-secondary relative z-10">
      <div className="section-inner">
        <SectionLabel>SERVIÇOS</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-tight text-text-primary max-w-xl">
          O que entregamos — por <span className="text-accent italic">tipologia</span> de projeto.
        </h2>
        
        <div className="mt-14 grid md:grid-cols-2 gap-px bg-border-subtle border border-border-subtle rounded-sm overflow-hidden">
          {services.map((s, i) => (
            <div key={i} className="bg-bg-secondary p-10 hover:bg-bg-tertiary transition-colors">
              <div className="font-mono text-[10px] tracking-[0.1em] text-accent mb-4">
                {s.tag}
              </div>
              <h3 className="font-display text-2xl font-bold text-text-primary leading-tight mb-3.5">
                {s.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed font-light mb-6">
                {s.body}
              </p>
              <ul className="space-y-2">
                {s.items.map((item, idx) => (
                  <li key={idx} className="font-mono text-[11px] text-text-secondary tracking-wide flex items-center gap-2.5">
                    <div className="w-1 h-1 bg-accent rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-border-subtle font-mono text-[11px] text-text-tertiary tracking-wide">
                Prazo estimado: <b className="text-text-secondary font-normal">{s.deadline}</b> · a partir da documentação base
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  const [filter, setFilter] = useState('Todos');
  const projects = [
    {
      type: 'RESIDENCIAL · ALTO PADRÃO',
      name: 'Casa Unifamiliar — Jurerê',
      area: '480 m²',
      circuits: '42',
      disciplines: 'ELE + HID',
      icon: <Home size={40} className="opacity-20 text-accent" />
    },
    {
      type: 'COMERCIAL · ESCRITÓRIO',
      name: 'Laje Corporativa — Centro',
      area: '1.200 m²',
      quadros: '8',
      disciplines: 'ELE + HID + HVAC',
      icon: <Building2 size={40} className="opacity-20 text-accent" />
    },
    {
      type: 'PREDIAL · MULTIFAMILIAR',
      name: 'Edifício Residencial — Coqueiros',
      area: '3.400 m²',
      floors: '8',
      disciplines: 'ELE + HID + EST',
      icon: <Factory size={40} className="opacity-20 text-accent" />
    }
  ];

  return (
    <section id="portfolio" className="bg-bg relative z-10">
      <div className="section-inner">
        <SectionLabel>PORTFÓLIO</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-tight text-text-primary max-w-2xl">
          Projetos desenvolvidos <span className="text-accent italic">nativamente</span> em BIM.
        </h2>
        <p className="mt-5 text-[15px] text-text-secondary font-light max-w-md">
          Screenshots do modelo, dados técnicos e disciplinas coordenadas em cada projeto.
        </p>
        
        <div className="mt-9 flex flex-wrap gap-2">
          {['Todos', 'Residencial', 'Comercial', 'Predial'].map((f) => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`font-mono text-[11px] tracking-wide px-4 py-1.5 border rounded-sm transition-all ${
                filter === f ? 'border-accent text-accent' : 'border-border-medium text-text-secondary hover:border-accent hover:text-accent'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-5 grid md:grid-cols-3 gap-px bg-border-subtle border border-border-subtle rounded-sm overflow-hidden">
          {projects.map((p, i) => (
            <div key={i} className="bg-bg-secondary p-8 hover:bg-bg-tertiary transition-colors group">
              <div className="h-36 bg-bg-tertiary border border-border-subtle rounded-sm flex flex-col items-center justify-center mb-6 relative overflow-hidden">
                {p.icon}
                <div className="font-mono text-[10px] text-text-tertiary tracking-widest text-center mt-2">
                  MODELO REVIT MEP
                </div>
              </div>
              <div className="font-mono text-[10px] text-accent tracking-[0.1em] mb-2.5">
                {p.type}
              </div>
              <h3 className="font-display text-base font-semibold text-text-primary mb-3">
                {p.name}
              </h3>
              <div className="flex flex-wrap gap-4">
                <span className="font-mono text-[10px] text-text-tertiary tracking-wide">
                  Área <b className="text-text-secondary font-normal">{p.area}</b>
                </span>
                {p.circuits && (
                  <span className="font-mono text-[10px] text-text-tertiary tracking-wide">
                    Circuitos <b className="text-text-secondary font-normal">{p.circuits}</b>
                  </span>
                )}
                {p.floors && (
                  <span className="font-mono text-[10px] text-text-tertiary tracking-wide">
                    Andares <b className="text-text-secondary font-normal">{p.floors}</b>
                  </span>
                )}
                <span className="font-mono text-[10px] text-text-tertiary tracking-wide">
                  Disciplinas <b className="text-text-secondary font-normal">{p.disciplines}</b>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NormsSection = () => {
  const norms = [
    'NBR 5410 · Instalações BT',
    'NBR 14039 · Instalações MT',
    'NBR 5419 · SPDA',
    'NR-10 · Segurança Elétrica',
    'NBR IEC 60439 · Quadros',
    'NBR 5413 · Iluminação',
    'Portaria ANEEL',
    'Normas Concessionária SC'
  ];

  return (
    <section id="normas" className="bg-bg-secondary relative z-10">
      <div className="section-inner">
        <SectionLabel>REFERÊNCIAS NORMATIVAS</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-tight text-text-primary max-w-2xl">
          Normas que aplicamos em <span className="text-accent italic">todos</span> os projetos.
        </h2>
        <div className="mt-10 flex flex-wrap gap-2">
          {norms.map((n) => (
            <div key={n} className="px-5 py-2.5 border border-border-medium rounded-sm font-mono text-[12px] text-text-secondary tracking-wide bg-bg hover:border-accent hover:text-accent transition-colors">
              {n}
            </div>
          ))}
        </div>
        <p className="mt-6 text-[13px] text-text-tertiary font-light max-w-xl leading-relaxed">
          Cada projeto é verificado contra as normas vigentes antes da entrega. O relatório de conformidade faz parte do pacote padrão — sem solicitação adicional.
        </p>
      </div>
    </section>
  );
};

const DifferentialsSection = () => {
  const rows = [
    { label: 'Detecção de interferências', old: 'Manual, na obra', new: 'Automatizada antes da obra' },
    { label: 'Verificação NBR', old: 'Revisão manual por checklist', new: 'Verificação automatizada por IA' },
    { label: 'Quantitativo de materiais', old: 'Planilha manual separada', new: 'Extraído direto do modelo' },
    { label: 'Revisões', old: 'Redesenho completo', new: 'Atualização paramétrica' },
    { label: 'Entregável para o arquiteto', old: 'PDF e DWG isolados', new: 'IFC compatível com BIM do arquiteto' },
    { label: 'Rastreabilidade de revisões', old: 'Controle manual de versões', new: 'Histórico completo no modelo' }
  ];

  return (
    <section id="diferenciais" className="bg-bg relative z-10">
      <div className="section-inner">
        <SectionLabel>POR QUE BIM NATIVO</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-tight text-text-primary max-w-2xl">
          Projeto 2D vs BIM nativo — <span className="text-accent italic">o que muda</span> na prática.
        </h2>
        
        <div className="mt-14 overflow-x-auto">
          <table className="w-full border-separate border-spacing-0 border border-border-subtle rounded-sm overflow-hidden min-w-[600px]">
            <thead>
              <tr className="bg-bg-secondary">
                <th className="p-4 md:p-6 font-mono text-[11px] tracking-widest font-normal text-left text-text-tertiary border-b border-border-subtle"></th>
                <th className="p-4 md:p-6 font-mono text-[11px] tracking-widest font-normal text-left text-text-tertiary border-b border-border-subtle">Projeto 2D tradicional</th>
                <th className="p-4 md:p-6 font-mono text-[11px] tracking-widest font-normal text-left text-accent border-b border-border-subtle">BIM nativo (nosso processo)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="bg-bg">
                  <td className="p-4 md:p-6 font-mono text-[11px] text-text-secondary tracking-wide bg-bg-secondary border-b border-border-subtle">
                    {row.label}
                  </td>
                  <td className="p-4 md:p-6 text-[13px] text-text-tertiary border-b border-border-subtle">
                    <div className="flex items-center gap-2">
                      <XCircle size={14} className="text-text-tertiary" /> {row.old}
                    </div>
                  </td>
                  <td className="p-4 md:p-6 text-[13px] text-accent font-medium border-b border-border-subtle">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-accent" /> {row.new}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    { q: 'Vocês entregam o modelo .rvt editável?', a: 'Por padrão, entregamos o modelo IFC aberto, pranchas DWG/PDF, memorial e ART. O arquivo .rvt editável pode ser incluído como item adicional mediante negociação.' },
    { q: 'Trabalham com outros softwares além do Revit?', a: 'O projeto é desenvolvido nativamente no Revit MEP. A entrega em IFC garante compatibilidade com Archicad, Vectorworks e qualquer plataforma BIM.' },
    { q: 'Atendem projetos fora de Santa Catarina?', a: 'Sim. O projeto elétrico é desenvolvido remotamente com base na documentação arquitetônica e nas normas locais. Vistorias in loco são avaliadas caso a caso.' },
    { q: 'Como funciona a ART? Vocês emitem pelo CREA de SC?', a: 'Sim. A ART é emitida pelo CREA/SC e está inclusa em todos os projetos. Para obras em outros estados, a ART pode ser emitida via CREA/SC com visto no CREA local.' },
    { q: 'Qual o prazo médio de um projeto residencial alto padrão?', a: 'Entre 15 e 30 dias corridos a partir do recebimento da documentação base (plantas arquitetônicas + briefing elétrico).' },
    { q: 'O valor é por m² ou por projeto?', a: 'Cobramos valor fixo por projeto, definido após análise do escopo. Isso garante previsibilidade para o contratante. O orçamento é feito em até 48h.' },
    { q: 'O projeto elétrico BIM inclui a compatibilização?', a: 'Sim, a compatibilização elétrica está inclusa — desde que os modelos das outras disciplinas sejam disponibilizados em formato IFC, RVT ou NWC.' }
  ];

  return (
    <section id="faq" className="bg-bg-secondary relative z-10">
      <div className="section-inner">
        <SectionLabel>PERGUNTAS FREQUENTES</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-tight text-text-primary max-w-2xl">
          O que <span className="text-accent italic">sempre perguntam</span> antes de contratar.
        </h2>
        
        <div className="mt-14 flex flex-col gap-px bg-border-subtle border border-border-subtle rounded-sm overflow-hidden">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-bg-secondary">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-5 md:p-7 text-left hover:bg-bg-tertiary transition-colors gap-5"
              >
                <span className="font-display text-[15px] font-medium text-text-primary leading-snug">
                  {faq.q}
                </span>
                <Plus 
                  size={18} 
                  className={`text-text-tertiary transition-transform duration-300 ${openIndex === i ? 'rotate-45 text-accent' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-7 pb-6 text-sm text-text-secondary leading-relaxed font-light border-t border-border-subtle pt-5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contato" className="bg-bg relative z-10">
      <div className="section-inner">
        <SectionLabel>CONTATO</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-tight text-text-primary max-w-2xl">
          Orçamento em <span className="text-accent italic">48 horas</span> — sem reunião prévia.
        </h2>
        
        <div className="mt-14 grid md:grid-cols-2 gap-px bg-border-subtle border border-border-subtle rounded-sm overflow-hidden">
          <div className="bg-bg-tertiary p-11 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-accent-dark to-accent" />
            <div className="font-mono text-[10px] tracking-[0.12em] text-accent mb-4">
              RESPOSTA IMEDIATA
            </div>
            <h3 className="font-display text-2xl font-bold text-text-primary leading-tight mb-3">
              WhatsApp direto com o engenheiro responsável
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed font-light mb-8">
              Para projetos com prazo definido ou dúvidas técnicas que precisam de resposta rápida. Resposta em até 2 horas em dias úteis.
            </p>
            <a 
              href="https://wa.me/5548999999999" 
              className="inline-flex items-center justify-center gap-2.5 bg-accent text-black font-mono text-[13px] font-medium tracking-wide w-full py-3.5 rounded-sm hover:bg-accent-dark transition-colors"
            >
              Falar no WhatsApp <MessageSquare size={16} />
            </a>
            <div className="mt-5 pt-4 border-t border-border-subtle font-mono text-[11px] text-text-tertiary tracking-wide">
              É engenheiro elétrico? <a href="#" className="text-text-secondary underline underline-offset-4 hover:text-accent">Fale sobre parceria técnica →</a>
            </div>
          </div>
          
          <div className="bg-bg-secondary p-11">
            <div className="font-mono text-[10px] tracking-[0.12em] text-accent mb-4">
              FORMULÁRIO DE ORÇAMENTO
            </div>
            <h3 className="font-display text-2xl font-bold text-text-primary leading-tight mb-3">
              Envie os dados do projeto
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed font-light mb-8">
              Para orçamentos formais ou projetos com documentação já disponível. Retorno em até 48h com proposta técnica.
            </p>
            
            <form className="space-y-2.5">
              <div className="grid grid-cols-2 gap-2.5">
                <input className="w-full bg-bg border border-border-medium text-text-primary font-mono text-[12px] p-3 rounded-sm outline-none focus:border-accent transition-colors" type="text" placeholder="Nome" />
                <input className="w-full bg-bg border border-border-medium text-text-primary font-mono text-[12px] p-3 rounded-sm outline-none focus:border-accent transition-colors" type="text" placeholder="Escritório" />
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <input className="w-full bg-bg border border-border-medium text-text-primary font-mono text-[12px] p-3 rounded-sm outline-none focus:border-accent transition-colors" type="email" placeholder="E-mail" />
                <input className="w-full bg-bg border border-border-medium text-text-primary font-mono text-[12px] p-3 rounded-sm outline-none focus:border-accent transition-colors" type="tel" placeholder="WhatsApp" />
              </div>
              <select className="w-full bg-bg border border-border-medium text-text-secondary font-mono text-[12px] p-3 rounded-sm outline-none focus:border-accent focus:text-text-primary transition-colors appearance-none cursor-pointer">
                <option value="" disabled selected>Tipo de projeto</option>
                <option>Residencial alto padrão</option>
                <option>Comercial / escritório</option>
                <option>Predial multifamiliar</option>
                <option>Subestação / MT / AT</option>
                <option>Laudo elétrico</option>
              </select>
              <div className="grid grid-cols-2 gap-2.5">
                <input className="w-full bg-bg border border-border-medium text-text-primary font-mono text-[12px] p-3 rounded-sm outline-none focus:border-accent transition-colors" type="text" placeholder="Área (m²)" />
                <input className="w-full bg-bg border border-border-medium text-text-primary font-mono text-[12px] p-3 rounded-sm outline-none focus:border-accent transition-colors" type="text" placeholder="Prazo" />
              </div>
              <button className="w-full mt-2.5 p-3.5 bg-accent text-black font-mono text-[13px] font-medium tracking-widest rounded-sm hover:bg-accent-dark transition-colors">
                Enviar solicitação →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border-subtle px-6 md:px-12 py-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
      <div className="font-mono text-[11px] text-text-tertiary tracking-wide leading-relaxed">
        ENG. ELÉTRICA BIM · CREA/SC 000.000-D<br />
        Florianópolis, Santa Catarina · Brasil
      </div>
      <div className="font-mono text-[11px] text-text-tertiary tracking-wide text-center md:text-right">
        NBR 5410 · NBR 14039 · NBR 5419 · NR-10<br />
        Revit MEP · IFC · BIM nativo
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ProcessSection />
        <AISection />
        <ServicesSection />
        <PortfolioSection />
        <NormsSection />
        <DifferentialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
