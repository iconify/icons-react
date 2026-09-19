import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn_i5xb7j.css';
import '../../css/t/tgvy-8bim.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn_i5xb7j"/><path class="tgvy-8bim"/>`,
		"fallback": "devicon:webpack",
	});
}

export default Component;
