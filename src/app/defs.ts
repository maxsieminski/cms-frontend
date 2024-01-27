import { cms_types } from "./types";


export module cms_defs {
    export const backendHost = process.env['BACKEND_HOST'] ?? 'localhost';
    export const backendPort =  process.env['BACKEND_PORT'] ?? 3000;
    export const backendUrl = `https://${backendHost}`;
    export const images = [
        "assets/art/favicon.png",
        "assets/art/hero1.webp",
        "assets/art/hero2.webp",
        "assets/art/hero3.webp",
        "assets/art/overlay.webp", 
        "assets/art/team.webp",
        "assets/art/work1.webp", 
        "assets/art/work2.webp", 
        "assets/art/work3.webp"
    ];

    export module objects {
        export const defaultParagraph: cms_types.frontend.ParagraphObject = {
            position: 0,
            header: "",
            text: "",
            image: "",
            href: "",
            href_text: ""
        };

        export const defaultComponent: cms_types.frontend.ComponentObject = {
            category: "",
            header: "",
            image: "",
            href: "",
            href_text: "",
        };

        export const defaultSection: cms_types.frontend.SectionObject = {
            header: "",
            position: 0,
        };

        export const defaultPage: cms_types.frontend.PageObject = {
            title: "",
            path: ""
        };

        export const defaultConfig: cms_types.api.ConfigResponse = {
            title: "Title",
            description: "",
            phone: "",
            email: "",
            highlight_text: "No text",
            id: 1, 
            address: "No address"
        }
    }

    export const defaultSectionConfig: cms_types.frontend.SectionObject = {
        position: 0,
        is_active: true,
        header: 'error',
        changed_date: new Date(),
        components: []
    };

    export const defaultPageConfig: cms_types.frontend.PageObject = {
        path: '/',
        sections: [defaultSectionConfig],
        changed_date: new Date(),
        author: ''
    };

    export const defaultParagraphResponse: cms_types.api.ParagraphResponse = {
        title: '',
        header: '',
        text: '',
        image: '',
        href: '',
        href_text: ''
    };

    export const defaultComponentResponse: cms_types.api.ComponentResponse = {
        header: '',
        category: '',
        position: 0,
        is_active: 0,
        changed_date: undefined,
        paragraphs: []
    };

    export const defaultSectionResponse: cms_types.api.SectionResponse = {
        header: '',
        is_active: false,
        position: 0,
        changed_date: new Date(),
        components: [],
    };

    export const defaultPageResponse: cms_types.api.PageResponse = {
        title: '',
        author: '',
        path: '',
        changed_date: new Date(),
        sections: [],
        authors: ''
    }

    export const defaultInquiryResponse: cms_types.api.InuqryResponse = {
        email: '',
        name: '',
        category: '',
        content: ''
    }

    export const defaultAdminCardConfig: cms_types.frontend.admin.CardConfig = {
        header: "error",
        description: "",
        editable: true,
        link1: "",
        link2: "",
        link1_text: "OK",
        link2_text: "NO",
    }

    export const defaultCreateNewCardConfig: cms_types.frontend.admin.CardConfig = {
        header: "Create New",
        description: "Create new element",
        editable: false,
        link1: "new",
        link2: "",
        link1_text: "Create",
        link2_text: ""
    }

    export const defaultSaveCardConfig: cms_types.frontend.admin.CardConfig = {
        header: "Save",
        description: "Save changes",
        editable: false,
        link1: "save",
        link2: "",
        link1_text: "Save",
        link2_text: "",
        color: 'blue'
    }
}