function showCurriculumVitae() {

  const person = {
    name: 'Gesiel Rosa',
    date_of_birth: '23/08/1990',
    isWorking: true,
    from: 'Canelinha, Santa Catarina',
    primary_email: 'gesielr@gmail.com',
    secondary_email: 'me@gesiel.com',
    site: 'http://www.gesiel.com/',
    gitHub: 'https://github.com/gesielrosa',
    linkedIn: 'https://www.linkedin.com/in/gesielrosa/',
    skill: {
      hard: [
        'Angular',
        'Ionic',
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'ElectronJS',
        'Flutter'
      ],
      soft: [
        'Trabalho em equipe',
        'Colaboração',
        'Comunicação'
      ]
    },
    academics: [
      {
        name: 'Bacharel em Sistemas de Informação, Tecnologia da Informação',
        where: 'UNIASSELVI - Brusque',
        type: 'Graduação'
      }
    ],
    certifications: [
      /**
       * Read more:
       * https://www.linkedin.com/in/gesielrosa/#/certifications-section
       */
    ],
    experiences: [
      {
        name: 'Rhizom Foundation',
        position: 'Desenvolvedor Angular',
        when: '01/2020 até agora'
      },
      {
        name: 'Eltok Aplicativos',
        position: 'Desenvolvedor Ionic / Angular',
        when: '02/2018 até 12/2019',
        projects: [
          'Eltok AFV: Aplicativo de força de vendas para o setor calçadista/têxtil (mobile/desktop)',
          'Eltok Delivery: Aplicativo de entregas e gerenciador (mobile/desktop)',
          'Senda Timeline: Sistema de acompanhamento de linha de produção industrial',
          'Senda Suporte: Sistema de gestão de atendimento',
          'Liraa: Aplicativo de controle de visitação no combate a dengue',
          'Inspiramais APP: Aplicativo das feiras realizadas pela Inspiramais'
        ]
      },
      {
        name: 'Materiais de Construção São João LTDA - ME',
        position: 'Gerente de compras e vendas',
        when: '10/2007 até 01/2018'
      },
      {
        name: 'Prefeitura Municipal de Canelinha',
        position: 'Estagiário de gestão',
        when: '01/2006 até 12/2006'
      }
    ]
  };

  console.info(person);
  console.info(`
      Desenvolvedor front-end com experiência em projetos de aplicações híbridas mobile e desktop.
      Sempre em busca de inovações que auxiliem na evolução dos projetos em que participa.
      Também atuou no comércio por dez anos na gestão de comprar e vendas.
  `);

}
