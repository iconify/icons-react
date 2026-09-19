import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf2zwlsuh.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf2zwlsuh"/>`,
		"fallback": "dinkie-icons:white-left-backhand-index",
	});
}

export default Component;
