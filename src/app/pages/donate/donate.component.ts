import { Component, OnInit } from '@angular/core';
import { OrganizationListService } from 'src/app/services/organization-list.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  organizationList = this.organizationListService.getOrganizationList();

  constructor(private organizationListService: OrganizationListService) { }

  ngOnInit() {
  }

}
