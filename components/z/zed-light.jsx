import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mumlfxeax.css';
import '../../css/t/tp6_eczdr.css';

const viewBox = {"width":96,"height":96};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGfnsgKogg)"><path clip-rule="evenodd" class="mumlfxeax"/></g><defs><clipPath id="SVGfnsgKogg"><path class="tp6_eczdr"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:zed-light",
	});
}

export default Component;
