import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceComponent } from './pages/service/service.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AdminHomeComponent } from './pages/admin/home/home.component';
import { AdminComponentsComponent } from './pages/admin/components/components.component';
import { AdminIndexComponent } from './pages/admin/index/index.component';
import { AdminPagesComponent } from './pages/admin/pages/pages.component';
import { AdminSectionsComponent } from './pages/admin/sections/sections.component';
import { AdminParagraphsComponent } from './pages/admin/paragraphs/paragraphs.component';
import { AdminEditorComponent } from './pages/admin/editor/editor.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InquriesComponent } from './pages/admin/inquries/inquries.component';

export const routes: Routes = [
    { path: 'home', component: IndexComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'industries', component: IndustriesComponent },
    { path: 'admin', component: AdminIndexComponent, children: [
        { path: '', component: AdminHomeComponent, title: 'Admin' },
        { path: 'inquries', component: InquriesComponent, title: 'Admin: Inquiries' },
        { path: 'inquries/:inquryId', component: AdminEditorComponent },
        { path: 'pages', component: AdminPagesComponent, title: 'Admin: Pages' },
        { path: 'pages/new', component: AdminEditorComponent, title: 'Admin: New Page' },
        { path: 'pages/:pageId/edit', component: AdminEditorComponent, title: 'Admin: Edit Pages' },
        { path: 'pages/:pageId/sections', component: AdminSectionsComponent, title: 'Admin: Sections'},
        { path: 'pages/:pageId/sections/new', component: AdminEditorComponent, title: 'Admin: New Section'},
        { path: 'pages/:pageId/sections/:sectionId/edit', component: AdminEditorComponent, title: 'Admin: New Section' },
        { path: 'pages/:pageId/sections/:sectionId/components', component: AdminComponentsComponent, title: 'Admin: Components' },
        { path: 'pages/:pageId/sections/:sectionId/components/new', component: AdminEditorComponent, title: 'Admin: New Component' },
        { path: 'pages/:pageId/sections/:sectionId/components/:componentId/edit', component: AdminEditorComponent, title: 'Admin: Edit Components' },
        { path: 'pages/:pageId/sections/:sectionId/components/:componentId/paragraphs', component: AdminParagraphsComponent, title: 'Admin: Paragraphs' },
        { path: 'pages/:pageId/sections/:sectionId/components/:componentId/paragraphs/new', component: AdminEditorComponent, title: 'Admin: New Paragraph' },
        { path: 'pages/:pageId/sections/:sectionId/components/:componentId/paragraphs/:paragraphId/edit', component: AdminEditorComponent, title: 'Admin: Edit Paragraphs' },
        { path: '**', redirectTo: '/'}
    ]},
    { path: '**', redirectTo: '/home'}
];