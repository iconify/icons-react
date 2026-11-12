import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8w4fvb8t.css';
import '../../css/i/i2a_ir9nf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8w4fvb8t"/><path class="i2a_ir9nf"/>`,
		"fallback": "selfhst:yundera-light",
	});
}

export default Component;
