import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
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
import { LoginComponent } from './pages/admin/login/login.component';
import { adminGuard } from './services/admin.guard';

export const routes: Routes = [
    { path: 'home', component: IndexComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'industries', component: IndustriesComponent },
    { path: 'login', component: LoginComponent, title: 'Admin: Login' },
    { path: 'admin', component: AdminIndexComponent, canActivate: [adminGuard], children: [
        { path: '', component: AdminHomeComponent, canActivate: [adminGuard], title: 'Admin' },
        { path: 'config', component: AdminEditorComponent, canActivate: [adminGuard], title: 'Admin: Config' },
        { path: 'inquries', component: InquriesComponent, canActivate: [adminGuard], title: 'Admin: Inquiries' },
        { path: 'inquries/:inquryId', canActivate: [adminGuard], component: AdminEditorComponent },
        { path: 'pages', component: AdminPagesComponent, canActivate: [adminGuard], title: 'Admin: Pages' },
        { path: 'pages/new', component: AdminEditorComponent, canActivate: [adminGuard], title: 'Admin: New Page' },
        { path: 'pages/:pageId/edit', component: AdminEditorComponent, canActivate: [adminGuard], title: 'Admin: Edit Pages' },
        { path: 'pages/:pageId/sections', component: AdminSectionsComponent, canActivate: [adminGuard], title: 'Admin: Sections'},
        { path: 'pages/:pageId/sections/new', component: AdminEditorComponent, canActivate: [adminGuard], title: 'Admin: New Section'},
        { path: 'pages/:pageId/sections/:sectionId/edit', component: AdminEditorComponent, canActivate: [adminGuard], title: 'Admin: New Section' },
        { path: 'pages/:pageId/sections/:sectionId/components', component: AdminComponentsComponent, canActivate: [adminGuard], title: 'Admin: Components' },
        { path: 'pages/:pageId/sections/:sectionId/components/new', component: AdminEditorComponent, canActivate: [adminGuard], title: 'Admin: New Component' },
        { path: 'pages/:pageId/sections/:sectionId/components/:componentId/edit', component: AdminEditorComponent, canActivate: [adminGuard], title: 'Admin: Edit Components' },
        { path: 'pages/:pageId/sections/:sectionId/components/:componentId/paragraphs', component: AdminParagraphsComponent, canActivate: [adminGuard], title: 'Admin: Paragraphs' },
        { path: 'pages/:pageId/sections/:sectionId/components/:componentId/paragraphs/new', component: AdminEditorComponent, canActivate: [adminGuard], title: 'Admin: New Paragraph' },
        { path: 'pages/:pageId/sections/:sectionId/components/:componentId/paragraphs/:paragraphId/edit', component: AdminEditorComponent, canActivate: [adminGuard], title: 'Admin: Edit Paragraphs' },
        { path: '**', redirectTo: ''}
    ]},
    { path: '**', redirectTo: '/home'}
];