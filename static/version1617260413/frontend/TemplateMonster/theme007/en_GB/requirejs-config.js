(function(require){
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    'waitSeconds': 0,
    'map': {
        '*': {
            'ko': 'knockoutjs/knockout',
            'knockout': 'knockoutjs/knockout',
            'mageUtils': 'mage/utils/main',
            'rjsResolver': 'mage/requirejs/resolver'
        }
    },
    'shim': {
        'jquery/jquery-migrate': ['jquery'],
        'jquery/jstree/jquery.hotkeys': ['jquery'],
        'jquery/hover-intent': ['jquery'],
        'mage/adminhtml/backup': ['prototype'],
        'mage/captcha': ['prototype'],
        'mage/new-gallery': ['jquery'],
        'mage/webapi': ['jquery'],
        'jquery/ui': ['jquery'],
        'MutationObserver': ['es6-collections'],
        'matchMedia': {
            'exports': 'mediaCheck'
        },
        'magnifier/magnifier': ['jquery']
    },
    'paths': {
        'jquery/validate': 'jquery/jquery.validate',
        'jquery/hover-intent': 'jquery/jquery.hoverIntent',
        'jquery/file-uploader': 'jquery/fileUploader/jquery.fileupload-fp',
        'prototype': 'legacy-build.min',
        'jquery/jquery-storageapi': 'jquery/jquery.storageapi.min',
        'text': 'mage/requirejs/text',
        'domReady': 'requirejs/domReady',
        'spectrum': 'jquery/spectrum/spectrum',
        'tinycolor': 'jquery/spectrum/tinycolor',
        'jquery-ui-modules': 'jquery/ui-modules'
    },
    'deps': [
        'jquery/jquery-migrate'
    ],
    'config': {
        'mixins': {
            'jquery/jstree/jquery.jstree': {
                'mage/backend/jstree-mixin': true
            },
            'jquery': {
                'jquery/patches/jquery': true
            }
        },
        'text': {
            'headers': {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }
    }
};

require(['jquery'], function ($) {
    'use strict';

    $.noConflict();
});

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'rowBuilder':             'Magento_Theme/js/row-builder',
            'toggleAdvanced':         'mage/toggle',
            'translateInline':        'mage/translate-inline',
            'sticky':                 'mage/sticky',
            'tabs':                   'mage/tabs',
            'zoom':                   'mage/zoom',
            'collapsible':            'mage/collapsible',
            'dropdownDialog':         'mage/dropdown',
            'dropdown':               'mage/dropdowns',
            'accordion':              'mage/accordion',
            'loader':                 'mage/loader',
            'tooltip':                'mage/tooltip',
            'deletableItem':          'mage/deletable-item',
            'itemTable':              'mage/item-table',
            'fieldsetControls':       'mage/fieldset-controls',
            'fieldsetResetControl':   'mage/fieldset-controls',
            'redirectUrl':            'mage/redirect-url',
            'loaderAjax':             'mage/loader',
            'menu':                   'mage/menu',
            'popupWindow':            'mage/popup-window',
            'validation':             'mage/validation/validation',
            'welcome':                'Magento_Theme/js/view/welcome',
            'breadcrumbs':            'Magento_Theme/js/view/breadcrumbs',
            'criticalCssLoader':      'Magento_Theme/js/view/critical-css-loader',
            'jquery/ui':              'jquery/compat'
        }
    },
    deps: [
        'jquery/jquery.mobile.custom',
        'mage/common',
        'mage/dataPost',
        'mage/bootstrap'
    ],
    config: {
        mixins: {
            'Magento_Theme/js/view/breadcrumbs': {
                'Magento_Theme/js/view/add-home-breadcrumb': true
            },
            'jquery/ui-modules/dialog': {
                'jquery/patches/jquery-ui': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            checkoutBalance:    'Magento_Customer/js/checkout-balance',
            address:            'Magento_Customer/js/address',
            changeEmailPassword: 'Magento_Customer/js/change-email-password',
            passwordStrengthIndicator: 'Magento_Customer/js/password-strength-indicator',
            zxcvbn: 'Magento_Customer/js/zxcvbn',
            addressValidation: 'Magento_Customer/js/addressValidation',
            'Magento_Customer/address': 'Magento_Customer/js/address',
            'Magento_Customer/change-email-password': 'Magento_Customer/js/change-email-password'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            quickSearch: 'Magento_Search/js/form-mini',
            'Magento_Search/form-mini': 'Magento_Search/js/form-mini'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            priceBox:             'Magento_Catalog/js/price-box',
            priceOptionDate:      'Magento_Catalog/js/price-option-date',
            priceOptionFile:      'Magento_Catalog/js/price-option-file',
            priceOptions:         'Magento_Catalog/js/price-options',
            priceUtils:           'Magento_Catalog/js/price-utils'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            compareList:            'Magento_Catalog/js/list',
            relatedProducts:        'Magento_Catalog/js/related-products',
            upsellProducts:         'Magento_Catalog/js/upsell-products',
            productListToolbarForm: 'Magento_Catalog/js/product/list/toolbar',
            catalogGallery:         'Magento_Catalog/js/gallery',
            catalogAddToCart:       'Magento_Catalog/js/catalog-add-to-cart'
        }
    },
    config: {
        mixins: {
            'Magento_Theme/js/view/breadcrumbs': {
                'Magento_Catalog/js/product/breadcrumbs': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            addToCart: 'Magento_Msrp/js/msrp'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            catalogSearch: 'Magento_CatalogSearch/form-mini'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            creditCardType: 'Magento_Payment/js/cc-type',
            'Magento_Payment/cc-type': 'Magento_Payment/js/cc-type'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            giftMessage:    'Magento_Sales/js/gift-message',
            ordersReturns:  'Magento_Sales/js/orders-returns',
            'Magento_Sales/gift-message':    'Magento_Sales/js/gift-message',
            'Magento_Sales/orders-returns':  'Magento_Sales/js/orders-returns'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            discountCode:           'Magento_Checkout/js/discount-codes',
            shoppingCart:           'Magento_Checkout/js/shopping-cart',
            regionUpdater:          'Magento_Checkout/js/region-updater',
            sidebar:                'Magento_Checkout/js/sidebar',
            checkoutLoader:         'Magento_Checkout/js/checkout-loader',
            checkoutData:           'Magento_Checkout/js/checkout-data',
            proceedToCheckout:      'Magento_Checkout/js/proceed-to-checkout'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            configurable: 'Magento_ConfigurableProduct/js/configurable'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            requireCookie: 'Magento_Cookie/js/require-cookie',
            cookieNotices: 'Magento_Cookie/js/notices'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    paths: {
        'jquery/jquery-storageapi': 'Magento_Cookie/js/jquery.storageapi.extended'
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            captcha: 'Magento_Captcha/js/captcha',
            'Magento_Captcha/captcha': 'Magento_Captcha/js/captcha'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            downloadable: 'Magento_Downloadable/js/downloadable',
            'Magento_Downloadable/downloadable': 'Magento_Downloadable/js/downloadable'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    shim: {
        cardinaljs: {
            exports: 'Cardinal'
        },
        cardinaljsSandbox: {
            exports: 'Cardinal'
        }
    },
    paths: {
        cardinaljsSandbox: 'https://includestest.ccdc02.com/cardinalcruise/v1/songbird',
        cardinaljs: 'https://songbird.cardinalcommerce.com/edge/v1/songbird'
    }
};


require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            giftOptions:    'Magento_GiftMessage/js/gift-options',
            extraOptions:   'Magento_GiftMessage/js/extra-options',
            'Magento_GiftMessage/gift-options':    'Magento_GiftMessage/js/gift-options',
            'Magento_GiftMessage/extra-options':   'Magento_GiftMessage/js/extra-options'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    shim: {
        'tiny_mce_4/tinymce.min': {
            exports: 'tinyMCE'
        }
    },
    paths: {
        'ui/template': 'Magento_Ui/templates'
    },
    map: {
        '*': {
            uiElement:      'Magento_Ui/js/lib/core/element/element',
            uiCollection:   'Magento_Ui/js/lib/core/collection',
            uiComponent:    'Magento_Ui/js/lib/core/collection',
            uiClass:        'Magento_Ui/js/lib/core/class',
            uiEvents:       'Magento_Ui/js/lib/core/events',
            uiRegistry:     'Magento_Ui/js/lib/registry/registry',
            consoleLogger:  'Magento_Ui/js/lib/logger/console-logger',
            uiLayout:       'Magento_Ui/js/core/renderer/layout',
            buttonAdapter:  'Magento_Ui/js/form/button-adapter',
            tinymce4:       'tiny_mce_4/tinymce.min',
            wysiwygAdapter: 'mage/adminhtml/wysiwyg/tiny_mce/tinymce4Adapter'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            pageCache:  'Magento_PageCache/js/page-cache'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            bundleOption:   'Magento_Bundle/bundle',
            priceBundle:    'Magento_Bundle/js/price-bundle',
            slide:          'Magento_Bundle/js/slide',
            productSummary: 'Magento_Bundle/js/product-summary'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            recentlyViewedProducts: 'Magento_Reports/js/recently-viewed'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            multiShipping: 'Magento_Multishipping/js/multi-shipping',
            orderOverview: 'Magento_Multishipping/js/overview',
            payment: 'Magento_Multishipping/js/payment',
            billingLoader: 'Magento_Checkout/js/checkout-loader',
            cartUpdate: 'Magento_Checkout/js/action/update-shopping-cart'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            transparent: 'Magento_Payment/js/transparent',
            'Magento_Payment/transparent': 'Magento_Payment/js/transparent'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            transparent: 'Magento_Payment/js/transparent',
            'Magento_Payment/transparent': 'Magento_Payment/js/transparent'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            orderReview: 'Magento_Paypal/js/order-review',
            'Magento_Paypal/order-review': 'Magento_Paypal/js/order-review',
            paypalCheckout: 'Magento_Paypal/js/paypal-checkout'
        }
    },
    paths: {
        paypalInContextExpressCheckout: 'https://www.paypalobjects.com/api/checkout'
    },
    shim: {
        paypalInContextExpressCheckout: {
            exports: 'paypal'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/view/payment/list': {
                'Magento_PaypalCaptcha/js/view/payment/list-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_Customer/js/customer-data': {
                'Magento_Persistent/js/view/customer-data-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            loadPlayer: 'Magento_ProductVideo/js/load-player',
            fotoramaVideoEvents: 'Magento_ProductVideo/js/fotorama-add-video-events'
        }
    },
    shim: {
        vimeoAPI: {}
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    shim: {
        acceptjs: {
            exports: 'Accept'
        },
        acceptjssandbox: {
            exports: 'Accept'
        }
    },
    paths: {
        acceptjssandbox: 'https://jstest.authorize.net/v1/Accept',
        acceptjs: 'https://js.authorize.net/v1/Accept'
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_AuthorizenetAcceptjs/js/view/payment/method-renderer/authorizenet-accept': {
                'Magento_AuthorizenetCardinal/js/authorizenet-accept-mixin': true
            }
        }
    }
};


require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/place-order': {
                'Magento_CheckoutAgreements/js/model/place-order-mixin': true
            },
            'Magento_Checkout/js/action/set-payment-information': {
                'Magento_CheckoutAgreements/js/model/set-payment-information-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            braintreeClient: 'https://js.braintreegateway.com/web/3.48.0/js/client.min.js',
            braintreeHostedFields: 'https://js.braintreegateway.com/web/3.48.0/js/hosted-fields.min.js',
            braintreePayPal: 'https://js.braintreegateway.com/web/3.48.0/js/paypal-checkout.min.js',
            braintree3DSecure: 'https://js.braintreegateway.com/web/3.48.0/js/three-d-secure.min.js',
            braintreeDataCollector: 'https://js.braintreegateway.com/web/3.48.0/js/data-collector.min.js'
        }
    },
    paths: {
        braintreePayPalCheckout: 'https://www.paypalobjects.com/api/checkout.min'
    },
    shim: {
        braintreePayPalCheckout: {
            exports: 'paypal'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    shim: {
        'Magento_Tinymce3/tiny_mce/tiny_mce_src': {
            'exports': 'tinymce'
        }
    },
    map: {
        '*': {
            'tinymceDeprecated': 'Magento_Tinymce3/tiny_mce/tiny_mce_src'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            editTrigger: 'mage/edit-trigger',
            addClass: 'Magento_Translation/js/add-class',
            'Magento_Translation/add-class': 'Magento_Translation/js/add-class',
            mageTranslationDictionary: 'Magento_Translation/js/mage-translation-dictionary'
        }
    },
    deps: [
        'mage/translate-inline',
        'mageTranslationDictionary'
    ]
};

require.config(config);
})();
(function() {
/**
 * MageSpecialist
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/osl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to info@magespecialist.it so we can send you a copy immediately.
 *
 * @copyright  Copyright (c) 2017 Skeeller srl (http://www.magespecialist.it)
 * @license    http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */

'use strict';

// eslint-disable-next-line no-unused-vars
var config = {
    config: {
        mixins: {
            'Magento_Ui/js/view/messages': {
                'MSP_ReCaptcha/js/ui-messages-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'taxToggle': 'Magento_Weee/js/tax-toggle',
            'Magento_Weee/tax-toggle': 'Magento_Weee/js/tax-toggle'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            wishlist:       'Magento_Wishlist/js/wishlist',
            addToWishlist:  'Magento_Wishlist/js/add-to-wishlist',
            wishlistSearch: 'Magento_Wishlist/js/search'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * @author    Amasty Team
 * @copyright Copyright (c) Amasty Ltd. ( http://www.amasty.com/ )
 * @package   Amasty_Shopby
 */

var config = {
    map: {
        '*': {
            amShopbyFilterAbstract: 'Amasty_Shopby/js/amShopby',
            amShopbyFilterItemDefault: 'Amasty_Shopby/js/amShopby',
            amShopbyFilterDropdown: 'Amasty_Shopby/js/amShopby',
            amShopbyFilterFromTo: 'Amasty_Shopby/js/amShopby',
            amShopbyFilterSlider: 'Amasty_Shopby/js/amShopby',
            amShopbyAjax: 'Amasty_Shopby/js/amShopbyAjax',
            amShopbyFilterSearch: 'Amasty_Shopby/js/amShopby',
            amShopbyFilterHideMoreOptions: 'Amasty_Shopby/js/amShopby',
            amShopbyFilterAddTooltip: 'Amasty_Shopby/js/amShopby',
            amShopbySwatchesChoose: 'Amasty_Shopby/js/amShopbySwatchesChoose',
            amShopbyFilterMultiselect: 'Amasty_Shopby/js/amShopby',
            amShopbyFilterSwatch: 'Amasty_Shopby/js/amShopby',
            amShopbyFiltersSync: 'Amasty_Shopby/js/amShopbyFiltersSync',
            amShopbyApplyFilters: 'Amasty_Shopby/js/amShopbyApplyFilters',
            amShopbyTopFilters: 'Amasty_Shopby/js/amShopbyTopFilters',
            amShopbyFilterCategoryDropdown: 'Amasty_Shopby/js/amShopby',
            amShopbyFilterCategoryLabelsFolding: 'Amasty_Shopby/js/amShopby',
            amShopbyFilterCategoryFlyOut: 'Amasty_Shopby/js/amShopby',
            amShopbyFilterContainer: 'Amasty_Shopby/js/amShopby'
        }
    },
    deps: [
        'Amasty_Shopby/js/amShopbyResponsive'
    ]
};

require.config(config);
})();
(function() {
/**
 * BSS Commerce Co.
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the EULA
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://bsscommerce.com/Bss-Commerce-License.txt
 *
 * @category   BSS
 * @package    Bss_AjaxCart
 * @author     Extension Team
 * @copyright  Copyright (c) 2017-2018 BSS Commerce Co. ( http://bsscommerce.com )
 * @license    http://bsscommerce.com/Bss-Commerce-License.txt
 */
var config = {
	map: {
        '*': {
            bssAjaxCart: 'Bss_AjaxCart/js/ajax',
            bssFancybox: 'Bss_AjaxCart/js/jquery.fancybox',
            bssOwl: 'Bss_AjaxCart/js/owl.carousel',
            bssPopup: 'Bss_AjaxCart/js/popup',
            bssGoto: 'Bss_AjaxCart/js/goto',
            bssProductSuggest: 'Bss_AjaxCart/js/suggest'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2015 ebizmarts. All rights reserved.
 * See LICENSE.txt for license details.
 */

var config = {
    map: {
        '*': {
            sagepayjs_test: 'https://pi-test.sagepay.com/api/v1/js/sagepay.js',
            sagepayjs_live: 'https://pi-live.sagepay.com/api/v1/js/sagepay.js',
            sagepayjs_dropin_test: 'https://pi-test.sagepay.com/api/v1/js/sagepay-dropin.js',
            sagepayjs_dropin_live: 'https://pi-live.sagepay.com/api/v1/js/sagepay-dropin.js'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * This file is part of the Klarna KP module
 *
 * (c) Klarna Bank AB (publ)
 *
 * For the full copyright and license information, please view the NOTICE
 * and LICENSE files that were distributed with this source code.
 */
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/get-payment-information': {
                'Klarna_Kp/js/action/override': true
            }
        }
    },
    map: {
        '*': {
            klarnapi: 'https://x.klarnacdn.net/kp/lib/v1/api.js'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

// eslint-disable-next-line no-unused-vars
var config = {
    config: {
        mixins: {
            'Magento_Paypal/js/view/payment/method-renderer/payflowpro-method': {
                'Magento_PaypalReCaptcha/js/payflowpro-method-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            magepalGtmDatalayer: 'MagePal_GoogleTagManager/js/datalayer'
        }
    },
    shim: {
        'MagePal_GoogleTagManager/js/datalayer': ['Magento_Customer/js/customer-data']
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © MageWorx. All rights reserved.
 * See LICENSE.txt for license details.
 */
var config = {
    map: {
        '*': {
            'slick'       : 'MageWorx_ShippingRules/js/slick',
            'slickWrapper': 'MageWorx_ShippingRules/js/slickWrapper'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © MageWorx. All rights reserved.
 * See LICENSE.txt for license details.
 */
var config = {
    map: {
        '*': {
            shippingZoneSelector: 'MageWorx_ShippingRules/js/zone/selector'
        }
    },
    config: {
        mixins: {
            'Magento_Checkout/js/model/shipping-rates-validation-rules': {
                'MageWorx_ShippingRules/js/checkout/model/shipping-rates-validation-rules-mixin': true
            },
            'Mageplaza_Osc/js/model/shipping-rates-validator': {
                'MageWorx_ShippingRules/js/checkout/model/shipping-rates-validation-rules-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Mageplaza
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the mageplaza.com license that is
 * available through the world-wide-web at this URL:
 * https://www.mageplaza.com/LICENSE.txt
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this extension to newer
 * version in the future.
 *
 * @category    Mageplaza
 * @package     Mageplaza_Core
 * @copyright   Copyright (c) Mageplaza (https://www.mageplaza.com/)
 * @license     https://www.mageplaza.com/LICENSE.txt
 */

var config = {
    paths: {
        'mageplaza/core/jquery/popup': 'Mageplaza_Core/js/jquery.magnific-popup.min',
        'mageplaza/core/owl.carousel': 'Mageplaza_Core/js/owl.carousel.min',
        'mageplaza/core/bootstrap': 'Mageplaza_Core/js/bootstrap.min',
        mpIonRangeSlider: 'Mageplaza_Core/js/ion.rangeSlider.min',
        touchPunch: 'Mageplaza_Core/js/jquery.ui.touch-punch.min',
        mpDevbridgeAutocomplete: 'Mageplaza_Core/js/jquery.autocomplete.min'
    },
    shim: {
        "mageplaza/core/jquery/popup": ["jquery"],
        "mageplaza/core/owl.carousel": ["jquery"],
        "mageplaza/core/bootstrap": ["jquery"],
        mpIonRangeSlider: ["jquery"],
        mpDevbridgeAutocomplete: ["jquery"],
        touchPunch: ['jquery', 'jquery/ui']
    }
};

require.config(config);
})();
(function() {
"use strict";

/**
 */
var config = {
    "paths": {
        "SimplyPostcode": "Stuntrocket_SimplyPostcode/js"
    }
};
//# sourceMappingURL=requirejs-config.js.map

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
             "compareItems" : "TemplateMonster_AjaxCompare/js/tm-compare-ajax",
             "showCompareProduct" : "TemplateMonster_AjaxCompare/js/compare-products-top-link",
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright Zemez, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_Search/js/form-mini': {
                'TemplateMonster_AjaxSearch/js/tm-search-ajax': true
            }
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'ajaxWishlist': 'TemplateMonster_AjaxWishlist/js/ajaxwishlist',
            'wishlist': 'TemplateMonster_AjaxWishlist/js/wishlist'
        }
    }
};
require.config(config);
})();
(function() {

var config = {
    map: {
        '*': {}
    },
    paths: {
        "blogCarousel":           "TemplateMonster_Blog/js/blog-carousel",
        "categoriesListCollapse": "TemplateMonster_Blog/js/categories-list-collapse",
        "blogOwlCarousel":        "TemplateMonster_Blog/js/owl.carousel"
    },
    shim: {
        "blogOwlCarousel":  ["jquery"]
    }
};


require.config(config);
})();
(function() {

var config = {

	map: {
        '*': {
            "countdowntimer": "TemplateMonster_CountdownTimer/js/countdowntimer",
            "jquery.countdown": "TemplateMonster_CountdownTimer/js/jquery.countdown"
        }
    },
    "shim" : {
        "jquery.countdown": ["jquery"]
    }};
require.config(config);
})();
(function() {
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {}
    },
    paths: {
        "featuredCarousel":       "TemplateMonster_FeaturedProduct/js/featured-carousel",
        "featuredTab":            "TemplateMonster_FeaturedProduct/js/featured-tab",
        "featuredOwlCarousel":    "TemplateMonster_FeaturedProduct/js/owl.carousel2",
        "featuredProductGallery": "TemplateMonster_FeaturedProduct/js/featured-product-gallery",
        "featuredSwitchImage":    "TemplateMonster_FeaturedProduct/js/featured-switch-image",
    },
    shim: {
        "featuredOwlCarousel":  ["jquery"]
    }
};


require.config(config);
})();
(function() {
var config = {

    paths: {
        sliderInit: 'TemplateMonster_FilmSlider/js/jquery.sliderPro',
        FilmSlider: 'TemplateMonster_FilmSlider/js/film-slider'
    },
    shim: {
    	"sliderInit": ["jquery"],
    }
};
require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
             "googleMapPagePlugin" : "TemplateMonster_GoogleMap/js/google-map-page-plugin"
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {}
    },
    paths: {
        "productListingGallery": "TemplateMonster_ThemeOptions/js/product-listing-gallery",
        "switchImage": "TemplateMonster_ThemeOptions/js/switch-image",
    }
};
require.config(config);
})();
(function() {

var config = {

	map: {
        '*': {}
    },
    paths: {
        "megamenu":        "TemplateMonster_Megamenu/js/megamenu",
        "subMenuViewMode": "TemplateMonster_Megamenu/js/subMenuViewMode"
    }
};
require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'newsletterPopup': 'TemplateMonster_NewsletterPopup/js/popup'
        }
    }
};
require.config(config);
})();
(function() {
var config = {
    map: {
        "*": {
            "parallax": "TemplateMonster_Parallax/js/parallax"
        }
    },
    paths: {
        "jquery.rd-parallax": "TemplateMonster_Parallax/js/rd-parallax/jquery.rd-parallax",
        "jquery.youtubebackground": "TemplateMonster_Parallax/js/jquery-youtubebackground/jquery.youtubebackground",
        "jquery.vide": "TemplateMonster_Parallax/js/jquery-vide/jquery.vide"
    },
    shim: {
        "jquery.rd-parallax": ["jquery"],
        "jquery.youtubebackground": ["jquery"],
        "jquery.vide": ["jquery"]
    }
};
require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            "brandAddProductPage" : "TemplateMonster_ShopByBrand/js/brand-add-product-page",
            "brandCarousel":     "TemplateMonster_ShopByBrand/js/brand-carousel",
            "brandOwlCarousel":      'TemplateMonster_ShopByBrand/js/owl.carousel'
        }
    },
    shim: {
        "brandOwlCarousel":  ["jquery"]
    }
};

require.config(config);
})();
(function() {

var config = {

	map: {
        '*': {
            "smcountdowntimer": "TemplateMonster_SiteMaintenance/js/countdowntimer",
            "jquery.countdown.sm": "TemplateMonster_SiteMaintenance/js/jquery.countdown"
        }
    },
    "shim" : {
        "jquery.countdown.sm": ["jquery"]
    }};
require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {}
    },
    paths: {
        "customizationTool": "TemplateMonster_LayoutSwitcher/js/customization-tool"
    }
};
require.config(config);
})();
(function() {
/**
 * @copyright  Vertex. All rights reserved.  https://www.vertexinc.com/
 * @author     Mediotype                     https://www.mediotype.com/
 */

var config = {
    map: {
        '*': {
            'set-checkout-messages': 'Vertex_Tax/js/model/set-checkout-messages'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * @copyright  Vertex. All rights reserved.  https://www.vertexinc.com/
 * @author     Mediotype                     https://www.mediotype.com/
 */

var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/view/billing-address': {
                'Vertex_AddressValidation/js/view/billing-validation-mixin': true
            },
            'Magento_Checkout/js/view/shipping': {
                'Vertex_AddressValidation/js/view/shipping-validation-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            "theme": 'js/theme',
            "themeChild": 'js/theme-child',
            "selectize":    "js/selectize",
            "googleMapOptions": "js/googleMapOptions"
        }
    },
    paths: {
        "carouselInit":     'js/carouselInit',
        "blockCollapse":    'js/sidebarCollapse',
        "animateNumber":    'js/jquery.animateNumber.min',
        "rdnavbar":         'Magento_Theme/js/jquery.rd-navbar',
        "owlcarousel":      'Magento_Theme/js/owl.carousel',
        "customSelect":     "Magento_Theme/js/select2",
        "doubleTap":        "Magento_Theme/js/doubletaptogo",
        "googleMapOptions": "js/googleMapOptions"
    },
    shim: {
        "rdnavbar":         ["jquery"],
        "owlcarousel":      ["jquery"],
        "doubleTap":      ["jquery"],
        "animateNumber":    ["jquery"]
    },
    deps: [
        "jquery",
        "jquery/jquery.mobile.custom",
        "mage/common",
        "mage/dataPost",
        "mage/bootstrap",
        "Magento_Theme/js/responsive"
    ]
};
require.config(config);
})();
(function() {
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    //map: {
    //    '*': {
    //        "miniCartExtending":     "Magento_Checkout/js/miniCartExtendingFile"
    //    }
    //}
    config: {
        mixins: {
            'Magento_Checkout/js/view/minicart': {
                'Magento_Checkout/js/view/minicart-extend': true
            },
            "Magento_Checkout/js/sidebar": {
                'Magento_Checkout/js/sidebar-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            "modalFilter":     "Magento_LayeredNavigation/js/modal-filter"
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            reviewRatingBehave: 'Magento_Review/js/reviewRating'
        }
    }
};
require.config(config);
})();
(function() {

var config = {
    map: {
        '*': {}
    },
    paths: {
        "blogCarouselChild":           "TemplateMonster_Blog/js/blog-carouse-child"
    }
};


require.config(config);
})();
(function() {
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {}
    },
    paths: {
        "featuredCarouselTheme":     "TemplateMonster_FeaturedProduct/js/featured-carousel-theme"
    }
};


require.config(config);
})();



})(require);