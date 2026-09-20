import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oobshmhmn.css';

const viewBox = {"width":100,"height":111};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oobshmhmn"/>`,
		"fallback": "material-icon-theme:werf",
	});
}

export default Component;
