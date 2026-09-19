import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm9294b3s.css';
import '../../css/x/x4t5v5w5k.css';
import '../../css/s/s4m1sv55m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm9294b3s"/><path class="x4t5v5w5k"/><path class="s4m1sv55m"/>`,
		"fallback": "fluent-emoji-high-contrast:woman-in-manual-wheelchair",
	});
}

export default Component;
