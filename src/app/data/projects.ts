import Project from '../components/models/project';
export class Projects {
  static data: Project[] = [
    {
      name: 'Pipelne Mass Updater',
      technologies: 'NODE, REACT, REDUX, TYPESCRIPT, WEBPACK',
      description: 'This app provides an easy way to update pipeline information to ensure an accurate and up to date pipeline to drive analytics and operational workflows. This is a platform to enable breeders to upload their populations to early pipelines and track the roadmap changes'
    },
    {
      name: 'IT TOOLBOX',
      technologies: 'NODE, ANGULAR PWA, TYPESCRIPT, WEBPACK, JAVA, SPRING BOOT, REST, HIBERNATE, POSTGRESQL',
      description: 'This app provides an easy way to access all the apps in Breeding IT. There is an option to add the new apps which is managed by the our solutions team. Main advantage of this app is the user need not to bookmark/save all the apps URLs'
    },
    {
      name: 'Incubator',
      technologies: 'NODE, ANGULAR, TYPESCRIPT, WEBPACK, EXPRESS, KARMA, JASMINE',
      description: 'Incubator is a total operation management system designed to allow operational teams to assign, execute, track and report on the progress of material through all the processes executed on site. It provides flexibility to create and update processes and also the dashboard to monitor the progress of operations'
    }
  ];
}