import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntf6lmu1o.css';
import '../../css/z/zo2elrbyg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntf6lmu1o"/><path class="zo2elrbyg"/>`,
		"fallback": "energy-icons:workflow-48",
	});
}

export default Component;
