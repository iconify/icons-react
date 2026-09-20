import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm3j0cc2t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm3j0cc2t"/>`,
		"fallback": "selfhst:wger-dark",
	});
}

export default Component;
