/* ============================================================
   Pedro Spadotto Studio — i18n (PT / EN)
   Usage: add data-i18n="key" to any element to translate it.
          add data-i18n-placeholder="key" for input placeholders.
          add data-i18n-option="key" for <option> text.
          add data-lang="pt" / data-lang="en" to toggle buttons.
   ============================================================ */
(function () {
  /* ── Translations ─────────────────────────────────────── */
  var T = {
    pt: {
      /* NAV */
      'nav.home':    'Home',
      'nav.sobre':   'Sobre',
      'nav.contato': 'Contato',

      /* FOOTER */
      'footer.privacy': 'Políticas e Privacidade',
      'footer.faq':     'FAQ',
      'footer.copy':    'PEDRO SPADOTTO STUDIO © 2026',

      /* HOMEPAGE — hero */
      'hero.title': 'Simplicidade que ressoa, design que perdura.',
      'hero.sub':   'Com anos de experiência, venho elevando o posicionamento e a presença dos meus clientes por meio de sistemas de design que os tornam únicos e memoráveis.',
      'hero.cta':   'Vamos conversar!',

      /* HOMEPAGE — sections */
      'section.brand_cases':   'Brand Cases',
      'section.social_content':'Social Content',
      'btn.see_all':           'Veja todos os projetos',
      'social.see_all_card':   'Ver todos<br>os projetos →',

      /* HOMEPAGE — about strip */
      'about.heading': 'Quem é Pedro Spadotto?',
      'about.text':    'Com mais de cinco anos de experiência na área de design, atuo como um potencializador de marcas, ajudando a transformá-las em presenças vivas, autênticas e com alto potencial de crescimento. Tive a honra de desenvolver e contribuir em inúmeros projetos. Desde identidades de marca para empreendedores independentes até grandes lançamentos imobiliários. Meu principal objetivo é dar vida às ideias, aquelas que antes existiam apenas no papel. Busco criar marcas vivas, que se comuniquem com seu público de forma direta e impactante.',

      /* HOMEPAGE — skills */
      'skills.label':  'My Skills',
      'skill1.h3':     'Logo design',
      'skill1.p':      'O processo de criação de um logotipo é minucioso e centrado na sua identidade única. Cada elemento é cuidadosamente pensado para refletir a essência da sua marca e garantir uma presença forte e sólida. Do conceito à finalização, trabalhamos para criar um símbolo que não apenas represente o seu negócio, mas também transmita confiança e gere reconhecimento imediato.',
      'skill2.h3':     'Identidade Visual',
      'skill2.p':      'Nosso objetivo é criar uma identidade visual coesa que comunique a mensagem da sua marca de forma consistente em todos os pontos de contato. Combinamos estrategicamente cores, tipografia e símbolos para construir um sistema visual completo que fortalece a presença da marca e facilita o reconhecimento e a conexão com o público.',
      'skill3.h3':     'Análise de Marca',
      'skill3.p':      'Nossa abordagem minuciosa nos permite mergulhar profundamente na essência da sua marca, revelando insights valiosos e oportunidades de crescimento. Vamos além da superfície para compreender o real potencial da sua identidade de marca e como ela se conecta com o seu público-alvo.',
      'skill_cta.h3':  'Vamos conversar?',
      'skill_cta.p':   'Me envie um olá para que possamos explorar juntos como desbloquear todo o potencial da sua marca.',
      'skill_cta.btn': 'Entre em contato!',

      /* HOMEPAGE — project card categories */
      'proj.cat.id_visual_2025': 'Identidade Visual · 2025',
      'proj.cat.id_visual_2024': 'Identidade Visual · 2024',
      'proj.cat.id_visual':      'Identidade Visual',

      /* ABOUT PAGE */
      'about.eyebrow':      'Sobre',
      'about.h2':           'Designer gráfico com foco em branding e identidade visual',
      'about.p1':           'Olá, sou Pedro Spadotto, designer gráfico com especialização em branding, identidade visual e conteúdo estratégico para marcas. Atuo desde o diagnóstico inicial até a entrega do sistema completo de marca — do naming ao brand book, do logotipo ao lançamento.',
      'about.p2':           'Meu trabalho une rigor técnico e sensibilidade estética para criar marcas que comunicam com clareza, constroem percepção de valor e resistem ao tempo. Cada projeto começa com uma escuta ativa da essência do cliente para transformá-la em uma linguagem visual autêntica e consistente.',
      'about.p3':           'Trabalho com marcas de diferentes segmentos — do mercado imobiliário ao alimentício, de startups a escritórios de arquitetura — com projetos realizados tanto no Brasil quanto internacionalmente.',
      'about.p4':           'Faço parte da equipe da <strong>One G</strong>, agência parceira onde atuo como designer gráfico em projetos de grande porte, colaborando com diretores criativos e outros designers.',
      'about.contact_link': 'Vamos conversar →',
      'process.label':      'Processo',
      'process.01.title':   '01 — Descoberta',
      'process.01.desc':    'Imersão na essência da marca, público, mercado e concorrência',
      'process.01.year':    'Briefing',
      'process.02.title':   '02 — Estratégia',
      'process.02.desc':    'Posicionamento, naming, arquitetura e plataforma de marca',
      'process.02.year':    'Conceito',
      'process.03.title':   '03 — Design',
      'process.03.desc':    'Criação do sistema visual: símbolo, tipografia, paleta, grafismos',
      'process.03.year':    'Criação',
      'process.04.title':   '04 — Validação',
      'process.04.desc':    'Apresentação, ajustes e alinhamento com o cliente',
      'process.04.year':    'Revisão',
      'process.05.title':   '05 — Entrega',
      'process.05.desc':    'Brand book completo e arquivos finais em todos os formatos',
      'process.05.year':    'Finalização',
      'specialties.label':  'Especialidades',
      'spec1.h3':  'Identidade Visual',
      'spec1.p':   'Criação de sistemas de marca completos e aplicáveis.',
      'spec2.h3':  'Branding Estratégico',
      'spec2.p':   'Naming, posicionamento e arquitetura de marca.',
      'spec3.h3':  'Brand Book',
      'spec3.p':   'Documentação e diretrizes do sistema visual.',
      'spec4.h3':  'Social Content',
      'spec4.p':   'Criação de conteúdo visual para redes sociais.',
      'spec5.h3':  'Lançamento Imobiliário',
      'spec5.p':   'Identidade e materiais para lançamentos de empreendimentos.',
      'spec6.h3':  'Direção de Arte',
      'spec6.p':   'Curadoria visual e direção criativa de projetos.',

      /* CONTACT PAGE */
      'contact.eyebrow':      'Contato',
      'contact.h1':           'Vamos criar algo incrível juntos?',
      'contact.sub':          'Estou disponível para novos projetos de branding, identidade visual e conteúdo estratégico. Me conte sobre a sua marca.',
      'contact.info.h2':      'Fale comigo',
      'contact.email.dt':     'E-mail',
      'contact.whatsapp.dt':  'WhatsApp',
      'contact.whatsapp.dd':  'Enviar mensagem',
      'contact.location.dt':  'Localização',
      'contact.location.dd':  'Brasil — projetos nacionais e internacionais',
      'contact.form.h2':      'Envie uma mensagem',
      'contact.wa.btn':       'Falar no WhatsApp',
      'form.name.label':      'Nome',
      'form.name.ph':         'Seu nome',
      'form.email.label':     'E-mail',
      'form.email.ph':        'seu@email.com',
      'form.company.label':   'Empresa / Marca',
      'form.company.ph':      'Nome da sua empresa',
      'form.service.label':   'Serviço de interesse',
      'form.service.opt0':    'Selecione...',
      'form.service.opt1':    'Identidade Visual',
      'form.service.opt2':    'Branding Estratégico',
      'form.service.opt3':    'Brand Book',
      'form.service.opt4':    'Social Content',
      'form.service.opt5':    'Lançamento de Marca',
      'form.service.opt6':    'Outro',
      'form.msg.label':       'Mensagem',
      'form.msg.ph':          'Conte um pouco sobre o seu projeto...',
      'form.btn':             'Enviar mensagem →',

      /* SOCIAL CONTENT PAGE */
      'social_page.eyebrow': 'Social Content',
      'social_page.h1':      'Conteúdo para redes sociais',
      'social_page.sub':     'Criação de conteúdo visual estratégico para Instagram e outras redes. Da concepção ao copy, cada post construído para engajar e comunicar.',
      'social.cat.sterilow':  'Saúde · 2024',
      'social.cat.medcontrol':'Saúde · 2024',
      'social.cat.performa':  'Home Improvement · 2024',
      'social.cat.reserva':   'Imobiliário · 2024',
      'social.cat.demartino': 'Contabilidade · 2025',

      /* PROJECTS LIST PAGE */
      'projects.h1':            'Projetos',
      'projects.filter.all':    'Todos',
      'projects.filter.brand':  'Brand Cases',
      'projects.filter.social': 'Social Content',

      /* PROJECT CTA (all project pages) */
      'cta.title': 'Fico feliz que meu trabalho tenha chamado sua atenção!',
      'cta.sub1':  'Sinta-se à vontade para entrar em contato pelo WhatsApp abaixo.',
      'cta.sub2':  'E se ainda tiver alguma dúvida, não hesite em falar comigo.',

      /* CRONOGRAMA */
      'crono.h1':              'Cronograma',
      'crono.sub':             'Planejamento de conteúdo por marca e período.',
      'crono.section.feed':    'Feed',
      'crono.section.stories': 'Stories',
      'crono.tag.educativo':   'Educativo',
      'crono.tag.comemorativo':'Comemorativo',
      'crono.tag.produto':     'Produto',
      'crono.tag.institucional':'Institucional',
      'crono.tag.comercial':   'Comercial',
    },

    en: {
      /* NAV */
      'nav.home':    'Home',
      'nav.sobre':   'About',
      'nav.contato': 'Contact',

      /* FOOTER */
      'footer.privacy': 'Privacy Policy',
      'footer.faq':     'FAQ',
      'footer.copy':    'PEDRO SPADOTTO STUDIO © 2026',

      /* HOMEPAGE — hero */
      'hero.title': 'Simplicity that resonates, design that endures.',
      'hero.sub':   'With years of experience, I have been elevating my clients’ positioning and presence through design systems that make them unique and memorable.',
      'hero.cta':   'Let’s talk!',

      /* HOMEPAGE — sections */
      'section.brand_cases':   'Brand Cases',
      'section.social_content':'Social Content',
      'btn.see_all':           'See all projects',
      'social.see_all_card':   'See all<br>projects →',

      /* HOMEPAGE — about strip */
      'about.heading': 'Who is Pedro Spadotto?',
      'about.text':    'With over five years of experience in design, I work as a brand amplifier, helping transform brands into vibrant, authentic presences with high growth potential. I have had the honor of developing and contributing to numerous projects — from brand identities for independent entrepreneurs to major real estate launches. My main goal is to bring ideas to life, those that once existed only on paper. I strive to create living brands that communicate with their audience directly and powerfully.',

      /* HOMEPAGE — skills */
      'skills.label':  'My Skills',
      'skill1.h3':     'Logo Design',
      'skill1.p':      'The logo creation process is meticulous and centered on your unique identity. Every element is carefully designed to reflect the essence of your brand and ensure a strong, solid presence. From concept to completion, we work to create a symbol that not only represents your business, but also conveys trust and generates immediate recognition.',
      'skill2.h3':     'Visual Identity',
      'skill2.p':      'Our goal is to create a cohesive visual identity that communicates your brand’s message consistently across all touchpoints. We strategically combine colors, typography and symbols to build a complete visual system that strengthens brand presence and facilitates recognition and connection with your audience.',
      'skill3.h3':     'Brand Analysis',
      'skill3.p':      'Our thorough approach allows us to dive deep into the essence of your brand, uncovering valuable insights and growth opportunities. We go beyond the surface to understand the true potential of your brand identity and how it connects with your target audience.',
      'skill_cta.h3':  'Let’s talk?',
      'skill_cta.p':   'Send me a hello so we can explore together how to unlock the full potential of your brand.',
      'skill_cta.btn': 'Get in touch!',

      /* HOMEPAGE — project card categories */
      'proj.cat.id_visual_2025': 'Visual Identity · 2025',
      'proj.cat.id_visual_2024': 'Visual Identity · 2024',
      'proj.cat.id_visual':      'Visual Identity',

      /* ABOUT PAGE */
      'about.eyebrow':      'About',
      'about.h2':           'Graphic designer specializing in branding and visual identity',
      'about.p1':           'Hello, I’m Pedro Spadotto, a graphic designer specializing in branding, visual identity and strategic content for brands. I work from the initial diagnosis to the delivery of the complete brand system — from naming to brand book, from logo to launch.',
      'about.p2':           'My work combines technical rigor and aesthetic sensibility to create brands that communicate clearly, build value perception and stand the test of time. Each project begins with active listening to the client’s essence to transform it into an authentic and consistent visual language.',
      'about.p3':           'I work with brands across different segments — from real estate to food, from startups to architecture firms — with projects carried out both in Brazil and internationally.',
      'about.p4':           'I am part of the <strong>One G</strong> team, a partner agency where I work as a graphic designer on large-scale projects, collaborating with creative directors and other designers.',
      'about.contact_link': 'Let’s talk →',
      'process.label':      'Process',
      'process.01.title':   '01 — Discovery',
      'process.01.desc':    'Immersion in the brand’s essence, audience, market and competition',
      'process.01.year':    'Briefing',
      'process.02.title':   '02 — Strategy',
      'process.02.desc':    'Positioning, naming, architecture and brand platform',
      'process.02.year':    'Concept',
      'process.03.title':   '03 — Design',
      'process.03.desc':    'Creation of the visual system: symbol, typography, palette, graphic elements',
      'process.03.year':    'Creation',
      'process.04.title':   '04 — Validation',
      'process.04.desc':    'Presentation, adjustments and alignment with the client',
      'process.04.year':    'Review',
      'process.05.title':   '05 — Delivery',
      'process.05.desc':    'Complete brand book and final files in all formats',
      'process.05.year':    'Finalization',
      'specialties.label':  'Specialties',
      'spec1.h3':  'Visual Identity',
      'spec1.p':   'Creation of complete and applicable brand systems.',
      'spec2.h3':  'Strategic Branding',
      'spec2.p':   'Naming, positioning and brand architecture.',
      'spec3.h3':  'Brand Book',
      'spec3.p':   'Documentation and guidelines for the visual system.',
      'spec4.h3':  'Social Content',
      'spec4.p':   'Visual content creation for social media.',
      'spec5.h3':  'Real Estate Launch',
      'spec5.p':   'Identity and materials for real estate developments.',
      'spec6.h3':  'Art Direction',
      'spec6.p':   'Visual curation and creative direction of projects.',

      /* CONTACT PAGE */
      'contact.eyebrow':      'Contact',
      'contact.h1':           'Let’s create something incredible together?',
      'contact.sub':          'I am available for new branding, visual identity and strategic content projects. Tell me about your brand.',
      'contact.info.h2':      'Get in touch',
      'contact.email.dt':     'E-mail',
      'contact.whatsapp.dt':  'WhatsApp',
      'contact.whatsapp.dd':  'Send message',
      'contact.location.dt':  'Location',
      'contact.location.dd':  'Brazil — national and international projects',
      'contact.form.h2':      'Send a message',
      'contact.wa.btn':       'Chat on WhatsApp',
      'form.name.label':      'Name',
      'form.name.ph':         'Your name',
      'form.email.label':     'E-mail',
      'form.email.ph':        'your@email.com',
      'form.company.label':   'Company / Brand',
      'form.company.ph':      'Your company name',
      'form.service.label':   'Service of interest',
      'form.service.opt0':    'Select...',
      'form.service.opt1':    'Visual Identity',
      'form.service.opt2':    'Strategic Branding',
      'form.service.opt3':    'Brand Book',
      'form.service.opt4':    'Social Content',
      'form.service.opt5':    'Brand Launch',
      'form.service.opt6':    'Other',
      'form.msg.label':       'Message',
      'form.msg.ph':          'Tell me a bit about your project...',
      'form.btn':             'Send message →',

      /* SOCIAL CONTENT PAGE */
      'social_page.eyebrow': 'Social Content',
      'social_page.h1':      'Social media content',
      'social_page.sub':     'Creation of strategic visual content for Instagram and other networks. From concept to copy, each post built to engage and communicate.',
      'social.cat.sterilow':  'Health · 2024',
      'social.cat.medcontrol':'Health · 2024',
      'social.cat.performa':  'Home Improvement · 2024',
      'social.cat.reserva':   'Real Estate · 2024',
      'social.cat.demartino': 'Accounting · 2025',

      /* PROJECTS LIST PAGE */
      'projects.h1':            'Projects',
      'projects.filter.all':    'All',
      'projects.filter.brand':  'Brand Cases',
      'projects.filter.social': 'Social Content',

      /* PROJECT CTA (all project pages) */
      'cta.title': 'I’m glad my work caught your attention!',
      'cta.sub1':  'Feel free to reach out via WhatsApp below.',
      'cta.sub2':  'And if you have any questions, don’t hesitate to reach out.',

      /* CRONOGRAMA */
      'crono.h1':              'Schedule',
      'crono.sub':             'Content planning by brand and period.',
      'crono.section.feed':    'Feed',
      'crono.section.stories': 'Stories',
      'crono.tag.educativo':   'Educational',
      'crono.tag.comemorativo':'Commemorative',
      'crono.tag.produto':     'Product',
      'crono.tag.institucional':'Institutional',
      'crono.tag.comercial':   'Commercial',
    }
  };

  /* ── Core apply function ───────────────────────────────── */
  function applyLang(lang) {
    if (!T[lang]) lang = 'pt';
    var t = T[lang];

    /* html[lang] */
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';

    /* innerHTML replacements */
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    /* placeholder */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    /* select option text */
    document.querySelectorAll('[data-i18n-option]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-option');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    /* active state on lang buttons */
    document.querySelectorAll('[data-lang]').forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    /* persist */
    try { localStorage.setItem('lang', lang); } catch(e) {}
  }

  /* ── Init ──────────────────────────────────────────────── */
  function init() {
    var lang = 'pt';
    try { lang = localStorage.getItem('lang') || 'pt'; } catch(e) {}

    applyLang(lang);

    document.querySelectorAll('[data-lang]').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        applyLang(this.getAttribute('data-lang'));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
