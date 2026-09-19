import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njp1edb4f.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njp1edb4f"/>`,
		"fallback": "devicon:wireguard",
	});
}

export default Component;
