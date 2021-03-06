import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { WhatWeDoModule } from './what-we-do/what-we-do.module';
import { StoriesModule } from './stories/stories.module';
import { EventsModule } from './events/events.module';
import { FrequentlyAskedQuestionsModule } from './frequently-asked-questions/frequently-asked-questions.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    AdminModule,
    WhatWeDoModule,
    StoriesModule,
    EventsModule,
    FrequentlyAskedQuestionsModule
  ],
  declarations: []
})
export class FeaturesModule { }
