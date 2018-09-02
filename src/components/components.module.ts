import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BubbleComponent } from './bubble/bubble';
import { BubbleContainerComponent } from './bubble-container/bubble-container';
@NgModule({
    declarations: [
            BubbleComponent,
            BubbleContainerComponent
            ],
    
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        IonicModule
        ],

    exports: [
        BubbleComponent,
        BubbleContainerComponent
        ]
    
    })


export class ComponentsModule {}
