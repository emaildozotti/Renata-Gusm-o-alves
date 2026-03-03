import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CircleCheck,
  CircleX,
  ChevronDown,
  Play,
  Heart,
  Shield,
  Sparkles,
  MapPin,
  ArrowRight,
  Stethoscope,
  Wind,
  Moon,
  Users
} from 'lucide-react';

/* Global Fade/Reveal Component */
interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  width?: "fit-content" | "100%";
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* Premium Button Component */
interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  target?: string;
}

const PremiumButton: React.FC<ButtonProps> = ({ children, href, variant = 'primary', className = "", target }) => (
  <motion.a
    href={href}
    target={target}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
    whileHover={{ y: -4, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`
      inline-flex items-center justify-center px-10 py-5 text-lg font-medium tracking-wide rounded-full transition-all duration-300
      ${variant === 'primary'
        ? 'bg-primary text-white shadow-[0_10px_30px_-5px_rgba(58,74,55,0.4)] hover:bg-primary-light hover:shadow-[0_20px_40px_-10px_rgba(58,74,55,0.5)]'
        : 'bg-white text-primary border border-primary/10 hover:border-primary/30 shadow-premium hover:shadow-hover'}
      ${className}
    `}
  >
    {children}
    <ArrowRight className="ml-2 w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
  </motion.a>
);

export default function App() {
  return (
    <div className="min-h-screen bg-bg-canvas text-text-luxury noise-overlay font-sans selection:bg-accent/20">



      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 lg:px-24 overflow-hidden">
        {/* Artistic Background Element */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-primary/5 via-transparent to-transparent -z-10 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">

            <div className="relative z-10">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary-light text-sm font-semibold tracking-wider uppercase mb-8">
                  <Sparkles className="w-4 h-4" />
                  Atendimento 100% Online e Seguro
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 max-w-3xl italic font-serif">
                  O seu corpo já está gritando "Chega" ou você ainda está esperando <span className="text-accent underline decoration-accent/20 underline-offset-8">ele parar você?</span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-2xl leading-relaxed">
                  Eu ajudo mulheres exaustas a se reconectarem com o próprio eixo e recuperarem a saúde emocional antes do colapso. Um processo terapêutico profundo, sistêmico e sem promessas mágicas.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <PremiumButton href="https://wa.me/557791080704?text=Olá%20Renata,%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20terapia%20sistêmica." target="_blank">
                    QUERO RECUPERAR MEU EIXO
                  </PremiumButton>
                  <div className="flex items-center gap-3 text-sm font-medium text-text-muted">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-bg-surface flex items-center justify-center overflow-hidden">
                          <Users className="w-4 h-4 text-primary-light" />
                        </div>
                      ))}
                    </div>
                    <span>Atendimento 100% Online e Seguro</span>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.4} className="relative">
              <div className="relative group">
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-8 -left-8 glass p-6 rounded-2xl shadow-premium z-20 backdrop-blur-xl"
                >
                  <Wind className="text-accent w-8 h-8 mb-2" />
                  <div className="text-xs font-bold uppercase tracking-widest text-text-muted">Respire.</div>
                </motion.div>

                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                  <img
                    src="https://i.imgur.com/W5IG5ad.jpeg"
                    alt="Renata Gusmão Alves"
                    className="w-full h-full object-cover aspect-[4/5] scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
                </div>

                {/* Aesthetic shapes */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-primary/10 rounded-full -z-10 scale-150 animate-pulse"></div>
              </div>
            </Reveal>

          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40">Desça</span>
        </motion.div>
      </section>

      {/* Pain Points Section - Identification Section */}
      <section className="py-32 px-6 lg:px-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-24 items-start">
            <div>
              <Reveal>
                <h2 className="text-5xl md:text-6xl mb-8 italic">Você se tornou a mulher que <span className="text-primary italic">"dá conta de tudo"...</span> mas a que preço?</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-xl text-text-muted leading-relaxed">
                  Você provavelmente é a "coluna" da sua casa. A que resolve, a que provê, a filha que cuida dos pais, a esposa que gerencia o lar. Todo mundo admira a sua força. Mas, no silêncio do travesseiro, a realidade é outra:
                </p>
              </Reveal>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Wind />, title: "A Irritabilidade Constante", desc: "Você tem sido \"grossa\" com quem mais ama, sem querer." },
                { icon: <Moon />, title: "O Vazio no Peito", desc: "Mesmo com conquistas profissionais, a sensação é de que falta algo vital." },
                { icon: <Heart />, title: "O Corpo Fala", desc: "Enxaquecas, insônia, dores nas costas, queda de cabelo. Sinais que você ignora tomando um remédio e seguindo em frente." },
                { icon: <Users />, title: "A Solidão Acompanhada", desc: "Você cuida de todos, mas sente que ninguém cuida de você." }
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="group p-8 rounded-[2rem] bg-bg-surface border border-transparent hover:border-primary/10 hover:bg-white hover:shadow-premium transition-all duration-500">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl mb-3">{item.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.6}>
            <div className="mt-16 p-12 bg-primary text-white rounded-[3rem] text-center shadow-premium relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <p className="text-3xl md:text-5xl font-serif italic relative z-10">
                "Exaustão não é troféu de honra. É um pedido de socorro da sua alma."
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Video/VSL Section */}
      <section className="py-32 px-6 bg-primary text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-serif mb-16 italic">Conheça <span className="text-accent-soft">Renata Gusmão</span></h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative mx-auto max-w-[380px] group">
              <div className="absolute inset-0 bg-accent/20 blur-[100px] group-hover:blur-[120px] transition-all -z-10 rounded-full"></div>
              <div className="relative aspect-[9/16] bg-black rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] overflow-hidden border-[10px] border-white/10 group-hover:border-white/20 transition-all">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/MNcFKzdooZE"
                  title="Conheça Renata Gusmão"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bio Section - Authority Section */}
      <section id="sobre" className="py-32 px-6 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">

            <Reveal className="order-2 lg:order-1 relative">
              <div className="relative">
                <img
                  src="https://i.imgur.com/xVhxjQY.jpeg"
                  alt="Renata Gusmão Alves"
                  className="rounded-[3rem] shadow-premium object-cover aspect-[4/5] w-full"
                />
                <div className="absolute -bottom-12 -right-12 glass p-10 rounded-3xl shadow-premium max-w-sm hidden md:block">
                  <p className="font-serif text-2xl italic leading-tight text-primary">"Foi no silêncio forçado que aprendi: Ou você para consciente, ou a vida te para com doença."</p>
                </div>
              </div>
            </Reveal>

            <div className="order-1 lg:order-2">
              <Reveal>
                <div className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-6">A Fundadora</div>
                <h2 className="text-5xl md:text-7xl mb-12 italic leading-tight">Eu sei exatamente como é esse lugar. <br /><span className="text-primary font-serif">Eu já morei nele.</span></h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="space-y-8 text-lg text-text-muted leading-relaxed">
                  <p>
                    Meu nome é Renata Gusmão Alves. Hoje sou terapeuta sistêmica, mas minha maior formação não veio dos livros. Veio do colapso.
                  </p>
                  <p>
                    Aos 32 anos, no auge da minha "produtividade", meu corpo decidiu por mim. Tive um AVC e uma trombose que me tiraram a fala e a escrita por quase dois anos.
                  </p>
                  <p>
                    Eu calei por fora porque, por anos, calei por dentro. Engoli emoções, carreguei pesos que não eram meus e ignorei cada sinal de cansaço para "ser forte".
                  </p>
                  <p>
                    Hoje, uso minha experiência clínica e sistêmica para guiar mulheres no caminho de volta para si mesmas. Não como alguém que leu sobre a dor, mas como alguém que sobreviveu a ela.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <PremiumButton href="#metodo" variant="secondary">
                    QUERO CONHECER SEU MÉTODO
                  </PremiumButton>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="metodo" className="py-32 px-6 lg:px-24 bg-bg-surface relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <Reveal>
              <h2 className="text-5xl md:text-7xl italic mb-8">Terapia Sistêmica Integrativa</h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto">Colocando ordem na casa interna. Não tratamos apenas o sintoma (o cansaço), olhamos para a raiz (o desalinhamento).</p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <MapPin />, title: "O Seu Lugar (Hierarquia)", desc: "Muitas vezes você está exausta porque saiu do seu lugar de filha/esposa e tentou ser a \"mãe\" dos seus pais. Voltar para o seu lugar devolve sua leveza." },
              { icon: <Heart />, title: "O Atravessamento (Processo)", desc: "Não existe pílula mágica. Vamos atravessar a dor, o luto e o medo juntas. Eu sustento o silêncio e o choro que você reprimiu por anos." },
              { icon: <Sparkles />, title: "A Espiritualidade (Sentido)", desc: "Uma reconexão com a vida que vai além da mente. Sem impor religião, mas acolhendo a sua fé como parte fundamental da cura." }
            ].map((p, i) => (
              <Reveal key={i} delay={i * 0.2}>
                <div className="bg-white p-12 rounded-[3rem] shadow-premium hover:shadow-hover transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-full bg-accent/5 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all">
                    {p.icon}
                  </div>
                  <h3 className="text-3xl mb-4 italic">{p.title}</h3>
                  <p className="text-text-muted leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-32 px-6 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-5xl md:text-7xl italic text-center mb-24 font-serif">Este processo <span className="text-primary italic">é para você?</span></h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12">
            <Reveal delay={0.2}>
              <div className="bg-primary/5 p-12 rounded-[3rem] border border-primary/10 h-full">
                <h3 className="text-3xl font-serif italic mb-8 flex items-center gap-3 text-primary">
                  <CircleCheck className="w-8 h-8" /> Sim, é para você se:
                </h3>
                <ul className="space-y-6">
                  {[
                    "Você entende que cura é um processo e não um evento único.",
                    "Está disposta a assumir a responsabilidade pela sua própria história.",
                    "Busca profundidade e não apenas alívio momentâneo de sintomas."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-lg">
                      <span className="text-primary-light mt-1">✅</span>
                      <span className="text-text-muted leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="bg-accent/5 p-12 rounded-[3rem] border border-accent/10 h-full">
                <h3 className="text-3xl font-serif italic mb-8 flex items-center gap-3 text-accent">
                  <CircleX className="w-8 h-8" /> Não é para você se:
                </h3>
                <ul className="space-y-6">
                  {[
                    "Procura uma \"fórmula mágica\" ou resultados imediatos sem esforço.",
                    "Quer apenas reclamar dos outros sem olhar para sua própria postura.",
                    "Acredita que terapia é \"frescura\" ou gasto desnecessário."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-lg">
                      <span className="text-accent mt-1">❌</span>
                      <span className="text-text-muted leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 px-6 bg-bg-surface overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <Reveal>
              <h2 className="text-5xl md:text-7xl italic mb-8 uppercase tracking-widest text-primary/10 font-bold opacity-30">Travessia</h2>
              <h3 className="text-4xl md:text-5xl -mt-16 font-serif">Como iniciar sua travessia?</h3>
            </Reveal>
          </div>

          <div className="space-y-12">
            {[
              { step: "✓", title: "Passo 1: Aplicação Recebida", desc: "O seu formulário já foi enviado e analisado. Você deu o primeiro passo fundamental para sair do ciclo de exaustão.", status: 'done' },
              { step: "02", title: "Passo 2: Agendamento da Sessão de Clareza", desc: "Este é o seu momento atual. Agora, você deve agendar nossa conversa inicial para alinharmos seu diagnóstico.", status: 'active' },
              { step: "03", title: "Passo 3: O Processo Terapêutico", desc: "Iniciaremos os encontros profundos, focados em restaurar sua saúde emocional com total sigilo.", status: 'upcoming' }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.2}>
                <div className={`
                  flex items-start gap-8 p-10 rounded-[2.5rem] border
                  ${item.status === 'active' ? 'bg-primary text-white shadow-2xl scale-105 border-transparent' : 'bg-white border-primary/5'}
                `}>
                  <div className={`
                    w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 font-serif text-3xl
                    ${item.status === 'active' ? 'bg-white text-primary' : 'bg-bg-surface shadow-sm text-accent'}
                  `}>
                    {item.step}
                  </div>
                  <div>
                    <h4 className={`text-2xl mb-2 font-serif ${item.status === 'active' ? 'text-white' : 'text-primary'}`}>{item.title}</h4>
                    <p className={item.status === 'active' ? 'text-white/80' : 'text-text-muted'}>{item.desc}</p>
                    {item.status === 'active' && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6">
                        <PremiumButton href="https://wa.me/557791080704" variant="secondary" className="!px-6 !py-3 !text-sm">
                          AGENDAR AGORA
                        </PremiumButton>
                      </motion.div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-5xl md:text-7xl mb-24 italic text-center font-serif text-primary">Mulheres que <span className="text-accent italic">reencontraram o próprio eixo.</span></h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Eu finalmente entendi que não precisava carregar o mundo nas costas. A terapia me trouxe uma paz que eu não sentia há anos.",
              "Descobrir o meu lugar na minha própria família mudou tudo. Hoje me sinto leve, sem aquela culpa constante que me consumia.",
              "A Renata me ajudou a atravessar o momento mais escuro da minha vida. O processo não é fácil, mas a leveza que vem depois vale cada lágrima."
            ].map((text, i) => (
              <Reveal key={i} delay={0.2 + (i * 0.2)}>
                <div className="bg-bg-surface p-12 rounded-[3rem] border border-primary/5 h-full relative group">
                  <div className="text-accent text-6xl font-serif absolute top-4 left-6 opacity-20 transition-opacity group-hover:opacity-40">"</div>
                  <p className="text-xl text-text-muted italic relative z-10 mt-6 leading-relaxed">"{text}"</p>
                  <div className="mt-10 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-serif text-xl">
                      {String.fromCharCode(65 + i)}
                    </div>
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-text-muted">Paciente Anônima</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-6 lg:px-12 bg-bg-surface">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-5xl md:text-7xl text-center mb-16 italic font-serif">Ainda tem <span className="text-primary italic">dúvidas?</span></h2>
          </Reveal>
          <div className="space-y-4">
            {[
              {
                q: "A terapia é 100% online? Funciona mesmo?",
                a: "Sim. A conexão humana e energética independe da presença física. O formato online permite que você esteja no conforto e segurança do seu lar, otimizando seu tempo."
              },
              {
                q: "Quanto tempo dura o tratamento?",
                a: "Cada história é única. Não vendo pacotes fechados com promessas de \"cura em 10 sessões\". Respeitaremos o tempo da sua alma. Pode durar meses ou ser um acompanhamento contínuo."
              },
              {
                q: "Eu preciso \"acreditar\" em Constelação/Sistêmica?",
                a: "Não é uma crença religiosa, é uma postura diante da vida. Você só precisa estar aberta a olhar para sua história familiar com novos olhos."
              },
              {
                q: "Aceita convênio?",
                a: "Não. Meu atendimento é particular para garantir a total liberdade e profundidade do processo, sem as limitações de tempo e burocracia dos planos."
              }
            ].map((faq, i) => (
              <PremiumFAQItem key={i} question={faq.q} answer={faq.a} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Final CTA */}
      <section className="py-40 px-6 bg-primary text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <h2 className="text-6xl md:text-9xl font-serif italic mb-12 leading-none">A travessia começa <span className="text-accent underline decoration-accent/20">aqui.</span></h2>
            <p className="text-2xl text-white/70 mb-16 leading-relaxed max-w-2xl mx-auto">Não espere seu corpo decidir por você. Escolha a sua cura consciente enquanto há caminho.</p>
            <PremiumButton href="https://wa.me/557791080704" className="!bg-white !text-primary hover:!bg-accent hover:!text-white">
              AGENDAR MINHA CONVERSA COM A RENATA
            </PremiumButton>
          </Reveal>
        </div>
      </section>

      <footer className="bg-primary pt-20 pb-10 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-2xl font-serif font-bold tracking-tight text-white italic">RGA.</div>
          <div className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} Renata Gusmão Alves. Todos os direitos reservados.
          </div>
          <div className="flex gap-6">
            <Users className="w-5 h-5 text-white/20" />
          </div>
        </div>
      </footer>

    </div>
  );
}

/* Premium FAQ Item */
const PremiumFAQItem: React.FC<{ question: string; answer: string; delay: number }> = ({ question, answer, delay }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Reveal delay={delay}>
      <div className={`p-8 rounded-[2rem] border transition-all duration-500 ${isOpen ? 'bg-white shadow-premium border-primary/10' : 'bg-transparent border-primary/5 hover:border-primary/20'}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left flex items-center justify-between"
        >
          <span className="text-xl font-serif font-medium text-primary leading-tight">{question}</span>
          <div className={`w-8 h-8 rounded-full border border-primary/10 flex items-center justify-center transition-transform duration-500 ${isOpen ? 'rotate-180 bg-primary text-white' : ''}`}>
            <ChevronDown className="w-4 h-4" />
          </div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="pt-6 text-text-muted leading-relaxed font-sans">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}
