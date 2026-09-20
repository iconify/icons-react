import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghuyq54yg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghuyq54yg"/>`,
		"fallback": "selfhst:zot-registry-light",
	});
}

export default Component;
