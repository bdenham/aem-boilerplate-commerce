import { Initializer } from '/scripts/__dropins__/tools/types/elsie/src/lib';
import { Lang } from '/scripts/__dropins__/tools/types/elsie/src/i18n';
import { ProductModel } from '../../data/models';

type ConfigProps = {
    langDefinitions?: Lang;
    defaultLocale?: string;
    models?: {
        [name: string]: {
            initialData: any;
            transform: (data?: ProductModel) => ProductModel;
            fallbackData?: (parentProduct: any, simpleProduct: ProductModel) => ProductModel;
        };
    };
};
export declare const initialize: Initializer<ConfigProps>;
export declare const config: import('/scripts/__dropins__/tools/types/elsie/src/lib').Config<ConfigProps>;
export {};
//# sourceMappingURL=initialize.d.ts.map