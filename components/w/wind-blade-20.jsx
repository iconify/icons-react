import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpgzfijku.css';
import '../../css/h/hvaaohf8r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpgzfijku"/><path class="hvaaohf8r"/>`,
		"fallback": "energy-icons:wind-blade-20",
	});
}

export default Component;
