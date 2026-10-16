import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3l5nwb6v.css';
import '../../css/p/pk10can8u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3l5nwb6v"/><path class="pk10can8u"/>`,
		"fallback": "energy-icons:wrap-text-48",
	});
}

export default Component;
