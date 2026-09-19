import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htry_vb8p.css';

const viewBox = {"width":477,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htry_vb8p"/>`,
		"fallback": "file-icons:yarn",
	});
}

export default Component;
