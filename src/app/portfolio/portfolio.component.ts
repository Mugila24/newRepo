import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects= {} as Project[];

  constructor(private projectService : ProjectsService){
  }

  ngOnInit(): void{
    this.projects = this.projectService.getProjects();
  }

}
