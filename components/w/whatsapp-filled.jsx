import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ca0ca5k1s.css';
import '../../css/d/d9v1t7v0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVG2EtlbetS)"><path class="ca0ca5k1s"/></g><defs><clipPath id="SVG2EtlbetS"><path class="d9v1t7v0a"/></clipPath></defs></g>`,
		"fallback": "mage:whatsapp-filled",
	});
}

export default Component;
