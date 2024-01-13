export module cms_types {
    export module frontend {
        export interface ModelCommonObject { };
    
        export interface ParagraphObject extends ModelCommonObject {
            component_id?: number;
            position?: number;
            header?: string;
            text?: string;
            image?: string;
            href?: string;
            href_text?: string;
        };
    
        export interface ComponentObject extends ModelCommonObject {
            category: string;
            header?: string;
            image?: string;
            href?: string;
            href_text?: string;
            paragraphs?: ParagraphObject[];
        };
    
        export interface SectionObject extends ModelCommonObject {
            header: string;
            position: number;
            is_active?: boolean;
            changed_date?: Date;
            components?: ComponentObject[];
        };
    
        export interface PageObject extends ModelCommonObject {
            title?: string;
            path: string;
            changed_date?: Date;
            author?: string;
            sections?: SectionObject[];
        };
        
        export module admin {
            export interface CardConfig {
                header: string;
                description: string;
                editable: boolean;
                link1: string;
                link2: string;
                link1_text: string;
                link2_text: string;
                color?: "red" | "green" | "blue" | "yellow" | "orange" | "purple";
            };
        };
    };

    export module api {
        export interface CommonResponse {
            id?: number
        }

        export interface ParagraphResponse extends CommonResponse {
            title: string | undefined,
            header: string | undefined,
            text: string | undefined,
            image: string | undefined,
            href: string | undefined,
            href_text: string | undefined
        }
        
        export interface ComponentResponse extends CommonResponse {
            header: string,
            category: string;
            position: number | undefined,
            is_active: number | undefined,
            changed_date: Date | undefined,
            paragraphs: ParagraphResponse[]
        }

        export interface ComponentCategoryResponse extends CommonResponse {
            category_name: string;
        }
        
        export interface SectionResponse extends CommonResponse { 
            header?: string;
            position: number;
            is_active: boolean;
            changed_date: Date;
            components: ComponentResponse[];
        }
        
        export interface PageResponse extends CommonResponse {
            title: string | undefined,
            path: string,
            author: string | undefined,
            sections: SectionResponse[],
            changed_date: Date | undefined,
            authors: string | undefined
        }

        export interface InuqryResponse extends CommonResponse {
            email: string;
            name?: string;
            category: string;
            content: string;
        }

        export type ResponseAny = cms_types.api.ParagraphResponse | cms_types.api.ComponentResponse | cms_types.api.ComponentResponse | cms_types.api.PageResponse;
    }
};