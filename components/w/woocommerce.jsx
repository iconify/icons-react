import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd415ib1g.css';
import '../../css/h/hl-46jmiu.css';
import '../../css/c/cpcuf9xkz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd415ib1g"/><path class="hl-46jmiu"/><path class="cpcuf9xkz"/>`,
		"fallback": "devicon:woocommerce",
	});
}

export default Component;
